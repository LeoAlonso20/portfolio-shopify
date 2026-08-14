import type { Locale } from '../config/site';

export const ui = {
  en: {
    seo: {
      homeTitle: 'Leandro Alonso — Shopify Developer & Software Engineer',
      homeDescription:
        'Shopify development for DTC brands that need complete storefronts, focused improvements, faster shopping experiences and easier store management.',
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
      eyebrow: 'SOFTWARE ENGINEER × SHOPIFY DEVELOPER',
      headlineStart: 'High-performance Shopify stores built for better shopping experiences — and ',
      headlineAccent: 'better conversion',
      headlineEnd: '.',
      body: 'Custom Shopify development for DTC brands that need more than a template — from complete storefronts to high-impact improvements in product pages, carts, performance and UX.',
      primaryCta: 'Start a project',
      secondaryCta: 'View Shopify work',
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
      { label: 'Full builds', icon: 'Code2' },
      { label: 'Focused improvements', icon: 'Wrench' },
      { label: 'Faster storefronts', icon: 'Gauge' },
      { label: 'Editable from Shopify', icon: 'SlidersHorizontal' },
      { label: 'Better mobile UX', icon: 'PanelsTopLeft' },
    ],
    services: {
      eyebrow: 'What I can help with',
      title: 'From focused improvements to complete Shopify storefronts.',
      intro:
        'Whether your store needs one high-impact improvement or a complete custom build, I can work with what you already have — or build the experience from the ground up.',
      items: [
        {
          number: '01',
          icon: 'Store',
          title: 'Custom Shopify Development',
          description:
            'Custom storefronts, sections and features built around your brand — without forcing your business into a generic template.',
          detail: 'Full builds · Theme customization · Bespoke functionality',
        },
        {
          number: '02',
          icon: 'MousePointerClick',
          title: 'Ecommerce UX & CRO',
          description:
            'Improve the parts of your store that influence buying decisions — product pages, carts, bundles, upsells and mobile purchase flows.',
          detail: 'PDPs · Cart UX · Bundles · Upsells',
        },
        {
          number: '03',
          icon: 'Gauge',
          title: 'Shopify Performance',
          description:
            'Faster storefronts, less unnecessary JavaScript and fewer dependencies getting between your customers and checkout.',
          detail: 'Core Web Vitals · Frontend optimization · App reduction',
        },
        {
          number: '04',
          icon: 'Wrench',
          title: 'Store Improvements & Support',
          description:
            'Fix what is slowing your store down, improve existing functionality and keep your Shopify experience evolving as your business grows.',
          detail: 'Bug fixes · Integrations · Iteration',
        },
        {
          number: '05',
          icon: 'Network',
          title: 'Headless Ecommerce Development',
          description:
            'Custom frontend experiences for brands that need more flexibility, performance or control than a traditional storefront can provide.',
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
      eyebrow: 'Practical Shopify engineering',
      title: "Custom doesn't have to mean complicated.",
      intro: 'Fast. Maintainable. Merchant-editable. Built without unnecessary dependencies.',
      items: [
        {
          icon: 'SlidersHorizontal',
          title: 'Custom-built. Still easy to manage.',
          description:
            'I build Shopify sections and features your team can configure from the Shopify editor — without calling a developer every time you need to change content.',
        },
        {
          icon: 'Gauge',
          title: 'Performance by default',
          description:
            'Fast storefronts with intentional client-side JavaScript, fewer unnecessary dependencies and a smoother path to checkout.',
        },
        {
          icon: 'Blocks',
          title: 'Built to keep evolving',
          description:
            'Clean, scalable implementations designed to grow with your store instead of becoming harder to maintain over time.',
        },
        {
          icon: 'Smartphone',
          title: 'Mobile-first ecommerce',
          description:
            'Shopping experiences designed intentionally for the devices your customers actually use — not desktop layouts squeezed onto smaller screens.',
        },
      ],
      stackLabel: 'Selected tools',
      stack: ['Shopify', 'Liquid', 'Astro', 'TypeScript', 'JavaScript', 'Node.js', 'GraphQL'],
    },
    about: {
      eyebrow: 'About',
      title: 'Leandro Alonso — Software Engineer & Shopify Developer',
      paragraphs: [
        'I’m Leandro Alonso, a Software Engineer specialized in frontend development and Shopify. I combine engineering, ecommerce UX and performance thinking to build storefronts that work well for customers — and remain practical for the teams managing them.',
      ],
      portraitAlt: 'Portrait of Leandro Alonso',
      portraitLabel: 'Leandro Alonso monogram portrait',
      portraitStatus: 'Córdoba · Argentina',
      role: 'Software Engineer & Shopify Developer',
      educationLabel: 'Education',
      education: 'Ingeniería en Sistemas de Información',
      educationSchool: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
    },
    why: {
      eyebrow: 'Why work with me',
      title: 'Built like a product. Managed like Shopify.',
      intro:
        "Custom engineering shouldn't make your store harder to run. I build flexible storefronts that stay fast, maintainable and editable by your team.",
      items: [
        {
          title: 'Clearer buying journeys',
          description:
            'Store changes are shaped around what shoppers need to understand, choose and do next.',
        },
        {
          title: 'Speed with a business reason',
          description:
            'Performance work focuses on reducing friction between your customer and checkout.',
        },
        {
          title: 'Editable from Shopify',
          description:
            'Custom sections and features stay practical for the team running the store day to day.',
        },
        {
          title: 'Less app dependence',
          description:
            'When a focused feature can replace another storefront app, the store stays leaner and easier to manage.',
        },
      ],
    },
    contact: {
      eyebrow: 'Have a project in mind?',
      title: 'Let’s build a Shopify experience that performs.',
      body: "Whether you need a complete storefront, a better cart, a custom feature or performance improvements, let's make your store faster, easier to use and better prepared to convert.",
      primary: 'Start a project',
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
        'Desarrollo Shopify para marcas DTC que necesitan tiendas completas, mejoras puntuales, experiencias de compra más rápidas y gestión más simple.',
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
      eyebrow: 'SOFTWARE ENGINEER × SHOPIFY DEVELOPER',
      headlineStart:
        'Tiendas Shopify de alto rendimiento, creadas para ofrecer una mejor experiencia de compra — y mejorar la ',
      headlineAccent: 'conversión',
      headlineEnd: '.',
      body: 'Desarrollo Shopify a medida para marcas DTC que necesitan más que una plantilla: desde tiendas completas hasta mejoras de alto impacto en páginas de producto, carrito, rendimiento y UX.',
      primaryCta: 'Hablemos de tu proyecto',
      secondaryCta: 'Ver proyectos Shopify',
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
      { label: 'Tiendas completas', icon: 'Code2' },
      { label: 'Mejoras puntuales', icon: 'Wrench' },
      { label: 'Tiendas más rápidas', icon: 'Gauge' },
      { label: 'Editable desde Shopify', icon: 'SlidersHorizontal' },
      { label: 'Mejor UX mobile', icon: 'PanelsTopLeft' },
    ],
    services: {
      eyebrow: 'Cómo puedo ayudarte',
      title: 'Desde una mejora puntual hasta una tienda Shopify completa.',
      intro:
        'Ya sea que tu tienda necesite una mejora de alto impacto o un desarrollo completo a medida, puedo trabajar sobre lo que ya existe — o construir la experiencia desde cero.',
      items: [
        {
          number: '01',
          icon: 'Store',
          title: 'Desarrollo Shopify a medida',
          description:
            'Tiendas, secciones y funcionalidades desarrolladas alrededor de tu marca — sin obligar a tu negocio a adaptarse a una plantilla genérica.',
          detail: 'Tiendas completas · Temas · Funcionalidad a medida',
        },
        {
          number: '02',
          icon: 'MousePointerClick',
          title: 'UX & CRO para ecommerce',
          description:
            'Mejoro los puntos de tu tienda que influyen en la decisión de compra: páginas de producto, carrito, bundles, upsells y experiencia de compra mobile.',
          detail: 'PDP · Carrito · Paquetes · Ventas adicionales',
        },
        {
          number: '03',
          icon: 'Gauge',
          title: 'Rendimiento Shopify',
          description:
            'Tiendas más rápidas, menos JavaScript innecesario y menos dependencias interfiriendo entre tus clientes y el checkout.',
          detail: 'Core Web Vitals · Optimización frontend · Menos dependencias',
        },
        {
          number: '04',
          icon: 'Wrench',
          title: 'Mejoras y soporte Shopify',
          description:
            'Corrijo lo que está limitando tu tienda, mejoro funcionalidades existentes y ayudo a que la experiencia Shopify evolucione junto con tu negocio.',
          detail: 'Errores · Integraciones · Mejora continua',
        },
        {
          number: '05',
          icon: 'Network',
          title: 'Desarrollo ecommerce headless',
          description:
            'Experiencias frontend a medida para marcas que necesitan más flexibilidad, rendimiento o control que el que ofrece una tienda tradicional.',
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
      eyebrow: 'Ingeniería Shopify práctica',
      title: 'Lo personalizado no tiene por qué ser complicado.',
      intro: 'Rápido. Mantenible. Editable desde Shopify. Sin dependencias innecesarias.',
      items: [
        {
          icon: 'SlidersHorizontal',
          title: 'A medida, pero fácil de gestionar.',
          description:
            'Desarrollo secciones y funcionalidades que tu equipo puede configurar desde el editor de Shopify — sin depender de un desarrollador cada vez que necesita cambiar contenido.',
        },
        {
          icon: 'Gauge',
          title: 'Rendimiento desde el inicio',
          description:
            'Tiendas rápidas, JavaScript utilizado con criterio, menos dependencias innecesarias y un camino más fluido hacia el checkout.',
        },
        {
          icon: 'Blocks',
          title: 'Preparado para seguir evolucionando',
          description:
            'Implementaciones limpias y escalables, pensadas para crecer junto con tu tienda en lugar de volverse más difíciles de mantener con el tiempo.',
        },
        {
          icon: 'Smartphone',
          title: 'Ecommerce pensado para mobile',
          description:
            'Experiencias de compra diseñadas específicamente para los dispositivos que realmente usan tus clientes — no interfaces desktop simplemente adaptadas a una pantalla más chica.',
        },
      ],
      stackLabel: 'Herramientas seleccionadas',
      stack: ['Shopify', 'Liquid', 'Astro', 'TypeScript', 'JavaScript', 'Node.js', 'GraphQL'],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Leandro Alonso — Software Engineer & Shopify Developer',
      paragraphs: [
        'Soy Leandro Alonso, Software Engineer especializado en desarrollo frontend y Shopify. Combino ingeniería, UX ecommerce y performance para construir tiendas que funcionen mejor para los clientes — y sigan siendo prácticas para los equipos que las gestionan.',
      ],
      portraitAlt: 'Retrato de Leandro Alonso',
      portraitLabel: 'Retrato monograma de Leandro Alonso',
      portraitStatus: 'Córdoba · Argentina',
      role: 'Software Engineer & Shopify Developer',
      educationLabel: 'Formación',
      education: 'Ingeniería en Sistemas de Información',
      educationSchool: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
    },
    why: {
      eyebrow: 'Por qué trabajar conmigo',
      title: 'Construido como un producto. Gestionado desde Shopify.',
      intro:
        'Un desarrollo a medida no debería hacer que tu tienda sea más difícil de gestionar. Construyo experiencias flexibles que se mantienen rápidas, mantenibles y editables por tu equipo.',
      items: [
        {
          title: 'Recorridos de compra más claros',
          description:
            'Las mejoras de la tienda se piensan alrededor de lo que el cliente necesita entender, elegir y hacer después.',
        },
        {
          title: 'Velocidad con sentido de negocio',
          description:
            'El trabajo de performance busca reducir la fricción entre tu cliente y el checkout.',
        },
        {
          title: 'Editable desde Shopify',
          description:
            'Las secciones y funcionalidades a medida siguen siendo prácticas para el equipo que gestiona la tienda todos los días.',
        },
        {
          title: 'Menos dependencia de apps',
          description:
            'Cuando una funcionalidad puntual puede reemplazar otra app en el storefront, la tienda queda más liviana y más fácil de manejar.',
        },
      ],
    },
    contact: {
      eyebrow: '¿Tenés un proyecto en mente?',
      title: 'Construyamos una experiencia Shopify que realmente funcione.',
      body: 'Ya sea que necesites una tienda completa, un mejor carrito, una funcionalidad a medida o mejorar el rendimiento, hagamos que tu tienda sea más rápida, más fácil de usar y esté mejor preparada para convertir.',
      primary: 'Hablemos de tu proyecto',
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
