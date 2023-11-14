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
  intro: {
    greeting1: "Hello! I'm Hernan.",
    greeting2: "Multiplatform Front-end Developer",
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
  skills: {
    title: "My Skills",
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
    title: "My Experience",
    data: [
      {
        title: "Coding Journey Begins",
        location: "Argentina, Bs. As.",
        description:
          "I embarked on my programming journey by exploring into the foundations of Python and JavaScript. My fascination with front-end development grew rapidly.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - February 2022",
      },
      {
        title: "Skill Refinement",
        location: "Argentina, Bs. As.",
        description:
          "Through the Platzi platform, I enhanced my English language skills and refined my web development abilities. I actively applied my knowledge through personal projects.",
        icon: React.createElement(CgWorkAlt),
        date: "March 2022 - December 2022",
      },
      {
        title: "Unveiling Cross-Platform",
        location: "Argentina, Bs. As.",
        description:
          "My journey led me to delve into cross-platform mobile development with React Native, which allowed me to create apps for both iOS and Android.",
        icon: React.createElement(CgWorkAlt),
        date: "January 2023 - April 2023",
      },
      {
        title: "Skilled Front-End Developer",
        location: "Argentina, Bs. As.",
        description:
          "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, React Native and Firebase.",
        icon: React.createElement(FaReact),
        date: "May 2023 - Present",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    messageBefore: "Please contact me directly at ",
    messageAfter: " or though this form.",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    button: "Submit",
  },
  footer: {
    text: "All rights reserved.",
    subtitle: "About this website",
    about:
      "built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
  },
};

export default en;
