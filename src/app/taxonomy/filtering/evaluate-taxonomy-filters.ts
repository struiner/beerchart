import { RelatedEntity, TaxonomyEntry, TaxonomyModule } from '../contracts/taxonomy';
import { TaxonomyIndexes } from '../indexes/create-taxonomy-indexes';

export interface ActiveTaxonomyFilter {
  readonly facetId: string;
  readonly valueIds?: readonly string[];
  readonly range?: { readonly min?: number; readonly max?: number };
}

export interface TaxonomyFilterResult {
  readonly entryIds: ReadonlySet<string>;
  readonly groupCounts: ReadonlyMap<string, number>;
  readonly facetCounts: ReadonlyMap<string, ReadonlyMap<string, number>>;
}

const intersects = (
  value: { readonly min?: number; readonly max?: number },
  requested: { readonly min?: number; readonly max?: number },
) =>
  (requested.max === undefined || value.min === undefined || value.min <= requested.max) &&
  (requested.min === undefined || value.max === undefined || value.max >= requested.min);

export function evaluateTaxonomyFilters<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(input: {
  readonly module: TaxonomyModule<TEntry, TRelated>;
  readonly indexes: TaxonomyIndexes<TEntry, TRelated>;
  readonly activeFilters: readonly ActiveTaxonomyFilter[];
  readonly context?: { readonly locale: string };
}): TaxonomyFilterResult {
  const context = input.context ?? { locale: 'en' };
  const active = input.activeFilters.filter(
    (filter) => (filter.valueIds?.length ?? 0) > 0 || filter.range !== undefined,
  );
  const facets = new Map(input.module.interpretation.facets.map((facet) => [facet.id, facet]));
  const entryIds = new Set<string>();
  const valuesByEntry = new Map<
    string,
    Map<string, ReturnType<(typeof input.module.interpretation.facets)[number]['values']>>
  >();

  for (const entry of input.module.records.entries) {
    const facetValues = new Map(
      input.module.interpretation.facets.map((facet) => [facet.id, facet.values(entry, context)]),
    );
    valuesByEntry.set(entry.id, facetValues);
    const matches = active.every((filter) => {
      const facet = facets.get(filter.facetId);
      if (!facet) return false;
      const values = facetValues.get(facet.id) ?? [];
      const categorical =
        !filter.valueIds?.length ||
        filter.valueIds.some((id) => values.some((value) => value.id === id));
      const ranged =
        !filter.range ||
        values.some((value) => value.range && intersects(value.range, filter.range!));
      return categorical && ranged;
    });
    if (matches) entryIds.add(entry.id);
  }

  const groupCounts = new Map<string, number>();
  input.indexes.descendantEntryIdsByGroupId.forEach((descendants, groupId) =>
    groupCounts.set(groupId, descendants.filter((id) => entryIds.has(id)).length),
  );
  const facetCounts = new Map<string, ReadonlyMap<string, number>>();
  for (const facet of input.module.interpretation.facets) {
    const counts = new Map<string, number>();
    entryIds.forEach((entryId) =>
      (valuesByEntry.get(entryId)?.get(facet.id) ?? []).forEach((value) =>
        counts.set(value.id, (counts.get(value.id) ?? 0) + 1),
      ),
    );
    facetCounts.set(facet.id, counts);
  }
  return { entryIds, groupCounts, facetCounts };
}
