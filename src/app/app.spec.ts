import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { layoutTaxonomy } from './core/layout';
import { validateTaxonomy } from './core/taxonomy.model';
import seed from '../assets/taxonomy.json';
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
    expect(el.querySelectorAll('.toolbar button').length).toBe(6);
    expect(el.querySelector('.entry-search input')).toBeTruthy();
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
