import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  biologicalRecords,
  canonicalTaxa,
  domainCoverageRecords,
  taxonOccurrences,
  type BiologicalLifecycleState,
  type BiologicalRecord,
} from '../enrichment/biota';
import { validateBiologicalRecords } from '../enrichment/validate-biota';
import { enrichmentCoverage } from '../enrichment/coverage-manifest';
import { generatedEcoregions } from '../generated/ecoregions.generated';
import { ecoregionSources } from '../source/source-registry';
import { ecoregionContentPartitionIds } from '../content/ecoregion-content-provider';
import { ecoregionPartitionByTargetId } from '../content/partition-ownership.generated';
import { livingCompositionPartitionByTaxonId } from '../content/living-composition-ownership';

const root = dirname(fileURLToPath(import.meta.url));
export const lifecyclePath = join(root, '..', 'enrichment', 'biota-lifecycle.json');
export const records = biologicalRecords;
export const taxa = canonicalTaxa;
export const occurrences = taxonOccurrences;
export const coverages = domainCoverageRecords;

export const argument = (name: string) =>
  process.argv.find((value) => value.startsWith(`--${name}=`))?.slice(name.length + 3);

export function validationErrors(candidateRecords: readonly BiologicalRecord[] = records) {
  return validateBiologicalRecords({
    records: candidateRecords,
    sourceIds: new Set(ecoregionSources.map(({ id }) => id)),
    publishedEcoregionIds: new Set(
      generatedEcoregions
        .filter(({ id }) => enrichmentCoverage[id] === 'published')
        .map(({ id }) => id),
    ),
    partitionIds: new Set(ecoregionContentPartitionIds),
    partitionByEcoregionId: ecoregionPartitionByTargetId,
    profilePartitionByTaxonId: livingCompositionPartitionByTaxonId,
  });
}

export function printValidation(errors: readonly string[]) {
  if (errors.length) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
  } else console.log(`Verified ${records.length} biological publishing records.`);
}

export function transition(targetId: string, state: BiologicalLifecycleState) {
  const target = records.find(({ id }) => id === targetId);
  if (!target) throw new Error(`Unknown biological target "${targetId}".`);
  const candidate = records.map((record) =>
    record.id === targetId
      ? ({
          ...record,
          lifecycle: state,
          ...(record.kind === 'domain-coverage' ? { state } : {}),
        } as BiologicalRecord)
      : record,
  );
  const errors = validationErrors(candidate);
  if (errors.length) {
    printValidation(errors);
    return;
  }
  const manifest = JSON.parse(readFileSync(lifecyclePath, 'utf8')) as Record<string, string>;
  manifest[targetId] = state;
  writeFileSync(lifecyclePath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`${targetId} transitioned to ${state}. Regenerate content before committing.`);
}
