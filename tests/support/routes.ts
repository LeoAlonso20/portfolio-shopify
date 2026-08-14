export type Locale = 'en' | 'es';

export interface LogicalRoute {
  id: 'home' | 'nocturna' | 'velor' | 'rytual-cafe';
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

export const origin = 'http://localhost:4321';

export const logicalRoutes: readonly LogicalRoute[] = [
  {
    id: 'home',
    en: '/',
    es: '/es',
    heading:
      /High-performance Shopify stores built for better shopping experiences|Tiendas Shopify de alto rendimiento/,
  },
  { id: 'nocturna', en: '/work/nocturna', es: '/es/work/nocturna', heading: 'Nocturna' },
  { id: 'velor', en: '/work/velor', es: '/es/work/velor', heading: 'Velor' },
  {
    id: 'rytual-cafe',
    en: '/work/rytual-cafe',
    es: '/es/work/rytual-cafe',
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
