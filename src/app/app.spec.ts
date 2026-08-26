import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { layoutTaxonomy } from './core/layout';
import { validateTaxonomy } from './core/taxonomy.model';
import seed from '../assets/taxonomy.json';
import { beerTaxonomyEntries } from './core/data/beer-taxonomy-entries';
import { beerBrands, brandsForEntry } from './core/data/brand-data';
import {
  createFilterOptions,
  createTaxonomyDocument,
  DEFAULT_RINGS,
} from './core/data/taxonomy-data';
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
  it('links imported PDF brands only to current taxonomy entry ids', () => {
    const entryIds = new Set<string>(beerTaxonomyEntries.map((entry) => entry.id));
    expect(beerBrands.length).toBeGreaterThan(2000);
    expect(beerBrands.flatMap((brand) => brand.taxonomyEntryIds).every((id) => entryIds.has(id))).toBe(true);
    expect(brandsForEntry('style:american-style-india-pale-ale').length).toBeGreaterThan(100);
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
