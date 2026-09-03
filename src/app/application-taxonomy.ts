import type { TaxonomyCatalogItem } from './taxonomy/public-api';

export const applicationTaxonomyCatalog: readonly TaxonomyCatalogItem[] = [
  {
    id: 'brewers-association-2026-circular-taxonomy',
    title: 'Beer styles',
    description: 'The 2026 Brewers Association beer-style taxonomy.',
    load: () => import('./datasets/beer').then(({ taxonomy }) => taxonomy),
  },
  {
    id: 'one-earth-terrestrial-ecoregions',
    title: 'Terrestrial ecoregions',
    description: 'The One Earth Bioregions 2023 terrestrial hierarchy.',
    load: () => import('./datasets/ecoregions').then(({ taxonomy }) => taxonomy),
  },
  {
    id: 'panmagicon',
    title: 'The Panmagicon',
    description: 'The Eightfold magic system and its authored spell corpus.',
    load: () => import('./datasets/panmagicon').then(({ taxonomy }) => taxonomy),
  },
];

export async function loadApplicationTaxonomy() {
  const routeDataset = globalThis.location?.pathname.match(/^\/atlas\/([^/]+)/)?.[1];
  const rawRequested =
    new URLSearchParams(globalThis.location?.search ?? '').get('taxonomy') ?? routeDataset;
  const requested =
    rawRequested === 'beer'
      ? 'brewers-association-2026-circular-taxonomy'
      : rawRequested === 'ecoregions'
        ? 'one-earth-terrestrial-ecoregions'
        : rawRequested === 'panmagicon'
          ? 'panmagicon'
          : rawRequested;
  const selected =
    applicationTaxonomyCatalog.find(({ id }) => id === requested) ?? applicationTaxonomyCatalog[0]!;
  return selected.load();
}
