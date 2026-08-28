import {
  RelatedEntity,
  SearchDocument,
  TaxonomyEntry,
  TaxonomyModule,
} from '../contracts/taxonomy';
import { TaxonomyIndexes } from '../indexes/create-taxonomy-indexes';

export interface TaxonomySearchIndex {
  readonly documents: readonly SearchDocument[];
  readonly normalizedTextByDocumentId: ReadonlyMap<string, string>;
}

const normalize = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .trim();

export function createTaxonomySearchIndex<
  TEntry extends TaxonomyEntry,
  TRelated extends RelatedEntity,
>(input: {
  readonly module: TaxonomyModule<TEntry, TRelated>;
  readonly indexes: TaxonomyIndexes<TEntry, TRelated>;
}): TaxonomySearchIndex {
  void input.indexes;
  const documents = input.module.interpretation.search.documents(
    input.module.records.entries,
    input.module.records.relatedEntities,
  );
  return {
    documents,
    normalizedTextByDocumentId: new Map(
      documents.map((document) => [
        document.id,
        normalize([document.title, document.subtitle, ...document.terms].filter(Boolean).join(' ')),
      ]),
    ),
  };
}

export function searchTaxonomy(
  index: TaxonomySearchIndex,
  query: string,
  limit = 50,
): readonly SearchDocument[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return index.documents
    .filter((document) => {
      const text = index.normalizedTextByDocumentId.get(document.id) ?? '';
      return terms.every((term) => text.includes(term));
    })
    .sort((left, right) => {
      const normalizedQuery = normalize(query);
      const leftTitle = normalize(left.title);
      const rightTitle = normalize(right.title);
      const score = (document: SearchDocument, title: string) =>
        (title === normalizedQuery ? 1000 : title.startsWith(normalizedQuery) ? 500 : 0) +
        (document.weight ?? 0);
      return (
        score(right, rightTitle) - score(left, leftTitle) || left.title.localeCompare(right.title)
      );
    })
    .slice(0, limit);
}
