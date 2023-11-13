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
};

export default es;
