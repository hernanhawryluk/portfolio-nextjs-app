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
    heading: "Full-Stack Mobile Developer",
    main: "Desarrollo nativo y multiplataforma enfocado en la calidad, el rendimiento y la experiencia del usuario.",
    second:
      "Experiencia en React Native, Swift y Kotlin. Desarrollo back-ends con Spring Boot y otras tecnologías, con despliegues en entornos productivos como AWS, App Store y Google Play.",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    first:
      "Como desarrollador full-stack, participo activamente en todas las capas del proyecto -mobile, web y back-end-, con especial enfoque en la calidad, el rendimiento, la seguridad y la integración continua (CI/CD). Me especializo en la gestión integral de proyectos, desde la definición de requisitos y planificación con el cliente, hasta la publicación en App Store y Google Play, y el despliegue en AWS.",
    second:
      "He trabajado y liderado equipos de desarrollo, impulsando soluciones efectivas, promoviendo la colaboración y asegurando el cumplimiento de objetivos mediante la aplicación de metodologías Agile y Scrum. Poseo un nivel avanzado de comprensión y un nivel intermedio de conversación en inglés, lo que me permite comunicarme eficazmente en entornos técnicos internacionales. Todo esto garantiza procesos de desarrollo organizados, eficientes y de alta calidad.",
    data: [
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiSwift),
        color: "#F05138",
      },
      {
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
      },
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
        icon: React.createElement(SiPython),
        color: "#3572A5",
      },
      {
        icon: React.createElement(SiDjango),
        color: "#44b78b",
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
        tags: ["SwiftUI", "Kotlin", "Spring Boot"],
        imageUrl: metropistasAppImg,
        demoType: "Deploy",
        demoUrl:
          "https://apps.apple.com/ar/app/metropistas/id6742114670?l=en-GBMetropistas",
      },
      {
        title: "OUT - Bares & Experiencias",
        description:
          "Aplicación móvil diseñada para explorar y descubrir bares de coctelería en Buenos Aires. Cuenta con reservas instantáneas, implementación de descuentos, y compras de experiencias.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: outAppImg,
        demoType: "Deploy",
        demoUrl:
          "https://apps.apple.com/ar/app/out-bares-experiencias/id6670214771",
      },
      {
        title: "Smart Store - Tienda",
        description:
          "Plataforma de e-commerce con panel de administración responsivo, gestión de usuarios, búsqueda y filtrado avanzados, carrito de compras intuitivo e integración de pagos segura mediante Stripe.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        imageUrl: ecommerceAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/nextjs-commerce-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
      },
      {
        title: "Instagram",
        description:
          "Réplica funcional de Instagram que reproduce de forma integral la experiencia y funcionalidades principales de la plataforma original, ofreciendo una interfaz moderna, fluida y completamente operativa.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "NBL Renders",
        description:
          "Web promocional de renders arquitectónicos de alta calidad, con animaciones, diseño personalizado e ilustraciones únicas, optimizada para atraer clientes y ofrecer una experiencia de usuario excepcional.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/web-renders-showcase/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Render Interactivo",
        description:
          "Experiencia interactiva tipo videojuego que permite explorar y personalizar el departamento, ajustar acabados e iluminación, ofreciendo una visualización inmersiva y detallada del espacio.",
        tags: ["Unreal Engine 5", "SketchUp"],
        imageUrl: interactiveRenderImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/ue5-interactive-render/blob/main/README.es.md",
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
        role: "Estudiante Autodidacta",
        location: "Platzi - Coursera",
        description:
          "He completado especializaciones en front-end, back-end y desarrollo móvil a través de cursos avanzados en plataformas internacionales como Platzi y Coursera, reforzando mis habilidades con la creación de productos reales y proyectos comerciales.",
        icon: React.createElement(LuGraduationCap),
        date: "Diciembre 2021 - Febrero 2024",
      },
      {
        role: "Desarrollador Full-Stack",
        location: "Freelance",
        description:
          "Diseñé y desarrollé proyectos comerciales completos, incluyendo aplicaciones móviles y plataformas web con integración de APIs, autenticación y paneles administrativos. Algunos de estos proyectos alcanzaron más de 10.000 usuarios activos y recibieron excelentes valoraciones de los clientes.",
        icon: React.createElement(FaReact),
        date: "Octubre 2022 - Marzo 2024",
      },
      {
        role: "Desarrollador Mobile",
        location: "Bytewave - Innovation in Software",
        description:
          "Responsable del desarrollo de aplicaciones nativas y multiplataforma (iOS, Android, React Native). Colaboro en el diseño de arquitectura, desarrollo de back-end y despliegue de servicios en AWS, participando activamente en todas las etapas del ciclo de vida del producto.",
        icon: React.createElement(FaCode),
        date: "Febrero 2024 - Present",
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
    about:
      "Construido con React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, y alojado en Vercel.",
  },
  buttons: {
    theme: "Cambiar tema",
    language: "Cambiar idioma",
  },
};

export default es;
