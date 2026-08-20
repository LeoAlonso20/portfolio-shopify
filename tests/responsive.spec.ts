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

  test('Shopify homepage remains within the page at the required layout widths', async ({
    page,
  }) => {
    for (const width of [375, 430, 768, 1024, 1280, 1440, 1728]) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
      await page.goto('/shopify');
      await expectNoPageOverflow(page, `Shopify homepage at ${width}px`);
    }
  });

  test('localized homepage copy fits hero, CTAs and cards on desktop and mobile', async ({
    page,
  }) => {
    const cases = [
      {
        path: '/shopify',
        primary: 'Start a project',
        secondary: 'View Shopify work',
        desktopMaxHeroHeight: 520,
        mobileMaxHeroHeight: 560,
      },
      {
        path: '/es/shopify',
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
        await expect(page.locator('.service-row')).toHaveCount(6);
        await expect(page.locator('[data-project-slug]')).toHaveCount(3);
      }
    }
  });

  test('gateway clearly exposes both portfolio choices without linking back to itself', async ({
    page,
  }) => {
    for (const route of [
      { path: '/', shopify: '/shopify', professional: '/profesional' },
      { path: '/es', shopify: '/es/shopify', professional: '/es/profesional' },
    ]) {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(route.path, { waitUntil: 'networkidle' });

      await expect(page.locator('body')).toHaveAttribute('data-theme', 'gateway');
      await expect(page.locator('.gateway-choice--shopify')).toHaveAttribute('href', route.shopify);
      await expect(page.locator('.gateway-choice--professional')).toHaveAttribute(
        'href',
        route.professional,
      );
      await expect(page.locator('[data-site-header]')).toHaveCount(0);
      await expectNoPageOverflow(page, `${route.path} gateway at 390px`);
    }
  });

  test('professional theme keeps its cyan identity and profile content on mobile', async ({
    page,
  }) => {
    for (const path of ['/profesional', '/es/profesional']) {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path, { waitUntil: 'networkidle' });

      await expect(page.locator('body')).toHaveAttribute('data-theme', 'professional');
      await expect(page.locator('.professional-project')).toHaveCount(7);
      await expect(page.locator('.professional-portrait-image')).toHaveAttribute(
        'src',
        '/images/leandro/portrait.webp',
      );
      await expect(page.locator('.professional-signature')).toHaveAttribute(
        'src',
        '/images/brand/about-signature.png',
      );

      const iconAlignment = await page.locator('.education-icon').evaluate((container) => {
        const icon = container.querySelector('svg');
        const containerBox = container.getBoundingClientRect();
        const iconBox = icon?.getBoundingClientRect();

        return {
          x: iconBox
            ? Math.abs(
                containerBox.left + containerBox.width / 2 - (iconBox.left + iconBox.width / 2),
              )
            : Number.POSITIVE_INFINITY,
          y: iconBox
            ? Math.abs(
                containerBox.top + containerBox.height / 2 - (iconBox.top + iconBox.height / 2),
              )
            : Number.POSITIVE_INFINITY,
        };
      });
      expect(iconAlignment.x).toBeLessThanOrEqual(1);
      expect(iconAlignment.y).toBeLessThanOrEqual(1);

      const selectionColor = await page
        .locator('.professional-hero h1')
        .evaluate((heading) => getComputedStyle(heading, '::selection').backgroundColor);
      expect(selectionColor).toBe('rgb(56, 189, 248)');

      await page.getByTestId('mobile-nav-toggle').click();
      const mobileEmail = page.getByTestId('mobile-nav-panel').locator('.button--primary');
      await expect(mobileEmail).toHaveCSS('background-color', 'rgb(56, 189, 248)');
      await expectNoPageOverflow(page, `${path} professional drawer at 390px`);
    }
  });
});
