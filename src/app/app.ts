import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppStore } from './core/app.store';
import { TaxonomyViewport } from './taxonomy-viewport';
import { FilterTagSelect } from './filter-tag-select';
import { RingSeparationMenu } from './ring-separation-menu';
import { SearchDocument } from './taxonomy/contracts/taxonomy';
@Component({
  selector: 'app-root',
  host: {
    '[attr.data-taxonomy-theme]': 'store.theme.id',
    '[attr.data-taxonomy-texture]': 'store.theme.texture',
    '[style.--tx-texture-strength]': "store.theme.texture === 'paper-ledger' ? '6%' : '0%'",
    '[style.--tx-texture-opacity]': "store.theme.texture === 'paper-ledger' ? '0.1' : '0'",
    '[style.--tx-ink]': 'store.theme.tokens.ink',
    '[style.--tx-deep-ink]': 'store.theme.tokens.deepInk',
    '[style.--tx-olive]': 'store.theme.tokens.olive',
    '[style.--tx-olive-light]': 'store.theme.tokens.oliveLight',
    '[style.--tx-paper]': 'store.theme.tokens.paper',
    '[style.--tx-paper-light]': 'store.theme.tokens.paperLight',
    '[style.--tx-paper-dark]': 'store.theme.tokens.paperDark',
    '[style.--tx-brass]': 'store.theme.tokens.brass',
    '[style.--tx-amber]': 'store.theme.tokens.amber',
    '[style.--tx-yellow]': 'store.theme.tokens.yellow',
    '[style.--tx-teal]': 'store.theme.tokens.teal',
    '[style.--tx-oxblood]': 'store.theme.tokens.oxblood',
    '[style.--tx-green]': 'store.theme.tokens.green',
    '[style.--tx-blue]': 'store.theme.tokens.blue',
    '[style.--tx-radius.px]': 'store.theme.geometry.controlRadius',
    '[style.--tx-panel-radius.px]': 'store.theme.geometry.panelRadius',
    '[style.--tx-tile-radius.px]': 'store.theme.geometry.tileRadius',
    '[style.--tx-border-width.px]': 'store.theme.geometry.borderWidth',
    '[style.--tx-focus-width.px]': 'store.theme.geometry.focusWidth',
  },
  imports: [FormsModule, DatePipe, TaxonomyViewport, FilterTagSelect, RingSeparationMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly store = inject(AppStore);
  readonly menuOpen = signal(false);
  readonly accountOpen = signal(false);
  readonly settingsOpen = signal(false);
  readonly dialog = signal<string | null>(null);
  readonly draft = signal({
    title: '',
    type: '',
    description: '',
    placement:
      this.store.module.records.groups.find(({ parentGroupId }) => parentGroupId === null)?.id ??
      '',
  });
  readonly searchQuery = signal('');
  readonly searchSuggestions = computed(() => {
    return this.store
      .search(this.searchQuery())
      .map((document) => ({ document, score: document.weight ?? 1 }))
      .slice(0, 10);
  });
  selectSearchResult(document: SearchDocument): void {
    this.store.clearFilters();
    const targetId = document.targetId;
    if (document.targetType === 'related-entity') {
      this.searchQuery.set(document.title);
      this.store.selectProfileTarget({ kind: 'related-entity', id: targetId });
      return;
    }
    if (document.targetType === 'group') {
      this.searchQuery.set(document.title);
      this.store.selectProfileTarget({ kind: 'group', id: targetId });
      return;
    }
    const genericNode = this.store
      .positionedScene()
      .nodes.find((candidate) => candidate.entityId === targetId);
    if (genericNode) {
      this.searchQuery.set(genericNode.title);
      this.store.selectProjectedNode(genericNode);
    }
  }
  clearSearch() {
    this.searchQuery.set('');
  }
  open(kind: string) {
    this.dialog.set(kind);
    this.menuOpen.set(false);
  }
  close() {
    this.dialog.set(null);
  }
  submit() {
    if (!this.draft().title.trim()) return;
    const items = this.submissions();
    items.push({ ...this.draft(), status: 'pending', submittedAt: new Date().toISOString() });
    localStorage.setItem(`${this.storagePrefix}.submissions`, JSON.stringify(items));
    this.open('submissions');
  }
  submissions(): any[] {
    try {
      return JSON.parse(localStorage.getItem(`${this.storagePrefix}.submissions`) ?? '[]');
    } catch {
      return [];
    }
  }
  storageRows() {
    return Object.keys(localStorage)
      .filter((k) => k.startsWith(this.storagePrefix))
      .map((k) => ({
        key: k,
        value: localStorage.getItem(k) ?? '',
        size: (localStorage.getItem(k) ?? '').length,
      }));
  }
  clearData() {
    for (const key of Object.keys(localStorage))
      if (key.startsWith(this.storagePrefix)) localStorage.removeItem(key);
  }
  private get storagePrefix() {
    return `taxonomy.${this.store.module.meta.id}`;
  }
  @HostListener('document:keydown.escape') escape() {
    if (this.dialog()) this.close();
    else this.menuOpen.set(false);
  }
}
