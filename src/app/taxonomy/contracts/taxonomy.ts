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
  readonly datasetVersion?: string;
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

export interface TaxonomyContentSection {
  readonly id: string;
  readonly title?: string;
  readonly markdown: string;
}

export interface TaxonomyContent {
  readonly about: readonly TaxonomyContentSection[];
  readonly emptyStates?: {
    readonly noEntries?: string;
    readonly noSearchResults?: string;
    readonly noFilterResults?: string;
    readonly noRelatedEntities?: string;
  };
  readonly search?: { readonly placeholder?: string; readonly resultSummary?: string };
  readonly submission?: {
    readonly introduction?: string;
    readonly typeSuggestions?: readonly string[];
    readonly placementInstructions?: string;
  };
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
  /** Optional canonical groups that should appear on the related entity's profile. */
  readonly linkedGroupIds?: readonly string[];
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
  readonly presentation?: FactPresentation;
}
export type FactPresentation =
  | { readonly variant: 'default' }
  | { readonly variant: 'stamp'; readonly tone?: string }
  | { readonly variant: 'measure'; readonly unit?: string }
  | { readonly variant: 'highlight'; readonly tone?: string }
  | { readonly variant: 'source' };
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
  readonly groupSections?: (
    group: TaxonomyGroup,
    descendantEntries: readonly TEntry[],
  ) => readonly ProfileSectionViewModel[];
}

export interface DimensionalProjectionDefinition {
  readonly kind: 'dimensional';
  readonly defaultRingOrder: readonly string[];
  readonly allowedDimensionIds: readonly string[];
  readonly structureMode: 'authored-groups' | 'dimensions' | 'hybrid';
  readonly maximumRingCount?: number;
  readonly maximumProjectedInstances?: number;
  readonly emptyBranchPolicy: 'hide' | 'show';
}

export interface HierarchyNode {
  readonly id: string;
  readonly canonicalEntityId: string;
  readonly kind: string;
  readonly label: string;
  readonly attributes?: Readonly<Record<string, unknown>>;
}

export interface HierarchyEdge {
  readonly id: string;
  readonly parentNodeId: string;
  readonly childNodeId: string;
  readonly relationId: string;
}

export interface HierarchyLayerDefinition {
  readonly id: string;
  readonly label: string;
  readonly nodeKinds?: readonly string[];
  /** Dataset-declared rank order. Higher values are farther from the root. */
  readonly order?: number;
}

export interface HierarchyLayerSlot {
  readonly id: string;
  readonly label: string;
  readonly defaultLayerId: string;
  readonly allowedLayerIds: readonly string[];
  readonly locked?: boolean;
}

export interface HierarchyViewPreset {
  readonly id: string;
  readonly label: string;
  readonly layers: readonly HierarchyLayerSlot[];
  readonly persistence?: {
    readonly enabled: boolean;
    readonly schemaVersion: string;
  };
}

export interface HierarchicalProjectionDefinition {
  readonly kind: 'hierarchical';
  readonly rootEntityId: string;
  readonly nodes: readonly HierarchyNode[];
  readonly edges: readonly HierarchyEdge[];
  readonly layers: readonly HierarchyLayerDefinition[];
  readonly viewPresets?: readonly HierarchyViewPreset[];
  readonly window: {
    readonly visibleDepth: number;
    readonly maxInstances: number;
    readonly overflow: 'aggregate' | 'warn' | 'truncate';
  };
  readonly navigation: {
    readonly expandableTerminal: 'reroot';
    readonly canonicalTerminal: 'navigate';
  };
}

export type TaxonomyProjectionDefinition =
  DimensionalProjectionDefinition | HierarchicalProjectionDefinition;

export type DomainCoverage = 'unstarted' | 'draft' | 'reviewed' | 'published';

export interface TaxonOccurrence {
  readonly taxonEntityId: string;
  readonly sourceIds: readonly string[];
  readonly note?: string;
}

