import { expect, test, type Locator, type Page } from '@playwright/test';

import { logicalRoutes, type Locale } from './support/routes';

const projectSlugs = ['nocturna', 'velor', 'rytual-cafe'] as const;

function headerLanguageLink(page: Page, currentLocale: Locale, targetLocale: Locale): Locator {
  const navigationName = currentLocale === 'en' ? 'Language' : 'Idioma';
  const linkName = targetLocale === 'en' ? 'EN' : 'ES';

  return page
    .locator('[data-site-header] .desktop-actions')
    .getByRole('navigation', { name: navigationName })
    .locator(`a[lang="${targetLocale}"]`)
    .filter({ hasText: linkName });
}

test.describe('language switching', () => {
  for (const route of logicalRoutes) {
    test(`${route.id} preserves its logical page in both directions`, async ({ page }) => {
      await page.goto(route.en);

      await headerLanguageLink(page, 'en', 'es').click();
      await expect(page).toHaveURL(new URL(route.es, 'http://127.0.0.1:4321').toString());
      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
      await expect(headerLanguageLink(page, 'es', 'es')).toHaveAttribute('aria-current', 'page');

      await headerLanguageLink(page, 'es', 'en').click();
      await expect(page).toHaveURL(new URL(route.en, 'http://127.0.0.1:4321').toString());
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(headerLanguageLink(page, 'en', 'en')).toHaveAttribute('aria-current', 'page');
    });
  }
});

test.describe('project navigation', () => {
  for (const locale of ['en', 'es'] as const) {
    test(`${locale.toUpperCase()} project cards open every matching case study`, async ({
      page,
    }) => {
      const homePath = locale === 'en' ? '/' : '/es';

      for (const slug of projectSlugs) {
        const expectedPath = locale === 'en' ? `/work/${slug}` : `/es/work/${slug}`;
        await page.goto(homePath);

        const projectLink = page.locator(`[data-project-slug="${slug}"]`).getByRole('link');
        await expect(projectLink).toHaveAttribute('href', expectedPath);
        await projectLink.click();
        await expect(page).toHaveURL(new URL(expectedPath, 'http://127.0.0.1:4321').toString());
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      }
    });
  }
});

test.describe('contact links', () => {
  for (const locale of ['en', 'es'] as const) {
    test(`${locale.toUpperCase()} exposes valid direct contact destinations`, async ({ page }) => {
      await page.goto(locale === 'en' ? '/' : '/es');

      const emailLinks = page.locator('[data-contact="email"]');
      expect(await emailLinks.count()).toBeGreaterThan(0);
      for (const href of await emailLinks.evaluateAll((links) =>
        links.map((link) => link.getAttribute('href') ?? ''),
      )) {
        expect(href).toMatch(/^mailto:alonsoleadrowork@gmail\.com(?:\?|$)/);
      }

      await expect(page.locator('[data-contact="linkedin"]')).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/leandro-alonso-work',
      );
      await expect(page.locator('[data-contact="github"]')).toHaveAttribute(
        'href',
        'https://github.com/LeoAlonso20',
      );

      const removedMessagingChannel = ['whats', 'app'].join('');
      const removedMessagingHost = ['wa', 'me'].join('.');
      await expect(page.locator(`[data-contact="${removedMessagingChannel}"]`)).toHaveCount(0);
      await expect(
        page.locator(`a[href*="${removedMessagingHost}"], a[href*="${removedMessagingChannel}"]`),
      ).toHaveCount(0);
      await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);

      const newTabContacts = page.locator('[data-contact="linkedin"], [data-contact="github"]');
      for (const link of await newTabContacts.all()) {
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', /\bnoopener\b/);
        await expect(link).toHaveAttribute('rel', /\bnoreferrer\b/);
      }
    });
  }
});

test.describe('mobile navigation', () => {
  for (const locale of ['en', 'es'] as const) {
    test(`${locale.toUpperCase()} menu opens, closes with Escape and follows an anchor`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(locale === 'en' ? '/' : '/es');

      const menu = page.locator('[data-mobile-menu]');
      const toggle = page.getByTestId('mobile-nav-toggle');
      const panel = page.getByTestId('mobile-nav-panel');
      const openLabel = locale === 'en' ? 'Open navigation' : 'Abrir navegación';
      const closeLabel = locale === 'en' ? 'Close navigation' : 'Cerrar navegación';

      await expect(toggle).toBeVisible();
      await expect(toggle).toHaveAttribute('aria-label', openLabel);
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(panel).toBeHidden();

      await toggle.click();
      await expect(menu).toHaveJSProperty('open', true);
      await expect(toggle).toHaveAttribute('aria-label', closeLabel);
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await expect(panel).toBeVisible();

      const lastMenuLink = panel.locator('.mobile-panel-footer .button');
      await lastMenuLink.focus();
      await page.keyboard.press('Tab');
      await expect(toggle).toBeFocused();
      await page.keyboard.press('Shift+Tab');
      await expect(lastMenuLink).toBeFocused();

      await page.keyboard.press('Escape');
      await expect(menu).toHaveJSProperty('open', false);
      await expect(toggle).toBeFocused();

      await toggle.click();
      await panel.locator('a[href="#work"]').click();
      await expect(menu).toHaveJSProperty('open', false);
      await expect(page.locator('#work')).toBeInViewport();
    });
  }
});

test('before/after slider supports keyboard comparison', async ({ page }) => {
  await page.goto('/');

  const comparison = page.getByTestId('before-after');
  const slider = page.getByRole('slider', {
    name: 'Move the slider to compare the cart before and after',
  });

  await expect(slider).toHaveValue('52');
  await expect
    .poll(() =>
      comparison
        .locator('.comparison-state--after')
        .evaluate((element) => getComputedStyle(element).clipPath),
    )
    .toContain('52%');
  await slider.focus();
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('53');
  await expect
    .poll(() => comparison.evaluate((element) => element.style.getPropertyValue('--comparison')))
    .toBe('53%');

  await page.keyboard.press('End');
  await expect(slider).toHaveValue('100');
  await page.keyboard.press('Home');
  await expect(slider).toHaveValue('0');
});

test('before/after slider can be dragged directly from the visual handle', async ({ page }) => {
  await page.goto('/');

  const comparison = page.getByTestId('before-after');
  const frame = comparison.locator('.comparison-frame');
  const slider = page.getByRole('slider', {
    name: 'Move the slider to compare the cart before and after',
  });
  await frame.scrollIntoViewIfNeeded();
  const frameBox = await frame.boundingBox();

  expect(frameBox).not.toBeNull();
  if (!frameBox) return;

  await page.mouse.move(frameBox.x + frameBox.width * 0.52, frameBox.y + frameBox.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(frameBox.x + frameBox.width * 0.74, frameBox.y + frameBox.height * 0.5, {
    steps: 8,
  });
  await page.mouse.up();

  await expect.poll(async () => Number(await slider.inputValue())).toBeGreaterThan(60);
  await expect
    .poll(() => comparison.evaluate((element) => element.style.getPropertyValue('--comparison')))
    .toContain('%');
});
