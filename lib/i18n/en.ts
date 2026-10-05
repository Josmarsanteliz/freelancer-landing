import type { Dictionary } from "./types";

// ============================================================
// Centralized content in ENGLISH.
// Same keys as es.ts — TypeScript fails the build if
// any translation is missing.
// ============================================================

export const en: Dictionary = {
  site: {
    name: "Josmar Santeliz",
    role: "Freelance Software Developer",
    email: "josmarsanteliz@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/josmar-antonio-santeliz-gonzalez-126365246/",
    github: "https://github.com/Josmarsanteliz",
    whatsapp: "584145075777",
  },

  nav: {
    links: [
      { href: "#stack", label: "Stack" },
      { href: "#planes", label: "Plans" },
      { href: "#proyectos", label: "Projects" },
      { href: "#sobre-mi", label: "About me" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langSwitch: "Switch language",
  },

  hero: {
    badge: "Available for new projects",
    greeting: "Hi, I'm",
    creates: "I build",
    words: ["Fast landings", "Corporate websites", "Full-stack apps", "E-commerce"],
    pitch:
      "I build landings, corporate websites and full-stack applications with Next.js, TypeScript and Supabase. Focused on delivering fast, with careful design and real results.",
    ctaPrimary: "See plans",
    ctaSecondary: "Write me",
  },

  stack: {
    eyebrow: "Technologies",
    title: "Technologies I master",
    subtitle:
      "Modern tools to build products that are fast, secure and scalable.",
    items: [
      { name: "Next.js", description: "React with SSR and top performance", icon: "next" },
      { name: "React", description: "Modern, reactive interfaces", icon: "react" },
      { name: "TypeScript", description: "Safe, scalable code", icon: "typescript" },
      { name: "Supabase", description: "Backend and database in the cloud", icon: "supabase" },
      { name: "PostgreSQL", description: "Relational database", icon: "postgres" },
      { name: "Prisma", description: "Typed and productive ORM", icon: "prisma" },
      { name: "Tailwind CSS", description: "Fast, consistent styling", icon: "tailwind" },
      { name: "Node.js", description: "APIs and backend services", icon: "node" },
    ],
  },

  pricing: {
    eyebrow: "Plans",
    title: "Packages per project",
    subtitle:
      "Clear packages with no surprises. Pick the one that fits your idea and let's start today.",
    badge: "Most popular",
    cta: "Start project",
    customTitle: "Need something custom?",
    customLink: "Tell us your idea",
    requestNow: "Request now",
    requestNote: "No-obligation quote · Reply within 24 hours",
    groups: {
      web: "Web pages",
      software: "Software applications",
    },
    plans: [
      {
        name: "Basic",
        price: 100,
        description: "Ideal to launch your online presence fast.",
        features: [
          "Single-page landing",
          "Responsive design",
          "Contact form",
          "Smooth animations",
          "Delivery in 3-5 days",
        ],
        featured: false,
      },
      {
        name: "Pro",
        price: 170,
        description: "The best option for growing businesses.",
        features: [
          "3-5 section website",
          "Everything in the Basic plan",
          "Optimized basic SEO",
          "Google Analytics",
          "2 rounds of revisions",
          "Delivery in 1-2 weeks",
        ],
        featured: true,
      },
      {
        name: "Full-stack",
        price: 250,
        description: "Complete applications with backend and real data.",
        features: [
          "App with backend and database",
          "User authentication",
          "Admin panel",
          "API and integrations",
          "3 rounds of revisions",
          "15 days post-delivery support",
        ],
        featured: false,
      },
    ],
    softwarePlans: [
      {
        name: "MVP",
        price: 500,
        description: "To validate your idea fast.",
        features: [
          "Basic login and roles",
          "CRUD for one entity",
          "1-2 functional modules",
          "Database and admin panel",
          "Delivery in 1-2 weeks",
        ],
        featured: false,
      },
      {
        name: "Platform",
        price: 1200,
        description: "To run your whole business.",
        features: [
          "Everything in the MVP plan",
          "Multi-user with roles",
          "Custom modules",
          "Reports and dashboards",
          "Integrations and API",
          "Delivery in 3-6 weeks",
        ],
        featured: true,
      },
      {
        name: "Custom system",
        price: 2500,
        from: true,
        description: "When the software is your product.",
        features: [
          "100% custom requirements",
          "Architecture and deployment",
          "External integrations",
          "Team training",
          "30 days support",
        ],
        featured: false,
      },
    ],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: "Featured projects",
    subtitle: "A sample of real projects, running in production.",
    more: "See more on GitHub",
    projects: [
      {
        title: "Mi Canasta",
        description:
          "Real-time supermarket price comparator with web scraping and the BCV exchange rate built in.",
        tags: ["Astro", "Supabase", "Tailwind CSS"],
        link: "https://jdevcanasta.netlify.app/",
        gradient: "from-paprika to-paprika-deep",
        image: "/Proyectos/Screenshot_4.png",
      },
      {
        title: "Josmartecnology",
        description:
          "Online tech store with a product catalog, prices in USD and Bs. and an admin panel.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://josmartecnology.vercel.app/",
        gradient: "from-carbon to-charcoal",
        image: "/Proyectos/JosmarDevTecnology.png",
      },
      {
        title: "Agentic",
        description:
          "Landing page for an AI agent platform with a visual builder, real-time monitoring and autonomous workflows.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        link: "https://agentic-build-orchestrate-a-one-lake.vercel.app/",
        gradient: "from-silver to-charcoal",
        image: "/Proyectos/Agentic.jpg",
      },
    ],
  },

  about: {
    eyebrow: "About me",
    heading: "I build software that helps your business grow.",
    p1: "I'm {name}, a freelance developer specializing in modern web applications. I work with clients remotely, end to end: I understand your idea, design the experience, and build the product with Next.js, TypeScript and Supabase.",
    p2: "My priorities are clear communication, on-time deliveries, and software that feels fast and professional.",
    ctaPrimary: "Let's work together",
    ctaSecondary: "View LinkedIn",
    stats: [
      { value: 15, suffix: "+", label: "Projects delivered" },
      { value: 2, suffix: "+", label: "Years of experience" },
      { value: 10, suffix: "+", label: "Happy clients" },
      { value: 8, suffix: "+", label: "Technologies mastered" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle:
      "Quick answers to the most common questions before starting a project.",
    items: [
      {
        question: "How long does delivery take?",
        answer:
          "It depends on the package: a basic landing is delivered in 3-5 days, while a full-stack project can take 2-4 weeks. We always agree on clear deadlines before starting.",
      },
      {
        question: "How does payment work?",
        answer:
          "I ask for 50% upfront to reserve your slot and the remaining 50% upon project delivery. I accept bank transfer, PayPal or Zinli, depending on your location.",
      },
      {
        question: "Do you offer support after delivery?",
        answer:
          "Yes. Each package includes a support period and minor fixes. For larger changes we can agree on a monthly maintenance fee.",
      },
      {
        question: "What do I need to start my project?",
        answer:
          "Just describe your idea: goals, example websites you like and the basic content. I take care of design, development and deployment.",
      },
      {
        question: "Do you work remotely?",
        answer:
          "Yes, 100% remote. I've worked with clients from several countries and I coordinate by email, WhatsApp or video call.",
      },
      {
        question: "Can I request changes to the chosen plan?",
        answer:
          "Of course. We'll talk through your case and build a custom package; the final budget depends on the scope.",
      },
    ],
  },

  contact: {
    title: "Have a project in mind?",
    text: "Write me and let's talk about your idea with no strings attached. I'll reply within 24 hours with a clear quote.",
  },

  modal: {
    title: "Let's talk",
    subtitle:
      "Choose how you'd like to reach me and tell me about your idea. I reply within 24 hours.",
    close: "Close",
    interestLabel: "What do you need?",
    interestWeb: "Website",
    interestSoftware: "Software application",
    planLabel: "Selected plan",
    whatsappLabel: "Message me on WhatsApp",
    orLabel: "or send me an email",
    waWeb: "Hi Josmar 👋, I'm interested in a website. Shall we talk?",
    waSoftware: "Hi Josmar 👋, I need a software application. Shall we talk?",
    waWebPlan:
      "Hi Josmar 👋, I'm interested in the {plan} plan for my website. Shall we talk?",
    waSoftwarePlan:
      "Hi Josmar 👋, I'm interested in the {plan} plan for my software application. Shall we talk?",
    form: {
      name: "Your name",
      namePlaceholder: "What's your name",
      email: "Your email",
      emailPlaceholder: "you@email.com",
      message: "Your message",
      messagePlaceholder: "Tell me what you need…",
      submit: "Send email",
      sending: "Sending…",
      success: "Message sent! I'll reply within 24 hours.",
      error: "Couldn't send. Email me at josmarsanteliz@gmail.com or use WhatsApp.",
      hintMessage: "At least 10 characters",
      errorName: "Enter your name.",
      errorEmail: "Enter a valid email, for example name@email.com.",
      errorMessage: "Your message must be at least 10 characters long.",
      limit:
        "You've sent 2 messages in the last 24 hours. Message me on WhatsApp or come back tomorrow.",
      remaining: "You have {n} of the 2 messages allowed every 24 hours.",
    },
  },

  footer: {
    copyright: "© {year} {name}. Built with Next.js.",
  },
};
