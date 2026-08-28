import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { AppStore } from './core/app.store';
import { TaxonomyViewport } from './taxonomy-viewport';
import { provideTaxonomy } from './taxonomy/contracts/taxonomy-provider';
import { PositionedNode } from './taxonomy/layout/circular-layout';
import { syntheticTaxonomy } from './taxonomy/testing/synthetic-taxonomy.fixture';

describe('generic application shell', () => {
  it('boots and interacts with the specimen module without beer UI assumptions', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTaxonomy(syntheticTaxonomy)],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const store = TestBed.inject(AppStore);
    const element = fixture.nativeElement as HTMLElement;
    expect(store.renderer).toBe('generic-taxonomy');
    expect(store.theme.id).toBe('generic-taxonomy');
    expect(store.theme.texture).toBe('none');
    expect(element.getAttribute('data-taxonomy-theme')).toBe('generic-taxonomy');
    expect(store.positionedScene().nodes.some(({ entityId }) => entityId === 'quartz')).toBe(true);
    expect(element.querySelector('.brand')?.textContent).toContain('Synthetic specimens');
    expect(element.querySelector('app-ring-separation-menu')).toBeTruthy();
    expect(element.querySelector('app-filter-tag-select')).toBeTruthy();
    expect(element.textContent).not.toContain('Potential brands');
    const quartz = store.positionedScene().nodes.find(({ entityId }) => entityId === 'quartz')!;
    store.selectProjectedNode(quartz);
    fixture.detectChanges();
    expect(element.querySelector('app-generic-taxonomy-profile')?.textContent).toContain('Quartz');
    expect(element.querySelector('[data-fact-presentation="stamp"] dt')?.textContent).toContain(
      'Material',
    );
    expect(
      [...element.querySelectorAll('[data-fact-presentation="default"]')].some((row) =>
        row.textContent?.includes('Record origin'),
      ),
    ).toBe(true);
    expect(store.search('rock crystal')[0]?.targetId).toBe('quartz');

    store.setFacet('color', 'purple');
    expect([...store.filterResult().entryIds]).toEqual(['quartz', 'amethyst']);
    store.setFacet('color', '');
    store.setRange('hardness', 'min', '6.8');
    store.setRange('hardness', 'max', '7');
    expect([...store.filterResult().entryIds]).toEqual(['quartz', 'amethyst', 'jade-a']);

    store.updateRing(0, 'color');
    expect(store.ringOrder()).toEqual(['color', 'material']);
  });

  it('renders specimen-owned About content without beer prose', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTaxonomy(syntheticTaxonomy)],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.open('about');
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Specimen projection laboratory');
    expect(text).not.toContain('Ale and lager');
  });

  it('keeps rendered canonical selection, projected focus and detail mode independent', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTaxonomy(syntheticTaxonomy)],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const viewport = fixture.debugElement.query(By.directive(TaxonomyViewport))
      .componentInstance as TaxonomyViewport;
    const store = viewport.store;
    const element = fixture.nativeElement as HTMLElement;
    const renderedNode = (instanceId: string) =>
      [...element.querySelectorAll<SVGGElement>('[data-testid^="node-"]')].find(
        (node) => node.dataset['testid'] === `node-${instanceId}`,
      )!;
    const activate = (instanceId: string, type: 'click' | 'dblclick' = 'click') => {
      renderedNode(instanceId).dispatchEvent(new MouseEvent(type, { bubbles: true }));
      fixture.detectChanges();
    };

    const jadeA = store.positionedScene().nodes.find(({ entityId }) => entityId === 'jade-a')!;
    const jadeB = store.positionedScene().nodes.find(({ entityId }) => entityId === 'jade-b')!;
    expect(jadeA.title).toBe(jadeB.title);
    activate(jadeA.instanceId);
    expect(store.selectedEntityId()).toBe('jade-a');
    expect(renderedNode(jadeA.instanceId).classList).toContain('selected');
    expect(renderedNode(jadeB.instanceId).classList).not.toContain('selected');
    activate(jadeB.instanceId);
    expect(store.selectedEntityId()).toBe('jade-b');

    const quartzInstances = store
      .positionedScene()
      .nodes.filter(({ entityId }) => entityId === 'quartz');
    expect(quartzInstances).toHaveLength(2);
    const clicked = quartzInstances[1]!;
    activate(clicked.instanceId);
    expect(store.detailMode()).toBe('compact');
    expect(store.focusedInstanceId()).toBe(clicked.instanceId);
    expect(store.selectedEntityId()).toBe('quartz');
    expect(store.selectedInstances()).toEqual([clicked.instanceId]);
    expect(element.querySelectorAll('.generic-node.selected')).toHaveLength(1);
    expect(element.querySelectorAll('.generic-connectors path.active').length).toBe(
      store.focusedRouteInstanceIds().length - 1,
    );
    expect(element.querySelector('[data-testid="taxonomy-profile"]')?.textContent).toContain(
      'Quartz',
    );
    const clickedPath = store.selectedPathNodes().map(({ instanceId }) => instanceId);
    expect(
      [...element.querySelectorAll<HTMLElement>('.selected-category-path button')].map(
        (button) => button.dataset['instanceId'],
      ),
    ).toEqual(clickedPath);

    const breadcrumbTarget = store.selectedPathNodes().at(-1)!;
    [...element.querySelectorAll<HTMLButtonElement>('.selected-category-path button')]
      .find((button) => button.dataset['instanceId'] === breadcrumbTarget.instanceId)!
      .click();
    fixture.detectChanges();
    expect(store.selectedEntityId()).toBe(breadcrumbTarget.entityId);
    expect(store.focusedInstanceId()).toBe(breadcrumbTarget.instanceId);

    activate(clicked.instanceId, 'dblclick');
    expect(store.detailMode()).toBe('expanded');
    activate(clicked.instanceId, 'dblclick');
    expect(store.detailMode()).toBe('expanded');

    const camera = { ...store.camera() };
    let close = element.querySelector<HTMLButtonElement>('.details-close')!;
    close.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    close.click();
    fixture.detectChanges();
    expect(store.camera()).toEqual(camera);
    expect(store.detailMode()).toBe('closed');
    expect(store.selectedEntityId()).toBeNull();
    expect(store.focusedInstanceId()).toBeNull();

    activate(clicked.instanceId, 'dblclick');
    close = element.querySelector<HTMLButtonElement>('.details-close')!;
    close.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    fixture.detectChanges();
    expect(store.detailMode()).toBe('closed');

    activate(clicked.instanceId, 'dblclick');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(store.detailMode()).toBe('closed');
  });

  it('reconciles projected focus across filtering, ring changes and search', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTaxonomy(syntheticTaxonomy)],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    const store = app.store;
    store.ringOrder.set(['material', 'color']);
    store.clearFilters();

    const dimensionInstances = new Map<string, PositionedNode[]>();
    store
      .positionedScene()
      .nodes.filter(({ kind }) => kind === 'dimension-value')
      .forEach((node) =>
        dimensionInstances.set(node.entityId, [
          ...(dimensionInstances.get(node.entityId) ?? []),
          node,
        ]),
      );
    const repeatedValue = [...dimensionInstances.values()].find((nodes) => nodes.length > 1)!;
    expect(repeatedValue.length).toBeGreaterThan(1);
    expect(repeatedValue[0]!.parentInstanceId).not.toBe(repeatedValue[1]!.parentInstanceId);
    store.selectProjectedNode(repeatedValue[1]!);
    expect(store.profileScope()).toEqual({
      kind: 'projected',
      instanceId: repeatedValue[1]!.instanceId,
    });
    expect(store.selectedPathNodes().at(-1)?.instanceId).toBe(repeatedValue[1]!.instanceId);

    store.clearSelection();
    const minerals = store
      .positionedScene()
      .nodes.find(({ entityId }) => entityId === 'material:mineral')!;
    store.selectProjectedNode(minerals);
    const initialProfileIds = store
      .selectedProfile()!
      .sections.flatMap((section) =>
        section.kind === 'entity-list' ? section.items.map(({ id }) => id) : [],
      );
    store.setFacet('color', 'purple');
    const filteredProfileIds = store
      .selectedProfile()!
      .sections.flatMap((section) =>
        section.kind === 'entity-list' ? section.items.map(({ id }) => id) : [],
      );
    expect(store.focusedInstanceId()).toBe(minerals.instanceId);
    expect(filteredProfileIds.length).toBeLessThan(initialProfileIds.length);
    expect(new Set(filteredProfileIds)).toEqual(store.focusedDescendantEntryIds());

    const quartz = store.positionedScene().nodes.find(({ entityId }) => entityId === 'quartz')!;
    store.selectProjectedNode(quartz);
    store.setFacet('color', 'green');
    expect(store.focusedInstanceId()).toBeNull();
    expect(store.selectedEntityId()).toBeNull();
    expect(store.profileScope()).toBeNull();
    expect(store.selectedPathNodes()).toEqual([]);
    expect(store.detailMode()).toBe('closed');

    store.clearFilters();
    const visibleQuartz = store
      .positionedScene()
      .nodes.find(({ entityId }) => entityId === 'quartz')!;
    store.selectProjectedNode(visibleQuartz);
    store.updateRing(0, 'color');
    expect(store.focusedInstanceId()).toBeNull();
    expect(store.selectedProfile()).toBeNull();

    const searchResult = store.search('rock crystal')[0]!;
    const expectedInstance = store
      .positionedScene()
      .nodes.find(({ entityId }) => entityId === searchResult.targetId)!.instanceId;
    app.selectSearchResult(searchResult);
    expect(store.focusedInstanceId()).toBe(expectedInstance);
    expect(store.selectedEntityId()).toBe('quartz');
    expect(store.selectedProfile()?.scope).toEqual({ kind: 'canonical', entityId: 'quartz' });
    const otherQuartz = store
      .positionedScene()
      .nodes.find(
        ({ entityId, instanceId }) => entityId === 'quartz' && instanceId !== expectedInstance,
      )!;
    store.selectProjectedNode(otherQuartz);
    expect(store.selectedProfile()?.target).toEqual({ kind: 'entry', id: 'quartz' });
    expect(store.selectedProfile()?.scope).toEqual({ kind: 'canonical', entityId: 'quartz' });
  });
});
