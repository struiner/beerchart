import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import type {
  HierarchicalProjectionDefinition,
  HierarchyNodeMeasure,
  NodeMeasureEncoding,
} from '../contracts/taxonomy';
import { layoutCircularTaxonomy } from '../layout/circular-layout';
import { resolveHierarchyPresentationScene } from '../presentation/resolve-hierarchy-presentation-scene';
import { projectHierarchy } from '../projection/project-hierarchy';
import { projectNodeMeasures, ResolvedNodeMeasure } from '../projection/project-node-measures';

export interface HierarchyWidgetState {
  readonly rootNodeId: string;
  readonly selectedEntityId: string | null;
  readonly focusedInstanceId: string | null;
  readonly breadcrumbNodeIds: readonly string[];
  readonly layerConfiguration: readonly string[];
}

@Component({
  selector: 'app-hierarchy-widget',
  templateUrl: './hierarchy-widget.html',
  styleUrl: './hierarchy-widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyWidget {
  readonly Math = Math;
  readonly definition = input.required<HierarchicalProjectionDefinition>();
  readonly datasetId = input.required<string>();
  readonly widgetId = input.required<string>();
  readonly measures = input<readonly HierarchyNodeMeasure[]>([]);
  readonly measureEncodings = input<readonly NodeMeasureEncoding[]>([]);
  readonly navigateEntityHandler = input<((entityId: string) => void) | null>(null);
  readonly navigateEntity = output<string>();
  private readonly rootOverride = signal<string | null>(null);
  private readonly instanceLimitOverride = signal<number | null>(null);
  private readonly initializedPreferenceKey = signal<string | null>(null);
  readonly activeLayerIds = signal<readonly string[]>([]);
  readonly selectedEntityId = signal<string | null>(null);
  readonly focusedInstanceId = signal<string | null>(null);
  readonly breadcrumbNodeIds = signal<readonly string[]>([]);
  readonly preset = computed(() => this.definition().viewPresets?.[0]);
  readonly layerById = computed(
    () => new Map(this.definition().layers.map((layer) => [layer.id, layer])),
  );
  readonly rootNodeId = computed(() => {
    const definition = this.definition();
    return (
      this.rootOverride() ??
      definition.nodes.find(
        ({ id, canonicalEntityId }) =>
          id === definition.rootEntityId || canonicalEntityId === definition.rootEntityId,
      )?.id ??
      definition.nodes[0]?.id ??
      ''
    );
  });
  readonly projected = computed(() =>
    projectHierarchy({
      definition: this.instanceLimitOverride()
        ? {
            ...this.definition(),
            window: {
              ...this.definition().window,
              maxInstances: this.instanceLimitOverride()!,
            },
          }
        : this.definition(),
      rootNodeId: this.rootNodeId(),
      activeLayerIds: this.activeLayerIds(),
    }),
  );
  readonly positioned = computed(() =>
    layoutCircularTaxonomy(resolveHierarchyPresentationScene(this.projected()), {
      center: { x: 500, y: 500 },
      minimumRingGap: 70,
      minimumAngularGap: 0.035,
    }),
  );
  readonly projectedMeasures = computed(() =>
    projectNodeMeasures({
      scene: this.projected(),
      measures: this.measures(),
      encodings: this.measureEncodings(),
    }),
  );
  readonly viewBox = computed(() => {
    const bounds = this.positioned().bounds;
    const padding = 90;
    return `${bounds.minX - padding} ${bounds.minY - padding} ${Math.max(1, bounds.width + padding * 2)} ${Math.max(1, bounds.height + padding * 2)}`;
  });
  readonly state = computed<HierarchyWidgetState>(() => ({
    rootNodeId: this.rootNodeId(),
    selectedEntityId: this.selectedEntityId(),
    focusedInstanceId: this.focusedInstanceId(),
    breadcrumbNodeIds: this.breadcrumbNodeIds(),
    layerConfiguration: this.activeLayerIds(),
  }));
  readonly breadcrumbs = computed(() => {
    const byId = new Map(this.definition().nodes.map((node) => [node.id, node]));
    return this.breadcrumbNodeIds().flatMap((id) => {
      const node = byId.get(id);
      return node ? [node] : [];
    });
  });

  constructor() {
    effect(() => {
      const preset = this.preset();
      if (!preset) return;
      const key = this.preferenceKey(preset.persistence?.schemaVersion ?? '0');
      if (this.initializedPreferenceKey() === key) return;
      const defaults = preset.layers.map(({ defaultLayerId }) => defaultLayerId);
      let selected = defaults;
      if (preset.persistence?.enabled) {
        try {
          const stored = JSON.parse(localStorage.getItem(key) ?? 'null');
          if (
            Array.isArray(stored) &&
            stored.length === preset.layers.length &&
            stored.every((value, index) => preset.layers[index]?.allowedLayerIds.includes(value)) &&
            this.hasValidLayerOrder(stored)
          )
            selected = stored;
        } catch {
          selected = defaults;
        }
      }
      this.activeLayerIds.set(selected);
      this.initializedPreferenceKey.set(key);
    });
  }

  changeLayer(index: number, layerId: string): void {
    const preset = this.preset();
    const slot = preset?.layers[index];
    if (!slot || slot.locked || !slot.allowedLayerIds.includes(layerId)) return;
    const previousFocused = this.projected().nodes.find(
      ({ instanceId }) => instanceId === this.focusedInstanceId(),
    );
    const candidate = this.activeLayerIds().map((value, candidateIndex) =>
      candidateIndex === index ? layerId : value,
    );
    if (!this.hasValidLayerOrder(candidate)) return;
    this.activeLayerIds.set(candidate);
    const nextScene = this.projected();
    const exact = nextScene.nodes.find(({ entityId }) => entityId === this.selectedEntityId());
    const fallback = [...(previousFocused?.path ?? [])].reverse().flatMap((sourceNodeId) => {
      const visible = nextScene.nodes.find((node) => node.sourceNodeId === sourceNodeId);
      return visible ? [visible] : [];
    })[0];
    const focused = exact ?? fallback;
    this.focusedInstanceId.set(focused?.instanceId ?? null);
    this.selectedEntityId.set(focused?.entityId ?? null);
    if (preset.persistence?.enabled)
      localStorage.setItem(
        this.preferenceKey(preset.persistence.schemaVersion),
        JSON.stringify(candidate),
      );
  }

  isLayerOptionDisabled(index: number, layerId: string): boolean {
    const candidate = this.activeLayerIds().map((value, candidateIndex) =>
      candidateIndex === index ? layerId : value,
    );
    return !this.hasValidLayerOrder(candidate);
  }

  measuresFor(instanceId: string): readonly ResolvedNodeMeasure[] {
    return this.projectedMeasures().get(instanceId) ?? [];
  }

  nodeSizeScale(instanceId: string): number {
    return (
      this.measuresFor(instanceId).find(
        ({ appearance, hidden }) => appearance === 'area' && !hidden,
      )?.sizeScale ?? 1
    );
  }

  nodeMeasureLabel(instanceId: string): string {
    return this.measuresFor(instanceId)
      .filter(({ hidden }) => !hidden)
      .map(({ measure }) => measure.label)
      .join('; ');
  }

  nodeVisualMeasureLabel(instanceId: string): string {
    return this.measuresFor(instanceId)
      .filter(({ appearance, hidden }) => appearance === 'label' && !hidden)
      .map(({ measure }) => measure.label)
      .join('; ');
  }

  nodeHidden(instanceId: string): boolean {
    const measures = this.measuresFor(instanceId);
    return measures.length > 0 && measures.every(({ hidden }) => hidden);
  }

  nodeHasHalo(instanceId: string): boolean {
    return this.measuresFor(instanceId).some(
      ({ appearance, hidden }) => appearance === 'halo' && !hidden,
    );
  }

  activate(instanceId: string): void {
    const node = this.projected().nodes.find((candidate) => candidate.instanceId === instanceId);
    if (!node) return;
    this.focusedInstanceId.set(instanceId);
    this.selectedEntityId.set(node.entityId);
    if (node.entityType === 'aggregate') {
      this.instanceLimitOverride.set(
        this.definition().nodes.length + this.definition().edges.length + 1,
      );
      this.focusedInstanceId.set(null);
      this.selectedEntityId.set(null);
      return;
    }
    if (node.expandable && node.sourceNodeId) {
      this.breadcrumbNodeIds.update((ids) => [...ids, this.rootNodeId()]);
      this.rootOverride.set(node.sourceNodeId);
      this.instanceLimitOverride.set(null);
      this.focusedInstanceId.set(null);
      return;
    }
    this.navigateEntityHandler()?.(node.entityId);
    this.navigateEntity.emit(node.entityId);
  }

  activateFromKeyboard(event: KeyboardEvent, instanceId: string): void {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this.activate(instanceId);
  }

  navigateBreadcrumb(index: number): void {
    const path = this.breadcrumbNodeIds();
    const target = path[index];
    if (!target) return;
    this.rootOverride.set(target);
    this.instanceLimitOverride.set(null);
    this.breadcrumbNodeIds.set(path.slice(0, index));
    this.focusedInstanceId.set(null);
    this.selectedEntityId.set(null);
  }

  private hasValidLayerOrder(layerIds: readonly string[]): boolean {
    const orders = layerIds.map((id) => this.layerById().get(id)?.order);
    for (let index = 1; index < orders.length; index++)
      if (
        orders[index - 1] !== undefined &&
        orders[index] !== undefined &&
        orders[index]! <= orders[index - 1]!
      )
        return false;
    return true;
  }

  private preferenceKey(schemaVersion: string): string {
    return [
      'taxonomy-hierarchy',
      this.datasetId(),
      this.definition().rootEntityId,
      this.widgetId(),
      this.preset()?.id ?? 'default',
      schemaVersion,
    ].join('.');
  }
}
