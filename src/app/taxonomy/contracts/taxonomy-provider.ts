import { InjectionToken, Provider } from '@angular/core';
import { RelatedEntity, TaxonomyEntry, TaxonomyModule } from './taxonomy';

export const TAXONOMY_MODULE = new InjectionToken<TaxonomyModule>('Active taxonomy module');
export interface TaxonomyCatalogItem {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  /** Dataset-specific fact types are intentionally erased at the lazy composition boundary. */
  load(): Promise<TaxonomyModule<any, any>>;
}
export const TAXONOMY_CATALOG = new InjectionToken<readonly TaxonomyCatalogItem[]>(
  'Available taxonomy modules',
);

export function provideTaxonomy<TEntry extends TaxonomyEntry, TRelated extends RelatedEntity>(
  module: TaxonomyModule<TEntry, TRelated>,
): Provider {
  return { provide: TAXONOMY_MODULE, useValue: module };
}

export function provideTaxonomyCatalog(items: readonly TaxonomyCatalogItem[]): Provider {
  return { provide: TAXONOMY_CATALOG, useValue: items };
}
