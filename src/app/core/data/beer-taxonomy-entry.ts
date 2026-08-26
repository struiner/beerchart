/**
 * Source-aware data contract for beer styles, categories and taxonomy nodes.
 *
 * The eight high-value classification axes are required under `core`.
 * The remaining 37 classification metrics are optional on the entry itself.
 */

export type EntryId = string;
export type SourceId = string;
export type OpenString<Known extends string> = Known | (string & {});

export interface NumericRange<Unit extends string = string> {
  min?: number;
  max?: number;
  unit: Unit;
}

export interface DurationRange {
  min?: number;
  max?: number;
  unit: "hours" | "days" | "weeks" | "months" | "years";
}

export type FactStatus =
  | "documented"
  | "derived"
  | "variable"
  | "disputed"
  | "unknown";

/** A value plus its evidential state. Unknown values remain explicit. */
export interface BeerFact<T> {
  value: T;
  status: FactStatus;
  sourceIds?: SourceId[];
  note?: string;
}

export interface SourceReference {
  id: SourceId;
  title: string;
  url?: string;
  publisher?: string;
  edition?: string;
  accessedAt?: string;
}

export type BeerEntryType = OpenString<
  | "beer"
  | "ale"
  | "lager"
  | "category"
  | "style"
  | "fermentation-method"
>;

export type FermentationFamily = "ale" | "lager" | "mixed";

export interface TaxonomyPlacement {
  /** Immediate parent, or null for the root Beer node. */
  parentId: EntryId | null;
  /** Stable ancestor IDs, ordered from root to immediate parent. */
  path: EntryId[];
  sortOrder?: number;
  aliases?: string[];
}

export interface OriginLocation {
  name: string;
  kind?: "city" | "region" | "country" | "cultural-area" | "multiple";
  countryCode?: string;
  latitude?: number;
  longitude?: number;
}

export interface EraOfOrigin {
  fromYear?: number;
  toYear?: number;
  label?: string;
  precision?: "exact" | "approximate" | "century" | "traditional" | "unknown";
}

export type Intensity =
  | "none"
  | "very-low"
  | "low"
  | "medium-low"
  | "medium"
  | "medium-high"
  | "high"
  | "very-high"
  | "intense"
  | "variable";

export interface Ingredient {
  name: string;
  category:
    | "grain"
    | "malt"
    | "hop"
    | "yeast"
    | "bacteria"
    | "fruit"
    | "herb"
    | "spice"
    | "sugar"
    | "water"
    | "other";
  defining?: boolean;
  proportionPercent?: NumericRange<"%">;
}

export interface GrainComponent {
  grain: OpenString<"barley" | "wheat" | "rye" | "oats" | "rice" | "maize" | "sorghum">;
  form?: OpenString<"malted" | "unmalted" | "flaked" | "roasted" | "smoked">;
  proportionPercent?: NumericRange<"%">;
  primary?: boolean;
}

export interface ColorProfile {
  descriptors: OpenString<
    | "very-light"
    | "straw"
    | "pale"
    | "gold"
    | "amber"
    | "copper"
    | "brown"
    | "very-dark"
    | "black"
    | "variable"
  >[];
  srm?: NumericRange<"SRM">;
  ebc?: NumericRange<"EBC">;
}

export interface StrengthProfile {
  band: OpenString<"non-alcoholic" | "low" | "session" | "standard" | "strong" | "very-strong" | "variable">;
  abv?: NumericRange<"% ABV">;
}

export interface BitternessProfile {
  perceived?: Intensity;
  ibu?: NumericRange<"IBU">;
}

export type FermentationCulture = OpenString<
  | "saccharomyces-ale"
  | "saccharomyces-lager"
  | "brettanomyces"
  | "lactic-bacteria"
  | "mixed-culture"
  | "spontaneous-culture"
  | "variable"
>;

export interface AcidityProfile {
  perceived: Intensity;
  ph?: NumericRange<"pH">;
  titratableAcidity?: NumericRange<"g/L">;
}

