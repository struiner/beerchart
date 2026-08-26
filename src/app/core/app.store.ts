import { Injectable, computed, signal } from '@angular/core';
import { layoutTaxonomy } from './layout';
import { beerTaxonomyEntries } from './data/beer-taxonomy-entries';
import { BeerTaxonomyEntry, RingSeparation } from './data/beer-taxonomy-entry';
import {
  createFilterOptions,
  createTaxonomyDocument,
  DEFAULT_RINGS,
  entryFilterIds,
  RING_OPTIONS,
} from './data/taxonomy-data';
export interface ViewportSettings {
  labels: boolean;
  connectors: boolean;
  animations: boolean;
  wheelMode: 'pan' | 'zoom';
}
const defaults: ViewportSettings = {
  labels: true,
  connectors: true,
  animations: true,
  wheelMode: 'pan',
};
@Injectable({ providedIn: 'root' })
export class AppStore {
  readonly entries = beerTaxonomyEntries as readonly BeerTaxonomyEntry[];
  readonly entriesById = new Map(this.entries.map((entry) => [entry.id, entry]));
  readonly ringOptions = RING_OPTIONS;
  readonly rings = signal<RingSeparation>(this.readRings());
  readonly filterOptions = createFilterOptions(this.entries);
  readonly selectedFilters = signal<readonly string[]>([]);
  readonly filteredEntries = computed(() => {
    const selected = this.selectedFilters();
    if (!selected.length) return this.entries;
    return this.entries.filter((entry) => {
      const values = entryFilterIds(entry);
      return selected.every((id) => values.has(id));
    });
  });
  readonly document = computed(() => createTaxonomyDocument(this.filteredEntries(), this.rings()));
  readonly scene = computed(() => layoutTaxonomy(this.document().nodes));
  readonly camera = signal({ x: 48, y: 40, scale: 0.72 });
  readonly selectedId = signal<string | null>(null);
  readonly settings = signal<ViewportSettings>(this.readSettings());
  readonly selected = computed(
    () => this.scene().nodes.find((n) => n.id === this.selectedId()) ?? null,
  );
  readonly selectedEntry = computed(() => this.entriesById.get(this.selectedId() ?? '') ?? null);
  readonly selectedPath = computed(() => {
    const result = new Set<string>();
    let node = this.selected();
    while (node) {
      result.add(node.id);
      node = this.scene().nodes.find((n) => n.id === node?.parentId) ?? null;
    }
    return result;
  });
  setCamera(p: Partial<{ x: number; y: number; scale: number }>) {
    this.camera.update((c) => ({
      ...c,
      ...p,
      scale: Math.min(2.4, Math.max(0.22, p.scale ?? c.scale)),
    }));
  }
  zoom(f: number, px = innerWidth / 2, py = innerHeight / 2) {
    const c = this.camera(),
      next = Math.min(2.4, Math.max(0.22, c.scale * f));
    this.setCamera({
      scale: next,
      x: px - ((px - c.x) * next) / c.scale,
      y: py - ((py - c.y) * next) / c.scale,
    });
  }
  fit(w: number, h: number) {
    const s = this.scene(),
      scale = Math.min((w - 64) / s.width, (h - 64) / s.height, 1);
    this.setCamera({ scale, x: (w - s.width * scale) / 2, y: (h - s.height * scale) / 2 });
  }
  updateSettings(p: Partial<ViewportSettings>) {
    this.settings.update((s) => ({ ...s, ...p }));
    localStorage.setItem('beer-taxonomy.settings.v1', JSON.stringify(this.settings()));
  }
  updateRings(patch: Partial<RingSeparation>) {
    this.rings.update((rings) => ({ ...rings, ...patch }));
    localStorage.setItem('beer-taxonomy.rings.v1', JSON.stringify(this.rings()));
    this.selectedId.set(null);
  }
  toggleFilter(id: string) {
    this.selectedFilters.update((selected) =>
      selected.includes(id) ? selected.filter((value) => value !== id) : [...selected, id],
    );
    this.selectedId.set(null);
  }
  clearFilters() {
    this.selectedFilters.set([]);
  }
  private readSettings(): ViewportSettings {
    try {
      return {
        ...defaults,
        ...JSON.parse(localStorage.getItem('beer-taxonomy.settings.v1') ?? '{}'),
      };
    } catch {
      return defaults;
    }
  }
  private readRings(): RingSeparation {
    try {
      const value = {
        ...DEFAULT_RINGS,
        ...JSON.parse(localStorage.getItem('beer-taxonomy.rings.v1') ?? '{}'),
      } as RingSeparation;
      const allowed = new Set(this.ringOptions.map((option) => option.value));
      const axes = [value.first, value.second, value.third];
      return axes.every((axis) => allowed.has(axis)) && new Set(axes).size === 3
        ? value
        : DEFAULT_RINGS;
    } catch {
      return DEFAULT_RINGS;
    }
  }
}
