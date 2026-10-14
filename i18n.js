// Enlaces: reemplaza cada "#" por la URL real.
const links = {
  email: "#", // p. ej. "mailto:tu@correo.com"
  linkedin: "#",
  github: "#",
  cv: "#",
  case1: "#", // Portal de Comunicación de Valor
  case2: "#", // Agente de costos médicos
  explorations: ["#", "#", "#"], // DDD, UX, UI
};

const i18n = {
  es: {
    nav: ["Proyectos", "Experiencia", "Exploraciones", "Sobre mí", "Contacto"],
    available: "Disponible para nuevos proyectos",
    h1: "Diseño y desarrollo productos web de ",
    h1Accent: "punta a punta.",
    lead: "Desarrollador fullstack y diseñador de interfaces. Del Figma al producto en producción.",
    viewProjects: "Ver proyectos",
    contact: "Contacto",
    projectsEyebrow: "01 / Trabajo seleccionado",
    projectsTitle: "Proyectos destacados",
    viewCase: "Ver caso de estudio",
    p1Title: "Portal de Comunicación de Valor",
    p1Text: "Centralicé la propuesta solar de GdO en una experiencia web conectada con WhatsApp.",
    p1MockTitle: "Tu energía, más clara.",
    p1MockCta: "Conversemos",
    p2Title: "Agente de costos médicos",
    p2Text: "Transformé consultas complejas de costos en respuestas conversacionales simples y trazables.",
    p2MockTitle: "Consulta de costos",
    p2MockQuestion: "¿Cuánto cuesta este procedimiento?",
    p2MockAnswer: "Encontré el valor y su desglose.",
    p2MockInput: "Escribe tu consulta…",
    expEyebrow: "02 / Trayectoria",
    expTitle: "Experiencia",
    jobs: [
      {
        date: "SEP 2026 — ACTUAL",
        company: "INNLAB",
        role: "Desarrollador fullstack",
        text: "Diseño y construyo productos digitales de punta a punta, conectando interfaces, servicios y decisiones de negocio.",
      },
      {
        date: "JUN 2024 — MAR 2026",
        company: "Ezmos",
        role: "Desarrollador fullstack remoto",
        text: "Construí interfaces en Next.js y servicios con NestJS para productos con datos en tiempo real.",
      },
    ],
    exploreEyebrow: "03 / Práctica continua",
    exploreTitle: "Exploraciones",
    explorations: [
      {
        title: "Monolito a microservicios",
        text: "Migración con DDD en Spring Boot. Aprendí a separar dominios y diseñar contratos mantenibles.",
        link: "Ver en GitHub",
      },
      {
        title: "Investigación conversacional",
        text: "Flujos para un chatbot financiero. Aprendí a convertir hallazgos de usuario en decisiones de producto.",
        link: "Ver en Behance",
      },
      {
        title: "Laboratorio de interfaces",
        text: "Exploraciones de producto y sistemas visuales. Aprendí a diseñar pensando en la implementación.",
        link: "Ver en Behance",
      },
    ],
    aboutEyebrow: "04 / Perfil",
    aboutTitle: "Sobre mí",
    aboutText:
      "Estudio Ingeniería de Sistemas y Diseño de Medios Interactivos en la Universidad Icesi, con intercambio en la Universitat de València. Trabajo como desarrollador mientras estudio, uniendo criterio técnico y sensibilidad por el diseño.",
    photoAlt: "Retrato de Juan Esteban Duque",
    contactEyebrow: "05 / Hablemos",
    contactTitle: "¿Tienes un problema que podamos convertir en producto?",
    writeMe: "Escríbeme",
    email: "Correo",
    downloadCv: "Descargar hoja de vida",
  },
  en: {
    nav: ["Projects", "Experience", "Explorations", "About", "Contact"],
    available: "Available for new projects",
    h1: "I design and build web products from ",
    h1Accent: "end to end.",
    lead: "Fullstack developer and interface designer. From Figma to a production-ready product.",
    viewProjects: "View projects",
    contact: "Contact",
    projectsEyebrow: "01 / Selected work",
    projectsTitle: "Featured projects",
    viewCase: "View case study",
    p1Title: "Value Communication Portal",
    p1Text: "I brought GdO's solar offering into a single web experience connected to WhatsApp.",
    p1MockTitle: "Your energy, made clearer.",
    p1MockCta: "Let's talk",
    p2Title: "Medical cost assistant",
    p2Text: "I turned complex cost queries into simple, traceable conversational answers.",
    p2MockTitle: "Cost inquiry",
    p2MockQuestion: "How much does this procedure cost?",
    p2MockAnswer: "I found the price and its breakdown.",
    p2MockInput: "Type your question…",
    expEyebrow: "02 / Career",
    expTitle: "Experience",
    jobs: [
      {
        date: "SEP 2026 — PRESENT",
        company: "INNLAB",
        role: "Fullstack developer",
        text: "I design and build digital products end to end, connecting interfaces, services, and business decisions.",
      },
      {
        date: "JUN 2024 — MAR 2026",
        company: "Ezmos",
        role: "Remote fullstack developer",
        text: "I built Next.js interfaces and NestJS services for products powered by real-time data.",
      },
    ],
    exploreEyebrow: "03 / Continuous practice",
    exploreTitle: "Explorations",
    explorations: [
      {
        title: "Monolith to microservices",
        text: "A DDD migration in Spring Boot. I learned to separate domains and design maintainable contracts.",
        link: "View on GitHub",
      },
      {
        title: "Conversational research",
        text: "Flows for a financial chatbot. I learned to turn user insights into product decisions.",
        link: "View on Behance",
      },
      {
        title: "Interface laboratory",
        text: "Product and visual system explorations. I learned to design with implementation in mind.",
        link: "View on Behance",
      },
    ],
    aboutEyebrow: "04 / Profile",
    aboutTitle: "About me",
    aboutText:
      "I study Systems Engineering and Interactive Media Design at Universidad Icesi, including an exchange at Universitat de València. I work as a developer while studying, combining technical judgment with design sensitivity.",
    photoAlt: "Portrait of Juan Esteban Duque",
    contactEyebrow: "05 / Let's talk",
    contactTitle: "Do you have a problem we can turn into a product?",
    writeMe: "Email me",
    email: "Email",
    downloadCv: "Download résumé",
  },
};

// Una clave que falte en un idioma se vería como texto vacío en la página.
console.assert(
  Object.keys(i18n.es).join() === Object.keys(i18n.en).join(),
  "i18n: es y en no tienen las mismas claves"
);