export interface LivingCompositionContent {
  readonly ecoregionId: string;
  readonly hierarchy: HierarchicalProjectionDefinition;
  readonly occurrences: readonly TaxonOccurrence[];
  readonly coverage: Readonly<Record<string, DomainCoverage>>;
  readonly measures?: readonly HierarchyNodeMeasure[];
  readonly measureEncodings?: readonly NodeMeasureEncoding[];
}

export interface NumericRange {
  readonly min: number;
  readonly max: number;
}

export interface HierarchyNodeMeasure {
  readonly nodeId: string;
  readonly metricId: string;
  readonly value?: number;
  readonly range?: NumericRange;
  readonly unit: string;
  readonly label: string;
  readonly sourceIds: readonly string[];
}

export interface ProjectedNodeMeasure extends Omit<HierarchyNodeMeasure, 'nodeId'> {
  readonly instanceId: string;
}

export interface NodeMeasureEncoding {
  readonly metricId: string;
  readonly appearance: 'area' | 'halo' | 'label';
  readonly scale: 'linear' | 'square-root' | 'logarithmic';
  readonly missingValue: 'uniform' | 'hidden';
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
  readonly minimumLabelZoom?: number;
}

export interface TaxonomyLayoutPresentation {
  readonly radiusPolicy: RingRadiusPolicy;
  readonly labelOrientation?: LabelOrientation;
  /** Keys may be full projected ids (for example `axis:alpha`) or value ids (`alpha`). */
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
  /** Dataset-declared semantic colors used by branches, stations, badges, and facts. */
  readonly visualTokens?: Readonly<Record<string, string>>;
  readonly typography: {
    readonly display: FontDescriptor;
    readonly interface: FontDescriptor;
    readonly annotation: FontDescriptor;
    readonly data?: FontDescriptor;
  };
  readonly surfaces: {
    readonly application: SurfaceDescriptor;
    readonly toolbar: SurfaceDescriptor;
    readonly viewport: SurfaceDescriptor;
    readonly panel: SurfaceDescriptor;
  };
  readonly geometry: {
    readonly controlRadius: number;
    readonly panelRadius: number;
    readonly tileRadius: number;
    readonly borderWidth: number;
    readonly focusWidth: number;
  };
  readonly textures?: Readonly<Record<string, TextureDescriptor>>;
}

export interface FontDescriptor {
  readonly family: string;
  readonly fallbacks?: readonly string[];
  readonly weight?: number;
}
export interface SurfaceDescriptor {
  readonly background: keyof TaxonomyThemeTokens | string;
  readonly foreground: keyof TaxonomyThemeTokens | string;
  readonly border: keyof TaxonomyThemeTokens | string;
}
export type TextureDescriptor =
  | { readonly kind: 'none' }
  | { readonly kind: 'grain'; readonly opacity: number; readonly scale: number }
  | { readonly kind: 'lines'; readonly opacity: number; readonly spacing: number }
  | {
      readonly kind: 'asset';
      readonly assetId: string;
      readonly opacity: number;
      readonly repeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'none';
    };

export interface TaxonomyPresentation<TEntry, TRelated> {
  readonly entryTile: (entry: TEntry) => TileViewModel;
  readonly relatedEntityTile: (entity: TRelated) => TileViewModel;
  readonly layout?: TaxonomyLayoutPresentation;
  readonly theme?: TaxonomyThemePreset;
  /** Data-only dashboard composition. Generic renderers own all component implementations. */
  readonly dashboard?: TaxonomyDashboardDefinition;
}

export type DashboardTargetKind = 'entry' | 'group' | 'dimension-value' | 'related-entity';

export type EntityReference =
  | { readonly kind: 'entry' | 'group' | 'related-entity'; readonly id: string }
  | {
      readonly kind: 'dimension-value';
      readonly dimensionId: string;
      readonly valueId: string;
    };

/** A stable reference to an entity owned by another taxonomy dataset. */
export interface CrossTaxonomyEntityReference {
  readonly datasetId: string;
  readonly target: EntityReference;
}

export type CrossTaxonomyRelationKind =
  | 'originates-in'
  | 'brewed-in'
  | 'occurs-in'
  | 'associated-with'
  | 'contains'
  | 'influenced-by';

