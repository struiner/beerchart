import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { layoutTaxonomy } from './core/layout';
import { validateTaxonomy } from './core/taxonomy.model';
import seed from '../assets/taxonomy.json';
import { beerTaxonomyEntries } from './core/data/beer-taxonomy-entries';
import { beerBrands, brandsForEntry } from './core/data/brand-data';
import { indicatorForFilter, indicatorsForEntry } from './core/data/icon-atlas';
import {
  createFilterOptions,
  createTaxonomyDocument,
  DEFAULT_RINGS,
} from './core/data/taxonomy-data';
import { TaxonomyViewport } from './taxonomy-viewport';
describe('Beer Taxonomy Atlas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });
  it('renders the minimal shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.brand')?.textContent).toContain('Beer Taxonomy');
    expect(el.querySelector('app-taxonomy-viewport')).toBeTruthy();
    expect(el.querySelector('app-ring-separation-menu')).toBeTruthy();
    expect(el.querySelector('app-filter-tag-select')).toBeTruthy();
    expect(el.querySelector('.minimap')).toBeFalsy();
    expect(el.querySelector('.entry-search input')).toBeTruthy();
  });
  it('builds three configurable rings from all typed entries', () => {
    const document = createTaxonomyDocument(beerTaxonomyEntries, DEFAULT_RINGS);
    expect(document.nodes.filter((node) => node.type === 'style')).toHaveLength(168);
    expect(document.nodes.some((node) => node.id.startsWith('ring-1:'))).toBe(true);
    expect(document.nodes.some((node) => node.id.startsWith('ring-2:'))).toBe(true);
    expect(document.nodes.some((node) => node.id.startsWith('ring-3:'))).toBe(true);
  });
  it('derives category-qualified filter options from values in the dataset', () => {
    const options = createFilterOptions(beerTaxonomyEntries);
    expect(options.some((option) => option.id === 'family:ale')).toBe(true);
    expect(options.some((option) => option.id === 'glassware:tulip')).toBe(true);
    expect(new Set(options.map((option) => option.id)).size).toBe(options.length);
  });
  it('maps taxonomy facts and filter values to valid atlas sprites', () => {
    const indicators = beerTaxonomyEntries.flatMap((entry) => [...indicatorsForEntry(entry)]);
    expect(indicators.length).toBeGreaterThan(beerTaxonomyEntries.length);
    expect(
      indicators.every(
        ({ sprite }) =>
          sprite.frame.x >= 0 &&
          sprite.frame.y >= 0 &&
          sprite.frame.x + sprite.frame.w <= 1254 &&
          sprite.frame.y + sprite.frame.h <= 1254,
      ),
    ).toBe(true);

    const ale = createFilterOptions(beerTaxonomyEntries).find(({ id }) => id === 'family:ale');
    expect(indicatorForFilter(ale)?.sprite.id).toBe('family.ale');
  });
  it('links imported PDF brands only to current taxonomy entry ids', () => {
    const entryIds = new Set<string>(beerTaxonomyEntries.map((entry) => entry.id));
    expect(beerBrands.length).toBeGreaterThan(2000);
    expect(
      beerBrands.flatMap((brand) => brand.taxonomyEntryIds).every((id) => entryIds.has(id)),
    ).toBe(true);
    expect(brandsForEntry('style:american-style-india-pale-ale').length).toBeGreaterThan(100);
    expect(brandsForEntry('style:gluten-free-beer').map((brand) => brand.name)).toEqual([
      'Lakefront New Grist',
      'Ground Breaker Brewing',
      "Green's Gluten-Free Beer",
    ]);
    expect(new Set(beerBrands.map((brand) => brand.id)).size).toBe(beerBrands.length);
    expect(beerTaxonomyEntries.every((entry) => brandsForEntry(entry.id).length > 0)).toBe(true);
    expect(
      beerBrands
        .find((brand) => brand.id === 'brand-stone-arrogant-bastard')
        ?.taxonomyEntryIds.includes('style:american-style-strong-pale-ale'),
    ).toBe(true);
    expect(
      new Set(beerBrands.map((brand) => brand.country?.iso3166Alpha2).filter(Boolean)),
    ).toEqual(new Set(['CN', 'BR', 'RU', 'ES', 'JP', 'ZA', 'VN', 'IN', 'NA']));
    for (const [countryCode, expectedCount] of Object.entries({
      CN: 5,
      BR: 5,
      RU: 5,
      ES: 5,
      JP: 5,
      ZA: 4,
      NA: 1,
      VN: 5,
      IN: 5,
    })) {
      expect(
        beerBrands.filter((brand) => brand.country?.iso3166Alpha2 === countryCode).length,
      ).toBeGreaterThanOrEqual(expectedCount);
    }
    expect(
      beerBrands.find((brand) => brand.id === 'brand-asahi-super-dry')?.taxonomyEntryIds,
    ).toContain('style:rice-lager');
    expect(
      beerBrands.find((brand) => brand.id === 'brand-kingfisher-strong')?.taxonomyEntryIds,
    ).toEqual(['style:other-strong-ale-or-lager']);
  });
  it('validates the seed and reaches one root', () => {
    const doc = validateTaxonomy(seed);
    expect(doc.nodes.filter((n) => n.parentId === null)).toHaveLength(1);
    expect(doc.nodes.filter((n) => n.type === 'style')).toHaveLength(168);
  });

  it('creates a screen-space SVG scene with rendered taxonomy nodes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const scene = (fixture.nativeElement as HTMLElement).querySelector(
      'app-taxonomy-viewport svg.scene',
    );
    expect(scene?.hasAttribute('viewBox')).toBe(false);
    expect(scene?.querySelectorAll('.node').length).toBeGreaterThan(40);
  });
  it('opens and closes style details without moving the camera', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const viewport = fixture.debugElement.query(By.directive(TaxonomyViewport))
      .componentInstance as TaxonomyViewport;
    const style = viewport.store.scene().nodes.find((node) => node.type === 'style')!;
    const camera = { ...viewport.store.camera() };

    viewport.immersiveFocus(style);
    fixture.detectChanges();

    expect(viewport.store.camera()).toEqual(camera);
    expect(viewport.focusMode()).toBe(true);
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Selected station');

    const close = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.details-close',
    )!;
    close.click();
    fixture.detectChanges();
    expect(viewport.store.selectedId()).toBeNull();
    expect(viewport.focusMode()).toBe(false);
  });
  it('renders brands for Ginjo, Field and Experimental Beer details', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const viewport = fixture.debugElement.query(By.directive(TaxonomyViewport))
      .componentInstance as TaxonomyViewport;
    const expected = new Map([
      ['style:ginjo-beer-or-sake-yeast-beer', 4],
      ['style:field-beer', 5],
      ['style:experimental-beer', 4],
    ]);

    for (const [id, count] of expected) {
      const style = viewport.store.scene().nodes.find((node) => node.id === id)!;
      expect(brandsForEntry(id)).toHaveLength(count);
      viewport.immersiveFocus(style);
      fixture.detectChanges();
      expect(
        (fixture.nativeElement as HTMLElement).querySelectorAll('.focus-description .brand-tile')
          .length,
      ).toBe(count);
      viewport.closeDetails();
    }
  });
  it('lays nodes out deterministically without overlaps', () => {
    const doc = validateTaxonomy(seed);
    const a = layoutTaxonomy(doc.nodes),
      b = layoutTaxonomy(doc.nodes);
    expect(a).toEqual(b);
    for (let i = 0; i < a.nodes.length; i++)
      for (let j = i + 1; j < a.nodes.length; j++) {
        const x = a.nodes[i],
          y = a.nodes[j];
        const overlaps =
          x.x < y.x + y.width &&
          x.x + x.width > y.x &&
          x.y < y.y + y.height &&
          x.y + x.height > y.y;
        expect(overlaps).toBe(false);
      }
  });
  it('rejects duplicate ids', () => {
    const broken = structuredClone(seed) as any;
    broken.nodes.push({ ...broken.nodes[0] });
    expect(() => validateTaxonomy(broken)).toThrow(/Duplicate/);
  });
});