export type DominantCharacter = OpenString<
  | "balanced"
  | "malt-led"
  | "hop-led"
  | "yeast-led"
  | "acidity-led"
  | "roast-led"
  | "smoke-led"
  | "fruit-led"
  | "spice-led"
  | "wood-led"
  | "addition-led"
>;

export type MaturationMethod = OpenString<
  | "fresh"
  | "warm-conditioned"
  | "cold-conditioned"
  | "bottle-conditioned"
  | "cask-conditioned"
  | "tank-conditioned"
  | "wood-matured"
  | "barrel-aged"
  | "blended-age"
  | "variable"
>;

/** The eight required axes used as the principal map filters and interchange lines. */
export interface CoreBeerAxes {
  color: BeerFact<ColorProfile>;
  strength: BeerFact<StrengthProfile>;
  bitterness: BeerFact<BitternessProfile>;
  grain: BeerFact<GrainComponent[]>;
  fermentationCulture: BeerFact<FermentationCulture[]>;
  acidity: BeerFact<AcidityProfile>;
  dominantCharacter: BeerFact<DominantCharacter[]>;
  maturationMethod: BeerFact<MaturationMethod[]>;
}

export type Glassware = OpenString<
  | "nonic-pint"
  | "shaker-pint"
  | "tulip"
  | "snifter"
  | "goblet"
  | "pilsner-glass"
  | "mug"
  | "stange"
  | "weizen-glass"
  | "flute"
  | "tasting-glass"
>;

export type FermentationMethod = OpenString<
  | "top-fermented"
  | "bottom-fermented"
  | "warm-fermented-lager-yeast"
  | "mixed-fermentation"
  | "spontaneous-fermentation"
  | "sequential-fermentation"
  | "refermented"
  | "variable"
>;

export interface AgeProfile {
  band: "fresh" | "brief" | "standard" | "extended" | "vintage" | "variable";
  typicalDuration?: DurationRange;
}

export interface IconReference {
  kind: "lucide" | "asset" | "text";
  value: string;
  alt: string;
}

export type BeerIconCategory =
  | "color"
  | "glassware"
  | "fermentation"
  | "ingredients"
  | "age";

export interface GravityProfile {
  specificGravity?: NumericRange<"SG">;
  plato?: NumericRange<"°P">;
}

export interface CarbonationProfile {
  perceived?: OpenString<"still" | "low" | "moderate" | "high" | "effervescent" | "variable">;
  volumesCo2?: NumericRange<"vol CO₂">;
}

export interface BarrelHistory {
  wood?: string;
  previousContents?: string;
  newWood?: boolean;
  charLevel?: string;
}

export interface BaseStyleRelationship {
  kind: "self-contained" | "variation" | "open-speciality" | "blend" | "variable";
  baseStyleIds?: EntryId[];
}

/**
 * The remaining 37 possible classification metrics.
 * Every property is optional because many published style definitions do not
 * prescribe the corresponding ingredient, process or cultural convention.
 */
export interface OptionalBeerMetrics {
  /** 01 */ yeastFamily?: BeerFact<string[]>;
  /** 02 */ fermentationTemperature?: BeerFact<NumericRange<"°C">>;
  /** 03 */ fermentationProgram?: BeerFact<string[]>;
  /** 04 */ acidificationMethod?: BeerFact<string[]>;

  /** 05 */ maltTreatment?: BeerFact<string[]>;
  /** 06 */ hopProminence?: BeerFact<Intensity>;
  /** 07 */ hopUse?: BeerFact<string[]>;
  /** 08 */ definingAdditions?: BeerFact<Ingredient[]>;
  /** 09 */ alternativeFermentables?: BeerFact<Ingredient[]>;
  /** 10 */ dietaryComposition?: BeerFact<string[]>;

  /** 11 */ originalGravity?: BeerFact<GravityProfile>;
  /** 12 */ finalSweetness?: BeerFact<Intensity>;
  /** 13 */ attenuation?: BeerFact<NumericRange<"%">>;
  /** 14 */ body?: BeerFact<Intensity>;
  /** 15 */ carbonation?: BeerFact<CarbonationProfile>;
  /** 16 */ clarity?: BeerFact<OpenString<"brilliant" | "clear" | "hazy" | "cloudy" | "opaque" | "variable">[]>;

