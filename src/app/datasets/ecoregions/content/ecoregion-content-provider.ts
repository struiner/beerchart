import type { TaxonomyContentBundle, TaxonomyContentProvider } from '../../../taxonomy/public-api';
import { ecoregionPartitionByTargetId } from './partition-ownership.generated';
import { livingCompositionPartitionByTaxonId } from './living-composition-ownership';

type Loader = () => Promise<TaxonomyContentBundle>;
const loaders: Readonly<Record<string, Loader>> = {
  afrotropics: () => import('./partitions/afrotropics').then((module) => module.contentBundle),
  antarctica: () => import('./partitions/antarctica').then((module) => module.contentBundle),
  australasia: () => import('./partitions/australasia').then((module) => module.contentBundle),
  'central-america': () =>
    import('./partitions/central-america').then((module) => module.contentBundle),
  'central-eurasia': () =>
    import('./partitions/central-eurasia').then((module) => module.contentBundle),
  'eastern-eurasia': () =>
    import('./partitions/eastern-eurasia').then((module) => module.contentBundle),
  indomalaya: () => import('./partitions/indomalaya').then((module) => module.contentBundle),
  'northern-america': () =>
    import('./partitions/northern-america').then((module) => module.contentBundle),
  oceania: () => import('./partitions/oceania').then((module) => module.contentBundle),
  'southern-america': () =>
    import('./partitions/southern-america').then((module) => module.contentBundle),
  'southern-eurasia': () =>
    import('./partitions/southern-eurasia').then((module) => module.contentBundle),
  'subarctic-america': () =>
    import('./partitions/subarctic-america').then((module) => module.contentBundle),
  'subarctic-eurasia': () =>
    import('./partitions/subarctic-eurasia').then((module) => module.contentBundle),
  'western-eurasia': () =>
    import('./partitions/western-eurasia').then((module) => module.contentBundle),
};

export const ecoregionContentPartitionIds = Object.freeze(Object.keys(loaders));

export const ecoregionContentProvider: TaxonomyContentProvider = {
  resolvePartition: (target) => {
    if (target.kind === 'dimension-value') return null;
    return (
      ecoregionPartitionByTargetId[target.id] ??
      livingCompositionPartitionByTaxonId[target.id] ??
      null
    );
  },
  loadPartition: (partitionId) => {
    const loader = loaders[partitionId];
    return loader
      ? loader()
      : Promise.reject(new Error(`Unknown ecoregion content partition "${partitionId}".`));
  },
};
