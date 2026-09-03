import { expect, test } from '@playwright/test';

test.describe('Panmagicon dataset', () => {
  test('switches dataset, searches a spell and hydrates its lazy folio', async ({ page }) => {
    await page.goto('/?e2e&taxonomy=panmagicon');
    await expect(page.locator('app-root')).toHaveAttribute(
      'data-taxonomy-theme',
      'panmagicon-illuminated-weave',
    );
    await expect(page.locator('.brand strong')).toHaveText('The Panmagicon');
    await expect(page.locator('[data-entity-id^="spell:"]')).not.toHaveCount(0);

    await page.getByRole('combobox', { name: 'Search taxonomy' }).fill('Spark Dart');
    await page
      .getByTestId('taxonomy-search-results')
      .getByRole('option', { name: 'Spark Dart', exact: true })
      .click();

    const profile = page.getByTestId('taxonomy-profile');
    await expect(profile).toContainText('Spark Dart');
    await expect(profile).toContainText('Tension profile');
    await expect(profile).toContainText('Purpose and formula');
    await expect(profile).toContainText('Consequence and counterplay');

    await page.getByTestId('open-taxonomy-dashboard').click();
    await expect(page.getByTestId('taxonomy-dashboard')).toBeVisible();
    await expect(page.locator('#dashboard-title')).toHaveText('Spark Dart');
    await expect(page).toHaveURL(/\/atlas\/panmagicon\/entry\/spell:fire-evocation:f01/);
  });

  test('cold-starts a routed folio with the route-owned dataset', async ({ page }) => {
    await page.goto('/atlas/panmagicon/entry/spell%3Astar-void-precipice%3Ap01?e2e');
    await expect(page.locator('app-root')).toHaveAttribute(
      'data-taxonomy-theme',
      'panmagicon-illuminated-weave',
    );
    await expect(page.getByTestId('taxonomy-dashboard')).toBeVisible();
    await expect(page.locator('#dashboard-title')).toHaveText('Compass Fold');
    await expect(page.getByTestId('taxonomy-dashboard')).toContainText('Purpose and formula');
  });
});
