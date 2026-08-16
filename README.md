# Leandro Alonso — Portfolio

A bilingual, static-first portfolio for Leandro Alonso, Software Engineer & Shopify Developer. The site is designed to generate qualified Shopify/DTC leads while demonstrating frontend engineering, ecommerce UX, performance and accessibility through the product itself.

## Stack

- Astro 7 with strict TypeScript
- Astro Content Collections / Content Layer with schema validation
- Tailwind CSS 4 through the official Vite plugin, plus a custom CSS token system
- Astro View Transitions with shared project elements
- Self-hosted Manrope and JetBrains Mono variable fonts
- Lucide Astro icons (server-rendered SVG, no icon runtime)
- Playwright across Chromium, Firefox and WebKit
- ESLint, Astro Check and Prettier

The public experience is built with Astro components, semantic HTML, CSS and small progressive-enhancement scripts. React is intentionally not installed because no feature currently justifies a hydrated island.

## Installation

Requirements:

- Node.js 22.12 or newer
- pnpm 11

```bash
corepack enable
pnpm install
cp .env.example .env
```

Set `SITE_URL` in `.env` to the canonical deployment origin without a trailing slash. Local development falls back to `http://localhost:4321` when it is unset.

## Development

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

The repository also supports Astro's background server mode:

```bash
pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev stop
```

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm test:e2e
pnpm test:e2e:chromium
pnpm test:e2e:firefox
pnpm test:e2e:webkit
pnpm test:a11y
pnpm test:lighthouse
```

Playwright tests start a production build and preview automatically. Install local browser binaries once if needed:

```bash
pnpm exec playwright install chromium firefox webkit
```

`pnpm test:lighthouse` also builds the site, starts and stops an Astro production preview, and writes HTML/JSON reports to `lighthouse-reports/`. Set `LIGHTHOUSE_URL` only when auditing an already-running remote or local URL.

## Architecture

```text
src/
├── components/              Reusable interface and page compositions
├── config/
│   ├── site.ts              Identity, canonical URL and contact source of truth
│   └── projects.ts          Project order, asset paths, metrics and live-store config
├── content/case-studies/    Localized EN/ES case-study data
├── i18n/ui.ts               Reusable bilingual interface and homepage copy
├── layouts/BaseLayout.astro SEO, structured data, header/footer and transitions
├── lib/assets.ts             Drop-in public asset discovery and responsive variants
├── pages/                   Static English and Spanish routes
└── styles/global.css        Design tokens, global foundations and motion rules
```

`src/content.config.ts` validates every case study during the build. Project facts that must not be translated—asset locations, order, live URLs and verified metrics—live separately in `src/config/projects.ts`.

## Internationalization

English is the default locale:

- `/`
- `/work/nocturna`
- `/work/velor`
- `/work/rytual-cafe`

Spanish uses the `/es` prefix:

- `/es`
- `/es/work/nocturna`
- `/es/work/velor`
- `/es/work/rytual-cafe`

Reusable UI copy is centralized in `src/i18n/ui.ts`; localized case-study narratives live in `src/content/case-studies/{locale}`. The language selector maps to the corresponding logical route. Each page emits localized metadata, canonical URLs, `en`/`es` hreflang entries and `x-default`.

To add another language, extend the `Locale` type and UI dictionary, add localized content entries, create the route files and add corresponding hreflang metadata.

## Adding a case study

1. Add the slug and invariant project data in `src/config/projects.ts`.
2. Add one validated JSON entry under each locale folder in `src/content/case-studies/`.
3. Add the asset paths and only verified metrics.
4. Add or reuse a visual variant in `src/components/ProjectVisual.astro`.
5. Run `pnpm typecheck`, `pnpm build` and `pnpm test:e2e`.

Do not add conversion, revenue, AOV or customer metrics unless the source can be verified. Empty metrics, URLs and passwords are omitted from the public interface.

## Replacing images

The initial release uses purpose-built CSS interface concepts because no final client screenshots, portrait or signature were supplied. The exact asset map and recommended dimensions are documented in [`docs/ASSETS.md`](docs/ASSETS.md). Components automatically switch from the concept fallback to a supplied file at build time; no component rewrite is needed.

Expected replacements:

- `public/images/brand/signature.svg` — tightly cropped signature/logo
- `public/images/leandro/portrait.webp` — 4:5 portrait, recommended 1600 × 2000
- `public/images/projects/nocturna/{card,hero}.webp`
- `public/images/projects/velor/{card,hero}.webp`
- `public/images/projects/rytual-cafe/{card,hero,cart-before,cart-after}.webp`

Add any file at its expected path, rebuild, and the header, portrait, project cards, case-study heroes and Rytual Cafe comparisons will use it automatically with explicit dimensions, responsive `sizes`, lazy loading below the fold and eager loading for case-study hero media.

For responsive raster delivery, optionally add width variants beside the original using `-640`, `-960`, `-1440` and `-1920` suffixes—for example `hero-960.webp`. The image component discovers these files and emits a `srcset`; the unsuffixed asset remains the required fallback.

## Live Shopify project URLs

Configure each project's `liveStore` object in `src/config/projects.ts`:

```ts
liveStore: {
  url: 'https://verified-store.example',
  isPrivate: false,
  publicPreviewPassword: null,
}
```

The CTA remains hidden while `url` is `null`. Only publish a preview password when it is a deliberately shareable demo credential. Never store an actual sensitive client password in the repository.

## Contact details

Identity, email and social links are centralized in `src/config/site.ts`. Public contact is email-only.

> **Required before production:** verify `alonsoleadrowork@gmail.com`, the LinkedIn URL and GitHub URL against Leandro's current public contact information.

## SEO and canonical URL

- Shared technical SEO and JSON-LD live in `src/layouts/BaseLayout.astro`.
- Localized metadata lives in `src/i18n/ui.ts` and each case-study entry.
- `astro.config.mjs` reads `SITE_URL`, then `VERCEL_PROJECT_PRODUCTION_URL`, with a localhost development fallback.
- `@astrojs/sitemap` generates the static sitemap.
- `src/pages/robots.txt.ts` derives its sitemap URL from the centralized site configuration.

No ratings, testimonials, medical outcomes or unsupported commercial results are included in structured data or copy.

## Vercel deployment

This project is fully static and does not need a Vercel adapter.

1. Import the Git repository in Vercel.
2. Keep the auto-detected Astro preset.
3. Set the install command to `pnpm install` and build command to `pnpm build` if Vercel does not detect them automatically.
4. Set `SITE_URL` to the final canonical production URL.
5. Deploy and verify all EN/ES routes, sitemap and contact links.

## Custom domain

After purchasing the domain:

1. Add it to the Vercel project and configure the DNS records Vercel provides.
2. Set `SITE_URL=https://your-domain.com` in Vercel's Production environment.
3. Redeploy so canonical URLs, hreflang, `robots.txt` and the sitemap use the new domain.
4. Confirm one preferred domain variant redirects to the other (for example, `www` to apex).

## Remaining verified-content inputs

- Real live-store URLs and any intentionally public preview passwords
- Final signature/logo and professional portrait
- Authorized project screenshots, including Rytual Cafe before/after assets
- Verified business metrics, if Leandro later chooses to publish them
- Final custom domain
