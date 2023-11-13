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

const en = {
  intro: {
    greeting: "Hello, I'm Hernan Hawryluk.",
    main: "Front-End Developer with 2 years of experience. I enjoy building sites andmobile apps",
    occupation: "My focus is React and React Native.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first:
      "I'm a Front-end developer with the ability to independently create websites and cross-platform applications for iOS and Android. My core stack includes React, Next.js React Native, and Firebase. Fluent in both Spanish and English. I'm equally comfortable working in either languages. This facilitates effective communication and performance in international environments.",
    second:
      "I'm a detail-oriented individual committed to delivering polished, high-quality products and interfaces. My GitHub projects serve as a testament to my dedication and skills. I also have a genuine passion for continuous learning, and I firmly believe that every problem has a solution, which drives me to seek innovative solutions. This ensures that the projects I work on consistently meet the highest quality standards.",
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "Instagram Clone App",
        description:
          "A fully functional Instagram replica seamlessly compatible with iOS and Android. Showcasing user authentication, post creation, image uploads, notifications, and real-time interactions.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: corpcommentImg,
      },
      {
        title: "Archviz Render Web",
        description:
          "A web site developed from scratch to elegantly showcase and effectively promote high-quality architectural renders, featuring seamless real-time online cotization.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: rmtdevImg,
      },
      {
        title: "Interactive Render",
        description:
          "An apartment designed in a game engine that provides the freedom to explore, interact with all its elements, customize finishes, and experience different lighting levels.",
        tags: ["Unreal Engine 5", "Blueprints", "SketchUp Pro"],
        imageUrl: wordanalyticsImg,
      },
    ],
  },
  links: [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],
};

export default en;
