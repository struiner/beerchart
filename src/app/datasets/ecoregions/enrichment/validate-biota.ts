import type {
  BiologicalRecord,
  CanonicalTaxonRecord,
  EcologicalObservationRecord,
  TaxonOccurrenceRecord,
} from './biota';

export interface BiotaValidationInput {
  readonly records: readonly BiologicalRecord[];
  readonly sourceIds: ReadonlySet<string>;
  readonly publishedEcoregionIds: ReadonlySet<string>;
  readonly partitionIds: ReadonlySet<string>;
  readonly partitionByEcoregionId: Readonly<Record<string, string>>;
  readonly profilePartitionByTaxonId: Readonly<Record<string, string>>;
}

const validRange = (range?: { readonly min: number; readonly max: number }) =>
  !range || (Number.isFinite(range.min) && Number.isFinite(range.max) && range.min <= range.max);

export function validateBiologicalRecords(input: BiotaValidationInput): readonly string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const canonical = new Map<string, CanonicalTaxonRecord>();
  const occurrences = new Map<string, TaxonOccurrenceRecord>();
  for (const record of input.records) {
    if (ids.has(record.id)) errors.push(`Duplicate biological record ${record.id}.`);
    ids.add(record.id);
    if (record.kind === 'canonical-taxon') {
      if (canonical.has(record.id)) errors.push(`Duplicated canonical taxon profile ${record.id}.`);
      canonical.set(record.id, record);
    }
    if (record.kind === 'taxon-occurrence') occurrences.set(record.id, record);
    if ('sourceIds' in record)
      for (const sourceId of record.sourceIds)
        if (!input.sourceIds.has(sourceId))
          errors.push(`${record.id} references unknown source ${sourceId}.`);
  }
  for (const taxon of canonical.values()) {
    if (!input.partitionIds.has(taxon.profileOwnerPartitionId))
      errors.push(`${taxon.id} has unknown profile owner ${taxon.profileOwnerPartitionId}.`);
    if (input.profilePartitionByTaxonId[taxon.id] !== taxon.profileOwnerPartitionId)
      errors.push(`${taxon.id} does not match its stable canonical ownership map.`);
    if (taxon.lifecycle === 'published' && (!taxon.summary.trim() || !taxon.sourceIds.length))
      errors.push(`Published canonical taxon ${taxon.id} lacks a sourced profile.`);
  }
  for (const occurrence of occurrences.values()) {
    const taxon = canonical.get(occurrence.taxonId);
    if (!taxon) errors.push(`${occurrence.id} references orphan taxon ${occurrence.taxonId}.`);
    if (!input.partitionIds.has(occurrence.ownerPartitionId))
      errors.push(`${occurrence.id} has unknown occurrence owner ${occurrence.ownerPartitionId}.`);
    if (input.partitionByEcoregionId[occurrence.ecoregionId] !== occurrence.ownerPartitionId)
      errors.push(`${occurrence.id} is not owned by its ecoregion partition.`);
    if (occurrence.lifecycle === 'published') {
      if (taxon?.lifecycle !== 'published')
        errors.push(`Published occurrence ${occurrence.id} requires a published canonical taxon.`);
      if (!input.publishedEcoregionIds.has(occurrence.ecoregionId))
        errors.push(`Published occurrence ${occurrence.id} references an unpublished ecoregion.`);
      if (!occurrence.sourceIds.length)
        errors.push(`Published occurrence ${occurrence.id} has no registered source.`);
      if (!occurrence.evidenceStatus)
        errors.push(`Published occurrence ${occurrence.id} has no evidence status.`);
    }
  }
  for (const record of input.records) {
    if (record.kind === 'domain-coverage') {
      if (record.state !== record.lifecycle)
        errors.push(`${record.id} lifecycle and coverage state disagree.`);
      if (record.lifecycle === 'published' && (!record.summary.trim() || !record.sourceIds.length))
        errors.push(`Published domain coverage ${record.id} lacks a sourced depth statement.`);
    }
    if (record.kind === 'ecological-observation')
      validateObservation(record, occurrences, input, errors);
  }
  return errors;
}

function validateObservation(
  observation: EcologicalObservationRecord,
  occurrences: ReadonlyMap<string, TaxonOccurrenceRecord>,
  input: BiotaValidationInput,
  errors: string[],
) {
  const occurrence = occurrences.get(observation.occurrenceId);
  if (!occurrence)
    errors.push(`${observation.id} references missing occurrence ${observation.occurrenceId}.`);
  if (observation.lifecycle === 'published' && occurrence?.lifecycle !== 'published')
    errors.push(`Published observation ${observation.id} requires a published occurrence.`);
  if (
    observation.ecoregionId !== occurrence?.ecoregionId ||
    observation.subjectTaxonId !== occurrence?.taxonId
  )
    errors.push(`${observation.id} does not match its occurrence scope.`);
  if (
    !observation.unit.trim() ||
    !observation.method.trim() ||
    !observation.spatialExtent.trim() ||
    !observation.observedDuring.trim()
  )
    errors.push(`${observation.id} lacks unit, method, spatial extent, or observation period.`);
  if (
    (observation.value !== undefined && !Number.isFinite(observation.value)) ||
    !validRange(observation.range) ||
    !validRange(observation.uncertainty)
  )
    errors.push(`${observation.id} has an invalid value, range, or uncertainty.`);
  for (const sourceId of observation.sourceIds)
    if (!input.sourceIds.has(sourceId))
      errors.push(`${observation.id} references unknown source ${sourceId}.`);
}
