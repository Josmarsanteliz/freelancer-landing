// ============================================================
// Tipo del diccionario. `es.ts` y `en.ts` deben declarar
// exactamente estas claves: si falta una traducción, el
// build de TypeScript falla.
// ============================================================

export type Language = "es" | "en";

export type NavLink = {
  href: string;
  label: string;
};

export type StackItem = {
  name: string;
  description: string;
  icon: string;
};

export type Plan = {
  name: string;
  /** Precio de referencia. Reservado: no se muestra en la UI por ahora. */
  price: number;
  /** Marca planes con precio base ("Desde $2.500"). Reservado, no se muestra. */
  from?: boolean;
  description: string;
  features: string[];
  featured: boolean;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  gradient: string;
  /** Ruta de la captura dentro de /public. */
  image: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Dictionary = {
  site: {
    name: string;
    role: string;
    email: string;
    linkedin: string;
    github: string;
    /** Número en formato internacional SIN + ni espacios (wa.me/…). */
    whatsapp: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    langSwitch: string;
  };
  hero: {
    badge: string;
    greeting: string;
    creates: string;
    words: string[];
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: StackItem[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badge: string;
    cta: string;
    customTitle: string;
    customLink: string;
    /** Titular que reemplaza al precio en cada tarjeta. */
    requestNow: string;
    /** Nota pequeña bajo el titular. */
    requestNote: string;
    groups: {
      web: string;
      software: string;
    };
    plans: Plan[];
    softwarePlans: Plan[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    more: string;
    projects: Project[];
  };
  about: {
    eyebrow: string;
    heading: string;
    /** Usa {name} como marcador para el nombre del propietario. */
    p1: string;
    p2: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Stat[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    text: string;
  };
  modal: {
    title: string;
    subtitle: string;
    close: string;
    interestLabel: string;
    interestWeb: string;
    interestSoftware: string;
    planLabel: string;
    whatsappLabel: string;
    orLabel: string;
    /** Mensajes de WhatsApp. {plan} solo se usa si hay plan. */
    waWeb: string;
    waSoftware: string;
    waWebPlan: string;
    waSoftwarePlan: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      /** Pista bajo el campo de mensaje (siempre visible). */
      hintMessage: string;
      /** Avisos de validación campo a campo. */
      errorName: string;
      errorEmail: string;
      errorMessage: string;
      /** Mensaje al agotar los 2 envíos permitidos cada 24 h. */
      limit: string;
      /** Aviso con {n}, envíos que quedan en la ventana actual. */
      remaining: string;
    };
  };
  footer: {
    /** Usa {year} y {name} como marcadores. */
    copyright: string;
  };
};
