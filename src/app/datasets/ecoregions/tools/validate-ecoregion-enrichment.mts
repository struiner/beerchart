import { bioregionEnrichment } from '../enrichment/bioregions';
import { ecologicalCountries } from '../enrichment/countries';
import { enrichmentCoverage } from '../enrichment/coverage-manifest';
import { ecoregionEnrichment } from '../enrichment/ecoregions';
import { realmEnrichment } from '../enrichment/realms';
import { ecologicalSpecies } from '../enrichment/species';
import { subrealmEnrichment } from '../enrichment/subrealms';
import { validateEcologicalEnrichment } from '../enrichment/validate-enrichment';
import { generatedBioregions } from '../generated/bioregions.generated';
import { generatedEcoregions } from '../generated/ecoregions.generated';
import { generatedRealms } from '../generated/realms.generated';
import { generatedSubrealms } from '../generated/subrealms.generated';
import { ecoregionSources } from '../source/source-registry';
import { ecoregionContentPartitionIds } from '../content/ecoregion-content-provider';
import { ecoregionPartitionByTargetId } from '../content/partition-ownership.generated';

const records = [
  ...realmEnrichment,
  ...subrealmEnrichment,
  ...bioregionEnrichment,
  ...ecoregionEnrichment,
];
const errors = validateEcologicalEnrichment({
  records,
  validTargetIds: new Set([
    ...generatedRealms.map(({ id }) => id),
    ...generatedSubrealms.map(({ id }) => id),
    ...generatedBioregions.map(({ id }) => id),
    ...generatedEcoregions.map(({ id }) => id),
  ]),
  sourceIds: new Set(ecoregionSources.map(({ id }) => id)),
  species: ecologicalSpecies,
  countries: ecologicalCountries,
  requiredSummaryTargetIds: Object.entries(enrichmentCoverage)
    .filter(([, state]) => state === 'reviewed' || state === 'published')
    .map(([targetId]) => targetId),
});
const recordByTargetId = new Map(records.map((record) => [record.targetId, record]));
const validTargetIds = new Set([
  ...generatedRealms.map(({ id }) => id),
  ...generatedSubrealms.map(({ id }) => id),
  ...generatedBioregions.map(({ id }) => id),
  ...generatedEcoregions.map(({ id }) => id),
]);
const coverageErrors: string[] = [];
const partitionIds = new Set(ecoregionContentPartitionIds);
const recordIds = new Set(records.map(({ targetId }) => targetId));
for (const { targetId } of records) {
  const partitionId = ecoregionPartitionByTargetId[targetId];
  if (!partitionId)
    coverageErrors.push(`Enrichment ${targetId} has no canonical content partition.`);
  else if (!partitionIds.has(partitionId))
    coverageErrors.push(`Enrichment ${targetId} uses partition ${partitionId} without a loader.`);
}
for (const targetId of Object.keys(ecoregionPartitionByTargetId))
  if (!recordIds.has(targetId))
    coverageErrors.push(`Content ownership contains unknown enrichment ${targetId}.`);
for (const [targetId, state] of Object.entries(enrichmentCoverage)) {
  if (!validTargetIds.has(targetId))
    coverageErrors.push(`Coverage manifest contains orphan ${targetId}.`);
  if ((state === 'reviewed' || state === 'published') && !recordByTargetId.get(targetId)?.summary)
    coverageErrors.push(`Coverage ${targetId} is ${state} without a sourced summary.`);
}
for (const { targetId } of records)
  if (!enrichmentCoverage[targetId] || enrichmentCoverage[targetId] === 'unstarted')
    coverageErrors.push(`Enrichment ${targetId} has no active coverage state.`);

const validationErrors = [...errors, ...coverageErrors];

if (validationErrors.length) {
  console.error(validationErrors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${records.length} sourced ecological enrichment records.`);
}
