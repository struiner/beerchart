import { TaxonomyNode } from './taxonomy.model';
import { BeerTaxonomyEntry, DurationRange, NumericRange } from './data/beer-taxonomy-entry';
export type FactIcon =
  'color' | 'glass' | 'fermentation' | 'ingredients' | 'conditioning' | 'description';
export interface BeerFact {
  icon: FactIcon;
  label: string;
  value: string;
}
export interface BeerProfile {
  description: string;
  facts: BeerFact[];
}
const numericRange = (value: NumericRange | DurationRange | undefined) =>
  value
    ? `${[value.min, value.max].filter((item) => item !== undefined).join(value.min !== undefined && value.max !== undefined ? '–' : '')} ${value.unit}`
    : 'range not specified';
const words = (values: readonly string[]) =>
  values.map((value) => value.replaceAll('-', ' ')).join(', ') || 'unknown';
export function profileFromEntry(entry: BeerTaxonomyEntry): BeerProfile {
  const color = entry.core.color.value;
  const description = entry.description || 'No concise distinguishing description is available.';
  return {
    description,
    facts: [
      {
        icon: 'color',
        label: `Beer color · ${entry.core.color.status}`,
        value: `${words(color.descriptors)}${color.srm ? ` · ${numericRange(color.srm)}` : ''}${color.ebc ? ` · ${numericRange(color.ebc)}` : ''}`,
      },
      {
        icon: 'glass',
        label: `Common glassware · ${entry.preferredGlassware.status}`,
        value: words(entry.preferredGlassware.value),
      },
      {
        icon: 'fermentation',
        label: `Fermentation method · ${entry.fermentationMethod.status}`,
        value: words(entry.fermentationMethod.value),
      },
      {
        icon: 'ingredients',
        label: `Defining ingredients · ${entry.ingredients.status}`,
        value: entry.ingredients.value.map((item) => item.name).join(', ') || 'unknown',
      },
      {
        icon: 'conditioning',
        label: `Conditioning or maturation · ${entry.age.status}`,
        value: entry.age.value.typicalDuration
          ? `${entry.age.value.band} · ${numericRange(entry.age.value.typicalDuration)}`
          : entry.age.value.band,
      },
      { icon: 'description', label: 'Distinguishing character', value: description },
    ],
  };
}
const has = (name: string, terms: string[]) => terms.some((term) => name.includes(term));
export function profileFor(node: TaxonomyNode): BeerProfile {
  const name = node.title.toLowerCase(),
    variable = has(name, [
      'specialty',
      'experimental',
      'historical',
      'other ',
      'wild beer',
      'session beer',
      'field beer',
      'gluten-free',
      'non-alcohol',
      'fruit beer',
      'smoke beer',
    ]);
  let color = 'gold to amber';
  if (variable) color = 'varies with base style';
  else if (has(name, ['black ale', 'stout', 'imperial porter', 'dessert']))
    color = 'very dark to black';
  else if (
    has(name, ['dark', 'dunkel', 'schwarz', 'brown', 'porter', 'dubbel', 'quadrupel', 'old ale'])
  )
    color = 'brown to very dark';
  else if (
    has(name, [
      'amber',
      'red ale',
      'bitter',
      'scotch',
      'altbier',
      'maerzen',
      'oktoberfest',
      'vienna',
      'barley wine',
      'kuit',
    ])
  )
    color = 'amber to copper';
  else if (
    has(name, [
      'pale',
      'blonde',
      'golden',
      'pilsener',
      'helles',
      'koelsch',
      'summer',
      'wheat',
      'weizen',
      'witbier',
      'weisse',
      'saison',
      'tripel',
      'lambic',
      'gueuze',
      'gose',
      'rice lager',
      'light lager',
    ])
  )
    color = 'straw to gold';
  let glass = 'tulip';
  if (has(name, ['weizen', 'wheat beer', 'witbier', 'weisse'])) glass = 'weizen glass';
  else if (name.includes('koelsch')) glass = 'stange';
  else if (
    has(name, [
      'imperial',
      'barley wine',
      'eisbock',
      'doppelbock',
      'quadrupel',
      'old ale',
      'strong dark',
      'dessert',
    ])
  )
    glass = 'snifter';
  else if (
    node.family === 'lager' ||
    has(name, ['pilsener', 'helles', 'lager', 'kellerbier', 'zwickelbier', 'california common'])
  )
    glass = 'pilsner glass or mug';
  else if (
    has(name, [
      'bitter',
      'mild',
      'brown ale',
      'porter',
      'stout',
      'scottish',
      'scotch ale',
      'cream ale',
    ])
  )
    glass = 'nonic pint';
  let fermentation =
    node.family === 'ale'
      ? 'top-fermented'
      : node.family === 'lager'
        ? 'bottom-fermented'
        : 'varies with base style';
  if (has(name, ['lambic', 'gueuze', 'spontaneous'])) fermentation = 'spontaneous culture';
  else if (has(name, ['mixed-culture', 'wild beer'])) fermentation = 'mixed culture';
  else if (name.includes('brett')) fermentation = 'Brettanomyces-led';
  else if (has(name, ['gose', 'berliner', 'sour'])) fermentation = 'ale plus souring culture';
  else if (name.includes('california common')) fermentation = 'lager yeast, warm-fermented';
  let ingredients = 'malted grain · hops';
  if (has(name, ['lambic', 'gueuze'])) ingredients = 'barley · wheat · aged hops';
  else if (name.includes('gose')) ingredients = 'wheat · salt · coriander';
  else if (name.includes('witbier')) ingredients = 'wheat · spice · citrus peel';
  else if (has(name, ['weizen', 'wheat beer', 'weisse']))
    ingredients = 'wheat malt · barley · hops';
  else if (name.includes('rye')) ingredients = 'rye · barley · hops';
  else if (name.includes('oatmeal')) ingredients = 'oats · roasted malt';
  else if (name.includes('rice lager')) ingredients = 'rice · barley · hops';
  else if (name.includes('honey')) ingredients = 'honey · malt · hops';
  else if (name.includes('fruit')) ingredients = 'fruit · base beer ingredients';
  else if (name.includes('pumpkin')) ingredients = 'pumpkin or squash · optional spice';
  else if (has(name, ['chocolate', 'cocoa', 'coffee', 'chili']))
    ingredients = 'named addition · base beer';
  else if (has(name, ['rauch', 'smoke'])) ingredients = 'smoked malt · hops';
  else if (has(name, ['stout', 'porter', 'black ale'])) ingredients = 'roasted or dark malt · hops';
  else if (has(name, ['india pale', 'hoppy', 'fresh hop', 'pale ale', 'pilsener']))
    ingredients = 'pale malt · expressive hops';
  let conditioning = node.family === 'lager' ? 'cold-conditioned' : 'standard conditioning';
  if (
    has(name, [
      'aged beer',
      'wood- and barrel',
      'old ale',
      'barley wine',
      'wheat wine',
      'lambic',
      'gueuze',
      'bière de garde',
      'adambier',
      'eisbock',
      'doppelbock',
      'quadrupel',
    ])
  )
    conditioning = 'extended maturation';
  else if (has(name, ['brett', 'wild beer', 'sour', 'flanders']))
    conditioning = 'maturation varies';
  else if (has(name, ['india pale', 'hoppy', 'fresh hop', 'summer ale']))
    conditioning = 'best presented fresh';
  let description = 'Defined by its regional style balance and fermentation profile.';
  if (variable)
    description = 'A variable category whose base style determines most sensory ranges.';
  if (has(name, ['session', 'light', 'leicht', 'table beer']))
    description = 'Lower-strength interpretation designed around drinkability.';
  if (
    has(name, [
      'imperial',
      'double india',
      'barley wine',
      'quadrupel',
      'eisbock',
      'doppelbock',
      'strong ale',
    ])
  )
    description = 'High-strength interpretation with concentrated malt or hop character.';
  if (has(name, ['india pale', 'hoppy', 'fresh hop']))
    description = 'Hop-forward style distinguished by aroma, flavor, and bitterness.';
  if (has(name, ['juicy', 'hazy']))
    description = 'Hop-forward and intentionally hazy, with a rounder perceived mouthfeel.';
  if (has(name, ['stout', 'porter', 'black ale']))
    description = 'Dark-malt style distinguished by roast, chocolate, or coffee-like notes.';
  if (has(name, ['lambic', 'gueuze', 'spontaneous']))
    description = 'Spontaneously fermented Belgian tradition with acidity and mature complexity.';
  if (has(name, ['sour', 'gose', 'berliner', 'flanders']))
    description = "Acidity is a defining part of the finished beer's balance.";
  if (has(name, ['rauch', 'smoke']))
    description = 'Smoke-derived aroma and flavor distinguish the underlying beer style.';
  if (
    has(name, [
      'fruit',
      'pumpkin',
      'chocolate',
      'cocoa',
      'coffee',
      'chili',
      'herb and spice',
      'honey',
    ])
  )
    description = 'The named addition must remain recognizable within the base beer.';
  return {
    description,
    facts: [
      { icon: 'color', label: 'Beer color', value: color },
      { icon: 'glass', label: 'Common glassware', value: glass },
      { icon: 'fermentation', label: 'Fermentation method', value: fermentation },
      { icon: 'ingredients', label: 'Defining ingredients', value: ingredients },
      { icon: 'conditioning', label: 'Conditioning or maturation', value: conditioning },
      { icon: 'description', label: 'Distinguishing character', value: description },
    ],
  };
}
