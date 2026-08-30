import {
  defineTaxonomy,
  type SourceReference,
  type TaxonomyDimension,
  type TaxonomyEntry,
} from '../../taxonomy/public-api';
import { generatedBioregions } from './generated/bioregions.generated';
import { generatedEcoregions } from './generated/ecoregions.generated';
import { generatedRealms } from './generated/realms.generated';
import { generatedSubrealms } from './generated/subrealms.generated';
import { ecoregionContentProvider } from './content/ecoregion-content-provider';

interface EcoregionFacts {
  readonly externalId: string;
  readonly realmIds: readonly string[];
  readonly subrealmIds: readonly string[];
  readonly bioregionIds: readonly string[];
  readonly biomeId: string;
  readonly biomeTitle: string;
  readonly climateZone?: string;
  readonly moistureRegime?: string;
  readonly latitudeZone?: string;
  readonly conservationCondition?: string;
}
export interface EcoregionEntry extends TaxonomyEntry<EcoregionFacts> {}
const sources: readonly SourceReference[] = [
  {
    id: 'one-earth-bioregions-2023',
    title: 'One Earth Bioregions Framework',
    url: 'https://www.oneearth.org/bioregions-2023/',
  },
  {
    id: 'resolve-ecoregions-2017',
    title: 'RESOLVE Ecoregions 2017 attribute service',
    url: 'https://data-gis.unep-wcmc.org/server/rest/services/Bio-geographicalRegions/Resolve_Ecoregions/MapServer',
  },
];
/* Legacy synchronous enrichment composer retained only for removal-history context.
const enrichmentSections = (
  enrichment: EcologicalEnrichment | undefined,
  related: readonly EcoregionRelatedEntity[],
): readonly ProfileSectionViewModel[] => {
  if (!enrichment) return [];
  const climate = enrichment.climate;
  const climateValue = climate
    ? [
        climate.value.character,
        climate.value.annualPrecipitationMm
          ? `${climate.value.annualPrecipitationMm.min}–${climate.value.annualPrecipitationMm.max} mm annual precipitation`
          : '',
        climate.value.temperatureC
          ? `${climate.value.temperatureC.min}–${climate.value.temperatureC.max} °C`
          : '',
      ]
        .filter(Boolean)
        .join('; ')
    : '';
  return [
    ...(enrichment.summary
      ? [
          {
            kind: 'markdown' as const,
            id: 'summary',
            title: 'Overview',
            markdown: enrichment.summary.value,
          },
        ]
      : []),
    {
      kind: 'facts',
      id: 'ecology',
      title: 'Ecological character',
      facts: [
        ...listFact('landscape', 'Landscape', enrichment.landscape),
        ...(climate
          ? [{ id: 'climate', label: 'Climate', value: climateValue, sourceIds: climate.sourceIds }]
          : []),
        ...listFact('vegetation', 'Vegetation', enrichment.vegetation),
        ...listFact('processes', 'Ecological processes', enrichment.ecologicalProcesses),
        ...(enrichment.conservationContext
          ? [
              {
                id: 'conservation',
                label: 'Conservation context',
                value: enrichment.conservationContext.value,
                sourceIds: enrichment.conservationContext.sourceIds,
              },
            ]
          : []),
      ],
    },
    ...(related.length
      ? [
          {
            kind: 'related-entities' as const,
            id: 'ecological-references',
            title: 'Characteristic species and countries',
            items: related.map((entity) => ({
              id: entity.id,
              title: entity.title,
              subtitle: entity.subtitle,
              description: entity.description,
            })),
          },
        ]
      : []),
    {
      kind: 'sources',
      id: 'enrichment-sources',
      title: 'Enrichment sources',
      sources: sourceReferences(enrichment.sources),
    },
  ];
};
*/
const realmById = new Map(generatedRealms.map((record) => [record.id, record]));
const subrealmById = new Map(generatedSubrealms.map((record) => [record.id, record]));
const bioregionById = new Map(generatedBioregions.map((record) => [record.id, record]));
const titleValues = (ids: readonly string[], records: ReadonlyMap<string, { title: string }>) =>
  ids.flatMap((id) => {
    const record = records.get(id);
    return record ? [{ id: id.slice(id.indexOf(':') + 1), label: record.title }] : [];
  });

