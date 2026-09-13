import { BeerTaxonomyEntry, RingSeparationAxis } from './contracts/beer-entry';
import { beerBrands, BeerBrand } from './data/brands';
import { beerTaxonomyEntries } from './data/entries';
import { axisValues, entryFilterIds, RING_OPTIONS } from './interpretation/beer-interpretation';
import { AtlasSprite, indicatorsForEntry, spriteById } from './presentation/beer-icons';
import { beerPersistence } from './persistence/beer-persistence';
import { beerCountryRelations } from './relations/country-relations';
import {
  defineTaxonomy,
  RelatedEntity,
  ResolvedIcon,
  TaxonomyDimension,
  TaxonomyEntry,
} from '../../taxonomy/public-api';

/** Domain wrapper interpreted only inside the beer dataset module. */
export interface BeerModuleEntry extends TaxonomyEntry<BeerTaxonomyEntry> {
  readonly schemaVersion: 'taxonomy-entry/v1';
}

export interface BeerModuleBrand extends RelatedEntity {
  readonly source: BeerBrand;
}

const titleCase = (value: string) =>
  value.replaceAll('-', ' ').replace(/\b\w/g, (character) => character.toUpperCase());

const CORE_ROW_BOUNDARIES = [0, 159, 311, 458, 604, 746, 884, 1014, 1128, 1254] as const;
const PROPERTY_ROW_OFFSETS = [0, 0, 8, 0, -8, 0, 0, 0, 0, 0] as const;
const semanticVerticalOffset = (id: string) =>
  /^(family|fermentation-method|bitterness)\./.test(id)
    ? 6
    : id === 'axis.bitterness'
      ? 3
      : /^(character|maturation)\./.test(id)
        ? -6
        : 0;
const semanticHeightAdjustment = (id: string) =>
  id.startsWith('fermentation-method.')
    ? 2
    : id.startsWith('bitterness.')
      ? -5
      : id === 'axis.bitterness'
        ? -3
        : id === 'strength.very-strong'
          ? -2
          : id === 'character.balanced'
            ? -1
            : 0;
const semanticWidthAdjustment = (id: string) => (id === 'fermentation-method.variable' ? -2 : 0);
const normalizedFrame = (sprite: AtlasSprite) => {
  let frame: { x: number; y: number; width: number; height: number };
  if (sprite.sheetId === 'beer-taxonomy-icons-core') {
    const top = CORE_ROW_BOUNDARIES[sprite.grid.row - 1] ?? sprite.frame.y;
    const bottom = CORE_ROW_BOUNDARIES[sprite.grid.row] ?? sprite.frame.y + sprite.frame.h;
    frame = { x: sprite.frame.x, y: top, width: sprite.frame.w, height: bottom - top };
  } else {
    const yOffset = PROPERTY_ROW_OFFSETS[sprite.grid.row] ?? 0;
    frame = {
      x: sprite.frame.x,
      y: Math.max(0, sprite.frame.y + yOffset),
      width: sprite.frame.w,
      height: sprite.frame.h,
    };
  }
  const height = Math.max(1, frame.height + semanticHeightAdjustment(sprite.id));
  const width = Math.max(1, frame.width + semanticWidthAdjustment(sprite.id));
  return {
    ...frame,
    width,
    height,
    y: Math.max(0, Math.min(1254 - height, frame.y + semanticVerticalOffset(sprite.id))),
  };
};

const resolvedSprite = (sprite: AtlasSprite, accessibleLabel: string): ResolvedIcon => ({
  kind: 'sprite',
  value: `/datasets/beer/${
    sprite.sheetId === 'beer-taxonomy-icons-core'
      ? 'beer-taxonomy-icons-core.png'
      : 'beer-taxonomy-icons-properties.png'
  }`,
  accessibleLabel,
  frame: normalizedFrame(sprite),
  sourceSize: { width: 1254, height: 1254 },
});
const resolvedSpriteById = (id: string | undefined, accessibleLabel: string) => {
  const sprite = id ? spriteById(id) : undefined;
  return sprite ? resolvedSprite(sprite, accessibleLabel) : undefined;
};

const entries: readonly BeerModuleEntry[] = beerTaxonomyEntries.map((entry: BeerTaxonomyEntry) => ({
  schemaVersion: 'taxonomy-entry/v1',
  id: entry.id,
  title: entry.title,
  description: entry.description,
  parentGroupIds: [entry.fermentationFamily],
  facts: entry,
  aliases: entry.taxonomy.aliases,
  tags: entry.tags,
  status: entry.core.fermentationCulture.status,
}));

const relatedEntities: readonly BeerModuleBrand[] = beerBrands.map((brand) => ({
  id: brand.id,
  title: brand.name,
  linkedEntryIds: brand.taxonomyEntryIds,
  description: brand.description,
  url: brand.websiteUrl,
  source: brand,
}));

