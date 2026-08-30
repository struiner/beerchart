import { Injectable, computed, effect, inject, signal } from '@angular/core';
import {
  DimensionalProjectionDefinition,
  EntityReference,
  TaxonomyContentBundle,
  TaxonomyModule,
} from '../taxonomy/contracts/taxonomy';
import { TAXONOMY_CATALOG, TAXONOMY_MODULE } from '../taxonomy/contracts/taxonomy-provider';
import { evaluateTaxonomyFilters } from '../taxonomy/filtering/evaluate-taxonomy-filters';
import { createTaxonomyIndexes } from '../taxonomy/indexes/create-taxonomy-indexes';
import { layoutCircularTaxonomy, PositionedNode } from '../taxonomy/layout/circular-layout';
import { resolvePresentationScene } from '../taxonomy/presentation/resolve-presentation-scene';
import { resolvePresentationTheme } from '../taxonomy/presentation/resolve-presentation-theme';
import {
  composeTaxonomyProfile,
  ProfileScope,
  ProfileTarget,
} from '../taxonomy/profiles/compose-taxonomy-profile';
import { projectTaxonomy } from '../taxonomy/projection/project-taxonomy';
import { createTaxonomySearchIndex, searchTaxonomy } from '../taxonomy/search/taxonomy-search';
import { sanitizeMarkdown } from '../taxonomy/profiles/sanitize-markdown';
import {
  persistencePrefix,
  runPersistenceImporters,
} from '../taxonomy/persistence/run-persistence-importers';

export interface ViewportSettings {
  labels: boolean;
  connectors: boolean;
  animations: boolean;
  wheelMode: 'pan' | 'zoom';
}
const baseDefaults: ViewportSettings = {
  labels: true,
  connectors: true,
  animations: true,
  wheelMode: 'pan',
};
const MINIMUM_CAMERA_SCALE = 0.04;
const MAXIMUM_CAMERA_SCALE = 2.4;

