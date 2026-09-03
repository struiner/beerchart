import {
  defineTaxonomy,
  type ProfileFactViewModel,
  type TaxonomyDimension,
} from '../../taxonomy/public-api';
import manifestData from './generated/manifest.generated.json';
import { aspects, composites, schools } from './source/canon';
import type { PanmagiconSpell, SpellCollectionRecord, StreamRecord } from './contracts/panmagicon';
import { panmagiconContentProvider } from './content/panmagicon-content-provider';

const streams = manifestData.streams as readonly StreamRecord[];
const collections = manifestData.collections as readonly SpellCollectionRecord[];
const shelfNames = [
  'Lessons',
  'Practical Workings',
  'Expert Formulae',
  'Rites',
  'Wonders',
] as const;
const schoolNames = [
  'conjuration',
  'abjuration',
  'alteration',
  'restoration',
  'evocation',
  'enchantment',
  'divination',
  'veiling',
] as const;
type CompactSpell = readonly [
  string,
  string,
  string,
  number,
  number,
  readonly number[],
  readonly number[],
  number,
  string | null,
  number | null,
];
const collectionDetails = new Map(
  collections.map((collection) => {
    const collectionAspects = collection.compositeId
      ? (composites.find(({ id }) => id === collection.compositeId)?.aspectIds ?? [])
      : collection.streamId
        ? [streams.find(({ id }) => id === collection.streamId)?.aspectId].filter(
            (value): value is string => Boolean(value),
          )
        : [];
    return [collection.id.slice('collection:'.length), { collection, collectionAspects }];
  }),
);
const tensionKeys = [
  'threads',
  'turns',
  'knots',
  'span',
  'hold',
  'fineness',
  'agency',
  'contradiction',
] as const;
const spells: readonly PanmagiconSpell[] = (
  manifestData.spells as unknown as readonly CompactSpell[]
).map(
  ([
    originalId,
    title,
    collectionSlug,
    shelfIndex,
    functionIndex,
    schoolIndexes,
    values,
    load,
    doctrine,
    carrierIndex,
  ]) => {
    const { collection, collectionAspects: aspectIds } = collectionDetails.get(collectionSlug)!;
    const schoolIds = schoolIndexes.map((index) => `school:${schoolNames[index]}`);
    const streamIds = aspectIds.flatMap((aspectId) =>
      schoolIds.map((schoolId) => `stream:${aspectId.slice(7)}-${schoolId.slice(7)}`),
    );
    const shelf = shelfNames[shelfIndex]!;
    const tension = Object.fromEntries(
      tensionKeys.map((key, index) => [key, values[index] ?? 0]),
    ) as unknown as PanmagiconSpell['facts']['tension'];
    return {
      id: `spell:${collectionSlug}:${originalId.toLowerCase()}`,
      title,
      parentGroupIds: [`shelf:${collectionSlug}:${shelf.toLowerCase().replace(/\s+/g, '-')}`],
      facts: {
        originalId,
        collectionId: collection.id,
        collectionTitle: collection.name,
        collectionType: collection.type,
        shelf,
        shelfPosition: Number(originalId.slice(1)) % 10 || 10,
        aspectIds,
        schoolIds,
        streamIds,
        ...(collection.compositeId ? { compositeId: collection.compositeId } : {}),
        functionTag: manifestData.functionTags[functionIndex]!,
        ...(doctrine ? { doctrine } : {}),
        ...(carrierIndex === null ? {} : { carrier: manifestData.carriers[carrierIndex] }),
        scale: shelf,
        tension,
        sourceLoad: load,
        calculatedLoad: values.reduce((sum, value) => sum + value, 0),
        provenance: {
          document: collection.sourceDocument,
          collectionId: collection.id,
          originalId,
          location: `${collection.name} / ${shelf} / ${originalId}`,
        },
      },
      aliases: [originalId],
      tags: [manifestData.functionTags[functionIndex]!, shelf],
      sources: [
        {
          id: collection.sourceDocument
            .toLowerCase()
            .replace(/\.docx$/, '')
            .replace(/_/g, '-'),
          title: collection.sourceDocument.replace(/\.docx$/, '').replace(/_/g, ' '),
        },
      ],
      status: 'documented',
    };
  },
);
const aspectById = new Map(aspects.map((item) => [item.id, item]));
const schoolById = new Map(schools.map((item) => [item.id, item]));
const streamById = new Map(streams.map((item) => [item.id, item]));
const collectionById = new Map(collections.map((item) => [item.id, item]));
const compositeById = new Map(composites.map((item) => [item.id, item]));
const titleValues = <T extends { id: string; name: string }>(
  ids: readonly string[],
  map: ReadonlyMap<string, T>,
) =>
  ids.flatMap((id) => {
    const item = map.get(id);
    return item ? [{ id, label: item.name }] : [];
  });

