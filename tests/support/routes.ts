export type Locale = 'en' | 'es';

export interface LogicalRoute {
  id: 'gateway' | 'shopify' | 'professional' | 'nocturna' | 'velor' | 'rytual-cafe';
  en: string;
  es: string;
  heading: string | RegExp;
}

export interface LocalizedRoute {
  id: LogicalRoute['id'];
  locale: Locale;
  path: string;
  alternatePath: string;
  englishPath: string;
  spanishPath: string;
  heading: string | RegExp;
}

export const origin = 'http://127.0.0.1:4321';

export const logicalRoutes: readonly LogicalRoute[] = [
  {
    id: 'gateway',
    en: '/',
    es: '/es',
    heading: /Choose the work most relevant to you|Elegí el trabajo más relevante para vos/,
  },
  {
    id: 'shopify',
    en: '/shopify',
    es: '/es/shopify',
    heading:
      /High-performance Shopify stores built for better shopping experiences|Tiendas Shopify de alto rendimiento/,
  },
  {
    id: 'professional',
    en: '/profesional',
    es: '/es/profesional',
    heading: /Systems Engineer & Software Developer|Ingeniero en Sistemas/,
  },
  {
    id: 'nocturna',
    en: '/shopify/work/nocturna',
    es: '/es/shopify/work/nocturna',
    heading: 'Nocturna',
  },
  {
    id: 'velor',
    en: '/shopify/work/velor',
    es: '/es/shopify/work/velor',
    heading: 'Velor',
  },
  {
    id: 'rytual-cafe',
    en: '/shopify/work/rytual-cafe',
    es: '/es/shopify/work/rytual-cafe',
    heading: 'Rytual Cafe',
  },
] as const;

export const localizedRoutes: readonly LocalizedRoute[] = logicalRoutes.flatMap((route) => [
  {
    id: route.id,
    locale: 'en',
    path: route.en,
    alternatePath: route.es,
    englishPath: route.en,
    spanishPath: route.es,
    heading: route.heading,
  },
  {
    id: route.id,
    locale: 'es',
    path: route.es,
    alternatePath: route.en,
    englishPath: route.en,
    spanishPath: route.es,
    heading: route.heading,
  },
]);

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, `${origin}/`).toString();
}