  /** 17 */ maltExpression?: BeerFact<string[]>;
  /** 18 */ hopExpression?: BeerFact<string[]>;
  /** 19 */ yeastExpression?: BeerFact<string[]>;
  /** 20 */ roastIntensity?: BeerFact<Intensity>;
  /** 21 */ smokeCharacter?: BeerFact<Intensity>;
  /** 22 */ flavorComplexity?: BeerFact<OpenString<"focused" | "layered" | "fermentation-complex" | "maturation-complex" | "variable">>;

  /** 23 */ mashMethod?: BeerFact<string[]>;
  /** 24 */ boilTreatment?: BeerFact<string[]>;
  /** 25 */ conditioningTemperature?: BeerFact<NumericRange<"°C">>;
  /** 26 */ conditioningDuration?: BeerFact<DurationRange>;
  /** 27 */ barrelHistory?: BeerFact<BarrelHistory[]>;
  /** 28 */ packagingCarbonation?: BeerFact<string[]>;
  /** 29 */ stabilization?: BeerFact<string[]>;
  /** 30 */ blending?: BeerFact<string[]>;

  /** 31 */ drinkingPurpose?: BeerFact<string[]>;
  /** 32 */ servingTradition?: BeerFact<string[]>;
  /** 33 */ seasonality?: BeerFact<string[]>;
  /** 34 */ productionTradition?: BeerFact<string[]>;
  /** 35 */ historicalContinuity?: BeerFact<string>;
  /** 36 */ standardization?: BeerFact<string[]>;
  /** 37 */ baseStyleDependence?: BeerFact<BaseStyleRelationship>;
}

export interface BeerTaxonomyEntry extends OptionalBeerMetrics {
  schemaVersion: "beer-taxonomy-entry/v1";
  id: EntryId;
  title: string;
  type: BeerEntryType;
  description: string;

  taxonomy: TaxonomyPlacement;
  fermentationFamily: FermentationFamily;
  originLocations: BeerFact<OriginLocation[]>;
  eraOfOrigin: BeerFact<EraOfOrigin>;

  /** Required metadata behind the five station icon groups. */
  preferredGlassware: BeerFact<Glassware[]>;
  fermentationMethod: BeerFact<FermentationMethod[]>;
  ingredients: BeerFact<Ingredient[]>;
  age: BeerFact<AgeProfile>;

  /** Required primary classification axes. Color also drives its station icon. */
  core: CoreBeerAxes;

  /** Overrides only; normally icons should be derived from the typed facts. */
  iconOverrides?: Partial<Record<BeerIconCategory, IconReference>>;
  sources?: SourceReference[];
  tags?: string[];
}

export interface BeerTaxonomyDataset {
  schemaVersion: "beer-taxonomy-dataset/v1";
  taxonomyId: string;
  taxonomyTitle: string;
  generatedAt: string;
  sources: Array<SourceReference & { notice?: string }>;
  entries: readonly BeerTaxonomyEntry[];
}

/** Typed axes available for independently arranging each concentric ring. */
export type RingSeparationAxis =
  | "taxonomy-family"
  | "origin"
  | "color"
  | "strength"
  | "bitterness"
  | "grain"
  | "fermentation-culture"
  | "acidity"
  | "dominant-character"
  | "maturation-method";

export interface RingSeparationOption {
  value: RingSeparationAxis;
  label: string;
  description: string;
}

export interface RingSeparation {
  first: RingSeparationAxis;
  second: RingSeparationAxis;
  third: RingSeparationAxis;
}

export type FilterValueKind =
  | "family"
  | "origin"
  | "color"
  | "strength"
  | "bitterness"
  | "grain"
  | "fermentation"
  | "acidity"
  | "character"
  | "maturation"
  | "glassware"
  | "ingredient"
  | "tag";

export interface BeerFilterOption {
  id: string;
  kind: FilterValueKind;
  value: string;
  label: string;
  count: number;
}
