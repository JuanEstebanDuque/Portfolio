// Enlaces: reemplaza cada "#" por la URL real.
const links = {
  email: "juanestebanduque875@gmail.com",
  linkedin: "https://www.linkedin.com/in/juanestebanduquetaborda-fullstack-ia/",
  github: "https://github.com/JuanEstebanDuque",
  behance: "https://www.behance.net/juanesduquet1",
  // La hoja de vida que se descarga depende del idioma activo.
  cv: {
    es: "assets/cv/JuanEstebanDuqueTaborda_CV_ES.pdf",
    en: "assets/cv/JuanEstebanDuqueTaborda_CV_EN.pdf",
  },
};

// Proyectos destacados (mismo orden que `featured` en cada idioma).
const featured = [
  {
    img: "assets/polis.webp",
    tags: ["React", "Supabase Realtime", "Docker", "UX/UI"],
    links: {
      live: "https://construye-la-torre.vercel.app",
      github: "https://github.com/JuanEstebanDuque/ConstruyeLaTorre",
      behance: "https://www.behance.net/gallery/256521321/Polis-Phygital-game",
    },
  },
  {
    img: "assets/xposture.webp",
    tags: ["Flutter", "Arduino", "Figma", "UX research"],
    links: {
      github: "https://github.com/JuanEstebanDuque/Kinestia",
      behance: "https://www.behance.net/gallery/253742245/Xposture",
    },
  },
];

// Más proyectos (mismo orden que `work` en cada idioma).
// types decide en qué filtros aparece ("dev" y/o "design"); links usa las claves de linkLabels.
const gh = "https://github.com/JuanEstebanDuque/";
const be = "https://www.behance.net/gallery/";
const work = [
  { types: ["design"], cover: "UX", tags: ["UX/UI", "Research"], links: { behance: be + "250722963/Solar-lens-Communication-portal-GdO-UXUI" } },
  { types: ["dev", "design"], cover: "IoT", tags: ["NestJS", "MongoDB", "Arduino", "React"], links: { front: gh + "HCI-family-care-frontend", back: gh + "HCI-family-care" } },
  { types: ["design", "dev"], cover: "UI", tags: ["Figma", "Next.js"], links: { behance: be + "212030649/Nimblo-app-design", github: gh + "Nimblo" } },
  { types: ["dev"], cover: "CQRS", tags: ["Spring Boot", "Kafka", "MongoDB"], links: { github: gh + "CQRS_EventSourcing" } },
  { types: ["dev"], cover: "DDD", tags: ["Spring Boot", "PostgreSQL", "Keycloak"], links: { github: gh + "Microservicio-gymnasio" } },
  { types: ["dev"], cover: "P2P", tags: ["React", "TypeScript", "Figma"], links: { github: gh + "DeFi-Trust-Engine" } },
  { types: ["dev"], cover: "ML", tags: ["Python", "OpenCV", "Machine learning"], links: { github: gh + "Image-processing-with-Artificial-Intelligence-coin-identifier-and-counter" } },
  { types: ["dev"], cover: "CI/CD", tags: ["Docker", "GitHub Actions", "NestJS"], links: { github: gh + "Docker-CICD-practice" } },
  { types: ["dev"], cover: "Ops", tags: ["Spring Boot", "React", "Docker", "GitHub Actions"], links: { github: gh + "NexusOnPremise_practice" } },
  { types: ["design"], cover: "UI", tags: ["Figma", "Mobile"], links: { behance: be + "213648995/Kindred-Dating-Mobile-App" } },
  { types: ["design"], cover: "UX", tags: ["UX research"], links: { behance: be + "207311861/UX-CASE-STUDY-REMOTE-WORKERS" } },
];

