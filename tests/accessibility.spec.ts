import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page, type TestInfo } from '@playwright/test';

import { localizedRoutes } from './support/routes';

const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

async function expectNoAxeViolations(page: Page, testInfo: TestInfo): Promise<void> {
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();

  if (results.violations.length > 0) {
    await testInfo.attach('axe-results', {
      body: JSON.stringify(results, null, 2),
      contentType: 'application/json',
    });
  }

  expect(
    results.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      targets: violation.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
}

test.describe('WCAG 2.2 AA automated checks', () => {
  for (const route of localizedRoutes) {
    test(`${route.path} has no automatically detectable WCAG A/AA violations`, async ({
      page,
    }, testInfo) => {
      await page.goto(route.path, { waitUntil: 'networkidle' });
      await expect(page.locator('main#main-content')).toBeVisible();
      await expectNoAxeViolations(page, testInfo);
    });
  }

  for (const locale of ['en', 'es'] as const) {
    test(`${locale.toUpperCase()} open mobile navigation passes axe`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(locale === 'en' ? '/shopify' : '/es/shopify', {
        waitUntil: 'networkidle',
      });
      await page.getByTestId('mobile-nav-toggle').click();
      await expect(page.getByTestId('mobile-nav-panel')).toBeVisible();
      await expectNoAxeViolations(page, testInfo);
    });
  }
});
