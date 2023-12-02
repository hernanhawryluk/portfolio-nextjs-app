import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import instagramClonImg from "@/public/instagram-clon.png";
import renderWebImg from "@/public/render-web.png";
import interactiveRenderImg from "@/public/interactive-render.png";
import portfolioWebImg from "@/public/portfolio-web.png";
import ecommerceAppImg from "@/public/ecommerce-app.png";

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
      name: "Experiencia",
      hash: "#experience",
    },
    {
      name: "Contacto",
      hash: "#contact",
    },
  ],
  intro: {
    greeting: "¡Hola! Soy Hernán.",
    heading: "Desarrollador Front-End Multiplataforma.",
    main: "Desarrollo aplicaciones web y multiplataforma de alta calidad para iOS y Android.",
    second:
      "Hablo fluidamente tanto español como inglés. Te invito a explorar mi portafolio para descubrir proyectos destacados que he desarrollado de manera independiente.",
    occupation:
      "Si estás buscando un desarrollador con experiencia en React, Next.js y React Native, ¡no dudes en ponerte en contacto!",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mi",
    first:
      "Soy un desarrollador Front-end con conocimientos de Back-end, lo que me capacita para crear de manera autónoma aplicaciones web y multiplataforma para iOS y Android. Mi conjunto principal de tecnologías abarca React, Next.js y React Native. Hablo fluidamente tanto español, mi lengua materna, como inglés. Mi dedicación y experiencia se manifiesta en proyectos pulidos y de alta calidad que he desarrollado y compartido en GitHub.",
    second:
      "En mi vida personal, más allá de mi faceta como desarrollador, destaco por mi capacidad de conciliación y disposición para escuchar y aprender. Además, mi pasión por la música, al tocar el violín y la guitarra, y mi gusto por los videojuegos y el anime aporta una perspectiva creativa a mi enfoque en el desarrollo. Estas vivencias y habilidades enriquecen mi perfil, contribuyendo a forjar una identidad profesional caracterizada por la creatividad y la colaboración.",
  },
  projects: {
    title: "Mis Proyectos",
    data: [
      {
        title: "Tienda Online",
        description:
          "Diseño responsivo, autentificación de usuarios, carrito de compras intuitivo, integración de pagos con Stripe, reseñas de articulos, panel de control para gestion de productos y ordenes.",
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
        title: "Portafolio Web",
        description:
          "Este portafolio se adapta completamente a todas las pantallas, ofrece soporte multilingüe, modos de luz y oscuro, animaciones, y validación de formularios.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: portfolioWebImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/portfolio-nextjs-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "#",
      },
      {
        title: "Instagram Clone App",
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
        title: "Archviz Render Web",
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
        skill: "Python",
        icon: React.createElement(SiPython),
        color: "#3572A5",
      },
      {
        skill: "Unreal Engine",
        icon: React.createElement(SiUnrealengine),
        color: "#000000",
      },
    ],
  },
  experience: {
    title: "Mi Experiencia",
    data: [
      {
        title: "Proyectos iniciales",
        location: "Argentina, Bs. As.",
        description:
          "Comencé a estudiar programación con Python y JavaScript por medio de la plataforma Platzi. En poco tiempo, tras alcanzar un nivel intermedio de Python desarrollé aplicaciones y juegos sencillos los cuales están disponibles en mi repositorio de GitHub.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - February 2022",
      },
      {
        title: "Perfeccionamiento de habilidades",
        location: "Argentina, Bs. As.",
        description:
          "Diversifiqué mi formación al aprender programación orientada a objetos, bases de datos, Git & GitHub, y complementé mis conocimientos en JavaScript con HTML, CSS y Responsive Design. Esto contribuyó significativamente a perfeccionar mis habilidades en el desarrollo web.",
        icon: React.createElement(LuGraduationCap),
        date: "March 2022 - December 2022",
      },
      {
        title: "Ampliando horizontes de JavaScript",
        location: "Argentina, Bs. As.",
        description:
          "Estudié y llevé a cabo al menos un proyecto en cada una de estas bibliotecas de JavaScript: Node.js, Express, React, Next.js, y React Native. Esto me proporcionó un conocimiento integral sobre cómo funcionan las aplicaciones tanto en el front-end como en el back-end.",
        icon: React.createElement(LuGraduationCap),
        date: "January 2023 - April 2023",
      },
      {
        title: "Desarrollador Front-End",
        location: "Argentina, Bs. As.",
        description:
          "Soy un desarrollador Front-End especializado en aplicaciones web y multiplataforma para Android y iOS. Mi conjunto principal de tecnologías incluye React, Next.js, TypeScript, Tailwind, React Native, MongoDB y Firebase.",
        icon: React.createElement(FaReact),
        date: "May 2023 - Present",
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
