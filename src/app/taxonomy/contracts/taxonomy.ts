export interface SourceReference {
  readonly id: string;
  readonly title: string;
  readonly url?: string;
  readonly publisher?: string;
}

export interface TaxonomyMeta {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly schemaVersion: string;
  readonly engineVersion: string;
}

export interface TaxonomyVocabulary {
  readonly root: string;
  readonly group: string;
  readonly groupPlural: string;
  readonly entry: string;
  readonly entryPlural: string;
  readonly relatedEntity: string;
  readonly relatedEntityPlural: string;
}

export interface TaxonomyGroup {
  readonly id: string;
  readonly title: string;
  readonly parentGroupId: string | null;
  readonly description?: string;
  readonly sortOrder?: number;
}

export interface TaxonomyEntry<TFacts extends object = Record<string, unknown>> {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly parentGroupIds: readonly string[];
  readonly facts: Readonly<TFacts>;
  readonly aliases?: readonly string[];
  readonly tags?: readonly string[];
  readonly sources?: readonly SourceReference[];
  readonly status?: 'documented' | 'derived' | 'variable' | 'disputed' | 'unknown';
}

export interface RelatedEntity {
  readonly id: string;
  readonly title: string;
  readonly linkedEntryIds: readonly string[];
  readonly description?: string;
  readonly url?: string;
}

export interface TaxonomyContext {
  readonly locale: string;
}

export interface DimensionValue {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly sortOrder?: number;
}

export interface TaxonomyDimension<TEntry> {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly cardinality: 'single' | 'multiple';
  readonly multipleValuePolicy: 'primary' | 'duplicate-instance' | 'aggregate' | 'reject';
  readonly missingValuePolicy: 'unknown-bucket' | 'omit' | 'reject';
  readonly values: (entry: TEntry, context: TaxonomyContext) => readonly DimensionValue[];
}

export interface FacetValue {
  readonly id: string;
  readonly label: string;
  readonly range?: { readonly min?: number; readonly max?: number };
}

export interface TaxonomyFacet<TEntry> {
  readonly id: string;
  readonly label: string;
  readonly kind?: 'categorical' | 'range';
  readonly values: (entry: TEntry, context: TaxonomyContext) => readonly FacetValue[];
}

export type SearchTargetType = 'entry' | 'group' | 'related-entity' | 'facet-value';

export interface SearchDocument {
  readonly id: string;
  readonly targetType: SearchTargetType;
  readonly targetId: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly terms: readonly string[];
  readonly weight?: number;
}

export interface TaxonomySearchDefinition<TEntry, TRelated> {
  readonly documents: (
    entries: readonly TEntry[],
    relatedEntities: readonly TRelated[],
  ) => readonly SearchDocument[];
}

export interface ProfileFactViewModel {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly icon?: ResolvedIcon;
  readonly sourceIds?: readonly string[];
}
export interface ProfileEntityItemViewModel {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly icon?: ResolvedIcon;
}
export interface FactsSectionViewModel {
  readonly kind: 'facts';
  readonly id: string;
  readonly title: string;
  readonly facts: readonly ProfileFactViewModel[];
}
export interface EntityListSectionViewModel {
  readonly kind: 'entity-list';
  readonly id: string;
  readonly title: string;
  readonly entityKind: 'entry' | 'group' | 'dimension-value';
  readonly items: readonly ProfileEntityItemViewModel[];
}
export interface RelatedEntitiesSectionViewModel {
  readonly kind: 'related-entities';
  readonly id: string;
  readonly title: string;
  readonly items: readonly ProfileEntityItemViewModel[];
}
export interface SourcesSectionViewModel {
  readonly kind: 'sources';
  readonly id: string;
  readonly title: string;
  readonly sources: readonly SourceReference[];
}
export interface MarkdownSectionViewModel {
  readonly kind: 'markdown';
  readonly id: string;
  readonly title: string;
  /** Render as sanitized text/markdown; never bind through innerHTML. */
  readonly markdown: string;
}
export type ProfileSectionViewModel =
  | FactsSectionViewModel
  | EntityListSectionViewModel
  | RelatedEntitiesSectionViewModel
  | SourcesSectionViewModel
  | MarkdownSectionViewModel;

