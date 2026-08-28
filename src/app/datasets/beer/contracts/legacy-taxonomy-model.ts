export type Family = 'root' | 'ale' | 'lager' | 'hybrid';
export interface BeerMetadata {
  color?: { srmMin?: number; srmMax?: number; descriptor?: string };
  glassware?: string[];
  fermentation?: string[];
  ingredients?: string[];
  conditioningAge?: { minimumDays?: number; maximumDays?: number; method?: string };
}
export interface TaxonomyNode {
  id: string;
  parentId: string | null;
  title: string;
  type: string;
  order: number;
  family: Family;
  description?: string;
  metadata?: BeerMetadata;
}
export interface TaxonomyDocument {
  schemaVersion: 1;
  classification: string;
  updated: string;
  nodes: TaxonomyNode[];
}
export function validateTaxonomy(value: unknown): TaxonomyDocument {
  if (!value || typeof value !== 'object') throw new Error('Taxonomy must be an object');
  const doc = value as TaxonomyDocument;
  if (doc.schemaVersion !== 1 || !Array.isArray(doc.nodes))
    throw new Error('Unsupported taxonomy schema');
  const ids = new Set<string>();
  for (const node of doc.nodes) {
    if (!node.id || ids.has(node.id)) throw new Error(`Duplicate or missing id: ${node.id}`);
    ids.add(node.id);
  }
  if (doc.nodes.filter((n) => n.parentId === null).length !== 1)
    throw new Error('Taxonomy must contain exactly one root');
  for (const node of doc.nodes) {
    if (node.parentId !== null && !ids.has(node.parentId))
      throw new Error(`Unknown parent: ${node.parentId}`);
    const seen = new Set<string>();
    let current: TaxonomyNode | undefined = node;
    while (current?.parentId) {
      if (seen.has(current.id)) throw new Error(`Cycle at ${current.id}`);
      seen.add(current.id);
      current = doc.nodes.find((n) => n.id === current?.parentId);
    }
  }
  return doc;
}