@Injectable({ providedIn: 'root' })
export class AppStore {
  readonly module = inject(TAXONOMY_MODULE) as TaxonomyModule;
  private readonly dimensionalProjection = this.module.interpretation
    .projection as DimensionalProjectionDefinition;
  readonly taxonomyCatalog = inject(TAXONOMY_CATALOG, { optional: true }) ?? [
    { id: this.module.meta.id, title: this.module.meta.title, load: async () => this.module },
  ];
  readonly indexes = createTaxonomyIndexes(this.module);
  readonly e2eMode = new URLSearchParams(globalThis.location?.search ?? '').has('e2e');
  readonly renderer = 'generic-taxonomy' as const;
  readonly theme = resolvePresentationTheme(this.module.presentation.theme);
  readonly aboutContent = this.module.content.about.map((section) => ({
    ...section,
    markdown: sanitizeMarkdown(section.markdown),
  }));
  visualColor(token: string): string {
    return (
      this.theme.visualTokens?.[token] ??
      this.theme.tokens[token as keyof typeof this.theme.tokens] ??
      this.theme.tokens.oliveLight
    );
  }
  private readonly storagePrefix = this.module.persistence
    ? persistencePrefix(this.module.persistence)
    : `taxonomy.${this.module.meta.id}.${this.module.meta.schemaVersion}`;
  private readonly storageMigration = this.runStorageImporters();
  readonly ringOrder = signal<readonly string[]>(this.readRingOrder());
  readonly facetSelections = signal<Record<string, readonly string[]>>({});
  readonly rangeSelections = signal<
    Record<string, { readonly min?: number; readonly max?: number }>
  >({});
  readonly facetOptions = this.module.interpretation.facets.map((facet) => {
    const values = new Map<string, { id: string; label: string; count: number }>();
    this.module.records.entries.forEach((entry) =>
      facet.values(entry, { locale: 'en' }).forEach((value) => {
        const existing = values.get(value.id);
        values.set(value.id, {
          id: value.id,
          label: value.label,
          count: (existing?.count ?? 0) + 1,
        });
      }),
    );
    return {
      id: facet.id,
      label: facet.label,
      kind: facet.kind ?? 'categorical',
      values: [...values.values()],
    };
  });
  readonly filterOptions = this.facetOptions.flatMap((facet) =>
    facet.values.map((value) => ({
      id: `${facet.id}:${value.id}`,
      facetId: facet.id,
      valueId: value.id,
      kind: facet.id,
      label: value.label,
      count: value.count,
    })),
  );
  readonly selectedFilters = computed(() =>
    Object.entries(this.facetSelections()).flatMap(([facetId, values]) =>
      values.map((valueId) => `${facetId}:${valueId}`),
    ),
  );
  readonly filterResult = computed(() =>
    evaluateTaxonomyFilters({
      module: this.module,
      indexes: this.indexes,
      activeFilters: [
        ...Object.entries(this.facetSelections()).map(([facetId, valueIds]) => ({
          facetId,
          valueIds,
        })),
        ...Object.entries(this.rangeSelections()).map(([facetId, range]) => ({ facetId, range })),
      ],
    }),
  );
  readonly filteredEntries = computed(() => {
    const included = this.filterResult().entryIds;
    return this.module.records.entries.filter(({ id }) => included.has(id));
  });
  readonly projectedScene = computed(() =>
    projectTaxonomy({
      module: this.module,
      indexes: this.indexes,
      includedEntryIds: this.filterResult().entryIds,
      ringOrder: this.ringOrder(),
    }),
  );
  readonly presentationScene = computed(() =>
    resolvePresentationScene({ module: this.module, projected: this.projectedScene() }),
  );
  readonly positionedScene = computed(() => layoutCircularTaxonomy(this.presentationScene()));
  readonly searchIndex = createTaxonomySearchIndex({ module: this.module, indexes: this.indexes });
  readonly camera = signal(this.readCamera());
  readonly selectedEntityId = signal<string | null>(null);
  readonly focusedInstanceId = signal<string | null>(null);
  readonly detailMode = signal<'closed' | 'compact' | 'expanded'>('closed');
  readonly selectedProfileTarget = signal<ProfileTarget | null>(null);
  private readonly contentPromises = new Map<string, Promise<TaxonomyContentBundle>>();
  readonly contentPartitions = signal<
    Readonly<
      Record<
        string,
        {
          readonly status: 'loading' | 'loaded' | 'error';
          readonly bundle?: TaxonomyContentBundle;
          readonly error?: string;
        }
      >
    >
  >({});
  readonly settings = signal<ViewportSettings>(this.readSettings());
  readonly profileScope = computed<ProfileScope | null>(() => {
    const target = this.selectedProfileTarget();
    const instanceId = this.focusedInstanceId();
    if (target?.kind === 'dimension-value' && instanceId) return { kind: 'projected', instanceId };
    const entityId = this.selectedEntityId();
    return entityId ? { kind: 'canonical', entityId } : null;
  });
  readonly selectedContent = computed(() => {
    const target = this.selectedProfileTarget();
    const partitionId = target ? this.module.contentProvider?.resolvePartition(target) : null;
    return partitionId ? this.contentPartitions()[partitionId] : undefined;
  });
  readonly selectedProfile = computed(() => {
    const id = this.selectedEntityId();
    const target =
      this.selectedProfileTarget() ??
      (id && this.indexes.entryById.has(id) ? ({ kind: 'entry', id } as const) : null);
    if (!target) return null;
    let profile = composeTaxonomyProfile({
      module: this.module,
      indexes: this.indexes,
      target,
      scope: this.profileScope() ?? undefined,
      includedEntryIds:
        target.kind === 'dimension-value'
          ? this.focusedDescendantEntryIds()
          : this.filterResult().entryIds,
    });
    if (!profile && target.kind === 'related-entity') {
      const related = this.selectedContent()?.bundle?.relatedEntities?.find(
        ({ id: relatedId }) => relatedId === target.id,
      );
      if (related)
        profile = {
          target,
          scope: { kind: 'canonical', entityId: related.id },
          title: related.title,
          sections: [
            ...(related.description
              ? [
                  {
                    kind: 'markdown' as const,
                    id: 'description',
                    title: this.module.vocabulary.relatedEntity,
                    markdown: related.description,
                  },
                ]
              : []),
            {
              kind: 'entity-list' as const,
              id: 'entries',
              title: this.module.vocabulary.entryPlural,
              entityKind: 'entry' as const,
              items: related.linkedEntryIds.flatMap((entryId) => {
                const entry = this.indexes.entryById.get(entryId);
                return entry
                  ? [{ id: entry.id, title: entry.title, description: entry.description }]
                  : [];
              }),
            },
          ],
        };
    }
    if (!profile) return null;
    const extensionKey = this.contentTargetKey(target);
    const extensions = this.selectedContent()?.bundle?.profileExtensions?.[extensionKey] ?? [];
    return extensions.length
      ? { ...profile, sections: [...extensions, ...profile.sections] }
      : profile;
  });
  private readonly hydrateSelectedContent = effect(() => {
    const target = this.selectedProfileTarget();
    if (target) this.loadContent(target);
  });
  readonly selectedInstances = computed(() => {
    const focused = this.focusedInstanceId();
    return focused ? [focused] : [];
  });
  readonly focusedRouteInstanceIds = computed(() => {
    const nodes = this.positionedScene().nodes;
    const byId = new Map(nodes.map((node) => [node.instanceId, node]));
    const route: string[] = [];
    let node = byId.get(this.focusedInstanceId() ?? '');
    while (node) {
      route.unshift(node.instanceId);
      node = node.parentInstanceId ? byId.get(node.parentInstanceId) : undefined;
    }
    return route;
  });
  readonly selectedPathNodes = computed(() => {
    const route = new Set(this.focusedRouteInstanceIds());
    return this.positionedScene().nodes.filter(
      ({ instanceId, kind }) => route.has(instanceId) && kind !== 'root' && kind !== 'entry',
    );
  });
  readonly focusedDescendantEntryIds = computed(() => {
    const focused = this.focusedInstanceId();
    if (!focused) return this.filterResult().entryIds;
    const nodes = this.positionedScene().nodes;
    const children = new Map<string, PositionedNode[]>();
    nodes.forEach((node) => {
      if (node.parentInstanceId)
        children.set(node.parentInstanceId, [...(children.get(node.parentInstanceId) ?? []), node]);
    });
    const entryIds = new Set<string>();
    const pending = [focused];
    while (pending.length) {
      const parent = pending.shift()!;
      for (const child of children.get(parent) ?? []) {
        if (child.kind === 'entry') entryIds.add(child.entityId);
        else pending.push(child.instanceId);
      }
    }
    return entryIds;
  });