const groups = [
  {
    id: 'panmagicon',
    title: 'Panmagicon',
    parentGroupId: null,
    description: 'The Eightfold magical grammar.',
  },
  ...aspects.map((aspect, index) => ({
    id: aspect.id,
    title: aspect.name,
    parentGroupId: 'panmagicon',
    description: aspect.principle,
    sortOrder: index,
  })),
  ...schools.map((school, index) => ({
    id: school.id,
    title: school.name,
    parentGroupId: 'panmagicon',
    description: school.operation,
    sortOrder: 20 + index,
  })),
  ...streams.map((stream) => ({
    id: stream.id,
    title: stream.name,
    parentGroupId: stream.aspectId,
    description: stream.description,
  })),
  ...composites.map((composite) => ({
    id: composite.id,
    title: composite.name,
    parentGroupId: 'panmagicon',
    description: composite.equalExpression,
  })),
  ...collections.map((collection) => ({
    id: collection.id,
    title: collection.name,
    parentGroupId: collection.streamId ?? collection.compositeId ?? 'panmagicon',
    description: `${collection.actualSpellCount} authored spells across five shelves.`,
  })),
  ...collections.flatMap((collection) =>
    shelfNames.map((shelf, index) => ({
      id: `shelf:${collection.id.slice('collection:'.length)}:${shelf.toLowerCase().replace(/\s+/g, '-')}`,
      title: shelf,
      parentGroupId: collection.id,
      sortOrder: index,
    })),
  ),
];

const dimensions: readonly TaxonomyDimension<PanmagiconSpell>[] = [
  {
    id: 'aspect',
    label: 'Aspect',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'reject',
    values: (entry) => titleValues(entry.facts.aspectIds, aspectById),
  },
  {
    id: 'school',
    label: 'School',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) => titleValues(entry.facts.schoolIds, schoolById),
  },
  {
    id: 'stream',
    label: 'Stream',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) => titleValues(entry.facts.streamIds, streamById),
  },
  {
    id: 'composite',
    label: 'Composite domain',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) =>
      entry.facts.compositeId ? titleValues([entry.facts.compositeId], compositeById) : [],
  },
  {
    id: 'shelf',
    label: 'Shelf',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'reject',
    values: (entry) => [
      {
        id: entry.facts.shelf,
        label: entry.facts.shelf,
        sortOrder: ['Lessons', 'Practical Workings', 'Expert Formulae', 'Rites', 'Wonders'].indexOf(
          entry.facts.shelf,
        ),
      },
    ],
  },
  {
    id: 'collection',
    label: 'Collection',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'reject',
    values: (entry) => titleValues([entry.facts.collectionId], collectionById),
  },
  {
    id: 'collection-type',
    label: 'Foundational or composite',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'reject',
    values: (entry) => [
      {
        id: entry.facts.collectionType,
        label: entry.facts.collectionType === 'foundational' ? 'Foundational' : 'Composite',
      },
    ],
  },
  {
    id: 'scale',
    label: 'Scale',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) =>
      entry.facts.scale ? [{ id: entry.facts.scale, label: entry.facts.scale }] : [],
  },
  {
    id: 'function',
    label: 'Function',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) =>
      entry.facts.functionTag
        ? [{ id: entry.facts.functionTag, label: entry.facts.functionTag }]
        : [],
  },
  {
    id: 'carrier',
    label: 'Carrier',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) =>
      entry.facts.carrier ? [{ id: entry.facts.carrier, label: entry.facts.carrier }] : [],
  },
  {
    id: 'target',
    label: 'Target',
    description: 'Only populated where the canon supplies an explicit normalized target.',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'unknown-bucket',
    values: (entry) =>
      entry.facts.target ? [{ id: entry.facts.target, label: entry.facts.target }] : [],
  },
  {
    id: 'authorship',
    label: 'Authorship status',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'reject',
    values: () => [{ id: 'authored', label: 'Authored' }],
  },
];

