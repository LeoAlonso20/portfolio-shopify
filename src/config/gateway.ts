import type { Locale } from './site';

export const gatewayCopy = {
  en: {
    seo: {
      title: 'Leandro Alonso — Software Engineer & Shopify Developer',
      description:
        'Choose between Leandro Alonso’s Shopify development portfolio and broader professional software engineering portfolio.',
    },
    headerLabel: 'Portfolio selection',
    eyebrow: 'Two focused portfolios',
    title: 'Choose the work most relevant to you.',
    intro:
      'My work spans ecommerce development and broader software engineering. Each portfolio keeps that experience focused, clear and useful for the person viewing it.',
    choices: {
      shopify: {
        index: '01',
        eyebrow: 'Shopify · Ecommerce',
        title: 'Shopify Portfolio',
        description:
          'High-performance storefronts, custom development and ecommerce experiences designed around clearer shopping journeys and conversion.',
        tags: ['Shopify', 'Liquid', 'UX & CRO', 'Performance'],
        cta: 'Explore Shopify work',
      },
      professional: {
        index: '02',
        eyebrow: 'Software engineering',
        title: 'Professional Portfolio',
        description:
          'Mobile and web product development, systems engineering education, technical experience and selected professional projects.',
        tags: ['React Native', 'TypeScript', 'Architecture', 'Product quality'],
        cta: 'Explore professional work',
      },
    },
    footer: 'Software Engineer based in Córdoba, Argentina.',
  },
  es: {
    seo: {
      title: 'Leandro Alonso — Ingeniero de Software & Desarrollador Shopify',
      description:
        'Elegí entre el portfolio de desarrollo Shopify de Leandro Alonso y su portfolio profesional de ingeniería de software.',
    },
    headerLabel: 'Selección de portfolio',
    eyebrow: 'Dos portfolios especializados',
    title: 'Elegí el trabajo más relevante para vos.',
    intro:
      'Mi trabajo abarca desarrollo ecommerce e ingeniería de software. Cada portfolio mantiene esa experiencia enfocada, clara y útil para quien la está viendo.',
    choices: {
      shopify: {
        index: '01',
        eyebrow: 'Shopify · Ecommerce',
        title: 'Portfolio Shopify',
        description:
          'Tiendas de alto rendimiento, desarrollo a medida y experiencias ecommerce diseñadas alrededor de recorridos de compra más claros y conversión.',
        tags: ['Shopify', 'Liquid', 'UX & CRO', 'Performance'],
        cta: 'Explorar trabajos Shopify',
      },
      professional: {
        index: '02',
        eyebrow: 'Ingeniería de software',
        title: 'Portfolio Profesional',
        description:
          'Desarrollo de productos mobile y web, formación en ingeniería, experiencia técnica y proyectos profesionales seleccionados.',
        tags: ['React Native', 'TypeScript', 'Arquitectura', 'Calidad de producto'],
        cta: 'Explorar perfil profesional',
      },
    },
    footer: 'Ingeniero de Software radicado en Córdoba, Argentina.',
  },
} as const satisfies Record<Locale, unknown>;
