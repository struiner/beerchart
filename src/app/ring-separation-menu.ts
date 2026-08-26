import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppStore } from './core/app.store';
import { RingSeparation, RingSeparationAxis } from './core/data/beer-taxonomy-entry';
@Component({
  selector: 'app-ring-separation-menu',
  imports: [FormsModule],
  template: ` <div class="dropdown">
    <button
      type="button"
      class="toggle"
      aria-label="Configure separation rings"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="10" /></svg
      ><span>Rings</span>
    </button>
    @if (open()) {
      <section class="panel" aria-label="Ring separation">
        <header>
          <strong>Ring separation</strong
          ><small>Arrange the atlas using three independent classification axes.</small>
        </header>
        @for (ring of ringKeys; track ring; let index = $index) {
          <label
            ><span
              ><b>{{ index + 1 }}</b
              >{{ labels[index] }}</span
            ><select
              [attr.aria-label]="labels[index]"
              [ngModel]="store.rings()[ring]"
              (ngModelChange)="change(ring, $event)"
            >
              @for (option of store.ringOptions; track option.value) {
                <option [value]="option.value" [disabled]="usedByOther(ring, option.value)">
                  {{ option.label }}
                </option>
              }</select
            ><small>{{ description(store.rings()[ring]) }}</small></label
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
  readonly ringKeys = ['first', 'second', 'third'] as const;
  readonly labels = ['First ring', 'Second ring', 'Third ring'];
  change(ring: keyof RingSeparation, value: RingSeparationAxis) {
    this.store.updateRings({ [ring]: value });
  }
  usedByOther(ring: keyof RingSeparation, value: RingSeparationAxis) {
    return this.ringKeys.some((key) => key !== ring && this.store.rings()[key] === value);
  }
  description(value: RingSeparationAxis) {
    return this.store.ringOptions.find((option) => option.value === value)?.description ?? '';
  }
}