const tensionFacts = (entry: PanmagiconSpell): readonly ProfileFactViewModel[] => [
  {
    id: 'load',
    label: 'Calculated Load',
    value: String(entry.facts.calculatedLoad),
    presentation: { variant: 'measure' },
  },
  ...Object.entries(entry.facts.tension).map(([id, value]) => ({
    id,
    label: id[0]!.toUpperCase() + id.slice(1),
    value: String(value),
    presentation: { variant: 'measure' as const },
  })),
];

const visualTokens = Object.fromEntries(
  aspects.map((aspect) => [aspect.id.replace(':', '-'), aspect.color]),
);

export const panmagiconTaxonomy = defineTaxonomy<PanmagiconSpell>({
  meta: {
    id: 'panmagicon',
    title: 'The Panmagicon',
    description: 'The Eightfold magic system and its authored spell corpus.',
    schemaVersion: 'taxonomy-module/v1',
    engineVersion: '1',
    datasetVersion: '1.0.0',
  },
  vocabulary: {
    root: 'Panmagicon',
    group: 'Discipline',
    groupPlural: 'Disciplines',
    entry: 'Spell',
    entryPlural: 'Spells',
    relatedEntity: 'Teaching',
    relatedEntityPlural: 'Teachings',
  },
  content: {
    about: [
      {
        id: 'canon',
        title: 'The Eightfold grammar',
        markdown:
          'A source-faithful atlas of Aspects, Schools, Streams, composite domains, shelves, and spells. Every magical act leaves an Aspect trace and a School remainder.',
      },
      {
        id: 'coverage',
        title: 'Authored coverage',
        markdown:
          'The current corpus contains 600 authored spells in 12 collections. The remaining canon is represented as defined or planned coverage, never invented.',
      },
    ],
    search: { placeholder: 'Search spells, streams and disciplines' },
    emptyStates: { noFilterResults: 'No spells match the active formula constraints.' },
  },
  contentProvider: panmagiconContentProvider,
  records: { groups, entries: spells, relatedEntities: [] },
  interpretation: {
    dimensions,
    facets: [
      ...dimensions,
      {
        id: 'load',
        label: 'Total Load',
        kind: 'range',
        values: (entry) => [
          {
            id: String(entry.facts.calculatedLoad),
            label: String(entry.facts.calculatedLoad),
            range: { min: entry.facts.calculatedLoad, max: entry.facts.calculatedLoad },
          },
        ],
      },
      ...(
        [
          'threads',
          'turns',
          'knots',
          'span',
          'hold',
          'fineness',
          'agency',
          'contradiction',
        ] as const
      ).map((measure) => ({
        id: measure,
        label: measure[0].toUpperCase() + measure.slice(1),
        kind: 'range' as const,
        values: (entry: PanmagiconSpell) => [
          {
            id: String(entry.facts.tension[measure]),
            label: String(entry.facts.tension[measure]),
            range: { min: entry.facts.tension[measure], max: entry.facts.tension[measure] },
          },
        ],
      })),
    ],
    search: {
      documents: (entries) => [
        ...entries.map((entry) => ({
          id: `entry:${entry.id}`,
          targetType: 'entry' as const,
          targetId: entry.id,
          title: entry.title,
          subtitle: `${entry.facts.collectionTitle} · ${entry.facts.shelf} · Load ${entry.facts.calculatedLoad}`,
          terms: [
            entry.facts.originalId,
            entry.description ?? '',
            entry.facts.functionTag,
            entry.facts.doctrine ?? '',
            ...(entry.tags ?? []),
          ],
        })),
        ...groups.map((group) => ({
          id: `group:${group.id}`,
          targetType: 'group' as const,
          targetId: group.id,
          title: group.title,
          subtitle: 'description' in group ? group.description : undefined,
          terms: [],
        })),
      ],
    },
    profiles: {
      entrySections: (entry) => [
        {
          kind: 'facts',
          id: 'identity',
          title: 'Spell identity',
          facts: [
            {
              id: 'source-id',
              label: 'Original spellbook ID',
              value: entry.facts.originalId,
              presentation: { variant: 'stamp' },
            },
            { id: 'collection', label: 'Collection', value: entry.facts.collectionTitle },
            { id: 'shelf', label: 'Shelf', value: entry.facts.shelf },
            {
              id: 'aspect',
              label: 'Aspect',
              value: titleValues(entry.facts.aspectIds, aspectById)
                .map((item) => item.label)
                .join(' + '),
            },
            {
              id: 'school',
              label: 'School',
              value:
                titleValues(entry.facts.schoolIds, schoolById)
                  .map((item) => item.label)
                  .join(' → ') || 'Varies by formula',
            },
            { id: 'function', label: 'Function', value: entry.facts.functionTag },
          ],
        },
        { kind: 'facts', id: 'tension', title: 'Tension profile', facts: tensionFacts(entry) },
        {
          kind: 'sources',
          id: 'sources',
          title: 'Source provenance',
          sources: entry.sources ?? [],
        },
      ],
      groupSections: (group, descendants) => [
        ...(group.description
          ? [
              {
                kind: 'markdown' as const,
                id: 'description',
                title: 'Canon',
                markdown: group.description,
              },
            ]
          : []),
        {
          kind: 'facts',
          id: 'coverage',
          title: 'Coverage',
          facts: [
            {
              id: 'descendants',
              label: 'Authored spells',
              value: String(descendants.length),
              presentation: { variant: 'measure' },
            },
          ],
        },
      ],
    },
    projection: {
      kind: 'dimensional',
      defaultRingOrder: ['aspect', 'school', 'shelf'],
      allowedDimensionIds: dimensions.map((item) => item.id),
      structureMode: 'dimensions',
      maximumRingCount: 3,
      maximumProjectedInstances: 5000,
      emptyBranchPolicy: 'hide',
    },
  },
  presentation: {
    dashboard: {
      targetKinds: ['entry', 'group'],
      actionLabel: 'Open folio',
      sections: [{ id: 'folio', layout: 'single', widgets: [{ id: 'profile', kind: 'profile' }] }],
    },
    layout: {
      radiusPolicy: { kind: 'adaptive', initialRadius: 430, ringGap: 560 },
      labelOrientation: 'radial',
      branchColors: Object.fromEntries(
        aspects.map((aspect) => [aspect.id, aspect.id.replace(':', '-')]),
      ),
      stationMetrics: {
        root: { width: 112, height: 112, priority: 100, minimumLabelZoom: 0 },
        dimensionValueByDepth: {
          1: { width: 68, height: 68, priority: 90, minimumLabelZoom: 0.1 },
          2: { width: 44, height: 44, priority: 60, minimumLabelZoom: 0.3 },
          3: { width: 28, height: 28, priority: 35, minimumLabelZoom: 0.55 },
        },
        entry: { width: 17, height: 17, priority: 10, minimumLabelZoom: 0.8 },
      },
    },
    theme: {
      id: 'panmagicon-illuminated-weave',
      texture: 'none',
      tokens: {
        ink: '#e9e1c5',
        deepInk: '#110f19',
        olive: '#b5a8cd',
        oliveLight: '#8f82a7',
        paper: '#201b2d',
        paperLight: '#302940',
        paperDark: '#15121f',
        brass: '#c3a35b',
        amber: '#d47845',
        yellow: '#d2b84d',
        teal: '#5ba4a2',
        oxblood: '#8f4257',
        green: '#72a84c',
        blue: '#5688bd',
      },
      visualTokens: {
        ...visualTokens,
        'route-0': '#d85b36',
        'route-1': '#3f86c7',
        'route-2': '#aacbd1',
        'route-3': '#9b7544',
        'route-4': '#72a84c',
        'route-5': '#725d78',
        'route-6': '#d2b84d',
        'route-7': '#6d6587',
      },
      typography: {
        display: { family: 'Georgia', fallbacks: ['serif'], weight: 700 },
        interface: { family: 'Arial Narrow', fallbacks: ['Arial', 'sans-serif'], weight: 700 },
        annotation: { family: 'Georgia', fallbacks: ['serif'], weight: 500 },
        data: { family: 'Consolas', fallbacks: ['monospace'], weight: 500 },
      },
      surfaces: {
        application: { background: 'deepInk', foreground: 'ink', border: 'brass' },
        toolbar: { background: 'paperDark', foreground: 'ink', border: 'brass' },
        viewport: { background: 'paper', foreground: 'ink', border: 'oliveLight' },
        panel: { background: 'paperLight', foreground: 'ink', border: 'brass' },
      },
      geometry: { controlRadius: 0, panelRadius: 0, tileRadius: 0, borderWidth: 1, focusWidth: 3 },
      textures: { none: { kind: 'none' } },
    },
    entryTile: (entry) => ({
      id: entry.id,
      title: entry.title,
      subtitle: `${entry.facts.shelf} · Load ${entry.facts.calculatedLoad}`,
      badges: entry.facts.aspectIds.map((id) => ({ id, label: aspectById.get(id)?.name ?? id })),
    }),
    relatedEntityTile: (entity) => ({ id: entity.id, title: entity.title, badges: [] }),
  },
});
