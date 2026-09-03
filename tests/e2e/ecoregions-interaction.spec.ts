import { expect, test, type Page } from '@playwright/test';

const openEcoregions = async (page: Page, extra = '') => {
  await page.goto(`/?e2e&taxonomy=ecoregions&${extra}`);
  await expect(page.getByTestId('generic-renderer')).toBeVisible();
  await expect(page.locator('app-root')).toHaveAttribute(
    'data-taxonomy-theme',
    'ecological-field-atlas',
  );
  await expect(page.locator('[data-entity-id^="ecoregion:"]')).not.toHaveCount(0);
};

const expectCanonicalEcoregionCount = async (page: Page, expected: number) => {
  await expect
    .poll(async () => {
      const ids = await page
        .locator('[data-entity-id^="ecoregion:"]')
        .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-entity-id')));
      return new Set(ids).size;
    })
    .toBe(expected);
};

const canonicalEcoregionCount = (page: Page) =>
  page
    .locator('[data-entity-id^="ecoregion:"]')
    .evaluateAll((nodes) => new Set(nodes.map((node) => node.getAttribute('data-entity-id'))).size);

test.describe('full ecoregion topology', () => {
  test('loads its independent theme and focuses an exact search result', async ({ page }) => {
    await openEcoregions(page);
    await expect(page.locator('.brand strong')).toHaveText('Terrestrial Ecoregions');

    await page
      .getByRole('combobox', { name: 'Search taxonomy' })
      .fill('Eastern Himalayan Subalpine Conifer Forests');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Eastern Himalayan Subalpine Conifer Forests', exact: true })
      .click();

    await expect(page.locator('.generic-node.focused-instance')).toHaveCount(1);
    await expect(page.getByTestId('taxonomy-profile')).toContainText(
      'Eastern Himalayan Subalpine Conifer Forests',
    );
    await expect(page.getByTestId('taxonomy-profile')).toContainText('Ecological character');
    await expect(page.getByTestId('taxonomy-profile')).toContainText('Red panda');
    await expect(page.locator('.selected-category-path')).toBeVisible();
  });

  test('selects projected hierarchy levels and exposes outer labels after zooming', async ({
    page,
  }) => {
    await openEcoregions(page);
    await page
      .getByRole('combobox', { name: 'Search taxonomy' })
      .fill('Eastern Himalayan Broadleaf Forests');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Eastern Himalayan Broadleaf Forests', exact: true })
      .click();
    await expect(page.getByTestId('taxonomy-profile')).toContainText(
      'Eastern Himalayan Broadleaf Forests',
    );
    await expect(page.locator('.selected-category-path button')).not.toHaveCount(0);

    const initialLabels = await page.locator('.generic-node text').count();

    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await expect
      .poll(() => page.locator('.generic-node text').count())
      .toBeGreaterThan(initialLabels);
  });

  test('rearranges dimensions and applies and clears a biome filter', async ({ page }) => {
    await openEcoregions(page);
    await page.getByRole('button', { name: 'Configure separation rings' }).click();
    await page.getByLabel('Ring 1').selectOption('biome');
    await page.getByLabel('Ring 2').selectOption('realm');
    await page.getByLabel('Ring 3').selectOption('climate-zone');
    await expectCanonicalEcoregionCount(page, 844);

    await page.getByRole('button', { name: 'Filter taxonomy entries' }).click();
    await page.getByLabel('Search filter values').fill('Tropical & Subtropical Moist');
    const filterMenu = page.getByTestId('filter-menu');
    await filterMenu
      .getByRole('option', {
        name: /Tropical & Subtropical Moist Broadleaf Forests/,
      })
      .click();
    await expect.poll(() => canonicalEcoregionCount(page)).toBeLessThan(844);
    await filterMenu.getByRole('button', { name: 'Clear', exact: true }).click();
    await expectCanonicalEcoregionCount(page, 844);
  });

  test('keeps cross-branch instances path-specific', async ({ page }) => {
    await openEcoregions(page);
    const instances = page.locator('[data-entity-id="ecoregion:614"]');
    await expect(instances).toHaveCount(8);
    const instanceIds = await instances.evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute('data-testid') ?? ''),
    );
    expect(new Set(instanceIds).size).toBe(8);
    const centralId = instanceIds.find((id) => id.includes('central-america'));
    const northernId = instanceIds.find((id) => id.includes('northern-america'));
    expect(centralId).toBeTruthy();
    expect(northernId).toBeTruthy();
    for (const instanceId of [centralId!, northernId!]) {
      const node = page.getByTestId(instanceId);
      await node.focus();
      await page.keyboard.press('Enter');
      await expect(node).toHaveClass(/focused-instance/);
      await expect(page.getByTestId('taxonomy-profile')).toContainText(
        'Northern Mesoamerican Pacific Mangroves',
      );
    }
  });

  test('switches datasets without leaking theme and restores history', async ({ page }) => {
    await openEcoregions(page, 'keep=this');
    const dataset = page.getByRole('combobox', { name: 'Dataset' });
    await dataset.selectOption('brewers-association-2026-circular-taxonomy');
    await expect(page).toHaveURL(/keep=this/);
    await expect(page.locator('app-root')).toHaveAttribute('data-taxonomy-theme', 'brewers-atlas');
    await expect(page.locator('[data-entity-id^="style:"]')).toHaveCount(168);

    await page.goBack();
    await expect(page.locator('app-root')).toHaveAttribute(
      'data-taxonomy-theme',
      'ecological-field-atlas',
    );
    await expectCanonicalEcoregionCount(page, 844);
  });

  test('falls back safely for an invalid dataset identifier', async ({ page }) => {
    await page.goto('/?e2e&taxonomy=not-a-real-dataset');
    await expect(page.locator('app-root')).toHaveAttribute('data-taxonomy-theme', 'brewers-atlas');
    await expect(page.locator('[data-entity-id^="style:"]')).toHaveCount(168);
  });

  test('renders a sparse polar profile without forest-specific sections', async ({ page }) => {
    await openEcoregions(page);
    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('East Antarctic Tundra');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'East Antarctic Tundra', exact: true })
      .click();
    const profile = page.getByTestId('taxonomy-profile');
    await expect(profile).toContainText('East Antarctic Tundra');
    await expect(profile).toContainText('Ecological placement');
    await expect(profile).not.toContainText('Characteristic species and countries');
    await expect(profile).not.toContainText('Vegetation');
  });

  test('renders the published Greenland branch with sourced polar enrichment', async ({ page }) => {
    await openEcoregions(page);
    await page
      .getByRole('combobox', { name: 'Search taxonomy' })
      .fill('Kalaallit Nunaat High Arctic Tundra');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Kalaallit Nunaat High Arctic Tundra', exact: true })
      .click();

    const profile = page.getByTestId('taxonomy-profile');
    await expect(profile).toContainText('Kalaallit Nunaat High Arctic Tundra');
    await expect(profile).toContainText('Polar-desert climate');
    await expect(profile).toContainText('Vegetation');
    await expect(profile).toContainText('Northern collared lemming');
    await expect(profile).toContainText('One Earth');
  });

  test('opens and closes the routed ecoregion dashboard without losing selection', async ({
    page,
  }) => {
    let loadedGreenlandContent = false;
    let loadedIndomalayaContent = false;
    let dashboardRuntimeResponses = 0;
    let hierarchyRuntimeResponses = 0;
    page.on('response', async (response) => {
      if (!response.url().endsWith('.js')) return;
      const body = await response.text().catch(() => '');
      if (body.includes('dashboard-backdrop')) dashboardRuntimeResponses += 1;
      if (body.includes('Nested taxonomy explorer')) {
        hierarchyRuntimeResponses += 1;
        console.log(
          'MARKER',
          response.url(),
          body.includes('taxonomy-hierarchy'),
          body.includes('class HierarchyWidget'),
          body.includes('projectNodeMeasures'),
        );
      }
      loadedGreenlandContent ||= body.includes(
        'Kalaallit Nunaat High Arctic Tundra wraps around northern Greenland',
      );
      loadedIndomalayaContent ||= body.includes('Himalayan Mixed Forests & Grasslands occupies');
    });
    await openEcoregions(page);
    expect(dashboardRuntimeResponses).toBe(0);
    expect(hierarchyRuntimeResponses).toBe(0);
    await page
      .getByRole('combobox', { name: 'Search taxonomy' })
      .fill('Kalaallit Nunaat High Arctic Tundra');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Kalaallit Nunaat High Arctic Tundra', exact: true })
      .click();

    await page.getByTestId('open-taxonomy-dashboard').click();
    const dashboard = page.getByTestId('taxonomy-dashboard');
    await expect(dashboard).toBeVisible();
    await expect(page).toHaveURL(/\/atlas\/one-earth-terrestrial-ecoregions\/entry\/ecoregion:418/);
    await expect(dashboard).toContainText('Landscape impression');
    await expect(
      dashboard.getByRole('img', {
        name: 'Interpretive landscape illustration of Kalaallit Nunaat High Arctic Tundra.',
      }),
    ).toBeVisible();
    await expect.poll(() => loadedGreenlandContent).toBe(true);
    await expect.poll(() => dashboardRuntimeResponses).toBe(1);
    expect(hierarchyRuntimeResponses).toBe(0);
    expect(loadedIndomalayaContent).toBe(false);
    await expect(page.getByTestId('taxonomy-profile')).toHaveCount(0);
    await page.keyboard.press('Escape');
    await expect(dashboard).toHaveCount(0);
    await expect(page.getByTestId('taxonomy-profile')).toContainText(
      'Kalaallit Nunaat High Arctic Tundra',
    );
    await page.getByTestId('open-taxonomy-dashboard').click();
    await expect(page.getByTestId('taxonomy-dashboard')).toBeVisible();
    expect(dashboardRuntimeResponses).toBe(1);
    expect(hierarchyRuntimeResponses).toBe(0);
    await page.keyboard.press('Escape');
  });

  test('hydrates a direct dashboard route and restores its selected aside', async ({ page }) => {
    await page.goto(
      '/atlas/one-earth-terrestrial-ecoregions/entry/ecoregion:418?e2e&taxonomy=ecoregions',
    );
    const dashboard = page.getByTestId('taxonomy-dashboard');
    await expect(dashboard).toBeVisible();
    await expect(dashboard).toContainText('Ecological placement');
    await expect(dashboard).toContainText('Kalaallit Nunaat High Arctic Tundra');
    await expect(dashboard).toContainText('Northern collared lemming');
    await page.keyboard.press('Escape');
    await expect(dashboard).toHaveCount(0);
    await expect(page.getByTestId('taxonomy-profile')).toContainText(
      'Kalaallit Nunaat High Arctic Tundra',
    );
  });

  test('loads canonical local artwork in an enriched ecoregion dashboard', async ({ page }) => {
    await page.goto(
      '/atlas/one-earth-terrestrial-ecoregions/entry/ecoregion:615?e2e&taxonomy=ecoregions',
    );
    const dashboard = page.getByTestId('taxonomy-dashboard');
    const image = dashboard.getByRole('img', {
      name: 'Interpretive landscape illustration of South American Pacific Mangroves.',
    });
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', '/assets/ecoregions/ecoregion-615.png');
    await expect
      .poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth))
      .toBe(320);
  });

  test('drills through the lazy living-composition hierarchy with isolated state', async ({
    page,
  }) => {
    const hierarchyRuntimeUrls = new Set<string>();
    page.on('response', async (response) => {
      if (!response.url().endsWith('.js')) return;
      const body = await response.text().catch(() => '');
      if (body.includes('Nested taxonomy explorer')) hierarchyRuntimeUrls.add(response.url());
    });
    await page.goto(
      '/atlas/one-earth-terrestrial-ecoregions/entry/ecoregion:302?e2e&taxonomy=ecoregions',
    );
    const dashboard = page.getByTestId('taxonomy-dashboard');
    const widget = page.getByTestId('hierarchy-widget');
    await expect(dashboard).toContainText('Himalayan Subtropical Pine Forests');
    await expect(widget).toBeVisible();
    await expect.poll(() => hierarchyRuntimeUrls.size).toBe(1);
    await expect(page.getByTestId('hierarchy-layer-inner')).toBeDisabled();
    await expect(page.getByTestId('hierarchy-layer-middle')).toHaveValue('division-or-phylum');
    await page.getByTestId('hierarchy-layer-middle').selectOption('class');
    await expect(page.getByTestId('hierarchy-layer-middle')).toHaveValue('class');
    await expect
      .poll(() =>
        page.evaluate(() =>
          Object.entries(localStorage).some(
            ([key, value]) => key.startsWith('taxonomy-hierarchy.') && value.includes('class'),
          ),
        ),
      )
      .toBe(true);
    await page.reload();
    await expect(page.getByTestId('hierarchy-layer-middle')).toHaveValue('class');
    await expect(widget.getByRole('treeitem', { name: /Flora/ })).toBeVisible();
    await expect(widget.getByRole('treeitem', { name: /Fungi/ })).toBeVisible();
    await expect(widget.getByRole('treeitem', { name: /Ectomycorrhizal fungi/ })).toBeVisible();
    await widget.getByRole('treeitem', { name: /Pinaceae/ }).click();
    await expect(widget.getByRole('navigation', { name: 'Hierarchy breadcrumb' })).toContainText(
      'Himalayan Subtropical Pine Forests',
    );
    await expect(widget.getByRole('treeitem', { name: /Chir pine/ })).toBeVisible();
    await widget.getByRole('treeitem', { name: /Chir pine/ }).press('Enter');
    await expect(page).toHaveURL(
      /\/atlas\/one-earth-terrestrial-ecoregions\/related-entity\/species:chir-pine/,
    );
    await expect(dashboard).toContainText('Pinus roxburghii');
    expect(hierarchyRuntimeUrls.size).toBe(1);
  });

  test('cold-starts a canonical taxon through its single content owner', async ({ page }) => {
    let loadedIndomalayaContent = false;
    page.on('response', async (response) => {
      if (!response.url().endsWith('.js')) return;
      const body = await response.text().catch(() => '');
      loadedIndomalayaContent ||= body.includes('species:chir-pine');
    });
    await page.goto(
      '/atlas/one-earth-terrestrial-ecoregions/related-entity/species:chir-pine?e2e&taxonomy=ecoregions',
    );
    const dashboard = page.getByTestId('taxonomy-dashboard');
    await expect(dashboard).toContainText('Chir pine');
    await expect(dashboard).toContainText('Pinus roxburghii');
    await expect.poll(() => loadedIndomalayaContent).toBe(true);
  });

  test('opens country and species tiles as related profiles', async ({ page }) => {
    const entryUrl =
      '/atlas/one-earth-terrestrial-ecoregions/entry/ecoregion:302?e2e&taxonomy=ecoregions';
    const dashboard = page.getByTestId('taxonomy-dashboard');

    await page.goto(entryUrl);
    await expect(dashboard.locator('.media-frame img')).toHaveAttribute(
      'src',
      /ecoregion-302\.png/,
    );
    await expect(dashboard.getByRole('button', { name: /India/ })).toBeVisible();
    await dashboard.getByRole('button', { name: /India/ }).click();
    await expect(dashboard.getByRole('heading', { level: 1 })).toHaveText('India');
    await expect(dashboard).toContainText('Himalayan Subtropical Pine Forests');
    await expect(dashboard.locator('.media-frame img')).toHaveCount(0);
    await dashboard
      .getByRole('button', { name: /Himalayan Subtropical Broadleaf Forests/ })
      .click();
    await expect(dashboard.getByRole('heading', { level: 1 })).toHaveText(
      'Himalayan Subtropical Broadleaf Forests',
    );
    await expect(dashboard.locator('.media-frame img')).toHaveAttribute(
      'src',
      /ecoregion-233\.png/,
    );

    await page.goto(entryUrl);
    await expect(dashboard.getByRole('button', { name: /Chir pine/ })).toBeVisible();
    await dashboard.getByRole('button', { name: /Chir pine/ }).click();
    await expect(dashboard.getByRole('heading', { level: 1 })).toHaveText('Chir pine');
    await expect(dashboard).toContainText('Himalayan Subtropical Pine Forests');
  });
});
