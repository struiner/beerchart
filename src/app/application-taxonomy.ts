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
];

export async function loadApplicationTaxonomy() {
  const rawRequested = new URLSearchParams(globalThis.location?.search ?? '').get('taxonomy');
  const requested =
    rawRequested === 'beer'
      ? 'brewers-association-2026-circular-taxonomy'
      : rawRequested === 'ecoregions'
        ? 'one-earth-terrestrial-ecoregions'
        : rawRequested;
  const selected =
    applicationTaxonomyCatalog.find(({ id }) => id === requested) ?? applicationTaxonomyCatalog[0]!;
  return selected.load();
}