const dimensions: readonly TaxonomyDimension<BeerModuleEntry>[] = RING_OPTIONS.map((option) => ({
  id: option.value,
  label: option.label,
  description: option.description,
  cardinality: option.value === 'taxonomy-family' ? 'single' : 'multiple',
  multipleValuePolicy: 'primary',
  missingValuePolicy: 'unknown-bucket',
  values: (entry) =>
    axisValues(entry.facts, option.value as RingSeparationAxis).map((value) => ({
      id: value,
      label: titleCase(value),
    })),
}));

const facetKinds = [
  'family',
  'origin',
  'brand-country',
  'color',
  'strength',
  'bitterness',
  'grain',
  'fermentation',
  'acidity',
  'character',
  'maturation',
  'glassware',
  'ingredient',
  'tag',
] as const;

export const beerTaxonomyModule = defineTaxonomy({
  meta: {
    id: 'brewers-association-2026-circular-taxonomy',
    title: 'Beer Taxonomy: 2026 Brewers Association Styles',
    description: 'A source-aware circular projection of published beer styles.',
    schemaVersion: 'taxonomy-module/v1',
    engineVersion: '1',
    datasetVersion: '1.0.0',
  },
  vocabulary: {
    root: 'Beer',
    group: 'Category',
    groupPlural: 'Categories',
    entry: 'Style',
    entryPlural: 'Styles',
    relatedEntity: 'Brand',
    relatedEntityPlural: 'Brands',
  },
  content: {
    about: [
      {
        id: 'purpose',
        title: 'A better map of beer',
        markdown:
          'Because the internet is riddled with poor diagrams, and we can do better as a species.',
      },
      {
        id: 'classification',
        markdown:
          'Classification membership is not historical descent or similarity of taste. Ale and lager are the primary trunks; mixed, spontaneous, hybrid, and variable fermentation remain a separate published branch.',
      },
    ],
    emptyStates: {
      noFilterResults: 'No beer styles match the active filters.',
      noRelatedEntities: 'No commercial brands are currently linked to this style.',
    },
    search: { placeholder: 'Search styles, categories, or brands' },
    submission: {
      introduction: 'Propose a beer style, category, fermentation method, or related entry.',
      typeSuggestions: ['Beer', 'Ale', 'Lager', 'Category', 'Style', 'Fermentation Method'],
      placementInstructions: 'Choose the closest published location in the beer taxonomy.',
    },
  },
  persistence: beerPersistence,
  crossTaxonomyRelations: beerCountryRelations,
  records: {
    groups: [
      { id: 'beer', title: 'Beer', parentGroupId: null },
      { id: 'ale', title: 'Ale', parentGroupId: 'beer' },
      { id: 'lager', title: 'Lager', parentGroupId: 'beer' },
      { id: 'mixed', title: 'Mixed and variable', parentGroupId: 'beer' },
    ],
    entries,
    relatedEntities,
  },
  interpretation: {
    dimensions,
    facets: facetKinds.map((kind) => ({
      id: kind,
      label: titleCase(kind),
      values: (entry: BeerModuleEntry) =>
        [...entryFilterIds(entry.facts)]
          .filter((id) => id.startsWith(`${kind}:`))
          .map((id) => ({
            id: id.slice(kind.length + 1),
            label: titleCase(id.slice(kind.length + 1)),
          })),
    })),
    search: {
      documents: (
        searchEntries: readonly BeerModuleEntry[],
        brands: readonly BeerModuleBrand[],
      ) => [
        ...searchEntries.map((entry) => ({
          id: `entry:${entry.id}`,
          targetType: 'entry' as const,
          targetId: entry.id,
          title: entry.title,
          terms: [
            ...(entry.aliases ?? []),
            ...(entry.tags ?? []),
            entry.description ?? '',
            ...entry.facts.originLocations.value.flatMap((origin) => [
              origin.name,
              origin.countryCode ?? '',
            ]),
            ...brands
              .filter((brand) => brand.linkedEntryIds.includes(entry.id))
              .flatMap((brand) => [
                brand.title,
                brand.source.country?.name ?? '',
                brand.source.country?.region ?? '',
              ]),
          ],
        })),
        ...brands.map((brand) => ({
          id: `related-entity:${brand.id}`,
          targetType: 'related-entity' as const,
          targetId: brand.id,
          title: brand.title,
          terms: [],
        })),
      ],
    },
    profiles: {
      entrySections: (entry: BeerModuleEntry, brands: readonly BeerModuleBrand[]) => [
        {
          kind: 'markdown' as const,
          id: 'overview',
          title: 'Overview',
          markdown: entry.description ?? '',
        },
        {
          kind: 'facts' as const,
          id: 'characteristics',
          title: 'Characteristics',
          facts: [
            {
              id: 'color',
              label: 'Color',
              value: entry.facts.core.color.value.descriptors.map(titleCase).join(', '),
              icon: resolvedSpriteById(
                `color.${entry.facts.core.color.value.descriptors[0]}`,
                'Beer color',
              ),
            },
            {
              id: 'glassware',
              label: 'Common glassware',
              value: entry.facts.preferredGlassware.value.map(titleCase).join(', '),
              icon: resolvedSpriteById(
                `glassware.${entry.facts.preferredGlassware.value[0]}`,
                'Common glassware',
              ),
            },
            {
              id: 'fermentation',
              label: 'Fermentation',
              value: entry.facts.fermentationMethod.value.map(titleCase).join(', '),
              icon: resolvedSpriteById(
                `fermentation-method.${entry.facts.fermentationMethod.value[0]}`,
                'Fermentation method',
              ),
            },
            {
              id: 'ingredients',
              label: 'Defining ingredients',
              value: entry.facts.ingredients.value.map(({ name }) => name).join(', '),
              icon: resolvedSpriteById(
                `grain.${entry.facts.core.grain.value.find(({ primary }) => primary)?.grain}`,
                'Defining ingredients',
              ),
            },
            {
              id: 'conditioning',
              label: 'Conditioning',
              value: titleCase(entry.facts.age.value.band),
              icon: resolvedSpriteById(
                `maturation.${entry.facts.core.maturationMethod.value[0]}`,
                'Conditioning and maturation',
              ),
            },
            {
              id: 'origin',
              label: 'Origin',
              value: entry.facts.originLocations.value.map(({ name }) => name).join(', '),
              icon: resolvedSpriteById('taxonomy.placement', 'Geographic origin'),
              presentation: { variant: 'stamp' as const, tone: 'oxblood' },
            },
          ],
        },
        {
          kind: 'related-entities' as const,
          id: 'related-entities',
          title: 'Brands',
          items: brands
            .filter((brand) => brand.linkedEntryIds.includes(entry.id))
            .map((brand) => ({ id: brand.id, title: brand.title, description: brand.description })),
        },
        {
          kind: 'sources' as const,
          id: 'sources',
          title: 'Sources',
          sources: entry.facts.sources ?? [],
        },
      ],
    },
    projection: {
      kind: 'dimensional',
      defaultRingOrder: ['taxonomy-family', 'origin', 'dominant-character'],
      allowedDimensionIds: RING_OPTIONS.map(({ value }) => value),
      structureMode: 'dimensions',
      maximumRingCount: 3,
      maximumProjectedInstances: 20_000,
      emptyBranchPolicy: 'hide',
    },
  },
  presentation: {
    theme: {
      id: 'brewers-atlas',
      texture: 'paper-ledger',
      tokens: {
        ink: '#20241d',
        deepInk: '#151914',
        olive: '#293329',
        oliveLight: '#445044',
        paper: '#dfd0ab',
        paperLight: '#f1e8cf',
        paperDark: '#b8a77e',
        brass: '#b8893e',
        amber: '#c6632f',
        yellow: '#d4a72f',
        teal: '#31736e',
        oxblood: '#873e33',
        green: '#526e49',
        blue: '#385f76',
      },
      visualTokens: {
        amber: '#c6632f',
        yellow: '#d4a72f',
        teal: '#31736e',
      },
      typography: {
        display: { family: 'Georgia', fallbacks: ['serif'], weight: 700 },
        interface: {
          family: 'Arial Narrow',
          fallbacks: ['Roboto Condensed', 'Arial', 'sans-serif'],
          weight: 700,
        },
        annotation: { family: 'Arial Narrow', fallbacks: ['Arial', 'sans-serif'], weight: 600 },
      },
      surfaces: {
        application: { background: 'paper', foreground: 'ink', border: 'deepInk' },
        toolbar: { background: 'olive', foreground: 'paperLight', border: 'brass' },
        viewport: { background: 'paper', foreground: 'ink', border: 'paperDark' },
        panel: { background: 'paperLight', foreground: 'ink', border: 'deepInk' },
      },
      geometry: {
        controlRadius: 0,
        panelRadius: 0,
        tileRadius: 0,
        borderWidth: 1,
        focusWidth: 3,
      },
      textures: {
        'paper-ledger': { kind: 'lines', opacity: 0.1, spacing: 28 },
      },
    },
    layout: {
      radiusPolicy: { kind: 'fixed', radii: [520, 1500, 2350, 2850] },
      labelOrientation: 'radial',
      branchColors: { ale: 'amber', lager: 'yellow', mixed: 'teal' },
      stationMetrics: {
        root: { width: 116, height: 116 },
        group: { width: 132, height: 64 },
        dimensionValue: { width: 42, height: 42 },
        dimensionValueByDepth: { 1: { width: 76, height: 76 } },
        entry: { width: 22, height: 22 },
      },
    },
    entryTile: (entry: BeerModuleEntry) => {
      const indicators = indicatorsForEntry(entry.facts);
      const primary = indicators[0];
      return {
        id: entry.id,
        title: entry.title,
        description: entry.description,
        icon: primary ? resolvedSprite(primary.sprite, primary.title) : undefined,
        badges: indicators.slice(1).map((indicator) => ({
          id: indicator.sprite.id,
          label: indicator.title,
          icon: resolvedSprite(indicator.sprite, indicator.title),
        })),
      };
    },
    relatedEntityTile: (brand: BeerModuleBrand) => ({
      id: brand.id,
      title: brand.title,
      description: brand.description,
      badges: [],
    }),
  },
});
