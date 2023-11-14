import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    greeting: "Hola, Soy Hernan Hawryluk.",
    main: "Desarrollador Front-end con 2 años de experiencia. Me encanta desarrollar paginas web y aplicaciones móbiles.",
    occupation: "Mis principales herramientas son React and React Native.",
    contactButton: "Contactame aquí",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mi",
    first:
      "Soy un desarrollador Front-end con la capacidad de crear de forma independiente sitios web y aplicaciones multiplataforma para iOS y Android. Mi conjunto de tecnologías principales incluye React, Next.js, React Native y Firebase. Hablo fluidamente tanto español como inglés. Me siento igualmente cómodo trabajando en ambos idiomas, lo que facilita la comunicación efectiva y el rendimiento en entornos internacionales.",
    second:
      "Soy una persona orientada a los detalles comprometida en entregar productos e interfaces pulidos de alta calidad. Mis proyectos en GitHub son un testimonio de mi dedicación y habilidades. Además, tengo una auténtica pasión por el aprendizaje continuo y creo firmemente que cada problema tiene una solución, lo que me impulsa a buscar soluciones innovadoras. Esto asegura que los proyectos en los que trabajo cumplan consistentemente con los estándares de calidad más altos.",
  },
  projects: {
    title: "Mis Proyectos",
    data: [
      {
        title: "Instagram Clone App",
        description:
          "Una réplica totalmente funcional de Instagram, perfectamente compatible con iOS y Android. Muestra la autenticación de usuarios, la creación de publicaciones, la carga de imágenes, notificaciones e interacciones en tiempo real.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: corpcommentImg,
      },
      {
        title: "Archviz Render Web",
        description:
          "Un sitio web desarrollado desde cero para mostrar de manera elegante y promover de manera efectiva renders arquitectónicos de alta calidad, con una cotización en línea en tiempo real sin interrupciones.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: rmtdevImg,
      },
      {
        title: "Render Interactivo",
        description:
          "Un apartamento diseñado en un motor de videojuegos que brinda la libertad para explorar, interactuar con todos sus elementos, personalizar acabados y experimentar diferentes niveles de iluminación.",
        tags: ["Unreal Engine 5", "Blueprints", "SketchUp Pro"],
        imageUrl: wordanalyticsImg,
      },
    ],
  },
  skills: {
    title: "Mis Tecnologías",
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
        title: "Comienzo con la programación",
        location: "Argentina, Bs. As.",
        description:
          "Empece a estudiar programación explorando los fundamentos de Python y JavaScript. Mi fascinación por el desarrollo front-end creció rápidamente.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - February 2022",
      },
      {
        title: "Perfeccionamiento de habilidades",
        location: "Argentina, Bs. As.",
        description:
          "A través de la plataforma de Platzi, mejoré mis habilidades en el idioma inglés y perfeccioné mis habilidades en desarrollo web. Apliqué activamente mis conocimientos a través de proyectos personales.",
        icon: React.createElement(CgWorkAlt),
        date: "March 2022 - December 2022",
      },
      {
        title: "Revelando la multiplataforma",
        location: "Argentina, Bs. As.",
        description:
          "Mi trayectoria me llevó a adentrarme en el desarrollo móvil multiplataforma con React Native, lo que me permitió crear aplicaciones tanto para iOS como para Android.",
        icon: React.createElement(CgWorkAlt),
        date: "January 2023 - April 2023",
      },
      {
        title: "Desarrollador Front-End Competente",
        location: "Argentina, Bs. As.",
        description:
          "Ahora soy un desarrollador front-end que trabaja como freelancer. Mi conjunto de tecnologías incluye React, Next.js, TypeScript, Tailwind, React Native y Firebase.",
        icon: React.createElement(FaReact),
        date: "May 2023 - Present",
      },
    ],
  },
  contact: {
    title: "Contactame",
    messageBefore: "Por favor, contáctame directamente a ",
    messageAfter: " o a través de este formulario.",
    placeholderEmail: "Tu email",
    placeholderMessage: "Tu mensaje",
    button: "Enviar",
  },
  footer: {
    text: "Todos los derechos reservados.",
    subtitle: "Sobre este sitio:",
    about:
      "Construido con React y Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, y alojado en Vercel.",
  },
};

export default es;