const i18n = {
  es: {
    nav: ["Destacados", "Experiencia", "Proyectos", "Sobre mí", "Contacto"],
    available: "Disponible para nuevos proyectos",
    h1: "Diseño y desarrollo productos web de ",
    h1Accent: "punta a punta.",
    lead: "Desarrollador fullstack y diseñador de interfaces. Del Figma al producto en producción.",
    viewProjects: "Ver proyectos",
    contact: "Contacto",
    projectsEyebrow: "01 / Trabajo seleccionado",
    projectsTitle: "Proyectos destacados",
    linkLabels: { live: "Ver en vivo", github: "GitHub", behance: "Behance", front: "Frontend", back: "Backend" },
    featured: [
      {
        title: "Polis · Construye la Torre",
        text: "Juego phygital cooperativo: cuatro jugadores con información incompleta construyen una torre física hablando entre ellos. App web en tiempo real.",
        alt: "Portada de Polis: personajes robot frente a una ciudad con torres",
      },
      {
        title: "Xposture",
        text: "Wearable de biofeedback que avisa en tiempo real sobre la postura y la técnica deportiva. Investigación, app en Flutter y sensores con Arduino.",
        alt: "Portada del caso de estudio Xposture",
      },
    ],
    expEyebrow: "02 / Trayectoria",
    expTitle: "Experiencia",
    jobs: [
      {
        date: "SEP 2026 — ACTUAL",
        company: "INNLAB",
        role: "Líder de proyecto · Proyecto de grado",
        text: "Lidero Índigo dentro del laboratorio de innovación de la universidad, desde el producto hasta la base técnica que usan los nuevos integrantes.",
        projects: [
          {
            name: "Índigo",
            text: "Evolución de Index, un diagnosticador de empresas con un único diagnóstico fijo. Índigo permite crear diagnósticos de cualquier área de conocimiento de la universidad para personas, equipos u organizaciones, con nuevos roles: profesores que los diseñan, comerciales que los conectan con empresas y empresas que los responden.",
          },
          {
            name: "Wiki técnica",
            text: "Documentación de cómo funcionan los repositorios de frontend, backend y base de datos, para que quien llegue al equipo pueda empezar a trabajar siguiéndola.",
          },
        ],
      },
      {
        date: "JUL 2026 — ACTUAL",
        company: "Universidad Icesi",
        role: "Desarrollador",
        text: "Desarrollo de soluciones con IA para aliados externos de la universidad.",
        projects: [
          {
            name: "Agente de costos médicos · Coomeva",
            text: "Cotizador conversacional con n8n, Supabase e IA que responde el costo de un procedimiento con su desglose.",
          },
        ],
      },
      {
        date: "JUN 2024 — MAR 2026",
        company: "Ezmos",
        role: "Desarrollador fullstack remoto",
        text: "Construí interfaces en Next.js y servicios con NestJS para productos con datos en tiempo real.",
        projects: [
          {
            name: "The Funded Picks",
            text: "Plataforma de retos de pronósticos deportivos fondeados: frontend en Next.js en tres idiomas, panel de administración y API en NestJS.",
          },
        ],
      },
      {
        date: "AGO 2024 — FEB 2025",
        company: "Banco W",
        role: "Diseñador UX",
        text: "Investigación y diseño de flujos para un chatbot financiero, convirtiendo hallazgos de usuario en decisiones de producto.",
        projects: [],
      },
    ],
    workEyebrow: "03 / Práctica continua",
    workTitle: "Más proyectos",
    filters: { all: "Todos", dev: "Desarrollo", design: "Diseño" },
    work: [
      { title: "Solar lens · GdO", text: "Portal para que clientes de energía solar entiendan su factura, ahorro y generación. Proyecto Integrador 2, Icesi." },
      { title: "HCI Family Care", text: "Acompañamiento pasivo de adultos mayores: sensores en objetos cotidianos, puente Bluetooth, API en NestJS y panel para la cuidadora." },
      { title: "Nimblo", text: "Diseño de app de producto llevado a código en Next.js." },
      { title: "CQRS y Event Sourcing", text: "Sistema bancario con escritura y lectura separadas en microservicios y eventos por Kafka." },
      { title: "Monolito a microservicios", text: "Migración con DDD en Spring Boot: un servicio y una base de datos por contexto." },
      { title: "DeFi Trust Engine", text: "Dashboard fintech P2P llevado de Figma a código, con frontend y backend." },
      { title: "Contador de monedas con IA", text: "Identificación y conteo de monedas en imágenes con detección de círculos y clasificación multietiqueta." },
      { title: "Docker y CI/CD", text: "Imágenes multi-stage para backend y frontend, con pipeline en GitHub Actions y runner propio." },
      { title: "CI/CD multicapa", text: "Taller de integración y despliegue continuo: Spring Boot, React, Docker Compose y GitHub Actions." },
      { title: "Kindred", text: "App móvil de citas: flujos, sistema visual e interfaz." },
      { title: "Trabajo remoto", text: "Investigación UX para mejorar la productividad de quienes trabajan en remoto." },
    ],
    aboutEyebrow: "04 / Perfil",
    aboutTitle: "Sobre mí",
    aboutText:
      "Estudio Ingeniería de Sistemas y Diseño de Medios Interactivos en la Universidad Icesi, con intercambio en la Universitat de València. Trabajo como desarrollador mientras estudio, uniendo criterio técnico y sensibilidad por el diseño.",
    photoAlt: "Retrato de Juan Esteban Duque",
    contactEyebrow: "05 / Hablemos",
    contactTitle: "¿Tienes un problema que podamos convertir en producto?",
    writeMe: "Escríbeme",
    downloadCv: "Descargar hoja de vida",
    cvShort: "Hoja de vida",
    mailSubject: "Hola Juan, vi tu portafolio",
  },
  en: {
    nav: ["Featured", "Experience", "Projects", "About", "Contact"],
    available: "Available for new projects",
    h1: "I design and build web products from ",
    h1Accent: "end to end.",
    lead: "Fullstack developer and interface designer. From Figma to a production-ready product.",
    viewProjects: "View projects",
    contact: "Contact",
    projectsEyebrow: "01 / Selected work",
    projectsTitle: "Featured projects",
    linkLabels: { live: "View live", github: "GitHub", behance: "Behance", front: "Frontend", back: "Backend" },
    featured: [
      {
        title: "Polis · Build the Tower",
        text: "A cooperative phygital game: four players with incomplete information build a physical tower just by talking. Real-time web app.",
        alt: "Polis cover: robot characters in front of a city of towers",
      },
      {
        title: "Xposture",
        text: "A biofeedback wearable that gives real-time cues on posture and sports technique. Research, a Flutter app, and Arduino sensors.",
        alt: "Xposture case study cover",
      },
    ],
    expEyebrow: "02 / Career",
    expTitle: "Experience",
    jobs: [
      {
        date: "SEP 2026 — PRESENT",
        company: "INNLAB",
        role: "Project lead · Capstone project",
        text: "I lead Índigo within the university's innovation lab, from the product to the technical groundwork new team members rely on.",
        projects: [
          {
            name: "Índigo",
            text: "The evolution of Index, a company diagnostic tool with a single fixed assessment. Índigo lets any academic area of the university create diagnostics for individuals, teams, or organizations, with new roles: professors who design them, sales staff who connect them with companies, and companies that take them.",
          },
          {
            name: "Technical wiki",
            text: "Documentation of how the frontend, backend, and database repositories work, so anyone joining the team can get started by following it.",
          },
        ],
      },
      {
        date: "JUL 2026 — PRESENT",
        company: "Universidad Icesi",
        role: "Developer",
        text: "Building AI solutions for the university's external partners.",
        projects: [
          {
            name: "Medical cost assistant · Coomeva",
            text: "A conversational quoting tool built with n8n, Supabase, and AI that answers what a procedure costs, with its breakdown.",
          },
        ],
      },
      {
        date: "JUN 2024 — MAR 2026",
        company: "Ezmos",
        role: "Remote fullstack developer",
        text: "I built Next.js interfaces and NestJS services for products powered by real-time data.",
        projects: [
          {
            name: "The Funded Picks",
            text: "A funded sports-picks challenge platform: Next.js frontend in three languages, admin dashboard, and a NestJS API.",
          },
        ],
      },
      {
        date: "AUG 2024 — FEB 2025",
        company: "Banco W",
        role: "UX designer",
        text: "Research and flow design for a financial chatbot, turning user insights into product decisions.",
        projects: [],
      },
    ],
    workEyebrow: "03 / Continuous practice",
    workTitle: "More projects",
    filters: { all: "All", dev: "Development", design: "Design" },
    work: [
      { title: "Solar lens · GdO", text: "A portal that helps solar energy customers understand their bill, savings, and generation. Capstone project, Icesi." },
      { title: "HCI Family Care", text: "Passive support for older adults: sensors in everyday objects, a Bluetooth bridge, a NestJS API, and a caregiver dashboard." },
      { title: "Nimblo", text: "Product app design taken to code in Next.js." },
      { title: "CQRS and Event Sourcing", text: "A banking system with separate write and read microservices and events over Kafka." },
      { title: "Monolith to microservices", text: "A DDD migration in Spring Boot: one service and one database per context." },
      { title: "DeFi Trust Engine", text: "A P2P fintech dashboard taken from Figma to code, frontend and backend." },
      { title: "AI coin counter", text: "Identifying and counting coins in images with circle detection and multi-label classification." },
      { title: "Docker and CI/CD", text: "Multi-stage images for backend and frontend, with a GitHub Actions pipeline and a self-hosted runner." },
      { title: "Multi-tier CI/CD", text: "A continuous integration and deployment workshop: Spring Boot, React, Docker Compose, and GitHub Actions." },
      { title: "Kindred", text: "A dating mobile app: flows, visual system, and interface." },
      { title: "Remote work", text: "UX research to improve the productivity of remote workers." },
    ],
    aboutEyebrow: "04 / Profile",
    aboutTitle: "About me",
    aboutText:
      "I study Systems Engineering and Interactive Media Design at Universidad Icesi, including an exchange at Universitat de València. I work as a developer while studying, combining technical judgment with design sensitivity.",
    photoAlt: "Portrait of Juan Esteban Duque",
    contactEyebrow: "05 / Let's talk",
    contactTitle: "Do you have a problem we can turn into a product?",
    writeMe: "Email me",
    downloadCv: "Download résumé",
    cvShort: "Résumé",
    mailSubject: "Hi Juan, I saw your portfolio",
  },
};

// Una clave que falte en un idioma se vería como texto vacío en la página.
console.assert(
  Object.keys(i18n.es).join() === Object.keys(i18n.en).join(),
  "i18n: es y en no tienen las mismas claves"
);
// Los textos van por índice junto a `featured` y `work`.
console.assert(
  ["es", "en"].every((l) => i18n[l].featured.length === featured.length && i18n[l].work.length === work.length),
  "i18n: featured/work no coinciden con los datos compartidos"
);
