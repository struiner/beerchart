import atlasDocument from '../../../assets/beer-taxonomy-icon-atlas.json';
import { BeerTaxonomyEntry, BeerFilterOption } from './beer-taxonomy-entry';
export interface AtlasSprite {
  readonly id: string;
  readonly name: string;
  readonly sheetId: string;
  readonly frame: {
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
  };
  readonly grid: { readonly row: number; readonly column: number; readonly index: number };
  readonly contextUsage?: { readonly description?: string };
}
export interface EntryIndicator {
  readonly sprite: AtlasSprite;
  readonly title: string;
}
const sprites = atlasDocument.sprites as readonly AtlasSprite[];
const byId = new Map(sprites.map((sprite) => [sprite.id, sprite]));
const add = (items: EntryIndicator[], id: string, title: string) => {
  const sprite = byId.get(id);
  if (sprite && !items.some((item) => item.sprite.id === id)) items.push({ sprite, title });
};
const intensity = (value: string, low: string, high: string, fallback: string) =>
  ['none', 'very-low', 'low', 'medium-low'].includes(value)
    ? low
    : ['medium-high', 'high', 'very-high', 'intense'].includes(value)
      ? high
      : fallback;
export function spriteById(id: string) {
  return byId.get(id);
}
export function indicatorsForEntry(entry: BeerTaxonomyEntry): readonly EntryIndicator[] {
  const items: EntryIndicator[] = [];
  add(
    items,
    `family.${entry.fermentationFamily}`,
    `Fermentation family: ${entry.fermentationFamily}`,
  );
  entry.core.color.value.descriptors
    .slice(0, 1)
    .forEach((value) => add(items, `color.${value}`, `Beer color: ${value.replaceAll('-', ' ')}`));
  add(
    items,
    `strength.${entry.core.strength.value.band}`,
    `Strength: ${entry.core.strength.value.band.replaceAll('-', ' ')}`,
  );
  const bitterness = entry.core.bitterness.value.perceived ?? 'variable';
  add(
    items,
    intensity(bitterness, 'bitterness.low', 'bitterness.high', 'axis.bitterness'),
    `Bitterness: ${bitterness.replaceAll('-', ' ')}`,
  );
  entry.core.grain.value
    .filter((value) => value.primary)
    .slice(0, 1)
    .forEach((value) => add(items, `grain.${value.grain}`, `Primary grain: ${value.grain}`));
  entry.fermentationMethod.value
    .slice(0, 1)
    .forEach((value) =>
      add(
        items,
        `fermentation-method.${value}`,
        `Fermentation method: ${value.replaceAll('-', ' ')}`,
      ),
    );
  entry.core.dominantCharacter.value
    .slice(0, 1)
    .forEach((value) =>
      add(items, `character.${value}`, `Dominant character: ${value.replaceAll('-', ' ')}`),
    );
  entry.core.maturationMethod.value
    .slice(0, 1)
    .forEach((value) =>
      add(items, `maturation.${value}`, `Maturation: ${value.replaceAll('-', ' ')}`),
    );
  return items;
}
export function indicatorForFilter(option?: BeerFilterOption): EntryIndicator | undefined {
  if (!option) return undefined;
  let id: string | undefined;
  switch (option.kind) {
    case 'family':
      id = `family.${option.value}`;
      break;
    case 'color':
      id = `color.${option.value}`;
      break;
    case 'strength':
      id = `strength.${option.value}`;
      break;
    case 'bitterness':
      id = intensity(option.value, 'bitterness.low', 'bitterness.high', 'axis.bitterness');
      break;
    case 'grain':
      id = `grain.${option.value}`;
      break;
    case 'fermentation':
      id = `fermentation-culture.${option.value}`;
      break;
    case 'acidity':
      id =
        option.value === 'none'
          ? 'acidity.none'
          : ['high', 'very-high', 'intense'].includes(option.value)
            ? 'acidity.sour'
            : 'acidity.tart';
      break;
    case 'character':
      id = `character.${option.value}`;
      break;
    case 'maturation':
      id = `maturation.${option.value}`;
      break;
    case 'glassware':
      id = `glassware.${option.value}`;
      break;
    case 'ingredient':
      id = byId.has(`grain.${option.value}`)
        ? `grain.${option.value}`
        : `ingredient.${option.value}`;
      break;
    case 'origin':
      id = 'taxonomy.placement';
      break;
    case 'brand-country':
      id = 'taxonomy.placement';
      break;
    case 'tag':
      id = byId.has(option.value) ? option.value : undefined;
      break;
  }
  const sprite = id ? byId.get(id) : undefined;
  return sprite ? { sprite, title: `${option.label} (${option.kind})` } : undefined;
}
