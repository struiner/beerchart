import { argument, coverages, occurrences, taxa } from './biota-command-support.mts';

const ecoregionId = argument('ecoregion');
if (!ecoregionId) throw new Error('Pass --ecoregion=<external id or canonical ecoregion:id>.');
const targetId = ecoregionId.startsWith('ecoregion:') ? ecoregionId : `ecoregion:${ecoregionId}`;
const targetOccurrences = occurrences.filter((record) => record.ecoregionId === targetId);
const taxonById = new Map(taxa.map((taxon) => [taxon.id, taxon]));
console.log(`Biota worklist for ${targetId}`);
console.table(
  coverages
    .filter((coverage) => coverage.ecoregionId === targetId)
    .map(({ domain, lifecycle, depth, summary }) => ({ domain, lifecycle, depth, summary })),
);
console.table(
  targetOccurrences.map((occurrence) => ({
    occurrence: occurrence.id,
    domain: occurrence.domain,
    lifecycle: occurrence.lifecycle,
    evidence: occurrence.evidenceStatus,
    taxon: taxonById.get(occurrence.taxonId)?.title ?? occurrence.taxonId,
    canonicalProfile: taxonById.get(occurrence.taxonId)?.lifecycle ?? 'missing',
  })),
);
if (!targetOccurrences.length) console.log('No authored occurrence records.');
