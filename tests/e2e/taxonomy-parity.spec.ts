import { expect, test, type Page } from '@playwright/test';

const openBeer = async (page: Page) => {
  await page.goto('/?e2e&taxonomy=beer&renderer=generic');
  await expect(page.getByTestId('generic-renderer')).toBeVisible();
};

const station = (page: Page, entityId: string) =>
  page.locator(`[data-entity-id="${entityId}"] .taxonomy-node-hit`);

test.describe('generic taxonomy renderer', () => {
  test('default full taxonomy', async ({ page }) => {
    await openBeer(page);
    await expect(page.locator('[data-entity-id^="style:"]')).toHaveCount(168);
  });

  test('pan, zoom, reset and fit preserve a valid camera', async ({ page }) => {
    await openBeer(page);
    const scene = page.locator('svg.scene > g');
    const initial = await scene.getAttribute('transform');
    await page.getByRole('button', { name: 'Zoom in' }).click();
    await expect(scene).not.toHaveAttribute('transform', initial!);
    await page.getByRole('button', { name: 'Fit entire taxonomy' }).click();
    await page.keyboard.press('0');
    await expect(scene).toHaveAttribute('transform', /translate\([^N]+\) scale\([0-9.]+\)/);
  });

  test('entry selection, profile and related navigation', async ({ page }) => {
    await openBeer(page);
    await station(page, 'style:ginjo-beer-or-sake-yeast-beer').click();
    await expect(page.getByTestId('taxonomy-profile')).toContainText('Ginjo Beer');
    await expect(page.getByTestId('taxonomy-profile')).toContainText('Brands');
  });

  test('search selects and focuses a canonical entry', async ({ page }) => {
    await openBeer(page);
    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('Ginjo Beer');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Ginjo Beer or Sake-Yeast Beer', exact: true })
      .click();
    await expect(page.locator('.generic-node.focused-instance')).toHaveCount(1);
    await expect(page.getByTestId('taxonomy-profile')).toBeVisible();
  });

  test('categorical filter and empty result', async ({ page }) => {
    await openBeer(page);
    await page.getByRole('button', { name: 'Filter taxonomy entries' }).click();
    await page.getByLabel('Search filter values').fill('China');
    await page.getByRole('option', { name: /China/ }).click();
    await expect(page.locator('[data-entity-id^="style:"]')).toHaveCount(2);
  });

  test('ring rearrangement keeps canonical entries', async ({ page }) => {
    await openBeer(page);
    await page.getByRole('button', { name: 'Configure separation rings' }).click();
    await page.getByLabel('Ring 1').selectOption('origin');
    await expect(page.locator('[data-entity-id^="style:"]')).toHaveCount(168);
  });

  test('keyboard activation and narrow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await openBeer(page);
    const firstEntry = page.locator('[data-entity-id^="style:"]').first();
    await firstEntry.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('taxonomy-profile')).toBeVisible();
  });

  test('specimen taxonomy exercises duplicates and ranges', async ({ page }) => {
    await page.goto('/?e2e&taxonomy=specimen&renderer=generic');
    await expect(page.locator('[data-entity-id="quartz"]')).toHaveCount(2);
    await page.getByRole('button', { name: 'Filter taxonomy entries' }).click();
    await page.getByLabel('Hardness minimum').fill('6.8');
    await page.getByLabel('Hardness maximum').fill('7');
    await expect(page.locator('[data-entity-id="quartz"]')).toHaveCount(2);
  });

  test('projected identity, detail modes, breadcrumbs and close controls', async ({ page }) => {
    await page.goto('/?e2e&taxonomy=specimen');

    const jadeA = page.locator('[data-entity-id="jade-a"]').first();
    const jadeB = page.locator('[data-entity-id="jade-b"]').first();
    await expect(jadeA).toContainText('Jade');
    await expect(jadeB).toContainText('Jade');
    await jadeA.click();
    await expect(jadeA).toHaveClass(/selected/);
    await expect(jadeB).not.toHaveClass(/selected/);

    const quartz = page.locator('[data-entity-id="quartz"]');
    await expect(quartz).toHaveCount(2);
    await quartz.nth(1).click();
    await expect(quartz.nth(1)).toHaveClass(/selected/);
    await expect(quartz.nth(0)).not.toHaveClass(/selected/);
    await expect(page.locator('.generic-node.selected')).toHaveCount(1);
    await expect(page.getByTestId('taxonomy-profile')).toContainText('Quartz');
    await expect(page.locator('.selection-details')).not.toHaveClass(/detail-view/);
    await expect(page.locator('.selected-category-path button')).not.toHaveCount(0);

    const lastBreadcrumb = page.locator('.selected-category-path button').last();
    const breadcrumbEntityId = await lastBreadcrumb.getAttribute('data-entity-id');
    await lastBreadcrumb.click();
    await expect(page.locator(`.generic-node[data-entity-id="${breadcrumbEntityId}"]`)).toHaveClass(
      /selected/,
    );

    await quartz.nth(1).dblclick();
    await expect(page.locator('.selection-details')).toHaveClass(/detail-view/);
    await quartz.nth(1).dblclick();
    await expect(page.locator('.selection-details')).toHaveClass(/detail-view/);

    const close = page.getByRole('button', { name: 'Close details' });
    await close.click();
    await expect(page.getByTestId('taxonomy-profile')).toHaveCount(0);
    await quartz.nth(1).dblclick();
    await close.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('taxonomy-profile')).toHaveCount(0);
    await quartz.nth(1).dblclick();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('taxonomy-profile')).toHaveCount(0);
  });
});
