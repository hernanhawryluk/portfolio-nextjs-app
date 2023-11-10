import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
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
] as const;

export const experiencesData = [
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
] as const;

export const projectsData = [
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
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "React Native",
  "Expo",
  "Git",
  "GitHub",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Python",
  "Unreal Engine",
  "Framer Motion",
] as const;
