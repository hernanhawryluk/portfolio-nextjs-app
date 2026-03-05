import React from "react";
import { FaCode, FaJava, FaReact } from "react-icons/fa";
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
import { LuGraduationCap } from "react-icons/lu";
import metropistasAppImg from "@/public/projects/metropistas-app.png";
import outAppImg from "@/public/projects/out-app.png";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import ecommerceAppImg from "@/public/projects/ecommerce-app.png";
import googleProjectManagementImg from "@/public/certifications/google-project-management.png";
import ibmNodeJsImg from "@/public/certifications/ibm-node-js.png";
import metaFrontEndDeveloperImg from "@/public/certifications/meta-front-end-developer.png";
import metaBackEndDeveloperImg from "@/public/certifications/meta-back-end-developer.png";
import metaReactNativeImg from "@/public/certifications/meta-react-native-specialization.png";
import platziOOPImg from "@/public/certifications/platzi-oop.png";
import platziHtmlCssImg from "@/public/certifications/platzi-html-css.png";

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
    heading: "Full-Stack Developer · Backend Specialist",
    main: "Especializado en Java y Spring Boot, con experiencia en el diseño e implementación de REST APIs, microservicios y sistemas distribuidos, así como en el despliegue de aplicaciones en entornos Cloud.",
    second:
      "Me enfoco en construir sistemas backend escalables y de alto rendimiento, aplicando buenas prácticas de arquitectura, seguridad y gestión de bases de datos relacionales (SQL).",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    first:
      "Aplico buenas prácticas de seguridad (OWASP) en el diseño y desarrollo de APIs y servicios backend. He implementado autenticación segura (JWT / OAuth2), control de accesos, protección de datos y rate limiting. También optimizo el rendimiento mediante caching con Redis, comunicación en tiempo real con WebSockets y testing automatizado con JUnit.",

    second:
      "Trabajo con infraestructura Cloud y prácticas DevOps, principalmente en AWS, utilizando Docker y configurando pipelines de integración continua (CI/CD) para automatizar despliegues y gestionar entornos productivos. Complemento mi perfil con experiencia en desarrollo web con React, Next.js y Tailwind, y en desarrollo mobile con React Native, Swift / SwiftUI y Kotlin / Jetpack Compose, incluyendo su publicación y mantenimiento en App Store y Google Play.",
    data: [
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f89820",
      },
      {
        icon: React.createElement(SiSpring),
        color: "#6db33f",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
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
    data: [
      {
        title: "Metropistas - Route Assistance",
        description:
          "Aplicación orientada a brindar asistencia vial en autopistas de Puerto Rico. Integra geolocalización, validación de cobertura, y notificaciones push.",
        tags: ["Spring Boot", "SwiftUI", "Kotlin"],
        imageUrl: metropistasAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/metropistas/id6742114670?l=en-GBMetropistas",
      },
      {
        title: "OUT - Bares & Experiencias",
        description:
          "Aplicación móvil diseñada para explorar y descubrir bares de coctelería en Buenos Aires. Cuenta con reservas instantáneas, implementación de descuentos, y compras de experiencias.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: outAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/out-bares-experiencias/id6670214771",
      },
      {
        title: "Smart Store - Tienda",
        description:
          "Plataforma de e-commerce completa con gestión de productos, carrito de compras, búsqueda avanzada, pagos seguros mediante Stripe y panel de administración para gestionar productos y pedidos.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        imageUrl: ecommerceAppImg,
        repositoryUrl: "https://github.com/hernanhawryluk/nextjs-commerce-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
      },
      {
        title: "Instagram",
        description:
          "Réplica funcional de Instagram que reproduce de forma integral la experiencia y funcionalidades principales de la plataforma original, ofreciendo una interfaz moderna, fluida y completamente operativa.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl: "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "NBL Renders",
        description:
          "Web promocional de renders arquitectónicos de alta calidad, con animaciones, diseño personalizado e ilustraciones únicas, optimizada para atraer clientes y ofrecer una experiencia de usuario excepcional.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/web-renders-showcase/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Render Interactivo",
        description:
          "Experiencia interactiva tipo videojuego que permite explorar y personalizar el departamento, ajustar acabados e iluminación, ofreciendo una visualización inmersiva y detallada del espacio.",
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
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        skill: "React Native",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "Expo",
        icon: React.createElement(SiExpo),
        color: "#000000",
      },
      {
        skill: "Swift",
        icon: React.createElement(SiSwift),
        color: "#F05138",
      },
      {
        skill: "SwiftUI",
        icon: React.createElement(SiSwift),
        color: "#3178c6",
      },
      {
        skill: "Kotlin",
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
      },
      {
        skill: "Jetpack Compose",
        icon: React.createElement(SiJetpackcompose),
        color: "#7F52B0",
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
        skill: "Python",
        icon: React.createElement(SiPython),
        color: "#3572A5",
      },
      {
        skill: "Django",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
      {
        skill: "REST Framework",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
      },
      {
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#4db33d",
      },
      {
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
      },
      {
        skill: "App Store",
        icon: React.createElement(SiAppstore),
        color: "#000000",
      },
      {
        skill: "Google Play",
        icon: React.createElement(SiGoogleplay),
        color: "#4285F4",
      },
      {
        skill: "Docker",
        icon: React.createElement(SiDocker),
        color: "#2496ed",
      },
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiHtml5),
        color: "#264de4",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        skill: "Node.js",
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        skill: "Express",
        icon: React.createElement(SiExpress),
        color: "#000000",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
      },
      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
      },
      {
        skill: "GitHub",
        icon: React.createElement(SiGithub),
        color: "#000000",
      },
      {
        skill: "Figma",
        icon: React.createElement(SiFigma),
        color: "#f24e1e",
      },
      {
        skill: "Asana",
        icon: React.createElement(SiAsana),
        color: "#fc636b",
      },
      {
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
      },
      {
        skill: "Trello",
        icon: React.createElement(SiTrello),
        color: "#0079bf",
      },
      {
        skill: "Unreal Engine",
        icon: React.createElement(SiUnrealengine),
        color: "#000000",
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
        role: "Desarrollador Full-Stack",
        location: "Bytewave - Innovation in Software",
        description:
          "Desarrollo y mantengo servicios backend y REST APIs en Java con Spring Boot para entornos de producción utilizados por aplicaciones con miles de usuarios activos. Colaboro en el desarrollo de interfaces web con React y aplicaciones móviles con React Native. Gestiono infraestructura en AWS, pipelines CI/CD, repositorios en GitHub y el despliegue de versiones en App Store y Google Play. Colaboro con clientes en la definición de requisitos técnicos y planificación de funcionalidades.",
        icon: React.createElement(FaCode),
        date: "Febrero 2024 - Present",
      },
      {
        role: "Desarrollador Full-Stack",
        location: "Freelance",
        description:
          "Desarrollé proyectos comerciales completos, incluyendo servicios backend, aplicaciones web y móviles, así como la configuración de infraestructura en AWS y pipelines de integración continua (CI/CD). Participé en la publicación y gestión de aplicaciones en App Store y Google Play, administrando el proceso desde el desarrollo hasta su despliegue en producción. Algunos de estos proyectos superaron los 10.000 usuarios activos y recibieron excelentes valoraciones por parte de los clientes.",
        icon: React.createElement(FaReact),
        date: "Octubre 2022 - Marzo 2024",
      },
      {
        role: "Estudiante Autodidacta",
        location: "Platzi - Coursera",
        description:
          "He completado especializaciones en front-end, back-end y desarrollo móvil a través de cursos avanzados en plataformas internacionales como Platzi y Coursera, reforzando mis habilidades con la creación de productos reales y proyectos comerciales.",
        icon: React.createElement(LuGraduationCap),
        date: "Diciembre 2021 - Febrero 2024",
      },
    ],
  },
  contact: {
    title: "Contáctame",
    message:
      "¡No dudes en contactarme! Estoy emocionado por nuevas oportunidades laborales. Puedes hacerlo a través de este formulario, enviándome un correo electrónico directo, o conectándote conmigo en LinkedIn o GitHub.",
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
