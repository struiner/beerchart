import type { Provider } from '@angular/core';
import { applicationTaxonomyCatalog, loadApplicationTaxonomy } from './application-taxonomy';
import { provideTaxonomy, provideTaxonomyCatalog } from './taxonomy/public-api';

export async function resolveActiveTaxonomyProviders(): Promise<Provider[]> {
  const specimenSelected =
    new URLSearchParams(globalThis.location?.search ?? '').get('taxonomy') === 'specimen';
  const taxonomy = specimenSelected
    ? (await import('./taxonomy/testing/synthetic-taxonomy.fixture')).syntheticTaxonomy
    : await loadApplicationTaxonomy();
  const specimenCatalogItem = {
    id: 'specimen',
    title: 'Specimen taxonomy',
    description: 'Development-only generic taxonomy fixture.',
    load: () =>
      import('./taxonomy/testing/synthetic-taxonomy.fixture').then(
        ({ syntheticTaxonomy }) => syntheticTaxonomy,
      ),
  };
  return [
    provideTaxonomy(taxonomy),
    provideTaxonomyCatalog([...applicationTaxonomyCatalog, specimenCatalogItem]),
  ];
}
