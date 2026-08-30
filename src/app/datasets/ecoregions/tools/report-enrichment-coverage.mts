import {
  coverageStateFor,
  enrichmentCoverage,
  type EnrichmentCoverageState,
} from '../enrichment/coverage-manifest';
import { generatedBioregions } from '../generated/bioregions.generated';
import { generatedEcoregions } from '../generated/ecoregions.generated';
import { generatedRealms } from '../generated/realms.generated';
import { generatedSubrealms } from '../generated/subrealms.generated';

const states: readonly EnrichmentCoverageState[] = ['unstarted', 'draft', 'reviewed', 'published'];
type Level = 'realm' | 'subrealm' | 'bioregion' | 'ecoregion';
interface CoverageTarget {
  readonly id: string;
  readonly level: Level;
  readonly realmIds: readonly string[];
}
const targets: readonly CoverageTarget[] = [
  ...generatedRealms.map(({ id }) => ({ id, level: 'realm' as const, realmIds: [id] })),
  ...generatedSubrealms.map(({ id, realmId }) => ({
    id,
    level: 'subrealm' as const,
    realmIds: [realmId],
  })),
  ...generatedBioregions.map(({ id, realmId }) => ({
    id,
    level: 'bioregion' as const,
    realmIds: [realmId],
  })),
  ...generatedEcoregions.map(({ id, realmIds }) => ({ id, level: 'ecoregion' as const, realmIds })),
];
const levels: readonly Level[] = ['realm', 'subrealm', 'bioregion', 'ecoregion'];
const summarize = (subset: readonly CoverageTarget[]) => ({
  total: subset.length,
  ...Object.fromEntries(
    states.map((state) => [
      state,
      subset.filter(({ id }) => coverageStateFor(id) === state).length,
    ]),
  ),
});
const report = {
  totals: Object.fromEntries(
    levels.map((level) => [level, summarize(targets.filter((item) => item.level === level))]),
  ),
  overall: summarize(targets),
  realms: generatedRealms.map((realm) => ({
    id: realm.id,
    title: realm.title,
    ...summarize(targets.filter(({ realmIds }) => realmIds.includes(realm.id))),
  })),
  explicitManifestRecords: Object.keys(enrichmentCoverage).length,
  note: 'Realm rows count cross-realm memberships in each applicable realm; overall totals are unique canonical targets.',
};

if (process.argv.includes('--json')) console.log(JSON.stringify(report, null, 2));
else {
  console.log('Enrichment coverage by hierarchy level');
  console.table(levels.map((level) => ({ level, ...(report.totals[level] as object) })));
  console.log('Enrichment coverage by realm membership');
  console.table(report.realms);
  console.log(report.note);
}
