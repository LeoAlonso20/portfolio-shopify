# Image replacement map

The portfolio renders CSS-based interface concepts until verified assets are supplied. Dropping a file at one of the paths below and rebuilding is enough to replace its concept fallback; component changes are not required.

Use optimized SVG, AVIF or WebP exports at these predictable locations:

- `public/images/brand/signature.svg` — transparent signature/logo, ideally a tightly cropped SVG or 1200 × 300 transparent PNG/WebP.
- `public/images/brand/professional-logo.svg` — independent professional portfolio logo, transparent and tightly cropped; SVG is recommended. Until supplied, the interface displays an `LA` fallback.
- `public/images/leandro/portrait.webp` — portrait, recommended 1600 × 2000 (4:5), minimum 1200 px wide.
- `public/images/projects/nocturna/card.webp` — card image, 1800 × 1240 (approximately 1.45:1).
- `public/images/projects/nocturna/hero.webp` — case-study hero, 2400 × 1500 (8:5).
- `public/images/projects/velor/card.webp` — card image, 1800 × 1240.
- `public/images/projects/velor/hero.webp` — case-study hero, 2400 × 1500.
- `public/images/projects/rytual-cafe/card.webp` — card image, 1800 × 1240.
- `public/images/projects/rytual-cafe/hero.webp` — case-study hero, 2400 × 1500.
- `public/images/projects/rytual-cafe/cart-before.webp` — before screenshot, 1440 × 1600 (9:10).
- `public/images/projects/rytual-cafe/cart-after.webp` — after screenshot, 1440 × 1600 (9:10).

Use screenshots that Leandro is authorized to publish. Do not commit sensitive preview credentials in image metadata or filenames.

Optional responsive raster variants use the same basename with `-640`, `-960`, `-1440` or `-1920` before the extension (for example, `card-960.webp`). Available variants are discovered automatically and included in `srcset`.