const entries: readonly EcoregionEntry[] = generatedEcoregions.map((record) => ({
  id: record.id,
  title: record.title,
  parentGroupIds: record.parentBioregionIds,
  facts: {
    externalId: record.externalId,
    realmIds: record.realmIds,
    subrealmIds: record.subrealmIds,
    bioregionIds: record.parentBioregionIds,
    biomeId: record.biomeId,
    biomeTitle: record.biomeTitle,
  },
  aliases: [`Ecoregion ${record.externalId}`],
  tags: [record.biomeTitle],
  sources: sources.slice(0, 2),
  status: record.status,
}));
const groups = [
  { id: 'earth', title: 'Earth', parentGroupId: null },
  ...generatedRealms.map((record) => ({ ...record, parentGroupId: 'earth' })),
  ...generatedSubrealms.map((record) => ({
    id: record.id,
    title: record.title,
    parentGroupId: record.realmId,
  })),
  ...generatedBioregions.map((record) => ({
    id: record.id,
    title: record.title,
    parentGroupId: record.subrealmId,
  })),
];
const dimensions: readonly TaxonomyDimension<EcoregionEntry>[] = [
  {
    id: 'realm',
    label: 'Realm division',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'reject',
    values: (entry) => titleValues(entry.facts.realmIds, realmById),
  },
  {
    id: 'subrealm',
    label: 'Subrealm',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'reject',
    values: (entry) => titleValues(entry.facts.subrealmIds, subrealmById),
  },
  {
    id: 'bioregion',
    label: 'Bioregion',
    cardinality: 'multiple',
    multipleValuePolicy: 'duplicate-instance',
    missingValuePolicy: 'reject',
    values: (entry) => titleValues(entry.facts.bioregionIds, bioregionById),
  },
  {
    id: 'biome',
    label: 'Major biome',
    cardinality: 'single',
    multipleValuePolicy: 'reject',
    missingValuePolicy: 'reject',
    values: (entry) => [{ id: entry.facts.biomeId.slice(6), label: entry.facts.biomeTitle }],
  },
  ...(['climateZone', 'moistureRegime', 'latitudeZone', 'conservationCondition'] as const).map(
    (field) => ({
      id: field.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
      label: field
        .replace(/[A-Z]/g, (letter) => ` ${letter}`)
        .replace(/^./, (letter) => letter.toUpperCase()),
      cardinality: 'single' as const,
      multipleValuePolicy: 'reject' as const,
      missingValuePolicy: 'unknown-bucket' as const,
      values: (entry: EcoregionEntry) => {
        const value = entry.facts[field];
        return value ? [{ id: value, label: value }] : [];
      },
    }),
  ),
];
const biomePalette = [
  '#a66a3f',
  '#b7a57a',
  '#c9aa3f',
  '#cb713c',
  '#74a7bb',
  '#c77b91',
  '#9c4b42',
  '#3f704d',
  '#6c8065',
  '#7da65f',
  '#87934e',
  '#4f9a62',
  '#4f7896',
  '#438582',
] as const;
const biomeTokens = Object.fromEntries(
  [...new Map(generatedEcoregions.map(({ biomeId, biomeTitle }) => [biomeId, biomeTitle]))].map(
    ([id], index) => [`biome-${id.slice(6)}`, biomePalette[index % biomePalette.length]],
  ),
);

