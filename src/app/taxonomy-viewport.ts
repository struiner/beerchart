import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { AppStore } from './core/app.store';
import { profileFor } from './core/beer-profile';
import { SceneNode } from './core/layout';
import { MetadataIcon } from './metadata-icon';
@Component({
  selector: 'app-taxonomy-viewport',
  imports: [MetadataIcon],
  templateUrl: './taxonomy-viewport.html',
  styleUrl: './taxonomy-viewport.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxonomyViewport {
  readonly store = inject(AppStore);
  readonly host = viewChild.required<ElementRef<HTMLElement>>('viewport');
  readonly focusMode = signal(false);
  readonly focusRotation = signal(0);
  private drag?: { x: number; y: number; cx: number; cy: number };
  private focusAnimation?: number;

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
    return profileFor(n);
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
    this.focusMode.set(true);
    this.animateFocus(n);
  }
  backFromFocus() {
    if (this.focusAnimation) cancelAnimationFrame(this.focusAnimation);
    this.focusMode.set(false);
    this.focusRotation.set(0);
    this.fit();
  }
  private animateFocus(n: SceneNode) {
    if (this.focusAnimation) cancelAnimationFrame(this.focusAnimation);
    const rect = this.host().nativeElement.getBoundingClientRect();
    const start = { ...this.store.camera(), rotation: this.focusRotation() };
    const scale = Math.min(1.15, Math.max(start.scale, 0.82));
    const rotation = ((270 - n.angle + 540) % 360) - 180;
    const radians = (rotation * Math.PI) / 180;
    const center = this.store.scene();
    const rotatedX = center.centerX + (n.centerX - center.centerX) * Math.cos(radians) - (n.centerY - center.centerY) * Math.sin(radians);
    const rotatedY = center.centerY + (n.centerX - center.centerX) * Math.sin(radians) + (n.centerY - center.centerY) * Math.cos(radians);
    const target = {
      x: Math.max(0, rect.width * 0.28) - rotatedX * scale,
      y: 76 - rotatedY * scale,
    };
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || !this.store.settings().animations;
    if (reduced) {
      this.focusRotation.set(rotation);
      this.store.setCamera({ ...target, scale });
      return;
    }
    const startedAt = performance.now();
    const duration = 720;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.focusRotation.set(start.rotation + (rotation - start.rotation) * eased);
      this.store.setCamera({
        x: start.x + (target.x - start.x) * eased,
        y: start.y + (target.y - start.y) * eased,
        scale: start.scale + (scale - start.scale) * eased,
      });
      if (progress < 1) this.focusAnimation = requestAnimationFrame(tick);
    };
    this.focusAnimation = requestAnimationFrame(tick);
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
