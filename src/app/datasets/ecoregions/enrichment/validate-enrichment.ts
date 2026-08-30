import type {
  EcologicalCountry,
  EcologicalEnrichment,
  EcologicalSpecies,
  SourcedValue,
} from './ecological-enrichment';
import { ecologicalEditorialRules, normalizedEditorialProse } from './editorial-rules';

const generatedFields = new Set([
  'id',
  'title',
  'parentGroupId',
  'parentGroupIds',
  'realmIds',
  'subrealmIds',
  'bioregionIds',
  'biomeId',
]);
const sourcedValues = (record: EcologicalEnrichment): readonly SourcedValue<unknown>[] =>
  [
    record.summary,
    record.landscape,
    record.climate,
    record.vegetation,
    record.ecologicalProcesses,
    record.conservationContext,
  ].flatMap((value) => (value ? [value as SourcedValue<unknown>] : []));

export function validateEcologicalEnrichment(input: {
  readonly records: readonly EcologicalEnrichment[];
  readonly validTargetIds: ReadonlySet<string>;
  readonly sourceIds: ReadonlySet<string>;
  readonly species: readonly EcologicalSpecies[];
  readonly countries: readonly EcologicalCountry[];
  readonly requiredSummaryTargetIds?: readonly string[];
}): readonly string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const speciesIds = new Set(input.species.map(({ id }) => id));
  const countryIds = new Set(input.countries.map(({ id }) => id));
  const summaries = new Map<string, string>();

  for (const country of input.countries)
    if (!/^[A-Z]{2}$/.test(country.id) || country.code !== country.id)
      errors.push(`Country ${country.id} must use an ISO 3166-1 alpha-2 identifier.`);
  for (const species of input.species) {
    if (!species.sourceIds.length) errors.push(`Species ${species.id} has no source.`);
    for (const sourceId of species.sourceIds)
      if (!input.sourceIds.has(sourceId))
        errors.push(`Species ${species.id} uses unknown source ${sourceId}.`);
  }
  for (const record of input.records) {
    if (seen.has(record.targetId)) errors.push(`Duplicate enrichment target ${record.targetId}.`);
    seen.add(record.targetId);
    if (!input.validTargetIds.has(record.targetId))
      errors.push(`Orphan enrichment target ${record.targetId}.`);
    if (!record.sources.length) errors.push(`Enrichment ${record.targetId} has no sources.`);
    for (const sourceId of record.sources)
      if (!input.sourceIds.has(sourceId))
        errors.push(`Enrichment ${record.targetId} uses unknown source ${sourceId}.`);
    for (const value of sourcedValues(record)) {
      if (!value.sourceIds.length)
        errors.push(`Enrichment ${record.targetId} contains an unsourced claim.`);
      for (const sourceId of value.sourceIds)
        if (!input.sourceIds.has(sourceId))
          errors.push(`Enrichment ${record.targetId} uses unknown source ${sourceId}.`);
    }
    if (record.summary) {
      const summary = record.summary.value.trim();
      const normalized = normalizedEditorialProse(summary);
      const duplicateTarget = summaries.get(normalized);
      if (duplicateTarget)
        errors.push(
          `Enrichment ${record.targetId} duplicates summary prose from ${duplicateTarget}.`,
        );
      summaries.set(normalized, record.targetId);
      if (
        summary.length < ecologicalEditorialRules.summary.minimumCharacters ||
        summary.length > ecologicalEditorialRules.summary.maximumCharacters
      )
        errors.push(
          `Enrichment ${record.targetId} summary must contain ${ecologicalEditorialRules.summary.minimumCharacters}–${ecologicalEditorialRules.summary.maximumCharacters} characters.`,
        );
      const sentenceCount = summary.split(/[.!?]+(?:\s|$)/).filter(Boolean).length;
      if (
        sentenceCount < ecologicalEditorialRules.summary.minimumSentences ||
        sentenceCount > ecologicalEditorialRules.summary.maximumSentences
      )
        errors.push(
          `Enrichment ${record.targetId} summary must contain ${ecologicalEditorialRules.summary.minimumSentences}–${ecologicalEditorialRules.summary.maximumSentences} sentences.`,
        );
    }
    const ranges = [
      ['precipitation', record.climate?.value.annualPrecipitationMm],
      ['temperature', record.climate?.value.temperatureC],
    ] as const;
    for (const [label, range] of ranges)
      if (
        range &&
        (!Number.isFinite(range.min) || !Number.isFinite(range.max) || range.min > range.max)
      )
        errors.push(`Enrichment ${record.targetId} has an invalid ${label} range.`);
    for (const speciesId of record.characteristicSpeciesIds ?? [])
      if (!speciesIds.has(speciesId))
        errors.push(`Enrichment ${record.targetId} uses unknown species ${speciesId}.`);
    if (
      record.characteristicSpeciesIds &&
      (record.characteristicSpeciesIds.length <
        ecologicalEditorialRules.characteristicSpecies.minimum ||
        record.characteristicSpeciesIds.length >
          ecologicalEditorialRules.characteristicSpecies.maximum)
    )
      errors.push(
        `Enrichment ${record.targetId} must reference ${ecologicalEditorialRules.characteristicSpecies.minimum}–${ecologicalEditorialRules.characteristicSpecies.maximum} characteristic species.`,
      );
    for (const countryId of record.countryIds ?? [])
      if (!countryIds.has(countryId))
        errors.push(`Enrichment ${record.targetId} uses unknown country ${countryId}.`);
    for (const field of record.overrides?.generatedFields ?? [])
      if (!generatedFields.has(field))
        errors.push(`Enrichment ${record.targetId} declares unknown generated field ${field}.`);
    if (record.overrides?.generatedFields.length && !record.overrides.rationale.trim())
      errors.push(`Enrichment ${record.targetId} overrides generated data without a rationale.`);
  }
  for (const targetId of input.requiredSummaryTargetIds ?? [])
    if (!input.records.find((record) => record.targetId === targetId)?.summary)
      errors.push(`Required enrichment ${targetId} has no summary.`);
  return [...new Set(errors)];
}
