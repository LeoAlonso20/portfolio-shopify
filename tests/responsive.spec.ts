import { expect, test, type Page } from '@playwright/test';

import { localizedRoutes } from './support/routes';

async function expectNoPageOverflow(page: Page, context: string): Promise<void> {
  const dimensions = await page.evaluate(() => ({
    documentClientWidth: document.documentElement.clientWidth,
    documentScrollWidth: document.documentElement.scrollWidth,
    bodyClientWidth: document.body.clientWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));

  expect(
    dimensions.documentScrollWidth,
    `${context}: document width ${dimensions.documentScrollWidth}px exceeds viewport ${dimensions.documentClientWidth}px`,
  ).toBeLessThanOrEqual(dimensions.documentClientWidth + 1);
  expect(
    dimensions.bodyScrollWidth,
    `${context}: body width ${dimensions.bodyScrollWidth}px exceeds viewport ${dimensions.bodyClientWidth}px`,
  ).toBeLessThanOrEqual(dimensions.bodyClientWidth + 1);
}

test.describe('responsive overflow', () => {
  for (const route of localizedRoutes) {
    test(`${route.path} has no page-level horizontal overflow on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(route.path);
      await expectNoPageOverflow(page, `${route.path} at 390px`);
    });
  }

  test('homepage remains within the page at the required layout widths', async ({ page }) => {
    for (const width of [375, 430, 768, 1024, 1280, 1440, 1728]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
      await page.goto('/');
      await expectNoPageOverflow(page, `homepage at ${width}px`);
    }
  });
});
