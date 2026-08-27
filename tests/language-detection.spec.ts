import { expect, test } from '@playwright/test';

test.describe('automatic language selection', () => {
  test.describe('with a Spanish system language', () => {
    test.use({ locale: 'es-AR' });

    test('redirects unprefixed routes and preserves URL details', async ({ page }) => {
      await page.goto('/shopify?source=language-test#services');

      await expect(page).toHaveURL(/\/es\/shopify\?source=language-test#services$/);
      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    });

    test('remembers a manual switch to English', async ({ page }) => {
      await page.goto('/shopify');
      await expect(page).toHaveURL(/\/es\/shopify$/);

      await page
        .locator('[data-site-header] .desktop-actions')
        .getByRole('link', { name: 'EN', exact: true })
        .click();

      await expect(page).toHaveURL(/\/shopify$/);
      await page.goto('/');
      await expect(page).toHaveURL(/\/$/);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });
  });

  test('keeps an explicitly requested Spanish URL', async ({ page }) => {
    await page.goto('/es/shopify');

    await expect(page).toHaveURL(/\/es\/shopify$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('falls back to Spanish when the browser exposes no language', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', { configurable: true, get: () => [] });
      Object.defineProperty(navigator, 'language', { configurable: true, get: () => '' });
    });

    await page.goto('/');

    await expect(page).toHaveURL(/\/es$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });
});
