import { TaxonomyEntry, RelatedEntity, TaxonomyModule } from './taxonomy';

/** Preserves literal IDs and domain-specific record types while checking the module contract. */
export function defineTaxonomy<TEntry extends TaxonomyEntry, TRelated extends RelatedEntity>(
  module: TaxonomyModule<TEntry, TRelated>,
): TaxonomyModule<TEntry, TRelated> {
  return module;
}
