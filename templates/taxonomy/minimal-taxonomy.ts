import {
  defineTaxonomy,
  type RelatedEntity,
  type TaxonomyEntry,
} from '../../src/app/taxonomy/public-api';

interface ExampleFacts {
  readonly family: 'alpha' | 'beta';
  readonly regions: readonly string[];
  readonly score: number;
}
interface ExampleEntry extends TaxonomyEntry<ExampleFacts> {}
interface ExampleReference extends RelatedEntity {}

const entries: readonly ExampleEntry[] = [
  {
    id: 'alpha-north',
    title: 'Northern Alpha',
    parentGroupIds: ['alpha'],
    facts: { family: 'alpha', regions: ['north'], score: 8 },
  },
  {
    id: 'alpha-coastal',
    title: 'Coastal Alpha',
    parentGroupIds: ['alpha'],
    facts: { family: 'alpha', regions: ['north', 'coast'], score: 6 },
  },
  {
    id: 'beta-south',
    title: 'Southern Beta',
    parentGroupIds: ['beta'],
    facts: { family: 'beta', regions: ['south'], score: 4 },
  },
  {
    id: 'beta-coastal',
    title: 'Coastal Beta',
    parentGroupIds: ['beta'],
    facts: { family: 'beta', regions: ['south', 'coast'], score: 7 },
  },
];

export const taxonomy = defineTaxonomy<ExampleEntry, ExampleReference>({
  meta: {
    id: 'example-taxonomy',
    title: 'Example Taxonomy',
    description: 'A minimal, authorable taxonomy module.',
    schemaVersion: 'taxonomy-module/v1',
    engineVersion: '1',
    datasetVersion: '1.0.0',
  },
  vocabulary: {
    root: 'Examples',
    group: 'Family',
    groupPlural: 'Families',
    entry: 'Example',
    entryPlural: 'Examples',
    relatedEntity: 'Reference',
    relatedEntityPlural: 'References',
  },
  content: {
    about: [
      {
        id: 'purpose',
        title: 'Example taxonomy',
        markdown: 'A neutral template demonstrating the supported authoring contract.',
      },
    ],
    search: { placeholder: 'Search examples and references' },
  },
  records: {
    groups: [
      { id: 'examples', title: 'Examples', parentGroupId: null },
      { id: 'alpha', title: 'Alpha family', parentGroupId: 'examples' },
      { id: 'beta', title: 'Beta family', parentGroupId: 'examples' },
    ],
    entries,
    relatedEntities: [
      {
        id: 'reference-guide',
        title: 'Example reference guide',
        linkedEntryIds: ['alpha-north', 'beta-south'],
      },
    ],
  },
  interpretation: {
    dimensions: [
      {
        id: 'family',
        label: 'Family',
        cardinality: 'single',
        multipleValuePolicy: 'reject',
        missingValuePolicy: 'reject',
        values: (entry) => [
          { id: entry.facts.family, label: entry.facts.family === 'alpha' ? 'Alpha' : 'Beta' },
        ],
      },
      {
        id: 'region',
        label: 'Region',
        cardinality: 'multiple',
        multipleValuePolicy: 'duplicate-instance',
        missingValuePolicy: 'unknown-bucket',
        values: (entry) =>
          entry.facts.regions.map((region) => ({
            id: region,
            label: region[0]!.toUpperCase() + region.slice(1),
          })),
      },
    ],
    facets: [
      {
        id: 'family',
        label: 'Family',
        values: (entry) => [{ id: entry.facts.family, label: entry.facts.family }],
      },
      {
        id: 'score',
        label: 'Score',
        kind: 'range',
        values: (entry) => [
          {
            id: entry.id,
            label: entry.title,
            range: { min: entry.facts.score, max: entry.facts.score },
          },
        ],
      },
    ],
    search: {
      documents: (searchEntries, references) => [
        ...searchEntries.map((entry) => ({
          id: `entry:${entry.id}`,
          targetType: 'entry' as const,
          targetId: entry.id,
          title: entry.title,
          terms: entry.aliases ?? [],
        })),
        ...references.map((reference) => ({
          id: `reference:${reference.id}`,
          targetType: 'related-entity' as const,
          targetId: reference.id,
          title: reference.title,
          terms: [],
        })),
      ],
    },
    profiles: {
      entrySections: (entry, references) => [
        {
          kind: 'facts',
          id: 'facts',
          title: 'Facts',
          facts: [
            { id: 'family', label: 'Family', value: entry.facts.family },
            {
              id: 'score',
              label: 'Score',
              value: String(entry.facts.score),
              presentation: { variant: 'measure', unit: 'points' },
            },
          ],
        },
        {
          kind: 'related-entities',
          id: 'references',
          title: 'References',
          items: references.map(({ id, title, description }) => ({ id, title, description })),
        },
      ],
    },
    projection: {
      defaultRingOrder: ['family', 'region'],
      allowedDimensionIds: ['family', 'region'],
      structureMode: 'dimensions',
      maximumRingCount: 3,
      maximumProjectedInstances: 100,
      emptyBranchPolicy: 'hide',
    },
  },
  presentation: {
    layout: {
      radiusPolicy: { kind: 'adaptive', initialRadius: 300, ringGap: 340 },
      labelOrientation: 'auto',
      branchColors: { alpha: 'alpha', beta: 'beta' },
    },
    theme: {
      id: 'neutral-field-guide',
      texture: 'none',
      tokens: {
        ink: '#252a27',
        deepInk: '#111411',
        olive: '#354039',
        oliveLight: '#657169',
        paper: '#e5e1d5',
        paperLight: '#f6f3e9',
        paperDark: '#b7b1a2',
        brass: '#94713d',
        amber: '#aa643f',
        yellow: '#ae913d',
        teal: '#427d78',
        oxblood: '#844b4b',
        green: '#587253',
        blue: '#496d82',
      },
      visualTokens: { alpha: '#496d82', beta: '#844b4b' },
      typography: {
        display: { family: 'Georgia', fallbacks: ['serif'], weight: 700 },
        interface: { family: 'Arial', fallbacks: ['sans-serif'], weight: 600 },
        annotation: { family: 'Arial', fallbacks: ['sans-serif'], weight: 400 },
      },
      surfaces: {
        application: { background: 'paper', foreground: 'ink', border: 'deepInk' },
        toolbar: { background: 'olive', foreground: 'paperLight', border: 'brass' },
        viewport: { background: 'paper', foreground: 'ink', border: 'paperDark' },
        panel: { background: 'paperLight', foreground: 'ink', border: 'deepInk' },
      },
      geometry: { controlRadius: 0, panelRadius: 0, tileRadius: 0, borderWidth: 1, focusWidth: 3 },
      textures: { none: { kind: 'none' } },
    },
    entryTile: (entry) => ({
      id: entry.id,
      title: entry.title,
      description: entry.description,
      badges: [],
    }),
    relatedEntityTile: (entity) => ({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      badges: [],
    }),
  },
});
