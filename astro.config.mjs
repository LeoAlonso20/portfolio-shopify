// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '');
/** @param {string | undefined} value */
const cleanUrl = (value) => {
  const url = value?.trim();
  if (!url) return null;
  return url.startsWith('http') ? url : `https://${url}`;
};
const site =
  cleanUrl(process.env.SITE_URL) ??
  cleanUrl(env.SITE_URL) ??
  cleanUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  cleanUrl(env.VERCEL_PROJECT_PRODUCTION_URL) ??
  'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  prefetch: true,
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
