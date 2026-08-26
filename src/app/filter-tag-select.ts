import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AppStore } from './core/app.store';
import { AtlasIcon } from './atlas-icon';
import { indicatorForFilter } from './core/data/icon-atlas';
@Component({
  selector: 'app-filter-tag-select',
  imports: [AtlasIcon],
  template: ` <div class="dropdown">
    <button
      type="button"
      class="toggle"
      aria-label="Filter taxonomy entries"
      [attr.aria-expanded]="open()"
      [class.active]="store.selectedFilters().length"
      (click)="open.set(!open())"
    >
      <svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" /></svg
      ><span
        >Filter
        @if (store.selectedFilters().length) {
          · {{ store.selectedFilters().length }}
        }
      </span>
    </button>
    @if (open()) {
      <section class="panel filter" aria-label="Filter taxonomy">
        <header>
          <strong>Filter entries</strong
          ><small>{{ store.filteredEntries().length }} of {{ store.entries.length }} styles</small
          ><button
            type="button"
            (click)="store.clearFilters()"
            [disabled]="!store.selectedFilters().length"
          >
            Clear
          </button>
        </header>
        <div class="tag-input">
          @for (id of store.selectedFilters(); track id) {
            <button
              type="button"
              class="tag"
              [class.icon-tag]="indicator(option(id))"
              [title]="'Remove filter: ' + option(id)?.label"
              [attr.aria-label]="'Remove filter: ' + option(id)?.label"
              (click)="store.toggleFilter(id)"
            >
              @if (indicator(option(id)); as icon) {
                <app-atlas-icon [sprite]="icon.sprite" [title]="icon.title" />
              } @else {
                {{ option(id)?.label }}
              }
              <span aria-hidden="true">×</span>
            </button>
          }
          <input
            #input
            aria-label="Search filter values"
            autocomplete="off"
            placeholder="Search all defined values"
            [value]="query()"
            (input)="query.set(input.value)"
            (keydown.escape)="open.set(false)"
          />
        </div>
        <div class="suggestions" role="listbox">
          @for (item of suggestions(); track item.id) {
            <button
              type="button"
              role="option"
              (click)="store.toggleFilter(item.id); query.set('')"
            >
              @if (indicator(item); as icon) {
                <app-atlas-icon [sprite]="icon.sprite" [title]="icon.title" />
              }
              <span
                ><small>{{ item.kind }}</small
                >{{ item.label }}</span
              ><b>{{ item.count }}</b>
            </button>
          } @empty {
            <p>No matching values</p>
          }
        </div>
      </section>
    }
  </div>`,
  styleUrl: './toolbar-dropdowns.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTagSelect {
  readonly store = inject(AppStore);
  readonly open = signal(false);
  readonly query = signal('');
  readonly suggestions = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.store.filterOptions
      .filter(
        (option) =>
          !this.store.selectedFilters().includes(option.id) &&
          (!q || option.label.toLowerCase().includes(q) || option.kind.includes(q)),
      )
      .slice(0, 60);
  });
  option(id: string) {
    return this.store.filterOptions.find((option) => option.id === id);
  }
  indicator = indicatorForFilter;
}
