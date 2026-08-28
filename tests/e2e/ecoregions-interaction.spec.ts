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
});
