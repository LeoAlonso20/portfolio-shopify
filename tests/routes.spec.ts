import { expect, test } from '@playwright/test';

import { absoluteUrl, localizedRoutes } from './support/routes';
import { observeRuntimeIssues } from './support/runtime';

test.describe('localized routes and metadata', () => {
  for (const route of localizedRoutes) {
    test(`${route.locale.toUpperCase()} ${route.path} renders cleanly with localized metadata`, async ({
      page,
    }) => {
      const issues = observeRuntimeIssues(page);
      const response = await page.goto(route.path, { waitUntil: 'networkidle' });

      expect(response, `No document response was returned for ${route.path}`).not.toBeNull();
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', route.locale);
      await expect(page.locator('main#main-content')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.heading);
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();

      await expect(page).toHaveTitle(/\S+/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S+/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        absoluteUrl(route.path),
      );
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
        'href',
        absoluteUrl(route.englishPath),
      );
      await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute(
        'href',
        absoluteUrl(route.spanishPath),
      );
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
        'href',
        absoluteUrl(route.englishPath),
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        'content',
        absoluteUrl(route.path),
      );
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        'content',
        route.locale === 'en' ? 'en_US' : 'es_AR',
      );

      expect(issues.consoleErrors, `Console errors on ${route.path}`).toEqual([]);
      expect(issues.pageErrors, `Unhandled page errors on ${route.path}`).toEqual([]);
      expect(issues.failedLocalRequests, `Failed local requests on ${route.path}`).toEqual([]);
      expect(issues.badLocalResponses, `4xx/5xx local responses on ${route.path}`).toEqual([]);
    });
  }
});
