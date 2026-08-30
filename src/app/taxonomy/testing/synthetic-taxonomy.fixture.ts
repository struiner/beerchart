import { defineTaxonomy } from '../contracts/define-taxonomy';
import { RelatedEntity, TaxonomyEntry } from '../contracts/taxonomy';

interface SpecimenFacts {
  readonly material: string;
  readonly colors?: readonly string[];
  readonly hardness: { readonly min: number; readonly max: number };
}

export interface SpecimenEntry extends TaxonomyEntry<SpecimenFacts> {}
export interface CollectionRecord extends RelatedEntity {}

const entries: readonly SpecimenEntry[] = [
  {
    id: 'quartz',
    title: 'Quartz',
    parentGroupIds: ['silicates'],
    facts: { material: 'mineral', colors: ['clear', 'purple'], hardness: { min: 7, max: 7 } },
    aliases: ['rock crystal'],
  },
  {
    id: 'amethyst',
    title: 'Amethyst',
    parentGroupIds: ['silicates', 'gems'],
    facts: { material: 'mineral', colors: ['purple'], hardness: { min: 7, max: 7 } },
  },
  {
    id: 'calcite',
    title: 'Calcite',
    parentGroupIds: ['carbonates'],
    facts: { material: 'mineral', colors: ['clear'], hardness: { min: 3, max: 3 } },
  },
  {
    id: 'dolomite',
    title: 'Dolomite',
    parentGroupIds: ['carbonates'],
    facts: { material: 'mineral', hardness: { min: 3.5, max: 4 } },
  },
  {
    id: 'jade-a',
    title: 'Jade',
    parentGroupIds: ['silicates', 'gems'],
    facts: { material: 'mineral', colors: ['green', 'white'], hardness: { min: 6, max: 7 } },
  },
  {
    id: 'jade-b',
    title: 'Jade',
    parentGroupIds: ['gems'],
    facts: { material: 'rock', colors: ['green'], hardness: { min: 6, max: 6.5 } },
    aliases: ['nephrite'],
  },
];

export const syntheticTaxonomy = defineTaxonomy({
  meta: {
    id: 'synthetic-specimens',
    title: 'Synthetic specimens',
    schemaVersion: 'taxonomy-module/v1',
    engineVersion: '1',
    datasetVersion: '1.0.0',
  },
  vocabulary: {
    root: 'Specimens',
    group: 'Collection',
    groupPlural: 'Collections',
    entry: 'Specimen',
    entryPlural: 'Specimens',
    relatedEntity: 'Museum',
    relatedEntityPlural: 'Museums',
  },
  content: {
    about: [
      {
        id: 'purpose',
        title: 'Specimen projection laboratory',
        markdown: 'A small neutral collection used to verify reusable taxonomy behavior.',
      },
    ],
    search: { placeholder: 'Search specimens and collections' },
  },
  records: {
    groups: [
      { id: 'specimens', title: 'Specimens', parentGroupId: null },
      { id: 'minerals', title: 'Minerals', parentGroupId: 'specimens' },
      { id: 'silicates', title: 'Silicates', parentGroupId: 'minerals' },
      { id: 'carbonates', title: 'Carbonates', parentGroupId: 'minerals' },
      { id: 'gems', title: 'Gems', parentGroupId: 'specimens' },
    ],
    entries,
    relatedEntities: [
      { id: 'museum-a', title: 'Museum A', linkedEntryIds: ['quartz', 'calcite'] },
      { id: 'museum-b', title: 'Museum B', linkedEntryIds: ['amethyst', 'jade-a', 'jade-b'] },
    ] satisfies readonly CollectionRecord[],
  },
  interpretation: {
    dimensions: [
      {
        id: 'material',
        label: 'Material',
        cardinality: 'single',
        multipleValuePolicy: 'reject',
        missingValuePolicy: 'reject',
        values: (entry: SpecimenEntry) => [
          { id: entry.facts.material, label: entry.facts.material },
        ],
      },
      {
        id: 'color',
        label: 'Color',
        cardinality: 'multiple',
        multipleValuePolicy: 'duplicate-instance',
        missingValuePolicy: 'unknown-bucket',
        values: (entry: SpecimenEntry) =>
          (entry.facts.colors ?? []).map((color) => ({ id: color, label: color })),
      },
    ],
    facets: [
      {
        id: 'material',
        label: 'Material',
        values: (entry: SpecimenEntry) => [
          { id: entry.facts.material, label: entry.facts.material },
        ],
      },
      {
        id: 'color',
        label: 'Color',
        values: (entry: SpecimenEntry) =>
          (entry.facts.colors ?? []).map((color) => ({ id: color, label: color })),
      },
      {
        id: 'hardness',
        label: 'Hardness',
        kind: 'range',
        values: (entry: SpecimenEntry) => [
          { id: entry.id, label: entry.title, range: entry.facts.hardness },
        ],
      },
    ],
    search: {
      documents: (
        searchEntries: readonly SpecimenEntry[],
        related: readonly CollectionRecord[],
      ) => [
        ...searchEntries.map((entry) => ({
          id: `entry:${entry.id}`,
          targetType: 'entry' as const,
          targetId: entry.id,
          title: entry.title,
          terms: entry.aliases ?? [],
        })),
        ...related.map((entity) => ({
          id: `related:${entity.id}`,
          targetType: 'related-entity' as const,
          targetId: entity.id,
          title: entity.title,
          terms: [],
        })),
      ],
    },
    profiles: {
      entrySections: (entry: SpecimenEntry, related: readonly CollectionRecord[]) => [
        {
          kind: 'facts' as const,
          id: 'facts',
          title: 'Facts',
          facts: [
            {
              id: 'material',
              label: 'Material',
              value: entry.facts.material,
              presentation: { variant: 'stamp' as const },
            },
            { id: 'origin', label: 'Record origin', value: 'Synthetic fixture' },
            {
              id: 'hardness',
              label: 'Hardness',
              value: `${entry.facts.hardness.min}–${entry.facts.hardness.max}`,
            },
          ],
        },
        {
          kind: 'related-entities' as const,
          id: 'collections',
          title: 'Museums',
          items: related.map(({ id, title, description }) => ({ id, title, description })),
        },
      ],
    },
    projection: {
      kind: 'dimensional',
      defaultRingOrder: ['material', 'color'],
      allowedDimensionIds: ['material', 'color'],
      structureMode: 'dimensions',
      maximumRingCount: 3,
      maximumProjectedInstances: 100,
      emptyBranchPolicy: 'hide',
    },
  },
  presentation: {
    layout: {
      radiusPolicy: { kind: 'adaptive', initialRadius: 320, ringGap: 360 },
      labelOrientation: 'auto',
    },
    entryTile: (entry: SpecimenEntry) => ({ id: entry.id, title: entry.title, badges: [] }),
    relatedEntityTile: (entity: CollectionRecord) => ({
      id: entity.id,
      title: entity.title,
      badges: [],
    }),
  },
});
