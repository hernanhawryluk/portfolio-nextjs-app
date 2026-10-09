import React from "react";
import { FaCode, FaJava, FaReact, FaClipboardList, FaRobot, FaBook } from "react-icons/fa";
import {
  SiAmazonaws,
  SiAppstore,
  SiAsana,
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGoogleplay,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiJirasoftware,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpring,
  SiSqlite,
  SiSwift,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import metropistasAppImg from "@/public/projects/metropistas-app.png";
import outAppImg from "@/public/projects/out-app.png";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import googleProjectManagementImg from "@/public/certifications/google-project-management.png";
import ibmNodeJsImg from "@/public/certifications/ibm-node-js.png";
import metaFrontEndDeveloperImg from "@/public/certifications/meta-front-end-developer.png";
import metaBackEndDeveloperImg from "@/public/certifications/meta-back-end-developer.png";
import metaReactNativeImg from "@/public/certifications/meta-react-native-specialization.png";
import platziOOPImg from "@/public/certifications/platzi-oop.png";
import platziHtmlCssImg from "@/public/certifications/platzi-html-css.png";
import tiendaRepImg from "@/public/projects/tiendarep-web.png";
import icatalogiqImg from "@/public/projects/icatalogiq-web.png";
import byuClubAppImg from "@/public/projects/byuclub-web.png";

const es = {
  links: [
    {
      name: "Inicio",
      hash: "#home",
    },
    {
      name: "Perfil",
      hash: "#about",
    },
    {
      name: "Proyectos",
      hash: "#projects",
    },
    {
      name: "Tecnologías",
      hash: "#skills",
    },
    {
      name: "Certificaciones",
      hash: "#certifications",
    },
    {
      name: "Experiencia",
      hash: "#experience",
    },
    {
      name: "Contacto",
      hash: "#contact",
    },
  ],
  intro: {
    greeting: "Hernán Hawryluk",
    heading: "CTO & AI-Native Full-Stack Engineer",
    main: "Lidero y desarrollo productos digitales de principio a fin: arquitectura, backend, aplicaciones web y móviles, infraestructura y operación en producción.",
    second:
      "Combino experiencia técnica con SDD y agentes de IA para transformar requisitos en soluciones escalables, con revisión de código, pruebas y criterios de aceptación.",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    first:
      "Mi especialidad es el backend con Java y Spring Boot, incluyendo APIs, integraciones, seguridad y bases de datos. Complemento esa experiencia con desarrollo web en React y Next.js, y aplicaciones móviles con React Native, SwiftUI y Kotlin.",

    second:
      "Gestiono infraestructura AWS, pipelines CI/CD y publicación en App Store y Google Play. Trabajo directamente con clientes para definir prioridades y tomar decisiones técnicas, equilibrando necesidades de producto, costos y mantenibilidad.",
    data: [
      {
        skill: "Orquestación de Agentes",
        icon: React.createElement(FaRobot),
        color: "#ffcc00",
      },
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f89820",
      },
      {
        skill: "Spring Boot",
        icon: React.createElement(SiSpring),
        color: "#6db33f",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
      },
      {
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    description:
      "Proyectos desarrollados sin asistencia de IA que respaldan mi experiencia en arquitectura, implementación y producción, y el criterio técnico con el que hoy trabajo con agentes.",
    data: [
      {
        title: "ByUClub",
        description:
          "Plataforma de beneficios que permite gestionar y promocionar descuentos integrados en una billetera digital, facilitando su acceso y uso.",
        tags: ["Spring Boot", "React", "AWS"],
        imageUrl: byuClubAppImg,
        demoType: "Deploy",
        demoUrl: "https://www.byuclub.com",
      },
      {
        title: "iCatalogIQ",
        description:
          "Aplicación de auditoría que permite detectar inconsistencias y problemas en los catálogos musicales de los usuarios de forma automatizada.",
        tags: ["FastAPI", "React", "AWS"],
        imageUrl: icatalogiqImg,
        demoType: "Deploy",
        demoUrl: "https://www.icatalogiq.com",
      },
      {
        title: "TiendaRep",
        description:
          "Aplicación de e-commerce que permite gestionar productos, buscar artículos y realizar compras mediante un carrito y pagos con Mercado Pago.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: tiendaRepImg,
        demoType: "Deploy",
        demoUrl: "https://www.tiendarep.com.ar",
      },
      {
        title: "Metropistas",
        description:
          "Aplicación de asistencia vial para autopistas de Puerto Rico, con geolocalización, validación de cobertura y envío de notificaciones push.",
        tags: ["Spring Boot", "SwiftUI", "Kotlin"],
        imageUrl: metropistasAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/metropistas/id6742114670?l=en-GBMetropistas",
      },
      {
        title: "OUT - Bares & Experiencias",
        description: "Aplicación móvil para descubrir bares de coctelería en Buenos Aires, realizar reservas, acceder a descuentos y comprar experiencias.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: outAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/out-bares-experiencias/id6670214771",
      },
      {
        title: "Instagram Clon",
        description:
          "Réplica de Instagram que recrea sus principales funcionalidades y experiencia de navegación mediante una aplicación móvil desarrollada con React Native.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl: "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "NBL Renders",
        description:
          "Sitio web de renders arquitectónicos que presenta proyectos mediante un diseño personalizado, animaciones e ilustraciones para atraer clientes.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/web-renders-showcase/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Render Interactivo",
        description:
          "Experiencia interactiva que permite recorrer y personalizar un departamento, ajustando acabados e iluminación en un entorno virtual inmersivo.",
        tags: ["Unreal Engine 5", "SketchUp"],
        imageUrl: interactiveRenderImg,
        repositoryUrl: "https://github.com/hernanhawryluk/ue5-interactive-render/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/7X-eYt_Ll30",
      },
    ],
  },
  skills: {
    title: "Habilidades Técnicas",
    data: [
      {
        skill: "Spec-Driven Development (SDD)",
        icon: React.createElement(FaClipboardList),
        color: "#3178c6",
        description: "Defino requisitos, tareas y criterios de aceptación para guiar la implementación y validar las entregas.",
      },
      {
        skill: "Orquestación de Agentes",
        icon: React.createElement(FaRobot),
        color: "#3178c6",
        description: "Coordino agentes de IA para análisis, implementación, pruebas y documentación, revisando sus resultados.",
      },
      {
        skill: "Gestión de contexto",
        icon: React.createElement(FaBook),
        color: "#3178c6",
        description: "Documento arquitectura, convenciones y decisiones del proyecto para orientar el trabajo de los agentes de IA.",
      },
      {
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
        description: "Desarrollo interfaces interactivas, lógica de aplicaciones web y servicios backend con Node.js.",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
        description: "Aplico tipado estático en aplicaciones web, móviles y backend para detectar errores y facilitar el mantenimiento.",
      },
      {
        skill: "React Native",
        icon: React.createElement(SiReact),
        color: "#61dafb",
        description: "Desarrollo y mantengo aplicaciones móviles para iOS y Android, desde su implementación hasta su publicación.",
      },
      {
        skill: "Expo",
        icon: React.createElement(SiExpo),
        color: "#000000",
        description: "Utilizo Expo para desarrollar, compilar y publicar aplicaciones React Native en App Store y Google Play.",
      },
      {
        skill: "Swift",
        icon: React.createElement(SiSwift),
        color: "#F05138",
        description: "Desarrollo aplicaciones nativas para iOS, implementando lógica de negocio e integración con servicios backend.",
      },
      {
        skill: "SwiftUI",
        icon: React.createElement(SiSwift),
        color: "#3178c6",
        description: "Construyo interfaces nativas para iOS, conectando sus componentes con los datos y funcionalidades de la aplicación.",
      },
      {
        skill: "Kotlin",
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
        description: "Desarrollo aplicaciones nativas para Android, implementando funcionalidades e integración con APIs.",
      },
      {
        skill: "Jetpack Compose",
        icon: React.createElement(SiJetpackcompose),
        color: "#7F52B0",
        description: "Construyo interfaces Android con componentes declarativos y gestión del estado de la aplicación.",
      },
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f89820",
        description: "Desarrollo y mantengo servicios backend y APIs para aplicaciones en producción con miles de usuarios activos.",
      },
      {
        skill: "Spring Boot",
        icon: React.createElement(SiSpring),
        color: "#6db33f",
        description: "Implemento APIs REST, lógica de negocio, autenticación e integraciones con bases de datos y servicios externos.",
      },
      {
        skill: "Python",
        icon: React.createElement(SiPython),
        color: "#3572A5",
        description: "Desarrollo servicios backend y scripts para automatizar tareas y procesar datos.",
      },
      {
        skill: "Django",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
        description: "Desarrollo aplicaciones backend con modelos de datos, autenticación y herramientas de administración.",
      },
      {
        skill: "REST Framework",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
        description: "Construyo APIs con Django REST Framework, implementando serialización, autenticación y permisos de acceso.",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
        description: "Utilizo SQLite para almacenamiento local y persistencia de datos en prototipos y entornos de prueba.",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
        description: "Diseño modelos relacionales, desarrollo consultas y optimizo el acceso a datos en sistemas de producción.",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
        description: "Modelo datos relacionales y desarrollo consultas para integrar la persistencia con servicios backend.",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
        description: "Integro autenticación, almacenamiento, datos en tiempo real y notificaciones push en aplicaciones web y móviles.",
      },
      {
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
        description: "Modelo y consulto datos orientados a documentos, integrando su almacenamiento con aplicaciones backend.",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#4db33d",
        description: "Defino modelos, gestiono migraciones e implemento acceso tipado a bases de datos en proyectos con TypeScript.",
      },
      {
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
        description: "Escribo scripts para automatizar tareas de desarrollo, despliegues y administración de servidores.",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
        description: "Configuro y gestiono infraestructura cloud, entornos de desarrollo y producción, despliegues y observabilidad.",
      },
      {
        skill: "App Store",
        icon: React.createElement(SiAppstore),
        color: "#000000",
        description: "Gestiono la publicación y actualización de aplicaciones iOS, incluyendo compilaciones, revisiones y versiones.",
      },
      {
        skill: "Google Play",
        icon: React.createElement(SiGoogleplay),
        color: "#4285F4",
        description: "Gestiono la publicación de aplicaciones Android, los canales de prueba y los lanzamientos de nuevas versiones.",
      },
      {
        skill: "Docker",
        icon: React.createElement(SiDocker),
        color: "#2496ed",
        description: "Configuro contenedores para mantener entornos consistentes y facilitar la ejecución y el despliegue de servicios.",
      },
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
        description: "Construyo la estructura de interfaces web con marcado semántico y criterios de accesibilidad.",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiHtml5),
        color: "#264de4",
        description: "Implemento diseños responsivos, estilos personalizados y animaciones para interfaces web.",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
        description: "Desarrollo interfaces web con componentes reutilizables, gestión de estado e integración con APIs.",
      },
      {
        skill: "Node.js",
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
        description: "Desarrollo APIs, servicios backend y herramientas de automatización con JavaScript y TypeScript.",
      },
      {
        skill: "Express",
        icon: React.createElement(SiExpress),
        color: "#000000",
        description: "Implemento APIs REST con rutas, middlewares y lógica de negocio para aplicaciones backend.",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
        description: "Desarrollo aplicaciones web con React, enrutamiento, renderizado en servidor e integración con servicios backend.",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
        description: "Construyo interfaces responsivas y consistentes, aplicando estilos mediante clases de utilidad.",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
        description: "Implemento interfaces responsivas utilizando componentes y sistemas de grillas adaptados a cada proyecto.",
      },
      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
        description: "Gestiono versiones, ramas y cambios de código para mantener un historial organizado del desarrollo.",
      },
      {
        skill: "GitHub",
        icon: React.createElement(SiGithub),
        color: "#000000",
        description: "Administro repositorios, pull requests, revisiones de código y pipelines de integración y despliegue continuo.",
      },
      {
        skill: "Figma",
        icon: React.createElement(SiFigma),
        color: "#f24e1e",
        description: "Trabajo con diseños y prototipos para implementar interfaces y coordinar decisiones con diseñadores.",
      },
      {
        skill: "Asana",
        icon: React.createElement(SiAsana),
        color: "#fc636b",
        description: "Organizo tareas, prioridades y entregas para dar seguimiento al desarrollo y coordinar el trabajo del equipo.",
      },
      {
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
        description: "Gestiono backlogs, sprints e incidencias para planificar funcionalidades y seguir su implementación.",
      },
      {
        skill: "Trello",
        icon: React.createElement(SiTrello),
        color: "#0079bf",
        description: "Organizo tareas en tableros Kanban para visualizar avances, pendientes y el flujo de trabajo.",
      },
      {
        skill: "Unreal Engine",
        icon: React.createElement(SiUnrealengine),
        color: "#000000",
        description: "Desarrollo experiencias arquitectónicas interactivas que permiten recorrer espacios y personalizar acabados e iluminación.",
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    data: [
      {
        imageUrl: metaFrontEndDeveloperImg,
      },
      {
        imageUrl: metaBackEndDeveloperImg,
      },
      {
        imageUrl: metaReactNativeImg,
      },
      {
        imageUrl: googleProjectManagementImg,
      },
      {
        imageUrl: ibmNodeJsImg,
      },
      {
        imageUrl: platziOOPImg,
      },
      {
        imageUrl: platziHtmlCssImg,
      },
    ],
  },
  experience: {
    title: "Mi Experiencia",
    data: [
      {
        role: "CTO & Full-Stack Developer",
        location: "Hako Software",
        description:
          "Lidero la arquitectura y desarrollo de productos digitales, definiendo prioridades con clientes y gestionando su operación en AWS. Aplico SDD y coordino agentes de IA con criterios de aceptación y validación de entregas, equilibrando escalabilidad, costos y calidad técnica.",
        icon: React.createElement(FaCode),
        date: "Septiembre 2024 - Presente",
      },
      {
        role: "Desarrollador Full-Stack",
        location: "Bytewave - Innovation in Software",
        description:
          "Desarrollé backend y APIs con Java y Spring Boot para aplicaciones con miles de usuarios activos, e interfaces con React y React Native. Gestioné infraestructura AWS, pipelines CI/CD y publicación en App Store y Google Play.",
        icon: React.createElement(FaCode),
        date: "Febrero 2024 - Agosto 2024",
      },
      {
        role: "Desarrollador Full-Stack",
        location: "Freelance",
        description:
          "Desarrollé productos comerciales de principio a fin: backend, web, mobile, infraestructura AWS y despliegues automatizados. Publiqué aplicaciones en App Store y Google Play, con proyectos que superaron los 10.000 usuarios activos.",
        icon: React.createElement(FaReact),
        date: "Octubre 2022 - Marzo 2024",
      },
    ],
  },
  contact: {
    title: "Contáctame",
    message:
      "¿Buscás desarrollar un producto, evolucionar una plataforma o sumar liderazgo técnico? Contactame para conversar sobre tu proyecto o una oportunidad profesional.",
    placeholderEmail: "Tu correo electrónico",
    placeholderMessage: "Tu mensaje",
    buttonSubmit: "Enviar",
    buttonCopy: "Copiar correo electrónico",
    toastSent: "¡Correo electrónico enviado exitosamente!",
    toastCaptcha: "Verifica el captcha antes de enviar.",
    toastCopied: "¡Dirección de correo electrónico copiada al portapapeles!",
  },
  footer: {
    text: "Todos los derechos reservados.",
    subtitle: "Sobre este sitio:",
    about: "Construido con React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, y alojado en Vercel.",
  },
  buttons: {
    theme: "Cambiar tema",
    language: "Cambiar idioma",
  },
};

export default es;
