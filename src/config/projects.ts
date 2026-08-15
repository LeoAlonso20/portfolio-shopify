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
  videos: {
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
    videos: {
      hero: '/videos/projects/nocturna/hero.mp4',
      card: '/videos/projects/nocturna/card.mp4',
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
    videos: {
      hero: '/videos/projects/velor/hero.mp4',
      card: '/videos/projects/velor/card.mp4',
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
    videos: {
      hero: '/videos/projects/rytual-cafe/hero.mp4',
      card: '/videos/projects/rytual-cafe/card.mp4',
      before: '/videos/projects/rytual-cafe/cart-before.mp4',
      after: '/videos/projects/rytual-cafe/cart-after.mp4',
    },
    liveStore: { url: null, isPrivate: false, publicPreviewPassword: null },
    metrics: [],
  },
};
