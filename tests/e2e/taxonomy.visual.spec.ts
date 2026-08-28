import { expect, test, type Page } from '@playwright/test';

const settle = async (page: Page) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByTestId('generic-renderer')).toBeVisible();
  await page.getByRole('button', { name: 'Fit entire taxonomy' }).click();
  await page.mouse.move(2, 500);
};

const open = async (page: Page, taxonomy: 'beer' | 'ecoregions' | 'specimen') => {
  await page.goto(`/?e2e&taxonomy=${taxonomy}`);
  await settle(page);
};

test.describe('reviewed taxonomy visuals', () => {
  test('beer default', async ({ page }) => {
    await open(page, 'beer');
    await expect(page).toHaveScreenshot('beer-default.png');
  });

  test('beer selected profile', async ({ page }) => {
    await open(page, 'beer');
    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('Ginjo Beer');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Ginjo Beer or Sake-Yeast Beer', exact: true })
      .click();
    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('');
    await expect(page.getByTestId('taxonomy-profile')).toBeVisible();
    await expect(page).toHaveScreenshot('beer-selected-profile.png');
  });

  test('ecoregions full topology', async ({ page }) => {
    await open(page, 'ecoregions');
    await expect(page).toHaveScreenshot('ecoregions-full.png');
  });

  test('ecoregions selected bioregion', async ({ page }) => {
    await open(page, 'ecoregions');
    await page
      .getByRole('combobox', { name: 'Search taxonomy' })
      .fill('Himalayan Mixed Forests & Grasslands');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Himalayan Mixed Forests & Grasslands', exact: true })
      .click();
    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('');
    await expect(page.getByTestId('taxonomy-profile')).toBeVisible();
    await expect(page).toHaveScreenshot('ecoregions-selected-bioregion.png');
  });

  test('ecoregions close zoom labels', async ({ page }) => {
    await open(page, 'ecoregions');
    for (let index = 0; index < 4; index += 1)
      await page.getByRole('button', { name: 'Zoom in' }).click();
    await page.mouse.move(2, 500);
    await expect(page).toHaveScreenshot('ecoregions-close-labels.png');
  });

  test('ecoregions rearranged dimensions', async ({ page }) => {
    await open(page, 'ecoregions');
    await page.getByRole('button', { name: 'Configure separation rings' }).click();
    await page.getByLabel('Ring 1').selectOption('biome');
    await page.getByLabel('Ring 2').selectOption('realm');
    await page.getByLabel('Ring 3').selectOption('climate-zone');
    await page.getByRole('button', { name: 'Configure separation rings' }).click();
    await page.getByRole('button', { name: 'Fit entire taxonomy' }).click();
    await page.mouse.move(2, 500);
    await expect(page).toHaveScreenshot('ecoregions-rearranged.png');
  });

  test('specimen default', async ({ page }) => {
    await open(page, 'specimen');
    await expect(page).toHaveScreenshot('specimen-default.png');
  });

  test('narrow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await open(page, 'ecoregions');
    await expect(page).toHaveScreenshot('ecoregions-narrow.png');
  });
});
