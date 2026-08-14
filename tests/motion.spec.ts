import { expect, test } from '@playwright/test';

test.describe('motion system', () => {
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'Visual motion audit runs in Chromium',
  );

  test('reveals important content once and keeps the final state', async ({ page }) => {
    await page.goto('/');

    const service = page.locator('.service-row').first();
    await service.scrollIntoViewIfNeeded();
    await expect(service).toHaveAttribute('data-reveal-visible', 'true');

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await service.scrollIntoViewIfNeeded();
    await expect(service).toHaveAttribute('data-reveal-visible', 'true');

    const metric = page.locator('[data-project-slug="nocturna"] [data-countup]');
    await metric.scrollIntoViewIfNeeded();
    await expect(metric).toHaveText('95+');
  });

  test('reduced motion keeps content and verified metrics immediately available', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced');
    await expect(page.locator('[data-reveal-ready]')).toHaveCount(0);
    await expect(page.locator('[data-project-slug="nocturna"] [data-countup]')).toHaveText('95+');

    const heroAnimationDuration = await page
      .locator('.hero-eyebrow')
      .evaluate((element) => getComputedStyle(element).animationDuration);
    expect(Number.parseFloat(heroAnimationDuration)).toBeLessThanOrEqual(0.00001);
  });

  test('shared project elements survive forward and back client navigation', async ({ page }) => {
    await page.addInitScript(() => {
      const motionWindow = window as typeof window & { __navigationEvents?: string[] };
      motionWindow.__navigationEvents = [];
      document.addEventListener('astro:before-preparation', () => {
        motionWindow.__navigationEvents?.push('before-preparation');
      });
      document.addEventListener('astro:page-load', () => {
        motionWindow.__navigationEvents?.push('page-load');
      });
    });

    await page.goto('/');
    const cardTitle = page.locator('[data-project-slug="nocturna"] h3');
    await expect(cardTitle).toHaveCSS('view-transition-name', 'project-nocturna-title');

    await cardTitle.click();
    await expect(page).toHaveURL(/\/work\/nocturna$/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCSS(
      'view-transition-name',
      'project-nocturna-title',
    );

    await page.goBack();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('[data-project-slug="nocturna"] h3')).toBeVisible();

    const navigationEvents = await page.evaluate(
      () => (window as typeof window & { __navigationEvents?: string[] }).__navigationEvents ?? [],
    );
    expect(
      navigationEvents.filter((event) => event === 'before-preparation').length,
    ).toBeGreaterThanOrEqual(2);
    expect(navigationEvents.filter((event) => event === 'page-load').length).toBeGreaterThanOrEqual(
      2,
    );
  });

  test('touch input does not enable hover-only motion', async ({ browser, browserName }) => {
    test.skip(browserName !== 'chromium', 'Touch motion audit runs in Chromium');
    const context = await browser.newContext({
      hasTouch: true,
      isMobile: true,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();

    await page.goto('/');
    const inputCapabilities = await page.evaluate(() => ({
      fineHover: matchMedia('(hover: hover) and (pointer: fine)').matches,
      coarsePointer: matchMedia('(pointer: coarse)').matches,
      maxTouchPoints: navigator.maxTouchPoints,
    }));

    expect(inputCapabilities.fineHover).toBe(false);
    expect(inputCapabilities.coarsePointer).toBe(true);
    expect(inputCapabilities.maxTouchPoints).toBeGreaterThan(0);
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'enhanced');
    await context.close();
  });
});
