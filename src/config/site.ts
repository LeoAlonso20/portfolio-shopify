export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

const rawSiteUrl =
  import.meta.env.SITE_URL ||
  (import.meta.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${import.meta.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export const siteConfig = {
  name: 'Leandro Alonso',
  title: 'Software Engineer & Shopify Developer',
  siteUrl: rawSiteUrl.replace(/\/$/, ''),
  defaultLocale: 'en' as const,
  email: 'alonsoleadrowork@gmail.com',
  phone: '+54 9 3572 671602',
  social: {
    linkedin: 'https://www.linkedin.com/in/leandro-alonso-work',
    github: 'https://github.com/LeoAlonso20',
  },
  education: {
    degree: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
  },
  assets: {
    signature: '/images/brand/signature.svg',
    aboutSignature: '/images/brand/about-signature.png',
    portrait: '/images/leandro/portrait.webp',
  },
} as const;

const whatsappMessages: Record<Locale, string> = {
  en: "Hi Leandro, I'd like to talk about a Shopify project.",
  es: 'Hola Leandro, me gustaría conversar sobre un proyecto de Shopify.',
};

export function getWhatsAppUrl(locale: Locale): string {
  return `https://wa.me/5493572671602?text=${encodeURIComponent(whatsappMessages[locale])}`;
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, `${siteConfig.siteUrl}/`).toString();
}

export function homePath(locale: Locale): string {
  return locale === 'en' ? '/' : '/es';
}

export function workPath(locale: Locale, slug: string): string {
  return locale === 'en' ? `/work/${slug}` : `/es/work/${slug}`;
}
