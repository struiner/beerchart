import {
  BeerTaxonomyEntry,
  BeerFilterOption,
  FilterValueKind,
  RingSeparation,
  RingSeparationAxis,
  RingSeparationOption,
} from './beer-taxonomy-entry';
import { TaxonomyDocument, TaxonomyNode } from '../taxonomy.model';
import { brandCountriesForEntry } from './brand-data';

export const RING_OPTIONS: readonly RingSeparationOption[] = [
  {
    value: 'taxonomy-family',
    label: 'Fermentation family',
    description: 'Ale, lager, or mixed classification',
  },
  {
    value: 'origin',
    label: 'Geographic origin',
    description: 'Published country, region, or cultural area',
  },
  { value: 'color', label: 'Beer color', description: 'Documented color descriptors' },
  { value: 'strength', label: 'Strength', description: 'Alcohol-strength band' },
  { value: 'bitterness', label: 'Bitterness', description: 'Perceived bitterness intensity' },
  { value: 'grain', label: 'Grain', description: 'Documented grain composition' },
  {
    value: 'fermentation-culture',
    label: 'Fermentation culture',
    description: 'Yeast, bacteria, mixed, or spontaneous culture',
  },
  { value: 'acidity', label: 'Acidity', description: 'Perceived acidity intensity' },
  {
    value: 'dominant-character',
    label: 'Dominant character',
    description: 'Primary sensory direction',
  },
  {
    value: 'maturation-method',
    label: 'Maturation method',
    description: 'Conditioning or maturation process',
  },
];
export const DEFAULT_RINGS: RingSeparation = {
  first: 'taxonomy-family',
  second: 'origin',
  third: 'dominant-character',
};
export const FILTER_TAG_OPTIONS: readonly string[] = [
  'documented',
  'derived',
  'disputed',
  'unknown',
  'variable',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
  'beer',
  'ale',
  'lager',
  'category',
  'style',
  'fermentation-method',
  'open-string',
  'mixed',
  'root',
  'city',
  'region',
  'country',
  'cultural-area',
  'multiple',
  'exact',
  'approximate',
  'century',
  'traditional',
  'unknown',
  'top-fermented',
  'bottom-fermented',
  'warm-fermented-lager-yeast',
  'mixed-fermentation',
  'spontaneous-fermentation',
  'sequential-fermentation',
  'refermented',
  'nonic-pint',
  'shaker-pint',
  'tulip',
  'snifter',
  'goblet',
  'pilsner-glass',
  'mug',
  'stange',
  'weizen-glass',
  'flute',
  'tasting-glass',
  'barley',
  'wheat',
  'rye',
  'oats',
  'rice',
  'maize',
  'sorghum',
  'malted',
  'unmalted',
  'flaked',
  'roasted',
  'smoked',
  'grain',
  'malt',
  'hop',
  'yeast',
  'bacteria',
  'fruit',
  'herb',
  'spice',
  'sugar',
  'water',
  'other',
  'very-light',
  'straw',
  'pale',
  'gold',
  'amber',
  'copper',
  'brown',
  'very-dark',
  'black',
  'low',
  'medium-low',
  'medium',
  'medium-high',
  'high',
  'very-high',
  'intense',
  'none',
  'session',
  'standard',
  'strong',
  'very-strong',
  'non-alcoholic',
  'saccharomyces-ale',
  'saccharomyces-lager',
  'brettanomyces',
  'lactic-bacteria',
  'mixed-culture',
  'spontaneous-culture',
  'balanced',
  'malt-led',
  'hop-led',
  'yeast-led',
  'acidity-led',
  'roast-led',
  'smoke-led',
  'fruit-led',
  'spice-led',
  'wood-led',
  'addition-led',
  'fresh',
  'warm-conditioned',
  'cold-conditioned',
  'bottle-conditioned',
  'cask-conditioned',
  'tank-conditioned',
  'wood-matured',
  'barrel-aged',
  'blended-age',
  'brief',
  'extended',
  'vintage',
  'focused',
  'layered',
  'fermentation-complex',
  'maturation-complex',
  'brilliant',
  'clear',
  'hazy',
  'cloudy',
  'opaque',
  'still',
  'moderate',
  'effervescent',
  '°p',
  'srm',
  'ebc',
  'ibu',
  'sg',
  'ph',
  'g/l',
  'vol co2',
  'self-contained',
  'variation',
  'open-speciality',
  'blend',
  'lucide',
  'asset',
  'text',
  'color',
  'glassware',
  'fermentation',
  'ingredients',
  'age',
  'taxonomy-family',
  'origin',
  'brand-country',
  'bitterness',
  'strength',
  'fermentation-culture',
  'acidity',
  'dominant-character',
  'maturation-method',
  'tag',
].sort((a, b) => a.localeCompare(b));
const clean = (value: string) =>
  value.replaceAll('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase());
const nodeFamily = (family: BeerTaxonomyEntry['fermentationFamily']): TaxonomyNode['family'] =>
  family === 'mixed' ? 'hybrid' : family;
export function axisValues(entry: BeerTaxonomyEntry, axis: RingSeparationAxis): string[] {
  switch (axis) {
    case 'taxonomy-family':
      return [entry.fermentationFamily];
    case 'origin':
      return entry.originLocations.value.map((value) => value.name);
    case 'color':
      return [...entry.core.color.value.descriptors];
    case 'strength':
      return [entry.core.strength.value.band];
    case 'bitterness':
      return [entry.core.bitterness.value.perceived ?? 'unknown'];
    case 'grain':
      return entry.core.grain.value.map((value) => value.grain);
    case 'fermentation-culture':
      return [...entry.core.fermentationCulture.value];
    case 'acidity':
      return [entry.core.acidity.value.perceived];
    case 'dominant-character':
      return [...entry.core.dominantCharacter.value];
    case 'maturation-method':
      return [...entry.core.maturationMethod.value];
  }
}
const primary = (entry: BeerTaxonomyEntry, axis: RingSeparationAxis) =>
  axisValues(entry, axis)[0] ?? 'unknown';
const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
export function createTaxonomyDocument(
  entries: readonly BeerTaxonomyEntry[],
  rings: RingSeparation,
): TaxonomyDocument {
  const nodes: TaxonomyNode[] = [
    {
      id: 'beer',
      parentId: null,
      title: 'Beer',
      type: 'root',
      order: 0,
      family: 'root',
      description: 'All styles arranged by three selectable classification rings.',
    },
  ];
  const axes = [rings.first, rings.second, rings.third];
  let parents = new Map<string, BeerTaxonomyEntry[]>([['beer', [...entries]]]);
  axes.forEach((axis, depth) => {
    const next = new Map<string, BeerTaxonomyEntry[]>();
    for (const [parentId, parentEntries] of parents) {
      const buckets = new Map<string, BeerTaxonomyEntry[]>();
      for (const entry of parentEntries) {
        const value = primary(entry, axis);
        buckets.set(value, [...(buckets.get(value) ?? []), entry]);
      }
      [...buckets.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([value, bucket], order) => {
          const id = `ring-${depth + 1}:${parentId}:${slug(value)}`;
          nodes.push({
            id,
            parentId,
            title: clean(value),
            type: 'category',
            order,
            family: nodeFamily(bucket[0]?.fermentationFamily ?? 'mixed'),
          });
          next.set(id, bucket);
        });
    }
    parents = next;
  });
  for (const [parentId, parentEntries] of parents)
    parentEntries
      .sort((a, b) => a.title.localeCompare(b.title))
      .forEach((entry, order) =>
        nodes.push({
          id: entry.id,
          parentId,
          title: entry.title,
          type: 'style',
          order,
          family: entry.fermentationFamily === 'mixed' ? 'hybrid' : entry.fermentationFamily,
          description: entry.description,
        }),
      );
  return {
    schemaVersion: 1,
    classification: `168 styles · ${axes.map((axis) => RING_OPTIONS.find((option) => option.value === axis)?.label).join(' › ')}`,
    updated: '2026-08-26',
    nodes,
  };
}
export function createFilterOptions(entries: readonly BeerTaxonomyEntry[]): BeerFilterOption[] {
  const counts = new Map<string, { kind: FilterValueKind; value: string; count: number }>();
  const add = (kind: FilterValueKind, value: string) => {
    const id = `${kind}:${value}`;
    const found = counts.get(id);
    counts.set(id, { kind, value, count: (found?.count ?? 0) + 1 });
  };
  for (const entry of entries) {
    add('family', entry.fermentationFamily);
    entry.originLocations.value.forEach((value) => add('origin', value.name));
    brandCountriesForEntry(entry.id).forEach((country) => add('brand-country', country.name));
    entry.core.color.value.descriptors.forEach((value) => add('color', value));
    add('strength', entry.core.strength.value.band);
    add('bitterness', entry.core.bitterness.value.perceived ?? 'unknown');
    entry.core.grain.value.forEach((value) => add('grain', value.grain));
    entry.core.fermentationCulture.value.forEach((value) => add('fermentation', value));
    add('acidity', entry.core.acidity.value.perceived);
    entry.core.dominantCharacter.value.forEach((value) => add('character', value));
    entry.core.maturationMethod.value.forEach((value) => add('maturation', value));
    entry.preferredGlassware.value.forEach((value) => add('glassware', value));
    entry.ingredients.value.forEach((value) => add('ingredient', value.name));
    entry.tags?.forEach((value) => add('tag', value));
  }
  return [...counts.entries()]
    .map(([id, item]) => ({ id, ...item, label: clean(item.value) }))
    .sort((a, b) => a.kind.localeCompare(b.kind) || a.label.localeCompare(b.label));
}
export function entryFilterIds(entry: BeerTaxonomyEntry): Set<string> {
  const ids = new Set<string>();
  const add = (kind: FilterValueKind, value: string) => ids.add(`${kind}:${value}`);
  add('family', entry.fermentationFamily);
  entry.originLocations.value.forEach((v) => add('origin', v.name));
  brandCountriesForEntry(entry.id).forEach((country) => add('brand-country', country.name));
  entry.core.color.value.descriptors.forEach((v) => add('color', v));
  add('strength', entry.core.strength.value.band);
  add('bitterness', entry.core.bitterness.value.perceived ?? 'unknown');
  entry.core.grain.value.forEach((v) => add('grain', v.grain));
  entry.core.fermentationCulture.value.forEach((v) => add('fermentation', v));
  add('acidity', entry.core.acidity.value.perceived);
  entry.core.dominantCharacter.value.forEach((v) => add('character', v));
  entry.core.maturationMethod.value.forEach((v) => add('maturation', v));
  entry.preferredGlassware.value.forEach((v) => add('glassware', v));
  entry.ingredients.value.forEach((v) => add('ingredient', v.name));
  entry.tags?.forEach((v) => add('tag', v));
  return ids;
}
