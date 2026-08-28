import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { beerBrands, brandsForEntry } from './datasets/beer/data/brands';
import { beerTaxonomyEntries } from './datasets/beer/data/entries';
import { createFilterOptions } from './datasets/beer/interpretation/beer-interpretation';
import { indicatorForFilter, indicatorsForEntry } from './datasets/beer/presentation/beer-icons';
import { TaxonomyViewport } from './taxonomy-viewport';
import { provideTaxonomy } from './taxonomy/contracts/taxonomy-provider';
import { beerTaxonomyModule } from './datasets/beer';
import { ecoregionTaxonomy } from './datasets/ecoregions';
import { provideTaxonomyCatalog } from './taxonomy/public-api';
describe('Beer Taxonomy Atlas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideTaxonomy(beerTaxonomyModule),
        provideTaxonomyCatalog([
          {
            id: beerTaxonomyModule.meta.id,
            title: 'Beer styles',
            load: async () => beerTaxonomyModule,
          },
          {
            id: ecoregionTaxonomy.meta.id,
            title: 'Terrestrial ecoregions',
            load: async () => ecoregionTaxonomy,
          },
        ]),
      ],
    }).compileComponents();
  });
  it('renders the minimal shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.brand')?.textContent).toContain('Beer Taxonomy');
    expect(el.getAttribute('data-taxonomy-theme')).toBe('brewers-atlas');
    expect(el.getAttribute('data-taxonomy-texture')).toBe('paper-ledger');
    expect(el.querySelector('app-taxonomy-viewport')).toBeTruthy();
    expect(el.querySelector('app-ring-separation-menu')).toBeTruthy();
    expect(el.querySelector('app-filter-tag-select')).toBeTruthy();
    expect(el.querySelector('.minimap')).toBeFalsy();
    expect(el.querySelector('.entry-search input')).toBeTruthy();
  });
  it('offers every application taxonomy through the toolbar switcher', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const options = [
      ...(fixture.nativeElement as HTMLElement).querySelectorAll<HTMLOptionElement>(
        '[data-testid="taxonomy-switcher"] option',
      ),
    ];
    expect(options.map(({ textContent }) => textContent?.trim())).toEqual([
      'Beer styles',
      'Terrestrial ecoregions',
    ]);
  });
  it('renders About content owned by the beer dataset', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentInstance.open('about');
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      'Classification membership is not historical descent',
    );
  });
  it('projects three configurable rings from all typed entries', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const store = fixture.componentInstance.store;
    expect(store.ringOrder()).toHaveLength(3);
    expect(store.positionedScene().nodes.filter((node) => node.kind === 'entry')).toHaveLength(168);
  });
  it('derives category-qualified filter options from values in the dataset', () => {
    const options = createFilterOptions(beerTaxonomyEntries);
    expect(options.some((option) => option.id === 'family:ale')).toBe(true);
    expect(options.some((option) => option.id === 'glassware:tulip')).toBe(true);
    expect(new Set(options.map((option) => option.id)).size).toBe(options.length);
  });
  it('discovers styles through linked brand countries', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    const china = app.store.filterOptions.find((option) => option.id === 'brand-country:China');
    expect(china?.kind).toBe('brand-country');
    expect(china?.count).toBe(2);

    app.store.toggleFilter('brand-country:China');
    expect(
      app.store
        .filteredEntries()
        .map((entry) => entry.id)
        .sort(),
    ).toEqual(['style:export-style-stout', 'style:international-style-pilsener']);

    app.store.clearFilters();
    app.searchQuery.set('China');
    expect(app.searchSuggestions().map((result) => result.document.targetId)).toContain(
      'style:international-style-pilsener',
    );
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
  it('normalizes generated atlas rows before presenting sprite frames', () => {
    const entry = beerTaxonomyModule.records.entries.find(
      ({ facts }) =>
        facts.fermentationMethod.value.length > 0 && facts.core.dominantCharacter.value.length > 0,
    )!;
    const tile = beerTaxonomyModule.presentation.entryTile(entry);
    expect(tile.icon?.frame?.y).toBe(317);
    const fermentation = tile.badges.find(({ id }) => id.startsWith('fermentation-method.'))?.icon;
    expect(fermentation?.frame?.y).toBe(317);
    expect(fermentation?.frame?.height).toBe(149);
    const character = tile.badges.find(({ id }) => id.startsWith('character.'))?.icon;
    expect(character?.frame?.y).toBe(404);
    const presentedTiles = beerTaxonomyModule.records.entries.map((candidate) =>
      beerTaxonomyModule.presentation.entryTile(candidate),
    );
    const bitterness = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id.startsWith('bitterness.'))?.icon;
    expect(bitterness?.frame?.y).toBe(153);
    expect(bitterness?.frame?.height).toBe(135);
    const mediumBitterness = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id === 'axis.bitterness')?.icon;
    expect(mediumBitterness?.frame).toMatchObject({ y: 607, height: 139 });
    const maturation = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id.startsWith('maturation.'))?.icon;
    expect(maturation?.frame?.y).toBe(1122);
    const variableFermentation = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id === 'fermentation-method.variable')?.icon;
    expect(variableFermentation?.frame?.width).toBe(138);
    const veryStrong = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id === 'strength.very-strong')?.icon;
    expect(veryStrong?.frame?.height).toBe(138);
    const balancedCharacter = presentedTiles
      .flatMap(({ badges }) => badges)
      .find(({ id }) => id === 'character.balanced')?.icon;
    expect(balancedCharacter?.frame?.height).toBe(139);
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
    expect(beerBrands.find((brand) => brand.id === 'brand-pearl-river-beer')?.country).toEqual({
      name: 'China',
      iso3166Alpha2: 'CN',
      region: 'Guangdong',
    });
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
    const style = viewport.store.positionedScene().nodes.find((node) => node.kind === 'entry')!;
    const camera = { ...viewport.store.camera() };

    viewport.select(style);
    fixture.detectChanges();

    expect(viewport.store.camera()).toEqual(camera);
    expect(viewport.store.focusedInstanceId()).toBe(style.instanceId);
    expect(viewport.store.selectedInstances()).toEqual([style.instanceId]);
    expect(viewport.store.detailMode()).toBe('compact');
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Selected station');
    const profileElement = (fixture.nativeElement as HTMLElement).querySelector(
      '[data-testid="taxonomy-profile"]',
    )!;
    const googleLinks = profileElement.querySelectorAll<HTMLAnchorElement>('.google-search');
    expect(googleLinks).toHaveLength(1);
    expect(googleLinks[0]!.href).toBe(
      `https://www.google.com/search?q=${encodeURIComponent(style.title)}`,
    );
    expect(profileElement.querySelectorAll('app-taxonomy-icon').length).toBeGreaterThan(0);

    const cameraBeforePanelWheel = { ...viewport.store.camera() };
    const panelWheel = new WheelEvent('wheel', { bubbles: true, cancelable: true, deltaY: 80 });
    profileElement.dispatchEvent(panelWheel);
    expect(panelWheel.defaultPrevented).toBe(false);
    expect(viewport.store.camera()).toEqual(cameraBeforePanelWheel);

    const canvas = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.viewport')!;
    const canvasWheel = new WheelEvent('wheel', { bubbles: true, cancelable: true, deltaY: 80 });
    canvas.dispatchEvent(canvasWheel);
    expect(canvasWheel.defaultPrevented).toBe(true);
    expect(viewport.store.camera()).not.toEqual(cameraBeforePanelWheel);

    viewport.openDetail(style);
    fixture.detectChanges();
    expect(viewport.store.detailMode()).toBe('expanded');
    expect(
      (fixture.nativeElement as HTMLElement).querySelector('.selection-details.detail-view'),
    ).not.toBeNull();

    const close = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.details-close',
    )!;
    close.click();
    fixture.detectChanges();
    expect(viewport.store.selectedEntityId()).toBeNull();
    expect(viewport.store.focusedInstanceId()).toBeNull();
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
      const style = viewport.store.positionedScene().nodes.find((node) => node.entityId === id)!;
      expect(brandsForEntry(id)).toHaveLength(count);
      viewport.select(style);
      fixture.detectChanges();
      expect(
        (fixture.nativeElement as HTMLElement).querySelectorAll(
          'app-generic-taxonomy-profile .entity-list button',
        ).length,
      ).toBe(count);
      viewport.closeDetails();
    }
  });
  it('renders dimension membership through a generic aggregated profile', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const viewport = fixture.debugElement.query(By.directive(TaxonomyViewport))
      .componentInstance as TaxonomyViewport;
    const category = viewport.store
      .positionedScene()
      .nodes.find((node) => node.kind === 'dimension-value')!;
    viewport.select(category);
    fixture.detectChanges();
    expect(viewport.store.selectedProfile()?.target.kind).toBe('dimension-value');
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        'app-generic-taxonomy-profile .entity-list button',
      ).length,
    ).toBeGreaterThan(0);
  });
  it('scopes multi-value dimension profiles to the clicked projected branch', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const viewport = fixture.debugElement.query(By.directive(TaxonomyViewport))
      .componentInstance as TaxonomyViewport;
    const yeast = viewport.store
      .positionedScene()
      .nodes.find(({ entityId }) => entityId === 'dominant-character:yeast-led')!;
    viewport.select(yeast);
    fixture.detectChanges();

    const projectedIds = viewport.store.focusedDescendantEntryIds();
    const profile = viewport.store.selectedProfile()!;
    const displayedIds = profile.sections.flatMap((section) =>
      section.kind === 'entity-list' ? section.items.map(({ id }) => id) : [],
    );
    expect(new Set(displayedIds)).toEqual(projectedIds);

    const dominantCharacter = beerTaxonomyModule.interpretation.dimensions.find(
      ({ id }) => id === 'dominant-character',
    )!;
    const roastPrimaryIds = new Set(
      beerTaxonomyModule.records.entries
        .filter((entry) => dominantCharacter.values(entry, { locale: 'en' })[0]?.id === 'roast-led')
        .map(({ id }) => id),
    );
    expect(displayedIds.some((id) => roastPrimaryIds.has(id))).toBe(false);
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        'app-generic-taxonomy-profile .entity-list button',
      ).length,
    ).toBe(projectedIds.size);
  });
});
