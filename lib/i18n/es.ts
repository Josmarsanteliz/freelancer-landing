import type { Dictionary } from "./types";

// ============================================================
// Contenido centralizado en ESPAÑOL.
// Edita aquí: nombre, email, redes, precios, stack, proyectos…
// (la versión en inglés vive en en.ts con las mismas claves)
// ============================================================

export const es: Dictionary = {
  site: {
    name: "Josmar Santeliz",
    role: "Desarrollador de Software Freelance",
    email: "josmarsanteliz@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/josmar-antonio-santeliz-gonzalez-126365246/",
    github: "https://github.com/Josmarsanteliz",
    whatsapp: "584145075777",
  },

  nav: {
    links: [
      { href: "#stack", label: "Stack" },
      { href: "#planes", label: "Planes" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Hablemos",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    langSwitch: "Cambiar idioma",
  },

  hero: {
    badge: "Disponible para nuevos proyectos",
    greeting: "Hola, soy",
    creates: "Creo",
    words: ["Landings rápidas", "Webs corporativas", "Apps full-stack", "E-commerce"],
    pitch:
      "Desarrollo landings, webs corporativas y aplicaciones full-stack con Next.js, TypeScript y Supabase. Enfocado en entregar rápido, con diseño cuidado y resultados reales.",
    ctaPrimary: "Ver planes",
    ctaSecondary: "Escríbeme",
  },

  stack: {
    eyebrow: "Tecnologías",
    title: "Stack que domino",
    subtitle:
      "Herramientas modernas para construir productos rápidos, seguros y escalables.",
    items: [
      { name: "Next.js", description: "React con SSR y máximo rendimiento", icon: "next" },
      { name: "React", description: "Interfaces modernas y reactivas", icon: "react" },
      { name: "TypeScript", description: "Código seguro y escalable", icon: "typescript" },
      { name: "Supabase", description: "Backend y base de datos en la nube", icon: "supabase" },
      { name: "PostgreSQL", description: "Base de datos relacional", icon: "postgres" },
      { name: "Prisma", description: "ORM tipado y productivo", icon: "prisma" },
      { name: "Tailwind CSS", description: "Diseño rápido y consistente", icon: "tailwind" },
      { name: "Node.js", description: "APIs y servicios backend", icon: "node" },
    ],
  },

  pricing: {
    eyebrow: "Planes",
    title: "Paquetes por proyecto",
    subtitle:
      "Paquetes claros y sin sorpresas. Elige el paquete que se ajuste a tu idea y empecemos hoy.",
    badge: "Más popular",
    cta: "Empezar proyecto",
    customTitle: "¿Necesitas algo a medida?",
    customLink: "Cuéntanos tu idea",
    requestNow: "Solicita ya",
    requestNote: "Presupuesto sin compromiso · Respuesta en menos de 24 h",
    groups: {
      web: "Páginas web",
      software: "Aplicaciones de software",
    },
    plans: [
      {
        name: "Básico",
        price: 100,
        description: "Ideal para lanzar rápido tu presencia online.",
        features: [
          "Landing page de 1 página",
          "Diseño responsive",
          "Formulario de contacto",
          "Animaciones suaves",
          "Entrega en 3-5 días",
        ],
        featured: false,
      },
      {
        name: "Pro",
        price: 170,
        description: "La mejor opción para negocios en crecimiento.",
        features: [
          "Web de 3-5 secciones",
          "Todo lo del plan Básico",
          "SEO básico optimizado",
          "Google Analytics",
          "2 rondas de revisiones",
          "Entrega en 1-2 semanas",
        ],
        featured: true,
      },
      {
        name: "Full-stack",
        price: 250,
        description: "Aplicaciones completas con backend y datos reales.",
        features: [
          "App con backend y base de datos",
          "Autenticación de usuarios",
          "Panel de administración",
          "API e integraciones",
          "3 rondas de revisiones",
          "Soporte 15 días post-entrega",
        ],
        featured: false,
      },
    ],
    softwarePlans: [
      {
        name: "MVP",
        price: 500,
        description: "Para validar tu idea rápido.",
        features: [
          "Login y roles básicos",
          "CRUD de una entidad",
          "1-2 módulos funcionales",
          "Base de datos y panel interno",
          "Entrega en 1-2 semanas",
        ],
        featured: false,
      },
      {
        name: "Plataforma",
        price: 1200,
        description: "Para operar tu negocio completo.",
        features: [
          "Todo lo del plan MVP",
          "Multi-usuario con roles",
          "Módulos a medida",
          "Reportes y dashboards",
          "Integraciones y API",
          "Entrega en 3-6 semanas",
        ],
        featured: true,
      },
      {
        name: "Sistema a medida",
        price: 2500,
        from: true,
        description: "Cuando el software es tu producto.",
        features: [
          "Requisitos 100% personalizados",
          "Arquitectura y despliegue",
          "Integraciones externas",
          "Capacitación del equipo",
          "Soporte 30 días",
        ],
        featured: false,
      },
    ],
  },

  portfolio: {
    eyebrow: "Portafolio",
    title: "Proyectos destacados",
    subtitle:
      "Una muestra del trabajo que he construido. Los espacios en blanco son tuyos: rellénalos con tus proyectos reales.",
    more: "Ver más en GitHub",
    projects: [
      {
        title: "Proyecto 01",
        description:
          "Reserva este espacio para mostrar tu próximo proyecto destacado. Reemplázalo por el trabajo que quieras exhibir.",
        tags: ["Next.js", "TypeScript", "Supabase"],
        link: "https://github.com/Josmarsanteliz",
        gradient: "from-paprika to-paprika-deep",
        emoji: "💻",
      },
      {
        title: "Proyecto 02",
        description:
          "Agrega una captura, una descripción corta y el enlace al proyecto real cuando lo tengas listo.",
        tags: ["React", "Tailwind CSS"],
        link: "https://github.com/Josmarsanteliz",
        gradient: "from-carbon to-charcoal",
        emoji: "🚀",
      },
      {
        title: "Proyecto 03",
        description:
          "Cuenta qué problema resolviste y qué tecnologías usaste para llegar al resultado.",
        tags: ["Node.js", "PostgreSQL"],
        link: "https://github.com/Josmarsanteliz",
        gradient: "from-silver to-charcoal",
        emoji: "⚙️",
      },
    ],
  },

  about: {
    eyebrow: "Sobre mí",
    heading: "Construyo software que ayuda a tu negocio a crecer.",
    p1: "Soy {name}, desarrollador freelance especializado en aplicaciones web modernas. Trabajo con clientes de forma remota, de principio a fin: entiendo tu idea, diseño la experiencia y desarrollo el producto con Next.js, TypeScript y Supabase.",
    p2: "Mi prioridad es la comunicación clara, las entregas puntuales y un software que se sienta rápido y profesional.",
    ctaPrimary: "Trabajemos juntos",
    ctaSecondary: "Ver LinkedIn",
    stats: [
      { value: 15, suffix: "+", label: "Proyectos entregados" },
      { value: 2, suffix: "+", label: "Años de experiencia" },
      { value: 10, suffix: "+", label: "Clientes satisfechos" },
      { value: 8, suffix: "+", label: "Tecnologías dominadas" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    subtitle:
      "Respuestas rápidas a las dudas más comunes antes de empezar un proyecto.",
    items: [
      {
        question: "¿Cuánto tiempo tarda la entrega?",
        answer:
          "Depende del paquete: una landing básica se entrega en 3-5 días, mientras que un proyecto full-stack puede tomar 2-4 semanas. Siempre acordamos fechas claras antes de empezar.",
      },
      {
        question: "¿Cómo funciona el pago?",
        answer:
          "Solicito el 50% por adelantado para reservar tu lugar y el 50% restante al entregar el proyecto. Acepto transferencia, PayPal o Zinli, según tu ubicación.",
      },
      {
        question: "¿Ofreces soporte después de la entrega?",
        answer:
          "Sí. Cada paquete incluye un período de soporte y correcciones menores. Para cambios mayores podemos acordar una tarifa de mantenimiento mensual.",
      },
      {
        question: "¿Qué necesito para empezar mi proyecto?",
        answer:
          "Solo descríbeme tu idea: objetivos, ejemplos de webs que te gusten y el contenido básico. Yo me encargo del diseño, el desarrollo y el despliegue.",
      },
      {
        question: "¿Trabajas de forma remota?",
        answer:
          "Sí, 100% remoto. Ya he trabajado con clientes de varios países y coordino por correo, WhatsApp o videollamada.",
      },
      {
        question: "¿Puedo pedir cambios al plan elegido?",
        answer:
          "Claro. Conversamos tu caso y armamos un paquete a medida; el presupuesto final depende del alcance.",
      },
    ],
  },

  contact: {
    title: "¿Tienes un proyecto en mente?",
    text: "Escríbeme y conversamos tu idea sin compromiso. Te respondo en menos de 24 horas con un presupuesto claro.",
  },

  modal: {
    title: "Hablemos",
    subtitle:
      "Elige cómo prefieres contactarme y cuéntame tu idea. Respondo en menos de 24 horas.",
    close: "Cerrar",
    interestLabel: "¿Qué necesitas?",
    interestWeb: "Página web",
    interestSoftware: "Aplicación de software",
    planLabel: "Plan elegido",
    whatsappLabel: "Escribir por WhatsApp",
    orLabel: "o envíame un correo",
    waWeb: "Hola Josmar 👋, me interesa una página web. ¿Hablamos?",
    waSoftware: "Hola Josmar 👋, necesito una aplicación de software. ¿Hablamos?",
    waWebPlan:
      "Hola Josmar 👋, me interesa el plan {plan} para mi página web. ¿Hablamos?",
    waSoftwarePlan:
      "Hola Josmar 👋, me interesa el plan {plan} para mi aplicación de software. ¿Hablamos?",
    form: {
      name: "Tu nombre",
      namePlaceholder: "Cómo te llamas",
      email: "Tu correo",
      emailPlaceholder: "tu@correo.com",
      message: "Tu mensaje",
      messagePlaceholder: "Cuéntame qué necesitas…",
      submit: "Enviar correo",
      sending: "Enviando…",
      success: "¡Mensaje enviado! Te respondo en menos de 24 horas.",
      error: "No se pudo enviar. Escríbeme a josmarsanteliz@gmail.com o por WhatsApp.",
    },
  },

  footer: {
    copyright: "© {year} {name}. Hecho con Next.js.",
  },
};
