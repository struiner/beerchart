import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AppStore } from './core/app.store';

@Component({
  selector: 'app-ring-separation-menu',
  template: `<div class="dropdown">
    <button
      type="button"
      class="toggle"
      aria-label="Configure separation rings"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="10" /></svg
      ><span>Rings</span>
    </button>
    @if (open()) {
      <section class="panel" aria-label="Ring separation" data-testid="ring-menu">
        <header>
          <strong>Ring separation</strong
          ><small>Arrange the atlas using compatible dimensions.</small>
        </header>
        @for (dimensionId of store.ringOrder(); track $index) {
          <label
            ><span
              ><b>{{ $index + 1 }}</b
              >Ring {{ $index + 1 }}</span
            ><select
              [attr.aria-label]="'Ring ' + ($index + 1)"
              [value]="dimensionId"
              (change)="store.updateRing($index, $any($event.target).value)"
            >
              @for (dimension of store.module.interpretation.dimensions; track dimension.id) {
                <option [value]="dimension.id">{{ dimension.label }}</option>
              }</select
            ><small>{{ description(dimensionId) }}</small></label
          >
        }
      </section>
    }
  </div>`,
  styleUrl: './toolbar-dropdowns.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RingSeparationMenu {
  readonly store = inject(AppStore);
  readonly open = signal(false);
  description(id: string) {
    return (
      this.store.module.interpretation.dimensions.find((value) => value.id === id)?.description ??
      ''
    );
  }
}