export interface TaxonomyProfileDefinition<TEntry, TRelated> {
  readonly entrySections: (
    entry: TEntry,
    related: readonly TRelated[],
  ) => readonly ProfileSectionViewModel[];
}

export interface TaxonomyProjectionDefinition {
  readonly defaultRingOrder: readonly string[];
  readonly allowedDimensionIds: readonly string[];
  readonly structureMode: 'authored-groups' | 'dimensions' | 'hybrid';
  readonly maximumRingCount?: number;
  readonly maximumProjectedInstances?: number;
  readonly emptyBranchPolicy: 'hide' | 'show';
}

export interface ResolvedIcon {
  readonly kind: 'asset' | 'text' | 'component' | 'sprite';
  readonly value: string;
  readonly accessibleLabel: string;
  readonly frame?: {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
  };
  readonly sourceSize?: { readonly width: number; readonly height: number };
}

export interface BadgeViewModel {
  readonly id: string;
  readonly label: string;
  readonly icon?: ResolvedIcon;
}

export interface TileViewModel {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly icon?: ResolvedIcon;
  readonly badges: readonly BadgeViewModel[];
  readonly count?: number;
}

export type RingRadiusPolicy =
  | { readonly kind: 'fixed'; readonly radii: readonly number[] }
  | {
      readonly kind: 'minimum';
      readonly radii: readonly number[];
      readonly maximumExpansion: number;
    }
  | { readonly kind: 'adaptive'; readonly initialRadius: number; readonly ringGap: number };

export type LabelOrientation = 'radial' | 'tangential' | 'horizontal' | 'auto';

export interface StationMetric {
  readonly shape: 'circle' | 'pill' | 'tile';
  readonly width: number;
  readonly height: number;
  readonly priority: number;
}

export interface TaxonomyLayoutPresentation {
  readonly radiusPolicy: RingRadiusPolicy;
  readonly labelOrientation?: LabelOrientation;
  /** Keys may be full projected ids (for example `family:ale`) or value ids (`ale`). */
  readonly branchColors?: Readonly<Record<string, string>>;
  readonly stationMetrics?: Partial<{
    readonly root: Partial<StationMetric>;
    readonly group: Partial<StationMetric>;
    readonly dimensionValue: Partial<StationMetric>;
    readonly entry: Partial<StationMetric>;
    readonly dimensionValueByDepth: Readonly<Record<number, Partial<StationMetric>>>;
  }>;
}

export interface TaxonomyThemeTokens {
  readonly ink: string;
  readonly deepInk: string;
  readonly olive: string;
  readonly oliveLight: string;
  readonly paper: string;
  readonly paperLight: string;
  readonly paperDark: string;
  readonly brass: string;
  readonly amber: string;
  readonly yellow: string;
  readonly teal: string;
  readonly oxblood: string;
  readonly green: string;
  readonly blue: string;
}

export interface TaxonomyThemePreset {
  readonly id: string;
  readonly texture: 'none' | 'paper-ledger';
  readonly tokens: TaxonomyThemeTokens;
}

export interface TaxonomyPresentation<TEntry, TRelated> {
  readonly entryTile: (entry: TEntry) => TileViewModel;
  readonly relatedEntityTile: (entity: TRelated) => TileViewModel;
  readonly layout?: TaxonomyLayoutPresentation;
  readonly theme?: TaxonomyThemePreset;
}

export interface TaxonomyModule<
  TEntry extends TaxonomyEntry = TaxonomyEntry,
  TRelated extends RelatedEntity = RelatedEntity,
> {
  readonly meta: TaxonomyMeta;
  readonly vocabulary: TaxonomyVocabulary;
  readonly records: {
    readonly groups: readonly TaxonomyGroup[];
    readonly entries: readonly TEntry[];
    readonly relatedEntities: readonly TRelated[];
  };
  readonly interpretation: {
    readonly dimensions: readonly TaxonomyDimension<TEntry>[];
    readonly facets: readonly TaxonomyFacet<TEntry>[];
    readonly search: TaxonomySearchDefinition<TEntry, TRelated>;
    readonly profiles: TaxonomyProfileDefinition<TEntry, TRelated>;
    readonly projection: TaxonomyProjectionDefinition;
  };
  readonly presentation: TaxonomyPresentation<TEntry, TRelated>;
}
