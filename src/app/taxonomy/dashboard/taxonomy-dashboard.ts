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
import type { DashboardMediaDefinition, DashboardTargetKind } from '../contracts/taxonomy';
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
  readonly hierarchyWidgetType = signal<Type<unknown> | null>(null);
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
      if (!this.hierarchyFor() || this.hierarchyWidgetType()) return;
      void import('../components/hierarchy-widget').then(({ HierarchyWidget }) =>
        this.hierarchyWidgetType.set(HierarchyWidget),
      );
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
      this.store.selectedContent()?.bundle?.media?.[this.entityId()] ??
      widget.mediaByEntityId?.[this.entityId()] ??
      widget.fallback
    );
  }

  hierarchyFor() {
    return this.store.selectedContent()?.bundle?.livingCompositions?.[this.entityId()]?.hierarchy;
  }

  compositionFor() {
    return this.store.selectedContent()?.bundle?.livingCompositions?.[this.entityId()];
  }

  navigateHierarchyEntity(entityId: string): void {
    void this.router.navigate(['/atlas', this.datasetId(), 'related-entity', entityId], {
      state: { fromAtlasCanvas: true },
    });
  }

  retryContent(): void {
    if (this.targetKind() === 'entry')
      this.store.loadContent({ kind: 'entry', id: this.entityId() }, true);
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
