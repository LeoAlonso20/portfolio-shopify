import type { Locale } from '../config/site';

export const ui = {
  en: {
    seo: {
      homeTitle: 'Leandro Alonso — Shopify Developer & Software Engineer',
      homeDescription:
        'Custom Shopify storefronts, conversion-focused improvements and performance engineering for ambitious DTC brands.',
    },
    accessibility: {
      skip: 'Skip to main content',
      primaryNav: 'Primary navigation',
      mobileNav: 'Mobile navigation',
      language: 'Language',
      openNav: 'Open navigation',
      closeNav: 'Close navigation',
      external: 'opens in a new tab',
      currentLanguage: 'Current language',
      copyPassword: 'Copy preview password',
      comparison: 'Cart experience before and after comparison',
    },
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      cta: 'Start a project',
    },
    hero: {
      eyebrow: 'Software engineering × Shopify',
      headlineStart: 'Shopify storefronts engineered to ',
      headlineAccent: 'perform',
      headlineEnd: ' — and convert.',
      body: 'I’m Leandro Alonso, a Software Engineer & Shopify Developer. I build and improve fast, custom storefronts for DTC brands—combining engineering, ecommerce UX and conversion thinking.',
      primaryCta: 'Start a project',
      secondaryCta: 'View selected work',
      availability: 'Available for selected projects',
      location: 'Based in Argentina · Working worldwide',
      visualLabel: 'Custom Shopify product experience',
      visualProduct: 'Night routine, simplified.',
      visualDetail: 'Product details',
      visualCta: 'Add to routine',
      performance: 'Performance-first build',
      performanceValue: 'Lean by design',
      uxNote: 'Mobile purchase flow',
      uxValue: 'Clearer at every step',
    },
    credibility: [
      { label: 'Custom-built', icon: 'Code2' },
      { label: 'Performance-first', icon: 'Gauge' },
      { label: 'Conversion-focused', icon: 'TrendingUp' },
      { label: 'Merchant-editable', icon: 'SlidersHorizontal' },
      { label: 'Responsive by default', icon: 'PanelsTopLeft' },
    ],
    services: {
      eyebrow: 'What I can help with',
      title: 'From focused improvements to complete Shopify storefronts.',
      intro:
        'Bring me the whole build or the one part of the buying journey that is holding the store back. The work is scoped around the business problem—not a fixed package.',
      items: [
        {
          number: '01',
          icon: 'Store',
          title: 'Custom Shopify development',
          description:
            'Complete storefronts, custom themes and flexible sections shaped around your brand—without forcing your business into a generic template.',
          detail: 'Full builds · Theme customization · Bespoke functionality',
        },
        {
          number: '02',
          icon: 'MousePointerClick',
          title: 'Ecommerce UX & CRO',
          description:
            'Product pages, carts, bundles and upsells made clearer and easier to use, especially where mobile shoppers tend to hesitate.',
          detail: 'PDPs · Cart UX · Bundles · Upsells',
        },
        {
          number: '03',
          icon: 'Gauge',
          title: 'Shopify performance',
          description:
            'A faster, leaner storefront with less unnecessary code and app weight—because every delay adds friction to the buying journey.',
          detail: 'Core Web Vitals · Frontend optimization · App reduction',
        },
        {
          number: '04',
          icon: 'Wrench',
          title: 'Store improvements & support',
          description:
            'Targeted fixes, migrations and ongoing improvements for stores that need an experienced engineer without starting over.',
          detail: 'Bug fixes · Integrations · Iteration',
        },
        {
          number: '05',
          icon: 'Network',
          title: 'Headless frontend development',
          description:
            'Custom commerce frontends for brands whose experience or technical needs go beyond a traditional theme architecture.',
          detail: 'Custom frontends · Integrations · Modern architecture',
        },
      ],
    },
    comparison: {
      eyebrow: 'Focused improvements',
      title: 'A better buying journey doesn’t always require a rebuild.',
      body: 'The right intervention can remove friction from a critical moment. Here, the same cart becomes easier to scan, understand and act on—while preserving the store around it.',
      before: 'Before',
      after: 'After',
      rangeLabel: 'Move the slider to compare the cart before and after',
      notes: [
        'Clearer cart hierarchy',
        'Simplified purchase flow',
        'Better offer presentation',
        'More useful empty-cart state',
      ],
      projectHint: 'Conceptual preview; verified Rytual Cafe screenshots can replace it directly.',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Commerce problems, solved at the right scale.',
      intro:
        'Two ground-up storefronts and one high-impact cart intervention. Different scopes, the same focus: make the experience better for shoppers and more manageable for the business.',
      viewCaseStudy: 'View case study',
      metricLabel: 'Verified',
    },
    engineering: {
      eyebrow: 'Engineering discipline',
      title: 'What shoppers feel is backed by what they never have to see.',
      intro:
        'Quality lives beneath the interface: fewer delays, fewer brittle dependencies and a storefront your team can keep using after launch.',
      items: [
        {
          icon: 'Gauge',
          title: 'Performance',
          description:
            'Fast pages and intentional client-side code keep the storefront responsive.',
        },
        {
          icon: 'Accessibility',
          title: 'Accessibility',
          description: 'Inclusive patterns make the buying journey work for more people.',
        },
        {
          icon: 'Blocks',
          title: 'Maintainability',
          description: 'Clean, understandable implementations stay easier to evolve.',
        },
        {
          icon: 'SlidersHorizontal',
          title: 'Merchant experience',
          description: 'Custom sections remain configurable without touching code.',
        },
        {
          icon: 'Smartphone',
          title: 'Responsive engineering',
          description: 'Mobile commerce is designed deliberately, not compressed from desktop.',
        },
      ],
      stackLabel: 'Selected tools',
      stack: ['Shopify', 'Liquid', 'Astro', 'TypeScript', 'JavaScript', 'Node.js', 'GraphQL'],
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering depth, applied to ecommerce.',
      paragraphs: [
        'I’m Leandro Alonso, a Software Engineer & Shopify Developer based in Córdoba, Argentina. I work with DTC brands and ecommerce teams that need more than a theme adjustment.',
        'I approach Shopify storefronts as lasting software products: the customer experience, performance and day-to-day merchant workflow all matter. That lets me solve visible UX problems and the technical complexity underneath them.',
      ],
      portraitAlt: 'Portrait of Leandro Alonso',
      portraitLabel: 'Leandro Alonso monogram portrait',
      portraitStatus: 'Córdoba · Argentina',
      role: 'Software Engineer & Shopify Developer',
      educationLabel: 'Education',
      education: 'Information Systems Engineering',
      educationSchool: 'UTN · Facultad Regional Córdoba',
    },
    why: {
      eyebrow: 'Why work with me',
      title: 'One perspective from the shopping journey to the codebase.',
      items: [
        {
          title: 'Conversion-conscious',
          description:
            'Technical decisions account for what shoppers need to understand and do next.',
        },
        {
          title: 'Performance by default',
          description:
            'Speed is treated as part of customer experience—not a cleanup task for later.',
        },
        {
          title: 'Built to stay manageable',
          description: 'Custom functionality can still be flexible for the team running the store.',
        },
        {
          title: 'Clear collaboration',
          description: 'Direct communication translates technical choices into business tradeoffs.',
        },
      ],
    },
    contact: {
      eyebrow: 'Have a project in mind?',
      title: 'Let’s make your Shopify experience work harder.',
      body: 'Whether you need a complete storefront, a custom feature or a focused improvement to an existing store, tell me where the friction is.',
      primary: 'Start a project by email',
      whatsapp: 'Message on WhatsApp',
      response: 'Direct contact · No sales form',
    },
    footer: {
      tagline: 'Software Engineer & Shopify Developer',
      explore: 'Explore',
      connect: 'Connect',
      copyright: 'Designed and engineered with care.',
    },
    caseStudy: {
      backToWork: 'Back to selected work',
      snapshot: 'Project snapshot',
      scope: 'Scope',
      platform: 'Platform',
      role: 'Role',
      focus: 'Key focus',
      verifiedResult: 'Verified result',
      liveStore: 'Visit live store',
      password: 'Preview password',
      passwordCopied: 'Password copied',
      nextProject: 'Next project',
      results: 'Outcome',
      ready: 'Ready to improve a similar part of your store?',
      readyBody: 'Let’s identify the friction and scope the Shopify work that will remove it.',
    },
  },
  es: {
    seo: {
      homeTitle: 'Leandro Alonso — Desarrollador Shopify y Software Engineer',
      homeDescription:
        'Tiendas Shopify a medida, mejoras orientadas a conversión e ingeniería de rendimiento para marcas DTC.',
    },
    accessibility: {
      skip: 'Saltar al contenido principal',
      primaryNav: 'Navegación principal',
      mobileNav: 'Navegación móvil',
      language: 'Idioma',
      openNav: 'Abrir navegación',
      closeNav: 'Cerrar navegación',
      external: 'se abre en una pestaña nueva',
      currentLanguage: 'Idioma actual',
      copyPassword: 'Copiar contraseña de acceso',
      comparison: 'Comparación del carrito antes y después',
    },
    nav: {
      work: 'Proyectos',
      services: 'Servicios',
      about: 'Sobre mí',
      cta: 'Hablemos de tu proyecto',
    },
    hero: {
      eyebrow: 'Ingeniería de software × Shopify',
      headlineStart: 'Tiendas Shopify pensadas para ',
      headlineAccent: 'rendir',
      headlineEnd: ' — y convertir.',
      body: 'Soy Leandro Alonso, Software Engineer y desarrollador Shopify. Creo y optimizo tiendas rápidas y a medida para marcas DTC, combinando ingeniería, UX ecommerce y criterio de conversión.',
      primaryCta: 'Hablemos de tu proyecto',
      secondaryCta: 'Ver proyectos',
      availability: 'Disponible para proyectos seleccionados',
      location: 'Desde Argentina · Para marcas de todo el mundo',
      visualLabel: 'Experiencia de producto Shopify a medida',
      visualProduct: 'Una rutina nocturna, más simple.',
      visualDetail: 'Detalle del producto',
      visualCta: 'Agregar a la rutina',
      performance: 'Desarrollo orientado al rendimiento',
      performanceValue: 'Liviano desde el diseño',
      uxNote: 'Compra desde el móvil',
      uxValue: 'Claridad en cada paso',
    },
    credibility: [
      { label: 'Desarrollo a medida', icon: 'Code2' },
      { label: 'Rendimiento primero', icon: 'Gauge' },
      { label: 'Foco en conversión', icon: 'TrendingUp' },
      { label: 'Editable por el negocio', icon: 'SlidersHorizontal' },
      { label: 'Adaptable de base', icon: 'PanelsTopLeft' },
    ],
    services: {
      eyebrow: 'Cómo puedo ayudarte',
      title: 'Desde una mejora puntual hasta una tienda Shopify completa.',
      intro:
        'Podemos trabajar sobre toda la implementación o sobre ese paso de compra que hoy está frenando a la tienda. El alcance se define por el problema del negocio, no por un paquete rígido.',
      items: [
        {
          number: '01',
          icon: 'Store',
          title: 'Desarrollo Shopify a medida',
          description:
            'Tiendas completas, temas propios y secciones flexibles que responden a tu marca, sin obligarla a entrar en una plantilla genérica.',
          detail: 'Tiendas completas · Temas · Funcionalidad a medida',
        },
        {
          number: '02',
          icon: 'MousePointerClick',
          title: 'UX ecommerce y CRO',
          description:
            'Páginas de producto, carritos, ofertas en paquete y ventas adicionales más claras y simples de usar, especialmente donde suele aparecer fricción en el móvil.',
          detail: 'PDP · Carrito · Paquetes · Ventas adicionales',
        },
        {
          number: '03',
          icon: 'Gauge',
          title: 'Rendimiento en Shopify',
          description:
            'Una tienda más rápida y liviana, con menos código y aplicaciones innecesarias, porque cada demora agrega fricción a la compra.',
          detail: 'Core Web Vitals · Optimización frontend · Menos dependencias',
        },
        {
          number: '04',
          icon: 'Wrench',
          title: 'Mejoras y soporte',
          description:
            'Correcciones, migraciones y evolución continua para tiendas que necesitan experiencia técnica sin empezar de cero.',
          detail: 'Errores · Integraciones · Mejora continua',
        },
        {
          number: '05',
          icon: 'Network',
          title: 'Frontend headless',
          description:
            'Interfaces de ecommerce personalizadas para marcas cuya experiencia o complejidad técnica supera una arquitectura tradicional de tema.',
          detail: 'Frontends a medida · Integraciones · Arquitectura moderna',
        },
      ],
    },
    comparison: {
      eyebrow: 'Mejoras de alto impacto',
      title: 'Mejorar el recorrido de compra no siempre exige rehacer toda la tienda.',
      body: 'Una intervención precisa puede sacar fricción de un momento clave. Acá, el mismo carrito se vuelve más fácil de leer, entender y usar, sin reemplazar la tienda que lo rodea.',
      before: 'Antes',
      after: 'Después',
      rangeLabel: 'Mové el control para comparar el carrito antes y después',
      notes: [
        'Jerarquía más clara',
        'Flujo de compra simplificado',
        'Mejor presentación de ofertas',
        'Estado de carrito vacío más útil',
      ],
      projectHint:
        'Vista conceptual; las capturas verificadas de Rytual Cafe pueden reemplazarla directamente.',
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Problemas de ecommerce resueltos en la escala correcta.',
      intro:
        'Dos tiendas desarrolladas desde cero y una intervención de alto impacto en el carrito. Alcances distintos con el mismo foco: mejorar la experiencia de compra y simplificar la gestión del negocio.',
      viewCaseStudy: 'Ver caso de estudio',
      metricLabel: 'Verificado',
    },
    engineering: {
      eyebrow: 'Disciplina de ingeniería',
      title: 'Lo que el cliente percibe se apoya en lo que nunca debería notar.',
      intro:
        'La calidad también vive debajo de la interfaz: menos demoras, menos dependencias frágiles y una tienda que tu equipo puede seguir usando después del lanzamiento.',
      items: [
        {
          icon: 'Gauge',
          title: 'Rendimiento',
          description: 'Páginas rápidas y código preciso mantienen una tienda ágil.',
        },
        {
          icon: 'Accessibility',
          title: 'Accesibilidad',
          description: 'Patrones inclusivos hacen que la compra funcione para más personas.',
        },
        {
          icon: 'Blocks',
          title: 'Mantenibilidad',
          description: 'Implementaciones claras resultan más fáciles de entender y evolucionar.',
        },
        {
          icon: 'SlidersHorizontal',
          title: 'Experiencia del negocio',
          description: 'Las secciones a medida siguen siendo configurables sin tocar código.',
        },
        {
          icon: 'Smartphone',
          title: 'Diseño adaptable',
          description:
            'El ecommerce móvil se diseña de forma deliberada, no como una versión reducida del escritorio.',
        },
      ],
      stackLabel: 'Herramientas seleccionadas',
      stack: ['Shopify', 'Liquid', 'Astro', 'TypeScript', 'JavaScript', 'Node.js', 'GraphQL'],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Profundidad técnica, aplicada al ecommerce.',
      paragraphs: [
        'Soy Leandro Alonso, Software Engineer y desarrollador Shopify en Córdoba, Argentina. Trabajo con marcas DTC y equipos de ecommerce que necesitan algo más que ajustar un tema.',
        'Trato cada tienda como un producto de software que debe durar: importan la experiencia del cliente, el rendimiento y el trabajo diario del equipo. Así puedo resolver tanto lo visible en la UX como la complejidad técnica que hay detrás.',
      ],
      portraitAlt: 'Retrato de Leandro Alonso',
      portraitLabel: 'Retrato monograma de Leandro Alonso',
      portraitStatus: 'Córdoba · Argentina',
      role: 'Software Engineer & Shopify Developer',
      educationLabel: 'Formación',
      education: 'Ingeniería en Sistemas de Información',
      educationSchool: 'UTN · Facultad Regional Córdoba',
    },
    why: {
      eyebrow: 'Por qué trabajar conmigo',
      title: 'Una sola mirada, desde el recorrido de compra hasta el código.',
      items: [
        {
          title: 'Criterio de conversión',
          description:
            'Las decisiones técnicas consideran qué necesita entender y hacer el cliente.',
        },
        {
          title: 'Rendimiento de base',
          description:
            'La velocidad es parte de la experiencia, no una tarea pendiente para el final.',
        },
        {
          title: 'Fácil de gestionar',
          description:
            'Una solución a medida también puede ser flexible para el equipo de la tienda.',
        },
        {
          title: 'Colaboración clara',
          description:
            'Comunicación directa que traduce decisiones técnicas en impacto de negocio.',
        },
      ],
    },
    contact: {
      eyebrow: '¿Tenés un proyecto en mente?',
      title: 'Hagamos que tu tienda Shopify funcione mejor.',
      body: 'Ya sea una tienda completa, una funcionalidad propia o una mejora puntual sobre lo que ya existe, contame dónde está la fricción.',
      primary: 'Escribir por email',
      whatsapp: 'Hablar por WhatsApp',
      response: 'Contacto directo · Sin formularios',
    },
    footer: {
      tagline: 'Software Engineer & Shopify Developer',
      explore: 'Explorar',
      connect: 'Contacto',
      copyright: 'Diseñado y desarrollado con criterio.',
    },
    caseStudy: {
      backToWork: 'Volver a proyectos',
      snapshot: 'Resumen del proyecto',
      scope: 'Alcance',
      platform: 'Plataforma',
      role: 'Rol',
      focus: 'Foco principal',
      verifiedResult: 'Resultado verificado',
      liveStore: 'Visitar tienda',
      password: 'Contraseña de acceso',
      passwordCopied: 'Contraseña copiada',
      nextProject: 'Próximo proyecto',
      results: 'Resultado',
      ready: '¿Querés mejorar una parte similar de tu tienda?',
      readyBody:
        'Identifiquemos la fricción y definamos el trabajo Shopify necesario para resolverla.',
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function getUi(locale: Locale) {
  return ui[locale];
}
