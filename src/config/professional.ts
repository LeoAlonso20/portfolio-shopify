import type { Locale } from './site';

export const professionalPath = (locale: Locale) =>
  locale === 'en' ? '/profesional' : '/es/profesional';

export const professionalCopy = {
  en: {
    seo: {
      title: 'Leandro Alonso — Professional Software Portfolio',
      description:
        'Systems Engineer and Software Developer focused on modern web applications, frontend architecture, performance, accessibility and scalable product experiences.',
    },
    nav: {
      work: 'Work',
      expertise: 'Expertise',
      education: 'Education',
      certificates: 'Training',
      about: 'About',
      contact: 'Email',
    },
    hero: {
      eyebrow: 'Professional profile',
      title: 'Systems Engineer & Software Developer',
      intro:
        'I design and build modern mobile and web applications with a focus on performance, accessibility, clean architecture and interfaces that feel natural to use.',
      primary: 'View professional work',
      secondary: 'Email me',
    },
    highlights: [
      { value: 'Caramel Point', label: 'Current role' },
      { value: 'Systems Engineering', label: 'Education foundation' },
      { value: '7', label: 'Selected projects' },
      { value: '12+', label: 'Core technologies' },
    ],
    role: {
      eyebrow: 'Current role',
      title: 'Mobile Software Engineer at Caramel Point',
      meta: 'May 2026 — Present · Córdoba, Argentina · Hybrid',
      body: 'I am developing the Insurance vertical for the new application ecosystem of Banco de la Provincia de Córdoba (Bancor), delivering secure and high-performance mobile solutions within multidisciplinary agile teams.',
      points: [
        'Full mobile development lifecycle within an Nx monorepo',
        'Strong typing, strict linting and quality governance with SonarQube',
        'Unit and integration testing with Jest and React Native Testing Library',
        'Collaboration with QAs, architects and business stakeholders',
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Engineering training as a technical foundation.',
      degree: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
      body: 'My systems engineering background gives me the analytical base I use to reason about architecture, scalability, maintainability and product constraints before writing code.',
      pillars: [
        'Analytical problem solving',
        'Software architecture fundamentals',
        'Systems thinking applied to product work',
      ],
    },
    certificates: {
      eyebrow: 'Continuous learning',
      title: 'Recent training, grounded in the fundamentals.',
      intro:
        'I keep sharpening the technical foundations behind my day-to-day work. These recent courses reflect a deliberate focus on understanding the platform deeply, from the JavaScript runtime to the browser itself.',
      issuerLabel: 'Issued by',
      completedLabel: 'Completed',
      openLabel: 'Open certificate',
      previewLabel: 'View full certificate for',
      items: [
        {
          title: 'Advanced JavaScript — The Hard Parts v3',
          issuer: 'Master.dev',
          completed: 'August 2026',
          description:
            'Advanced JavaScript course focused on the language fundamentals and runtime concepts behind modern frontend development. Strengthened my understanding of execution context, closures, asynchronous programming, promises, and JavaScript internals.',
          pdf: '/certificates/advanced-javascript-hard-parts-v3.pdf',
          preview: '/images/certificates/advanced-javascript-hard-parts-v3.png',
          previewAlt:
            'Master.dev certificate for Advanced JavaScript — The Hard Parts v3 awarded to Leandro Alonso',
        },
        {
          title: 'Vanilla JavaScript — You Might Not Need a Framework',
          issuer: 'Master.dev',
          completed: 'August 2026',
          description:
            'Advanced JavaScript course focused on building robust web applications with native browser APIs and modern Vanilla JS. Covered DOM APIs, Web Components, browser capabilities, performance, and architectural decisions around when a framework is — and isn’t — necessary.',
          pdf: '/certificates/vanilla-javascript-no-framework.pdf',
          preview: '/images/certificates/vanilla-javascript-no-framework.png',
          previewAlt:
            'Master.dev certificate for Vanilla JavaScript — You Might Not Need a Framework awarded to Leandro Alonso',
        },
        {
          title: 'Deep JavaScript — Foundations v3',
          issuer: 'Master.dev',
          completed: 'September 2026',
          description:
            "Advanced training focused on understanding JavaScript from first principles. I deepened my knowledge of types and coercion, scope and closures, this, prototypes, and the language's object model, with a focus on how JavaScript interprets and executes code.",
          pdf: '/certificates/deep-javascript-v3.pdf',
          preview: '/images/certificates/deep-javascript-v3.png',
          previewAlt:
            'Master.dev certificate for Deep JavaScript Foundations v3 awarded to Leandro Alonso',
        },
      ],
    },
    expertise: {
      eyebrow: 'Technical expertise',
      title: 'Tools I use to build scalable digital products.',
      intro:
        'A practical stack across frontend, mobile, backend foundations, design collaboration and deployment.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Astro', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          title: 'Mobile & realtime',
          items: ['React Native', 'Expo', 'SWR', 'Zustand', 'Capacitor', 'WebSockets'],
        },
        {
          title: 'Architecture',
          items: ['Nx', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'Vercel'],
        },
        {
          title: 'Product quality',
          items: ['Jest', 'Testing Library', 'SonarQube', 'Accessibility', 'Performance'],
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering mindset, product focus.',
      paragraphs: [
        'I’m Leandro Alonso, a Systems Engineer and Software Developer based in Córdoba, Argentina. I work across mobile and frontend products, translating complex requirements into reliable, maintainable experiences for real users.',
      ],
      portraitAlt: 'Portrait of Leandro Alonso',
      portraitLabel: 'Leandro Alonso monogram portrait',
      portraitStatus: 'Córdoba · Argentina',
      roleLabel: 'Current role',
      role: 'Mobile Software Engineer',
      educationLabel: 'Education',
    },
    projects: {
      eyebrow: 'Professional projects',
      title: 'Selected work across web, mobile and product systems.',
      intro:
        'Projects from my broader software experience, separated from the Shopify-focused portfolio.',
      items: [
        {
          name: 'Bancor Insurance Ecosystem',
          type: 'Mobile banking · Insurance vertical',
          summary:
            'Development of the Insurance vertical for Bancor’s new application ecosystem, with secure, strongly typed mobile architecture inside an Nx monorepo.',
          impact:
            'Quality-focused delivery supported by automated testing, SonarQube governance and close collaboration across engineering, QA, architecture and business.',
          tags: ['React Native', 'TypeScript', 'Expo', 'Nx', 'SWR', 'Zustand', 'Jest'],
        },
        {
          name: 'Validador Experto',
          type: 'Identity validation',
          summary:
            'Redesign of a critical biometric identity-validation flow with passwordless authentication through WebAuthn.',
          impact: 'Reduced recurring critical registration failures to near zero.',
          tags: ['React', 'WebAuthn', 'Security', 'Biometrics'],
        },
        {
          name: 'Info App',
          type: 'Native mobile app',
          summary:
            'Migration from a PWA to a native mobile application using React Native and Expo, with real-time communication and optimized startup performance.',
          impact: 'Created a faster, more stable mobile foundation for iOS and Android.',
          tags: ['React Native', 'Expo', 'Socket.io', 'Performance'],
        },
        {
          name: 'WeLineo App',
          type: 'Franchise management PWA',
          summary:
            'Core modules for real-time internal messaging and employee training inside a React and Capacitor application.',
          impact: 'Centralized communication and onboarding inside one operational platform.',
          tags: ['React', 'PWA', 'Capacitor', 'Realtime'],
        },
        {
          name: 'Home Info',
          type: 'Corporate web presence',
          summary:
            'High-performance React landing page with technical SEO work, code splitting, lazy loading and bundle optimization.',
          impact: 'Improved performance, discoverability and corporate presentation.',
          tags: ['React', 'SEO', 'Performance', 'Code splitting'],
        },
        {
          name: 'WeLineo Home',
          type: 'Enterprise web platform',
          summary:
            'Administrative platform with internal newsfeed, real-time messaging, HR attendance management and an e-learning course builder.',
          impact: 'Unified operations, communication and training for franchise administrators.',
          tags: ['React', 'Enterprise', 'HR', 'E-learning'],
        },
        {
          name: 'Portfolio Architecture',
          type: 'Modern web architecture',
          summary:
            'A technical portfolio build focused on static generation, content collections, typed content, accessibility and performance.',
          impact: 'Documented architectural decisions behind a fast, maintainable portfolio.',
          tags: ['Astro', 'TypeScript', 'Content collections', 'Vercel'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Want the broader technical profile?',
      body: 'This page keeps my professional software background separate from the Shopify services page. For opportunities or technical conversations, email is the right channel.',
      cta: 'Contact by email',
    },
  },
  es: {
    seo: {
      title: 'Leandro Alonso — Portfolio profesional de software',
      description:
        'Ingeniero en Sistemas y Desarrollador de Software enfocado en aplicaciones web modernas, arquitectura frontend, rendimiento, accesibilidad y productos escalables.',
    },
    nav: {
      work: 'Proyectos',
      expertise: 'Experiencia técnica',
      education: 'Educación',
      certificates: 'Formación',
      about: 'Sobre mí',
      contact: 'Email',
    },
    hero: {
      eyebrow: 'Perfil profesional',
      title: 'Ingeniero en Sistemas & Desarrollador de Software',
      intro:
        'Diseño y construyo aplicaciones mobile y web modernas con foco en rendimiento, accesibilidad, arquitectura limpia e interfaces que se sienten naturales de usar.',
      primary: 'Ver proyectos profesionales',
      secondary: 'Escribirme',
    },
    highlights: [
      { value: 'Caramel Point', label: 'Rol actual' },
      { value: 'Ingeniería en Sistemas', label: 'Formación principal' },
      { value: '7', label: 'Proyectos seleccionados' },
      { value: '12+', label: 'Tecnologías base' },
    ],
    role: {
      eyebrow: 'Rol actual',
      title: 'Mobile Software Engineer en Caramel Point',
      meta: 'Mayo 2026 — Actualidad · Córdoba, Argentina · Híbrido',
      body: 'Desarrollo la vertical de Seguros para el nuevo ecosistema de aplicaciones del Banco de la Provincia de Córdoba (Bancor), creando soluciones mobile seguras y de alto rendimiento dentro de equipos ágiles multidisciplinarios.',
      points: [
        'Ciclo completo de desarrollo mobile dentro de un monorepo Nx',
        'Tipado fuerte, linting estricto y gobernanza de calidad con SonarQube',
        'Tests unitarios y de integración con Jest y React Native Testing Library',
        'Colaboración con QAs, arquitectos y referentes de negocio',
      ],
    },
    education: {
      eyebrow: 'Educación',
      title: 'Formación en ingeniería como base técnica.',
      degree: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Nacional, Facultad Regional Córdoba',
      body: 'Mi formación en sistemas me da la base analítica que uso para pensar arquitectura, escalabilidad, mantenibilidad y restricciones de producto antes de escribir código.',
      pillars: [
        'Resolución analítica de problemas',
        'Fundamentos de arquitectura de software',
        'Pensamiento sistémico aplicado a producto',
      ],
    },
    certificates: {
      eyebrow: 'Aprendizaje continuo',
      title: 'Formación reciente, con foco en los fundamentos.',
      intro:
        'Sigo profundizando las bases técnicas que sostienen mi trabajo cotidiano. Estas formaciones reflejan una búsqueda intencional por comprender la plataforma en profundidad: desde el runtime de JavaScript hasta las capacidades nativas del navegador.',
      issuerLabel: 'Emitido por',
      completedLabel: 'Completado',
      openLabel: 'Abrir certificado',
      previewLabel: 'Ver certificado completo de',
      items: [
        {
          title: 'Advanced JavaScript — The Hard Parts v3',
          issuer: 'Master.dev',
          completed: 'Agosto de 2026',
          description:
            'Formación avanzada en JavaScript centrada en los fundamentos del lenguaje y los conceptos de runtime que sostienen el desarrollo frontend moderno. Profundicé en contexto de ejecución, closures, programación asincrónica, promesas y funcionamiento interno de JavaScript.',
          pdf: '/certificates/advanced-javascript-hard-parts-v3.pdf',
          preview: '/images/certificates/advanced-javascript-hard-parts-v3.png',
          previewAlt:
            'Certificado de Master.dev de Advanced JavaScript — The Hard Parts v3 otorgado a Leandro Alonso',
        },
        {
          title: 'Vanilla JavaScript — You Might Not Need a Framework',
          issuer: 'Master.dev',
          completed: 'Agosto de 2026',
          description:
            'Formación avanzada orientada a construir aplicaciones web robustas con APIs nativas del navegador y JavaScript moderno. Abordé DOM APIs, Web Components, capacidades del navegador, rendimiento y decisiones de arquitectura sobre cuándo un framework es —y cuándo no es— necesario.',
          pdf: '/certificates/vanilla-javascript-no-framework.pdf',
          preview: '/images/certificates/vanilla-javascript-no-framework.png',
          previewAlt:
            'Certificado de Master.dev de Vanilla JavaScript — You Might Not Need a Framework otorgado a Leandro Alonso',
        },
        {
          title: 'Deep JavaScript — Foundations v3',
          issuer: 'Master.dev',
          completed: 'Septiembre de 2026',
          description:
            'Formación avanzada enfocada en comprender JavaScript desde sus fundamentos. Profundicé en tipos y coerción, scope y closures, this, prototypes y el modelo de objetos del lenguaje, con foco en entender cómo JavaScript interpreta y ejecuta el código.',
          pdf: '/certificates/deep-javascript-v3.pdf',
          preview: '/images/certificates/deep-javascript-v3.png',
          previewAlt:
            'Certificado de Master.dev de Deep JavaScript Foundations v3 otorgado a Leandro Alonso',
        },
      ],
    },
    expertise: {
      eyebrow: 'Experiencia técnica',
      title: 'Herramientas que uso para construir productos digitales escalables.',
      intro:
        'Un stack práctico que cruza frontend, mobile, bases de backend, colaboración con diseño y despliegue.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Astro', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          title: 'Mobile y realtime',
          items: ['React Native', 'Expo', 'SWR', 'Zustand', 'Capacitor', 'WebSockets'],
        },
        {
          title: 'Arquitectura',
          items: ['Nx', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'Vercel'],
        },
        {
          title: 'Calidad de producto',
          items: ['Jest', 'Testing Library', 'SonarQube', 'Accesibilidad', 'Rendimiento'],
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Mentalidad de ingeniería, foco en producto.',
      paragraphs: [
        'Soy Leandro Alonso, Ingeniero en Sistemas y Desarrollador de Software radicado en Córdoba, Argentina. Trabajo en productos mobile y frontend, convirtiendo requerimientos complejos en experiencias confiables y mantenibles para usuarios reales.',
      ],
      portraitAlt: 'Retrato de Leandro Alonso',
      portraitLabel: 'Retrato monograma de Leandro Alonso',
      portraitStatus: 'Córdoba · Argentina',
      roleLabel: 'Rol actual',
      role: 'Mobile Software Engineer',
      educationLabel: 'Formación',
    },
    projects: {
      eyebrow: 'Proyectos profesionales',
      title: 'Trabajos seleccionados en web, mobile y sistemas de producto.',
      intro:
        'Proyectos de mi experiencia de software más amplia, separados del portfolio enfocado en Shopify.',
      items: [
        {
          name: 'Ecosistema de Seguros Bancor',
          type: 'Banca mobile · Vertical de Seguros',
          summary:
            'Desarrollo de la vertical de Seguros para el nuevo ecosistema de aplicaciones de Bancor, con arquitectura mobile segura y fuertemente tipada dentro de un monorepo Nx.',
          impact:
            'Entrega orientada a calidad mediante testing automatizado, gobernanza con SonarQube y colaboración entre ingeniería, QA, arquitectura y negocio.',
          tags: ['React Native', 'TypeScript', 'Expo', 'Nx', 'SWR', 'Zustand', 'Jest'],
        },
        {
          name: 'Validador Experto',
          type: 'Validación de identidad',
          summary:
            'Rediseño de un flujo crítico de validación biométrica con autenticación sin contraseña mediante WebAuthn.',
          impact:
            'Reducción de errores críticos recurrentes de registro a valores cercanos a cero.',
          tags: ['React', 'WebAuthn', 'Seguridad', 'Biometría'],
        },
        {
          name: 'Info App',
          type: 'Aplicación mobile nativa',
          summary:
            'Migración de una PWA a una aplicación mobile nativa con React Native y Expo, comunicación en tiempo real y optimización de arranque.',
          impact: 'Base mobile más rápida y estable para iOS y Android.',
          tags: ['React Native', 'Expo', 'Socket.io', 'Performance'],
        },
        {
          name: 'WeLineo App',
          type: 'PWA de gestión de franquicias',
          summary:
            'Módulos clave para mensajería interna en tiempo real y capacitación de empleados dentro de una app React y Capacitor.',
          impact:
            'Comunicación y onboarding centralizados dentro de una única plataforma operativa.',
          tags: ['React', 'PWA', 'Capacitor', 'Tiempo real'],
        },
        {
          name: 'Home Info',
          type: 'Presencia web corporativa',
          summary:
            'Landing corporativa en React con SEO técnico, code splitting, lazy loading y optimización estricta del bundle.',
          impact: 'Mejor rendimiento, mayor visibilidad y una presentación corporativa más sólida.',
          tags: ['React', 'SEO', 'Rendimiento', 'Code splitting'],
        },
        {
          name: 'WeLineo Home',
          type: 'Plataforma web enterprise',
          summary:
            'Plataforma administrativa con newsfeed interno, mensajería en tiempo real, gestión de asistencia RRHH y creador de cursos e-learning.',
          impact:
            'Operaciones, comunicación y capacitación unificadas para administradores de franquicias.',
          tags: ['React', 'Enterprise', 'RRHH', 'E-learning'],
        },
        {
          name: 'Arquitectura de Portfolio',
          type: 'Arquitectura web moderna',
          summary:
            'Construcción técnica de portfolio con generación estática, content collections, contenido tipado, accesibilidad y rendimiento.',
          impact:
            'Documentación de decisiones arquitectónicas para un portfolio rápido y mantenible.',
          tags: ['Astro', 'TypeScript', 'Content collections', 'Vercel'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Querés ver el perfil técnico completo?',
      body: 'Esta página mantiene mi trayectoria profesional de software separada de la página de servicios Shopify. Para oportunidades o conversaciones técnicas, el canal correcto es email.',
      cta: 'Contactar por email',
    },
  },
} as const;
