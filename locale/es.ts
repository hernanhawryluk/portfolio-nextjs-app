import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiAsana,
  SiBootstrap,
  SiDjango,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import portfolioWebImg from "@/public/projects/portfolio-web.png";
import ecommerceAppImg from "@/public/projects/ecommerce-app.png";
import blogAppImg from "@/public/projects/blog-app.png";
import djangoAppImg from "@/public/projects/django-app.png";
import taskManagerAppImg from "@/public/projects/task-manager-app.png";
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
    heading: "Desarrollador Full-Stack",
    main: "Desarrollo integral de aplicaciones web y móbiles para iOS y Android.",
    second:
      "Mi stack principal incluye React, Node.js, Next.js y Django entre otras tecnologías clave.",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mi",
    first:
      "Soy un Desarrollador Full-Stack, capacitado para crear aplicaciones web y multiplataforma para iOS y Android de manera integral, desde su concepción inicial hasta su despliegue. Estoy familiarizado con las metodologías Agile y Scrum, así como el uso de herramientas de control de versiones.",
    second:
      "Poseo un dominio nativo del español y un nivel avanzado de inglés que incluye habilidades de lectura, escucha y conversación, permitiéndome una comunicación fluida en ambos idiomas. Mi dedicación y experiencia se manifiesta en proyectos pulidos y de alta calidad que he desarrollado y compartido en GitHub.",
    data: [
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        icon: React.createElement(SiExpress),
        color: "#000000",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiPython),
        color: "#3776ab",
      },
      {
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
      {
        icon: React.createElement(SiGit),
        color: "#f1502f",
      },
    ],
  },
  projects: {
    title: "Mis Proyectos",
    data: [
      {
        title: "React & Node.js App",
        description:
          "Aplicación desarrollada del lado cliente y del lado servidor, que contiene autenticación de usuarios, gestión de tareas a través de operaciones CRUD y un calendario dinámico.",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
        ],
        imageUrl: taskManagerAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/tasks-nodejs-backend/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://tasks-react-frontend.vercel.app",
      },
      {
        title: "Next.js & Tailwind App",
        description:
          "Portafolio completamente adaptable a todos los tamaños de pantallas, ofrece soporte multilingüe, modo claro y oscuro, animaciones, y validación de formularios.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: portfolioWebImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/portfolio-nextjs-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "#",
      },
      {
        title: "Django & Bootstrap App",
        description:
          "Aplicación desarrollada aprovechando la arquitectura MVT de Django. Ofrece contenido dinámico, formularios seguros, autenticación de usuarios y reservas en línea.",
        tags: ["Python", "Django", "PostgreSQL", "Rest Framework", "Bootstrap"],
        imageUrl: djangoAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/little-lemon-django/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://little-lemon-django-iota.vercel.app",
      },
      {
        title: "Next.js & Tailwind App",
        description:
          "Un blog minimalista con autenticación de usuarios, filtrado por categorías, paginación, capacidad para escribir, comentar, y buenas practicas de SEO.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
          "Prisma",
        ],
        imageUrl: blogAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/blog-nextjs-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl:
          "https://blog-nextjs-app-hernan-hawryluks-projects.vercel.app/",
      },
      {
        title: "Tienda Online Next.js",
        description:
          "Ofrece un diseño responsivo, autentificación de usuarios, carrito de compras intuitivo, integración de pagos con Stripe, reseñas de articulos, gestion de productos y ordenes.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
          "Prisma",
        ],
        imageUrl: ecommerceAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/nextjs-commerce-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
      },
      {
        title: "Instagram React Native",
        description:
          "Una réplica funcional de Instagram compatible con iOS y Android. Incluye autenticación de usuarios, creación de publicaciones, notificaciones, interacciones en tiempo real y otras características.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "Sitio Web Renders",
        description:
          "Un sitio web desarrollado desde cero para resaltar renders arquitectónicos de alta calidad. Incluye un diseño responsivo, sistema de cotización en línea en tiempo real, animaciones y validación de formularios.",
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
          "Un apartamento diseñado en un motor de videojuegos que ofrece la libertad de explorar, interactuar con todos sus elementos y personalizar acabados.",
        tags: ["Unreal Engine 5", "Blueprints", "SketchUp", "3D Warehouse"],
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
        skill: "Framer Motion",
        icon: React.createElement(SiFramer),
        color: "#000000",
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
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#4db33d",
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
        title: "Estudiante Autodidacta",
        location: "Argentina, Bs. As.",
        description:
          "Adquirí habiliades en diseño web, programación orientada a objetos, control de versiones, desarrollo de aplicaciones con React, Node.js, y Next.js, entre otras tecnologías.",
        icon: React.createElement(LuGraduationCap),
        date: "Diciembre 2021 - Diciembre 2022",
      },
      {
        title: "Experiencia en Desarrollo",
        location: "Argentina, Bs. As.",
        description:
          "Desarrollé numerosos proyectos en diversas tecnologías, resolviendo los desafios sin depender de un equipo. Estas experiencias rápidamente me proporcionaron un amplio caudal de experiencia tanto del front-end como del back-end.",
        icon: React.createElement(FaReact),
        date: "Enero 2023 - Enero 2024",
      },
      {
        title: "Desarrollador Full-Stack",
        location: "Argentina, Bs. As.",
        description:
          "Actualmente trabajo como Desarrollador Web Full-Stack, aprovechando mis habilidades técnicas y creativas para crear experiencias digitales seguras, dinámicas y sorprendentes.",
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
