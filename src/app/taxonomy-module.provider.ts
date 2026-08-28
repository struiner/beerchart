import type { Provider } from '@angular/core';
import { applicationTaxonomyCatalog, loadApplicationTaxonomy } from './application-taxonomy';
import { provideTaxonomy, provideTaxonomyCatalog } from './taxonomy/public-api';

export async function resolveActiveTaxonomyProviders(): Promise<Provider[]> {
  return [
    provideTaxonomy(await loadApplicationTaxonomy()),
    provideTaxonomyCatalog(applicationTaxonomyCatalog),
  ];
}
