import { InjectionToken, Provider } from '@angular/core';
import { RelatedEntity, TaxonomyEntry, TaxonomyModule } from './taxonomy';

export const TAXONOMY_MODULE = new InjectionToken<TaxonomyModule>('Active taxonomy module');

export function provideTaxonomy<TEntry extends TaxonomyEntry, TRelated extends RelatedEntity>(
  module: TaxonomyModule<TEntry, TRelated>,
): Provider {
  return { provide: TAXONOMY_MODULE, useValue: module };
}
