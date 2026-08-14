import type { Locale } from './site';

export const projectSlugs = ['nocturna', 'velor', 'rytual-cafe'] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export interface ProjectMetric {
  value: string;
  label: Record<Locale, string>;
}

export interface ProjectConfig {
  slug: ProjectSlug;
  order: number;
  visual: 'nocturna' | 'velor' | 'rytual';
  next: ProjectSlug;
  assets: {
    hero: string;
    card: string;
    before?: string;
    after?: string;
  };
  liveStore: {
    url: string | null;
    isPrivate: boolean;
    publicPreviewPassword: string | null;
  };
  metrics: ProjectMetric[];
}

// TODO(content): Add live store URLs and deliberately public preview passwords only when verified.
// TODO(metrics): Add commercial metrics only when they can be supported by source data.
export const projects: Record<ProjectSlug, ProjectConfig> = {
  nocturna: {
    slug: 'nocturna',
    order: 1,
    visual: 'nocturna',
    next: 'velor',
    assets: {
      hero: '/images/projects/nocturna/hero.webp',
      card: '/images/projects/nocturna/card.webp',
    },
    liveStore: { url: null, isPrivate: false, publicPreviewPassword: null },
    metrics: [
      {
        value: '95+',
        label: { en: 'Lighthouse performance', es: 'Rendimiento en Lighthouse' },
      },
    ],
  },
  velor: {
    slug: 'velor',
    order: 2,
    visual: 'velor',
    next: 'rytual-cafe',
    assets: {
      hero: '/images/projects/velor/hero.webp',
      card: '/images/projects/velor/card.webp',
    },
    liveStore: { url: null, isPrivate: false, publicPreviewPassword: null },
    metrics: [],
  },
  'rytual-cafe': {
    slug: 'rytual-cafe',
    order: 3,
    visual: 'rytual',
    next: 'nocturna',
    assets: {
      hero: '/images/projects/rytual-cafe/hero.webp',
      card: '/images/projects/rytual-cafe/card.webp',
      before: '/images/projects/rytual-cafe/cart-before.webp',
      after: '/images/projects/rytual-cafe/cart-after.webp',
    },
    liveStore: { url: null, isPrivate: false, publicPreviewPassword: null },
    metrics: [],
  },
};