  setCamera(patch: Partial<{ x: number; y: number; scale: number }>) {
    this.camera.update((camera) => ({
      ...camera,
      ...patch,
      scale: Math.min(
        MAXIMUM_CAMERA_SCALE,
        Math.max(MINIMUM_CAMERA_SCALE, patch.scale ?? camera.scale),
      ),
    }));
    if (!this.e2eMode)
      localStorage.setItem(`${this.storagePrefix}.camera`, JSON.stringify(this.camera()));
  }
  zoom(factor: number, px = innerWidth / 2, py = innerHeight / 2) {
    const camera = this.camera();
    const scale = Math.min(
      MAXIMUM_CAMERA_SCALE,
      Math.max(MINIMUM_CAMERA_SCALE, camera.scale * factor),
    );
    this.setCamera({
      scale,
      x: px - ((px - camera.x) * scale) / camera.scale,
      y: py - ((py - camera.y) * scale) / camera.scale,
    });
  }
  fit(width: number, height: number) {
    const bounds = this.positionedScene().bounds;
    const scale = Math.min(
      (width - 64) / Math.max(1, bounds.width),
      (height - 64) / Math.max(1, bounds.height),
      1,
    );
    this.setCamera({
      scale,
      x: (width - bounds.width * scale) / 2 - bounds.minX * scale,
      y: (height - bounds.height * scale) / 2 - bounds.minY * scale,
    });
  }
  updateSettings(patch: Partial<ViewportSettings>) {
    this.settings.update((settings) => ({ ...settings, ...patch }));
    localStorage.setItem(`${this.storagePrefix}.settings`, JSON.stringify(this.settings()));
  }
  updateRing(index: number, dimensionId: string) {
    if (!this.dimensionalProjection.allowedDimensionIds.includes(dimensionId)) return;
    this.ringOrder.update((order) => {
      const next = [...order];
      const previousIndex = next.indexOf(dimensionId);
      if (previousIndex >= 0)
        [next[index], next[previousIndex]] = [next[previousIndex]!, next[index]!];
      else next[index] = dimensionId;
      return next;
    });
    if (!this.e2eMode)
      localStorage.setItem(`${this.storagePrefix}.rings`, JSON.stringify(this.ringOrder()));
    this.clearSelection();
  }
  toggleFilter(token: string) {
    const separator = token.indexOf(':');
    const facetId = token.slice(0, separator);
    const valueId = token.slice(separator + 1);
    this.facetSelections.update((selections) => {
      const current = selections[facetId] ?? [];
      return {
        ...selections,
        [facetId]: current.includes(valueId)
          ? current.filter((id) => id !== valueId)
          : [...current, valueId],
      };
    });
    this.reconcileFocusedInstance();
  }
  setFacet(facetId: string, valueId: string) {
    this.facetSelections.update((selections) => ({
      ...selections,
      [facetId]: valueId ? [valueId] : [],
    }));
    this.reconcileFocusedInstance();
  }
  setRange(facetId: string, bound: 'min' | 'max', rawValue: string) {
    const numeric = rawValue === '' ? undefined : Number(rawValue);
    this.rangeSelections.update((ranges) => ({
      ...ranges,
      [facetId]: {
        ...ranges[facetId],
        [bound]: numeric === undefined || Number.isFinite(numeric) ? numeric : undefined,
      },
    }));
    this.reconcileFocusedInstance();
  }
  clearFilters() {
    this.facetSelections.set({});
    this.rangeSelections.set({});
    this.reconcileFocusedInstance();
  }
  selectProjectedNode(node: PositionedNode, detail: 'compact' | 'expanded' = 'compact') {
    this.focusedInstanceId.set(node.instanceId);
    this.selectedEntityId.set(node.entityId);
    this.detailMode.set(detail);
    if (node.kind === 'entry') this.selectedProfileTarget.set({ kind: 'entry', id: node.entityId });
    else if (node.kind === 'group')
      this.selectedProfileTarget.set({ kind: 'group', id: node.entityId });
    else if (node.kind === 'dimension-value') {
      const separator = node.entityId.indexOf(':');
      this.selectedProfileTarget.set({
        kind: 'dimension-value',
        dimensionId: node.entityId.slice(0, separator),
        valueId: node.entityId.slice(separator + 1),
      });
    } else this.selectedProfileTarget.set(null);
  }
  selectProfileTarget(target: ProfileTarget) {
    this.selectedProfileTarget.set(target);
    if (target.kind === 'entry') {
      const node = this.positionedScene().nodes.find(({ entityId }) => entityId === target.id);
      if (node) this.selectProjectedNode(node);
    } else
      this.selectedEntityId.set(
        'id' in target ? target.id : `${target.dimensionId}:${target.valueId}`,
      );
  }
  loadContent(target: EntityReference, retry = false): void {
    const provider = this.module.contentProvider;
    const partitionId = provider?.resolvePartition(target);
    if (!provider || !partitionId) return;
    if (retry) {
      this.contentPromises.delete(partitionId);
      this.contentPartitions.update((states) => {
        const next = { ...states };
        delete next[partitionId];
        return next;
      });
    }
    if (this.contentPartitions()[partitionId]?.status === 'loaded') return;
    if (this.contentPromises.has(partitionId)) return;
    this.contentPartitions.update((states) => ({
      ...states,
      [partitionId]: { status: 'loading' },
    }));
    const promise = provider.loadPartition(partitionId);
    this.contentPromises.set(partitionId, promise);
    void promise.then(
      (bundle) =>
        this.contentPartitions.update((states) => ({
          ...states,
          [partitionId]: { status: 'loaded', bundle },
        })),
      (cause) => {
        this.contentPromises.delete(partitionId);
        this.contentPartitions.update((states) => ({
          ...states,
          [partitionId]: {
            status: 'error',
            error: cause instanceof Error ? cause.message : String(cause),
          },
        }));
      },
    );
  }
  clearSelection() {
    this.selectedEntityId.set(null);
    this.focusedInstanceId.set(null);
    this.selectedProfileTarget.set(null);
    this.detailMode.set('closed');
  }
  search(query: string) {
    return searchTaxonomy(this.searchIndex, query);
  }
  switchTaxonomy(id: string) {
    if (id === this.module.meta.id || !this.taxonomyCatalog.some((item) => item.id === id)) return;
    const url = new URL(globalThis.location.href);
    url.searchParams.set('taxonomy', id);
    globalThis.location.assign(url);
  }

