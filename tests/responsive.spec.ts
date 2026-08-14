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

  test('localized homepage copy fits hero, CTAs and cards on desktop and mobile', async ({
    page,
  }) => {
    const cases = [
      {
        path: '/',
        primary: 'Start a project',
        secondary: 'View Shopify work',
        desktopMaxHeroHeight: 520,
        mobileMaxHeroHeight: 560,
      },
      {
        path: '/es',
        primary: 'Hablemos de tu proyecto',
        secondary: 'Ver proyectos Shopify',
        desktopMaxHeroHeight: 560,
        mobileMaxHeroHeight: 620,
      },
    ];

    for (const viewport of [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'mobile', width: 390, height: 844 },
    ]) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const route of cases) {
        await page.goto(route.path, { waitUntil: 'networkidle' });
        await expectNoPageOverflow(page, `${route.path} ${viewport.name}`);

        const heroHeading = page.locator('.hero-copy h1');
        await expect(heroHeading).toBeVisible();
        const heroBox = await heroHeading.boundingBox();
        expect(heroBox?.height ?? 0).toBeGreaterThan(0);
        expect(heroBox?.height ?? 0).toBeLessThanOrEqual(
          viewport.name === 'desktop' ? route.desktopMaxHeroHeight : route.mobileMaxHeroHeight,
        );

        await expect(
          page.locator('.hero-actions a').filter({ hasText: route.primary }),
        ).toHaveAttribute('href', '#contact');
        await expect(
          page.locator('.hero-actions a').filter({ hasText: route.secondary }),
        ).toHaveAttribute('href', '#work');

        const clippedText = await page.evaluate(() =>
          Array.from(
            document.querySelectorAll(
              '.service-row h3, .service-row p, .service-row small, .project-card-body p, .project-card-meta, .project-card-title-row',
            ),
          )
            .map((element) => ({
              text: element.textContent?.trim().replace(/\s+/g, ' ').slice(0, 90),
              scrollWidth: element.scrollWidth,
              clientWidth: element.clientWidth,
            }))
            .filter((item) => item.scrollWidth > item.clientWidth + 1),
        );

        expect(clippedText).toEqual([]);
        await expect(page.locator('.service-row')).toHaveCount(5);
        await expect(page.locator('[data-project-slug]')).toHaveCount(3);
      }
    }
  });
});