export const ecoregionTaxonomy = defineTaxonomy<EcoregionEntry>({
  meta: {
    id: 'one-earth-terrestrial-ecoregions',
    title: 'Terrestrial Ecoregions',
    description: 'The complete structural skeleton of the One Earth Bioregions 2023 framework.',
    schemaVersion: 'taxonomy-module/v1',
    engineVersion: '1',
    datasetVersion: '1.0.0',
  },
  contentProvider: ecoregionContentProvider,
  vocabulary: {
    root: 'Earth',
    group: 'Bioregion',
    groupPlural: 'Bioregions',
    entry: 'Ecoregion',
    entryPlural: 'Ecoregions',
    relatedEntity: 'Ecological reference',
    relatedEntityPlural: 'Ecological references',
  },
  content: {
    about: [
      {
        id: 'framework',
        title: 'Nature’s map of Earth',
        markdown:
          'A complete sparse topology of 844 terrestrial ecoregions nested within the One Earth Bioregions 2023 framework.',
      },
      {
        id: 'scope',
        markdown:
          'Climate, conservation, territory, and descriptive enrichment remain unknown until separately sourced. Geographic polygons are deliberately excluded.',
      },
    ],
    search: { placeholder: 'Search 844 ecoregions and 185 bioregions' },
    emptyStates: {
      noFilterResults: 'No terrestrial ecoregions match the active ecological filters.',
    },
  },
  records: { groups, entries, relatedEntities: [] },
  interpretation: {
    dimensions,
    facets: [
      {
        id: 'biome',
        label: 'Major biome',
        values: (entry) => [{ id: entry.facts.biomeId.slice(6), label: entry.facts.biomeTitle }],
      },
      {
        id: 'realm',
        label: 'Realm division',
        values: (entry) => titleValues(entry.facts.realmIds, realmById),
      },
      {
        id: 'status',
        label: 'Enrichment status',
        values: () => [{ id: 'structural', label: 'Structural record' }],
      },
    ],
    search: {
      documents: (searchEntries, searchRelatedEntities) => [
        ...searchEntries.map((entry) => ({
          id: `entry:${entry.id}`,
          targetType: 'entry' as const,
          targetId: entry.id,
          title: entry.title,
          subtitle: entry.facts.biomeTitle,
          terms: entry.aliases ?? [],
        })),
        ...groups.map((group) => ({
          id: `group:${group.id}`,
          targetType: 'group' as const,
          targetId: group.id,
          title: group.title,
          terms: [],
        })),
        ...searchRelatedEntities.map((entity) => ({
          id: `related:${entity.id}`,
          targetType: 'related-entity' as const,
          targetId: entity.id,
          title: entity.title,
          subtitle: entity.description,
          terms: entity.description ? [entity.description] : [],
        })),
      ],
    },
    profiles: {
      entrySections: (entry) => [
        {
          kind: 'facts',
          id: 'placement',
          title: 'Ecological placement',
          facts: [
            {
              id: 'external-id',
              label: 'One Earth ecoregion ID',
              value: entry.facts.externalId,
              presentation: { variant: 'stamp' },
            },
            {
              id: 'realm',
              label: 'Realm division',
              value: titleValues(entry.facts.realmIds, realmById)
                .map(({ label }) => label)
                .join(', '),
            },
            {
              id: 'subrealm',
              label: 'Subrealm',
              value: titleValues(entry.facts.subrealmIds, subrealmById)
                .map(({ label }) => label)
                .join(', '),
            },
            {
              id: 'bioregion',
              label: 'Bioregion membership',
              value: titleValues(entry.facts.bioregionIds, bioregionById)
                .map(({ label }) => label)
                .join(', '),
            },
            {
              id: 'biome',
              label: 'Major biome',
              value: entry.facts.biomeTitle,
              presentation: {
                variant: 'highlight',
                tone: `biome-${entry.facts.biomeId.slice(6)}`,
              },
            },
          ],
        },
        { kind: 'sources', id: 'sources', title: 'Sources', sources: entry.sources ?? [] },
      ],
      groupSections: () => [],
    },
    projection: {
      kind: 'dimensional',
      defaultRingOrder: ['realm', 'subrealm', 'bioregion'],
      allowedDimensionIds: dimensions.map(({ id }) => id),
      structureMode: 'hybrid',
      maximumRingCount: 4,
      maximumProjectedInstances: 5000,
      emptyBranchPolicy: 'hide',
    },
  },
  presentation: {
    dashboard: {
      targetKinds: ['entry', 'related-entity'],
      actionLabel: 'Open ecological atlas',
      sections: [
        {
          id: 'ecoregion-overview',
          layout: 'split',
          widgets: [
            { id: 'profile', kind: 'profile' },
            {
              id: 'landscape-impression',
              kind: 'media',
              title: 'Landscape impression',
              fallback: {
                alt: 'Illustrated landscape impression not yet available for this ecoregion.',
                caption:
                  'Interpretive field-atlas artwork will appear here after source, credit, and licence review.',
                role: 'interpretive',
                aspectRatio: '10:13',
              },
            },
          ],
        },
        {
          id: 'living-composition',
          layout: 'single',
          widgets: [
            {
              id: 'living-composition-hierarchy',
              kind: 'hierarchy',
              title: 'Living composition',
              emptyMessage: 'No published living-composition records are available yet.',
            },
          ],
        },
      ],
    },
    layout: {
      radiusPolicy: { kind: 'adaptive', initialRadius: 420, ringGap: 520 },
      labelOrientation: 'radial',
      branchColors: Object.fromEntries(
        Object.keys(biomeTokens).map((token) => [token.slice(6), token]),
      ),
      stationMetrics: {
        root: { width: 116, height: 116, priority: 100, minimumLabelZoom: 0 },
        dimensionValueByDepth: {
          1: { width: 70, height: 70, priority: 90, minimumLabelZoom: 0.12 },
          2: { width: 48, height: 48, priority: 65, minimumLabelZoom: 0.3 },
          3: { width: 32, height: 32, priority: 40, minimumLabelZoom: 0.5 },
        },
        entry: { width: 18, height: 18, priority: 10, minimumLabelZoom: 0.82 },
      },
    },
    theme: {
      id: 'ecological-field-atlas',
      texture: 'none',
      tokens: {
        ink: '#203128',
        deepInk: '#0e1913',
        olive: '#2d4635',
        oliveLight: '#607668',
        paper: '#dce2cf',
        paperLight: '#f4f6e9',
        paperDark: '#aebba5',
        brass: '#9b7c3c',
        amber: '#b56b3f',
        yellow: '#b39a3d',
        teal: '#3e8078',
        oxblood: '#8b4b45',
        green: '#4f7650',
        blue: '#426d83',
      },
      visualTokens: {
        ...biomeTokens,
        'route-0': '#b56b3f',
        'route-1': '#b39a3d',
        'route-2': '#3e8078',
        'route-3': '#8b4b45',
        'route-4': '#4f7650',
        'route-5': '#426d83',
        'route-6': '#806c9d',
        'route-7': '#9b7c3c',
      },
      typography: {
        display: { family: 'Georgia', fallbacks: ['serif'], weight: 700 },
        interface: { family: 'Arial Narrow', fallbacks: ['Arial', 'sans-serif'], weight: 700 },
        annotation: { family: 'Arial', fallbacks: ['sans-serif'], weight: 500 },
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
      subtitle: entry.facts.biomeTitle,
      badges: [],
    }),
    relatedEntityTile: (entity) => ({ id: entity.id, title: entity.title, badges: [] }),
  },
});