export interface CrossTaxonomyRelationProvenance {
  readonly kind: 'declared' | 'derived' | 'curated';
  readonly sourceIds?: readonly string[];
  readonly method?: string;
  readonly note?: string;
}

/** A typed edge between independently valid taxonomy datasets. */
export interface CrossTaxonomyRelation {
  readonly id: string;
  readonly source: CrossTaxonomyEntityReference;
  readonly target: CrossTaxonomyEntityReference;
  readonly relation: CrossTaxonomyRelationKind;
  readonly provenance: CrossTaxonomyRelationProvenance;
}

export interface TaxonomyContentBundle {
  readonly profileExtensions?: Readonly<Record<string, readonly ProfileSectionViewModel[]>>;
  readonly media?: Readonly<Record<string, DashboardMediaDefinition>>;
  readonly relatedEntities?: readonly RelatedEntity[];
  readonly sources?: readonly SourceReference[];
  readonly livingCompositions?: Readonly<Record<string, LivingCompositionContent>>;
}

export interface TaxonomyContentProvider {
  resolvePartition(target: EntityReference): string | null;
  loadPartition(partitionId: string): Promise<TaxonomyContentBundle>;
}

export interface DashboardMediaDefinition {
  readonly src?: string;
  readonly alt: string;
  readonly caption?: string;
  readonly credit?: string;
  readonly license?: string;
  readonly role: 'interpretive' | 'documentary' | 'diagrammatic';
  readonly aspectRatio: `${number}:${number}`;
  readonly focalPoint?: { readonly x: number; readonly y: number };
}

export type DashboardWidgetDefinition =
  | { readonly id: string; readonly kind: 'profile'; readonly title?: string }
  | {
      readonly id: string;
      readonly kind: 'media';
      readonly title?: string;
      readonly mediaByEntityId?: Readonly<Record<string, DashboardMediaDefinition>>;
      readonly fallback?: DashboardMediaDefinition;
    }
  | {
      readonly id: string;
      readonly kind: 'hierarchy';
      readonly title?: string;
      readonly emptyMessage?: string;
    }
  | {
      readonly id: string;
      readonly kind: 'taxonomy-portal';
      readonly title: string;
      readonly targetDatasetId: string;
      readonly relationKinds: readonly CrossTaxonomyRelationKind[];
      readonly targetIdPrefix?: string;
      readonly emptyMessage?: string;
    };

export interface DashboardSectionDefinition {
  readonly id: string;
  readonly layout: 'single' | 'split' | 'feature';
  readonly widgets: readonly DashboardWidgetDefinition[];
}

export interface TaxonomyDashboardDefinition {
  readonly targetKinds: readonly DashboardTargetKind[];
  readonly actionLabel: string;
  readonly sections: readonly DashboardSectionDefinition[];
}

export interface ReadonlyStorage {
  readonly length: number;
  key(index: number): string | null;
  getItem(key: string): string | null;
}

export interface PersistedTaxonomyState {
  readonly settings?: unknown;
  readonly rings?: unknown;
  readonly camera?: unknown;
}

export interface TaxonomyLegacyImporter {
  readonly id: string;
  import(storage: ReadonlyStorage): Partial<PersistedTaxonomyState> | null;
}

export interface TaxonomyPersistenceDefinition {
  readonly namespace: string;
  readonly version: number;
  readonly legacyImporters?: readonly TaxonomyLegacyImporter[];
}

export interface TaxonomyModule<
  TEntry extends TaxonomyEntry = TaxonomyEntry,
  TRelated extends RelatedEntity = RelatedEntity,
> {
  readonly meta: TaxonomyMeta;
  readonly vocabulary: TaxonomyVocabulary;
  readonly content: TaxonomyContent;
  readonly persistence?: TaxonomyPersistenceDefinition;
  readonly contentProvider?: TaxonomyContentProvider;
  /** Typed links to entities owned by other independently loaded taxonomy datasets. */
  readonly crossTaxonomyRelations?: readonly CrossTaxonomyRelation[];
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
