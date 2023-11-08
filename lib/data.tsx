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
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
] as const;

export const experienceData = [
    {
        title: "Graduated from Platzi",
        location: "Argentina, Bs. As.",
        description: "I graduated after 6 months of studying. I immediatly found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2018"
    },
    {
        title: "Front-End Developer",
        location: "Argentina, Bs. As.",
        description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2022"
    },
    {
        title: "Full-Stack Developer",
        location: "Argentina, Bs. As.",
        description: "I'm now a full stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, React Native and Firebase.",
        icon: React.createElement(FaReact),
        date: "2023 - Present"
    }
] as const;

export const projectsData = [
    {
        title: "Instagram Clone App",
        description: "Fully functional Instagram replica built in React Native, showcasing my skills as a mobile app developer. Explore the features and functionality of Instagram in this project.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: wordanalyticsImg,
    },
    {
        title: "Portfolio Website",
        description: "A web platform developed from scratch to showcase and promote my developer portfolio. This project was created as part of my own venture and stands out for its custom design, unique illustrations, and a wide range of features implemented with HTML, CSS, and JavaScript.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Architecture Render Website",
        description: "A web platform developed from scratch to showcase and promote high-quality architectural renders. This project was created as part of my own venture and stands out for its custom design, unique illustrations, and a wide range of features implemented with HTML, CSS, and JavaScript. Both the design and the code, along with all its content, were developed by myself.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Interactive Render",
        description: "Showcase for my portfolio, demonstrating real-time rendering capabilities and interactivity with Unreal Engine 5 (Lumen).",
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
    "Unreal Engine"
] as const;