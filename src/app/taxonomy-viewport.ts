import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { AppStore } from './core/app.store';
import { profileFor, profileFromEntry } from './core/beer-profile';
import { SceneNode } from './core/layout';
import { MetadataIcon } from './metadata-icon';
import { BeerBrand, brandsForEntry } from './core/data/brand-data';
import { indicatorsForEntry } from './core/data/icon-atlas';
import { AtlasIcon } from './atlas-icon';
@Component({
  selector: 'app-taxonomy-viewport',
  imports: [MetadataIcon, AtlasIcon],
  templateUrl: './taxonomy-viewport.html',
  styleUrl: './taxonomy-viewport.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxonomyViewport {
  readonly store = inject(AppStore);
  readonly host = viewChild.required<ElementRef<HTMLElement>>('viewport');
  readonly focusMode = signal(false);
  readonly focusRotation = signal(0);
  readonly selectedRoute = computed(() => {
    const route: SceneNode[] = [];
    let node = this.store.selected();
    while (node) {
      route.unshift(node);
      node = this.store.scene().nodes.find((candidate) => candidate.id === node?.parentId) ?? null;
    }
    return route.filter((routeNode) => routeNode.depth !== 0);
  });
  readonly detailContents = computed(() => {
    const selected = this.store.selected();
    if (!selected) return { categories: [], styles: [], brands: [] };
    const descendants: SceneNode[] = [];
    const pending = [selected.id];
    while (pending.length) {
      const parentId = pending.shift()!;
      const children = this.store
        .scene()
        .nodes.filter((node) => node.parentId === parentId)
        .sort((a, b) => a.depth - b.depth || a.order - b.order || a.title.localeCompare(b.title));
      descendants.push(...children);
      pending.push(...children.map((node) => node.id));
    }
    const categories = descendants.filter((node) => node.type !== 'style');
    const styles = descendants.filter((node) => node.type === 'style');
    const brandStyles = selected.type === 'style' ? [selected] : styles;
    const brands = [
      ...new Map(
        brandStyles.flatMap((style) => brandsForEntry(style.id)).map((brand) => [brand.id, brand]),
      ).values(),
    ].sort((a, b) => a.name.localeCompare(b.name));
    return { categories, styles, brands };
  });
  private drag?: { x: number; y: number; cx: number; cy: number };

  constructor() {
    afterNextRender(() => this.fit());
  }

  transform() {
    const c = this.store.camera();
    return `translate(${c.x} ${c.y}) scale(${c.scale}) rotate(${this.focusRotation()} ${this.store.scene().centerX} ${this.store.scene().centerY})`;
  }
  familyClass(n: SceneNode) {
    return `family-${n.family}`;
  }
  metadataLabel(n: SceneNode) {
    const m = n.metadata;
    if (!m) return '';
    return [
      m.color &&
        `${m.color.srmMin ?? '?'}–${m.color.srmMax ?? '?'} SRM ${m.color.descriptor ?? ''}`,
      m.glassware?.join(', '),
      m.fermentation?.join(', '),
      m.ingredients?.join(', '),
      m.conditioningAge &&
        `${m.conditioningAge.minimumDays ?? '?'}–${m.conditioningAge.maximumDays ?? '?'} days ${m.conditioningAge.method ?? ''}`,
    ]
      .filter(Boolean)
      .join(' · ');
  }
  profile(n: SceneNode) {
    const entry = this.store.entriesById.get(n.id);
    if (!entry) return profileFor(n);
    const sourced = profileFromEntry(entry);
    if (sourced.description.startsWith('A published beer-style entry')) {
      const distinguishing = profileFor(n).description;
      sourced.description = distinguishing;
      sourced.facts = sourced.facts.map((fact) =>
        fact.icon === 'description' ? { ...fact, value: distinguishing } : fact,
      );
    }
    return sourced;
  }
  brands(n: SceneNode) {
    return brandsForEntry(n.id);
  }
  visibleBrands(n: SceneNode) {
    return this.brands(n).slice(0, 30);
  }
  indicators(n: SceneNode) {
    const entry = this.store.entriesById.get(n.id);
    return entry ? indicatorsForEntry(entry) : [];
  }
  openDetail(n: SceneNode) {
    this.immersiveFocus(n);
  }
  brandUrl(brand: BeerBrand) {
    return brand.websiteUrl ?? `https://www.google.com/search?q=${encodeURIComponent(brand.name)}`;
  }
  pointerDown(e: PointerEvent) {
    if (this.focusMode()) return;
    if ((e.target as Element).closest('.node')) return;
    this.drag = {
      x: e.clientX,
      y: e.clientY,
      cx: this.store.camera().x,
      cy: this.store.camera().y,
    };
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  }
  pointerMove(e: PointerEvent) {
    if (this.focusMode()) return;
    if (this.drag)
      this.store.setCamera({
        x: this.drag.cx + e.clientX - this.drag.x,
        y: this.drag.cy + e.clientY - this.drag.y,
      });
  }
  pointerUp() {
    this.drag = undefined;
  }
  wheel(e: WheelEvent) {
    e.preventDefault();
    if (this.focusMode()) return;
    const rect = this.host().nativeElement.getBoundingClientRect();
    if (e.ctrlKey || e.metaKey || this.store.settings().wheelMode === 'zoom')
      this.store.zoom(Math.exp(-e.deltaY * 0.0015), e.clientX - rect.left, e.clientY - rect.top);
    else {
      const c = this.store.camera();
      this.store.setCamera({ x: c.x - e.deltaX, y: c.y - e.deltaY });
    }
  }
  focus(n: SceneNode) {
    const rect = this.host().nativeElement.getBoundingClientRect(),
      c = this.store.camera();
    this.store.selectedId.set(n.id);
    this.store.setCamera({
      x: rect.width / 2 - n.centerX * c.scale,
      y: rect.height / 2 - n.centerY * c.scale,
    });
  }
  immersiveFocus(n: SceneNode) {
    this.store.selectedId.set(n.id);
    this.focusRotation.set(0);
    this.focusMode.set(true);
  }
  closeDetails(event?: Event) {
    event?.stopPropagation();
    this.focusMode.set(false);
    this.focusRotation.set(0);
    this.store.selectedId.set(null);
  }
  fit() {
    if (this.focusMode()) return;
    const r = this.host().nativeElement.getBoundingClientRect();
    this.store.fit(r.width, r.height);
  }
  root() {
    this.focus(this.store.scene().nodes.find((n) => n.id === 'beer')!);
  }
  @HostListener('window:keydown', ['$event']) keys(e: KeyboardEvent) {
    if ((e.target as HTMLElement).matches('input,textarea,select')) return;
    if (this.focusMode()) return;
    const c = this.store.camera();
    if (e.key === '+' || e.key === '=') this.store.zoom(1.18);
    else if (e.key === '-') this.store.zoom(0.84);
    else if (e.key === '0') this.fit();
    else if (e.key === 'Home') this.root();
    else if (e.key.startsWith('Arrow')) {
      const d = 48;
      this.store.setCamera({
        x: c.x + (e.key === 'ArrowLeft' ? d : e.key === 'ArrowRight' ? -d : 0),
        y: c.y + (e.key === 'ArrowUp' ? d : e.key === 'ArrowDown' ? -d : 0),
      });
    } else return;
    e.preventDefault();
  }
}
