import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  viewChild,
} from '@angular/core';
import { AppStore } from './core/app.store';
import { PositionedNode } from './taxonomy/layout/circular-layout';
import { GenericTaxonomyProfile } from './taxonomy/components/taxonomy-profile';
import { Router } from '@angular/router';
import { DashboardOverlayState } from './taxonomy/dashboard/dashboard-overlay.state';

@Component({
  selector: 'app-taxonomy-viewport',
  imports: [GenericTaxonomyProfile],
  templateUrl: './taxonomy-viewport.html',
  styleUrl: './taxonomy-viewport.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxonomyViewport {
  readonly store = inject(AppStore);
  private readonly router = inject(Router);
  readonly dashboardOverlay = inject(DashboardOverlayState);
  readonly host = viewChild.required<ElementRef<HTMLElement>>('viewport');
  private readonly pointers = new Map<number, { x: number; y: number }>();
  private drag?: { x: number; y: number; cameraX: number; cameraY: number };
  private pinch?: { distance: number; scale: number };

  constructor() {
    afterNextRender(() => this.fit());
  }
  transform() {
    const camera = this.store.camera();
    return `translate(${camera.x} ${camera.y}) scale(${camera.scale})`;
  }
  radialLabel(node: PositionedNode) {
    return (
      node.labelOrientation === 'radial' ||
      (node.labelOrientation === 'auto' &&
        (node.kind === 'entry' || (node.kind === 'dimension-value' && node.depth >= 2)))
    );
  }
  labelRotation(node: PositionedNode) {
    if (
      node.labelOrientation === 'horizontal' ||
      (node.labelOrientation === 'auto' && !this.radialLabel(node))
    )
      return 0;
    const degrees = ((node.angle * 180) / Math.PI + 360) % 360;
    const base = node.labelOrientation === 'tangential' ? degrees + 90 : degrees;
    const normalized = ((base % 360) + 360) % 360;
    return normalized > 90 && normalized < 270 ? base + 180 : base;
  }
  labelX(node: PositionedNode) {
    if (!this.radialLabel(node)) return 0;
    const degrees = ((node.angle * 180) / Math.PI + 360) % 360;
    return (degrees > 90 && degrees < 270 ? -1 : 1) * (node.layout.width / 2 + 24);
  }
  labelY(node: PositionedNode) {
    if (this.radialLabel(node) || node.kind === 'root') return 5;
    return node.layout.height / 2 + 28;
  }
  labelAnchor(node: PositionedNode) {
    if (!this.radialLabel(node)) return 'middle';
    return this.labelX(node) < 0 ? 'end' : 'start';
  }
  showLabel(node: PositionedNode) {
    if (this.store.focusedRouteInstanceIds().includes(node.instanceId)) return true;
    return (
      this.store.settings().labels &&
      this.store.camera().scale >= (node.layout.minimumLabelZoom ?? 0)
    );
  }
  pointerDown(event: PointerEvent) {
    if (
      (event.target as Element).closest(
        '.selection-details,.node,button,a,input,select,textarea,[role="button"]',
      )
    )
      return;
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    (event.currentTarget as Element).setPointerCapture(event.pointerId);
    if (this.pointers.size === 1) {
      const camera = this.store.camera();
      this.drag = { x: event.clientX, y: event.clientY, cameraX: camera.x, cameraY: camera.y };
    } else if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()];
      this.pinch = {
        distance: Math.hypot(second!.x - first!.x, second!.y - first!.y),
        scale: this.store.camera().scale,
      };
      this.drag = undefined;
    }
  }
  pointerMove(event: PointerEvent) {
    if (!this.pointers.has(event.pointerId)) return;
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (this.pointers.size === 2 && this.pinch) {
      const [first, second] = [...this.pointers.values()];
      const distance = Math.hypot(second!.x - first!.x, second!.y - first!.y);
      this.store.setCamera({
        scale: (this.pinch.scale * distance) / Math.max(1, this.pinch.distance),
      });
    } else if (this.drag) {
      this.store.setCamera({
        x: this.drag.cameraX + event.clientX - this.drag.x,
        y: this.drag.cameraY + event.clientY - this.drag.y,
      });
    }
  }
  pointerUp(event?: PointerEvent) {
    if (event) this.pointers.delete(event.pointerId);
    else this.pointers.clear();
    if (this.pointers.size < 2) this.pinch = undefined;
    if (!this.pointers.size) this.drag = undefined;
  }
  wheel(event: WheelEvent) {
    if ((event.target as Element).closest('.selection-details')) return;
    event.preventDefault();
    const rect = this.host().nativeElement.getBoundingClientRect();
    if (event.ctrlKey || event.metaKey || this.store.settings().wheelMode === 'zoom')
      this.store.zoom(
        Math.exp(-event.deltaY * 0.0015),
        event.clientX - rect.left,
        event.clientY - rect.top,
      );
    else {
      const camera = this.store.camera();
      this.store.setCamera({ x: camera.x - event.deltaX, y: camera.y - event.deltaY });
    }
  }
  select(node: PositionedNode) {
    this.store.selectProjectedNode(node, 'compact');
  }
  openDetail(node: PositionedNode) {
    this.store.selectProjectedNode(node, 'expanded');
    const dashboard = this.store.module.presentation.dashboard;
    const targetKind = node.kind === 'entry' ? 'entry' : node.kind === 'group' ? 'group' : null;
    if (targetKind && dashboard?.targetKinds.includes(targetKind))
      void this.router.navigate(['/atlas', this.store.module.meta.id, targetKind, node.entityId], {
        queryParamsHandling: 'preserve',
        state: { fromAtlasCanvas: true },
      });
  }
  dashboardTarget() {
    const target = this.store.selectedProfileTarget();
    return target?.kind === 'entry' || target?.kind === 'group' ? target : null;
  }
  openSelectedDashboard() {
    const target = this.dashboardTarget();
    const dashboard = this.store.module.presentation.dashboard;
    if (!target || !dashboard?.targetKinds.includes(target.kind)) return;
    this.store.detailMode.set('expanded');
    void this.router.navigate(['/atlas', this.store.module.meta.id, target.kind, target.id], {
      queryParamsHandling: 'preserve',
      state: { fromAtlasCanvas: true },
    });
  }
  closeDetails(event?: Event) {
    event?.stopPropagation();
    this.store.clearSelection();
  }
  fit() {
    const rect = this.host().nativeElement.getBoundingClientRect();
    this.store.fit(rect.width, rect.height);
  }
  root() {
    const root = this.store.positionedScene().nodes.find(({ kind }) => kind === 'root');
    if (root) this.select(root);
  }
  hitRadius(node: PositionedNode): number {
    return Math.max(22, node.layout.width / 2, node.layout.height / 2);
  }
  @HostListener('window:keydown', ['$event']) keys(event: KeyboardEvent) {
    if (event.target instanceof HTMLElement && event.target.matches('input,textarea,select'))
      return;
    const camera = this.store.camera();
    if (event.key === '+' || event.key === '=') this.store.zoom(1.18);
    else if (event.key === '-') this.store.zoom(0.84);
    else if (event.key === '0') this.fit();
    else if (event.key === 'Home') this.root();
    else if (event.key === 'Escape') this.closeDetails();
    else if (event.key.startsWith('Arrow')) {
      const distance = 48;
      this.store.setCamera({
        x:
          camera.x +
          (event.key === 'ArrowLeft' ? distance : event.key === 'ArrowRight' ? -distance : 0),
        y:
          camera.y +
          (event.key === 'ArrowUp' ? distance : event.key === 'ArrowDown' ? -distance : 0),
      });
    } else return;
    event.preventDefault();
  }
}
