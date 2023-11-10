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

export const experienceData = [
  {
    title: "Graduated from Platzi",
    location: "Argentina, Bs. As.",
    description:
      "I graduated after 6 months of studying. I immediatly found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Argentina, Bs. As.",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Argentina, Bs. As.",
    description:
      "I'm now a full stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, React Native and Firebase.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Instagram Clone App",
    description:
      "A fully functional Instagram replica seamlessly compatible with iOS and Android. Showcasing user authentication, post creation, image uploads, notifications, and real-time interactions.",
    tags: ["React Native", "Expo", "Firebase"],
    imageUrl: wordanalyticsImg,
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
  "React Native",
  "Expo",
  "Node.js",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "Firebase",
  "Tailwind",
  "Python",
  "Unreal Engine",
] as const;
