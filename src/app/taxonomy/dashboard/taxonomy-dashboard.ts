import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostListener,
  inject,
  OnDestroy,
  signal,
  Type,
} from '@angular/core';
import { Location, NgComponentOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStore } from '../../core/app.store';
import { GenericTaxonomyProfile } from '../components/taxonomy-profile';
import type {
  DashboardMediaDefinition,
  DashboardTargetKind,
  DashboardWidgetDefinition,
  HierarchicalProjectionDefinition,
  TaxonomyModule,
} from '../contracts/taxonomy';
import { TAXONOMY_CATALOG } from '../contracts/taxonomy-provider';
import { DashboardOverlayState } from './dashboard-overlay.state';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-taxonomy-dashboard',
  imports: [GenericTaxonomyProfile, NgComponentOutlet],
  templateUrl: './taxonomy-dashboard.html',
  styleUrl: './taxonomy-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxonomyDashboard implements OnDestroy {
  readonly store = inject(AppStore);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly router = inject(Router);
  private readonly overlay = inject(DashboardOverlayState);
  private readonly catalog = inject(TAXONOMY_CATALOG);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly datasetId = computed(() => this.params().get('datasetId') ?? '');
  readonly targetKind = computed(
    () => (this.params().get('targetKind') ?? 'entry') as DashboardTargetKind,
  );
  readonly entityId = computed(() => this.params().get('entityId') ?? '');
  readonly definition = this.store.module.presentation.dashboard;
  readonly available = computed(
    () =>
      this.datasetId() === this.store.module.meta.id &&
      !!this.definition?.targetKinds.includes(this.targetKind()),
  );
  readonly profile = computed(() => this.store.selectedProfile());
  /** The route opens the dashboard; subsequent tile navigation follows the active profile. */
  readonly activeEntityId = computed(() => {
    const target = this.profile()?.target;
    return target && 'id' in target ? target.id : this.entityId();
  });
  readonly hierarchyWidgetType = signal<Type<unknown> | null>(null);
  readonly portalDefinitions = signal<ReadonlyMap<string, HierarchicalProjectionDefinition>>(
    new Map(),
  );
  readonly hierarchyWidgetInputs = computed(() => {
    const composition = this.compositionFor();
    return composition
      ? {
          definition: composition.hierarchy,
          datasetId: this.datasetId(),
          widgetId: 'living-composition-hierarchy',
          measures: composition.measures ?? [],
          measureEncodings: composition.measureEncodings ?? [],
          navigateEntityHandler: (entityId: string) => this.navigateHierarchyEntity(entityId),
        }
      : {};
  });

  constructor() {
    this.overlay.open.set(true);
    effect(() => {
      if (!this.available()) return;
      const kind = this.targetKind();
      if (kind === 'entry' || kind === 'group' || kind === 'related-entity')
        this.store.selectProfileTarget({ kind, id: this.entityId() });
    });
    effect(() => {
      const hasPortal = this.portalWidgets().some((widget) => this.widgetVisible(widget));
      if ((!this.hierarchyFor() && !hasPortal) || this.hierarchyWidgetType()) return;
      void import('../components/hierarchy-widget').then(({ HierarchyWidget }) =>
        this.hierarchyWidgetType.set(HierarchyWidget),
      );
    });
    effect(() => {
      const entityId = this.activeEntityId();
      for (const widget of this.portalWidgets()) {
        if (!this.widgetVisible(widget)) continue;
        void this.loadPortal(widget, entityId);
      }
    });
  }

  ngOnDestroy(): void {
    this.overlay.open.set(false);
  }

  mediaFor(widget: {
    readonly mediaByEntityId?: Readonly<Record<string, DashboardMediaDefinition>>;
    readonly fallback?: DashboardMediaDefinition;
  }) {
    return (
      this.store.selectedContent()?.bundle?.media?.[this.activeEntityId()] ??
      widget.mediaByEntityId?.[this.activeEntityId()] ??
      widget.fallback
    );
  }

  hierarchyFor() {
    return this.store.selectedContent()?.bundle?.livingCompositions?.[this.activeEntityId()]
      ?.hierarchy;
  }

  compositionFor() {
    return this.store.selectedContent()?.bundle?.livingCompositions?.[this.activeEntityId()];
  }

  portalWidgets() {
    return (this.definition?.sections.flatMap(({ widgets }) => widgets) ?? []).filter(
      (widget): widget is Extract<DashboardWidgetDefinition, { kind: 'taxonomy-portal' }> =>
        widget.kind === 'taxonomy-portal',
    );
  }

  widgetVisible(widget: DashboardWidgetDefinition): boolean {
    return widget.kind !== 'taxonomy-portal' || !widget.targetIdPrefix ||
      this.activeEntityId().startsWith(widget.targetIdPrefix);
  }

  portalInputs(widget: Extract<DashboardWidgetDefinition, { kind: 'taxonomy-portal' }>) {
    const definition = this.portalDefinition(widget);
    return definition
      ? {
          definition,
          datasetId: widget.targetDatasetId,
          widgetId: widget.id,
          navigateEntityHandler: (entityId: string) =>
            this.navigatePortalEntity(widget.targetDatasetId, entityId),
        }
      : {};
  }

  portalDefinition(widget: Extract<DashboardWidgetDefinition, { kind: 'taxonomy-portal' }>) {
    return this.portalDefinitions().get(`${widget.id}:${this.activeEntityId()}`);
  }

  private async loadPortal(
    widget: Extract<DashboardWidgetDefinition, { kind: 'taxonomy-portal' }>,
    entityId: string,
  ): Promise<void> {
    const cacheKey = `${widget.id}:${entityId}`;
    if (this.portalDefinitions().has(cacheKey)) return;
    const item = this.catalog.find(({ id }) => id === widget.targetDatasetId);
    if (!item) return;
    const module = await item.load();
    const definition = this.buildPortalDefinition(module, widget, entityId);
    this.portalDefinitions.update((current) => new Map(current).set(cacheKey, definition));
  }

  private buildPortalDefinition(
    module: TaxonomyModule,
    widget: Extract<DashboardWidgetDefinition, { kind: 'taxonomy-portal' }>,
    entityId: string,
  ): HierarchicalProjectionDefinition {
    const relations = (module.crossTaxonomyRelations ?? []).filter(
      ({ target, relation }) =>
        target.datasetId === this.datasetId() &&
        target.target.kind !== 'dimension-value' &&
        target.target.id === entityId &&
        widget.relationKinds.includes(relation),
    );
    const entityByKey = new Map<string, { readonly title: string }>([
      ...module.records.entries.map(
        (item): [string, { readonly title: string }] => [`entry:${item.id}`, item],
      ),
      ...module.records.relatedEntities.map(
        (item): [string, { readonly title: string }] => [`related-entity:${item.id}`, item],
      ),
    ]);
    const relationLabels: Readonly<Record<string, string>> = {
      'originates-in': 'Originating styles',
      'brewed-in': 'Breweries and brands',
    };
    const kinds = widget.relationKinds.filter((kind) =>
      relations.some(({ relation }) => relation === kind),
    );
    const rootId = `portal:${entityId}`;
    return {
      kind: 'hierarchical',
      rootEntityId: rootId,
      nodes: [
        { id: rootId, canonicalEntityId: entityId, kind: 'portal-root', label: 'BeerChart' },
        ...kinds.map((kind) => ({
          id: `relation:${kind}`,
          canonicalEntityId: `relation:${kind}`,
          kind: 'relation-kind',
          label: relationLabels[kind] ?? kind,
        })),
        ...relations.flatMap((relation) => {
          const target = relation.source.target;
          if (target.kind === 'dimension-value') return [];
          const entity = entityByKey.get(`${target.kind}:${target.id}`);
          return [{
            id: relation.id,
            canonicalEntityId: target.id,
            kind: target.kind,
            label: entity?.title ?? target.id,
          }];
        }),
      ],
      edges: [
        ...kinds.map((kind) => ({
          id: `portal-edge:${kind}`,
          parentNodeId: rootId,
          childNodeId: `relation:${kind}`,
          relationId: kind,
        })),
        ...relations.map((relation) => ({
          id: `portal-edge:${relation.id}`,
          parentNodeId: `relation:${relation.relation}`,
          childNodeId: relation.id,
          relationId: relation.relation,
        })),
      ],
      layers: [
        { id: 'relation-kind', label: 'Relationship', nodeKinds: ['relation-kind'], order: 1 },
        { id: 'linked-entity', label: 'Beer records', nodeKinds: ['entry', 'related-entity'], order: 2 },
      ],
      viewPresets: [{
        id: 'country-beers',
        label: 'Country connections',
        layers: [
          { id: 'relation', label: 'Relationship', defaultLayerId: 'relation-kind', allowedLayerIds: ['relation-kind'], locked: true },
          { id: 'records', label: 'Beer records', defaultLayerId: 'linked-entity', allowedLayerIds: ['linked-entity'], locked: true },
        ],
      }],
      window: { visibleDepth: 2, maxInstances: 80, overflow: 'aggregate' },
      navigation: { expandableTerminal: 'reroot', canonicalTerminal: 'navigate' },
    };
  }

  private navigatePortalEntity(datasetId: string, entityId: string): void {
    globalThis.location.assign(`/atlas/${datasetId}/entry/${encodeURIComponent(entityId)}`);
  }

  navigateHierarchyEntity(entityId: string): void {
    void this.router.navigate(['/atlas', this.datasetId(), 'related-entity', entityId], {
      state: { fromAtlasCanvas: true },
    });
  }

  retryContent(): void {
    const target = this.profile()?.target;
    if (target) this.store.loadContent(target, true);
  }

  close(): void {
    if (globalThis.history.state?.fromAtlasCanvas) this.location.back();
    else void this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
  }

  @HostListener('document:keydown.escape', ['$event'])
  closeOnEscape(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.close();
  }
}