  private reconcileFocusedInstance() {
    const focused = this.focusedInstanceId();
    if (focused && !this.positionedScene().nodes.some(({ instanceId }) => instanceId === focused))
      this.clearSelection();
  }

  private contentTargetKey(target: EntityReference): string {
    return target.kind === 'dimension-value'
      ? `${target.dimensionId}:${target.valueId}`
      : target.id;
  }

  private readSettings(): ViewportSettings {
    void this.storageMigration;
    const defaults = {
      ...baseDefaults,
      animations: this.e2eMode ? false : baseDefaults.animations,
    };
    if (this.e2eMode) return defaults;
    try {
      return {
        ...defaults,
        ...JSON.parse(localStorage.getItem(`${this.storagePrefix}.settings`) ?? '{}'),
      };
    } catch {
      return defaults;
    }
  }
  private readCamera() {
    const fallback = { x: 48, y: 40, scale: 0.72 };
    if (this.e2eMode) return fallback;
    try {
      return {
        ...fallback,
        ...JSON.parse(localStorage.getItem(`${this.storagePrefix}.camera`) ?? '{}'),
      };
    } catch {
      return fallback;
    }
  }
  private readRingOrder(): readonly string[] {
    void this.storageMigration;
    const fallback = this.dimensionalProjection.defaultRingOrder;
    if (this.e2eMode) return fallback;
    try {
      const stored = JSON.parse(localStorage.getItem(`${this.storagePrefix}.rings`) ?? 'null');
      const candidate = Array.isArray(stored)
        ? stored
        : stored && typeof stored === 'object'
          ? [stored.first, stored.second, stored.third]
          : fallback;
      const allowed = new Set(this.dimensionalProjection.allowedDimensionIds);
      return candidate.length &&
        candidate.every((id: unknown) => typeof id === 'string' && allowed.has(id)) &&
        new Set(candidate).size === candidate.length
        ? candidate
        : fallback;
    } catch {
      return fallback;
    }
  }
  private runStorageImporters() {
    runPersistenceImporters(this.module.persistence, localStorage);
    return true;
  }
}
