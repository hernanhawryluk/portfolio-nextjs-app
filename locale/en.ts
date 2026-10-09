import React from "react";
import { FaBook, FaClipboardList, FaCode, FaJava, FaReact, FaRobot } from "react-icons/fa";
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
import metropistasAppImg from "@/public/projects/metropistas-app.png";
import outAppImg from "@/public/projects/out-app.png";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import googleProjectManagementImg from "@/public/certifications/google-project-management.png";
import ibmNodeJsImg from "@/public/certifications/ibm-node-js.png";
import metaFrontEndDeveloperImg from "@/public/certifications/meta-front-end-developer.png";
import metaBackEndDeveloperImg from "@/public/certifications/meta-back-end-developer.png";
import metaReactNativeImg from "@/public/certifications/meta-react-native-specialization.png";
import platziOOPImg from "@/public/certifications/platzi-oop.png";
import platziHtmlCssImg from "@/public/certifications/platzi-html-css.png";
import tiendaRepImg from "@/public/projects/tiendarep-web.png";
import icatalogiqImg from "@/public/projects/icatalogiq-web.png";
import byuClubAppImg from "@/public/projects/byuclub-web.png";

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
      name: "Technologies",
      hash: "#skills",
    },
    {
      name: "Certifications",
      hash: "#certifications",
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
    greeting: "Hernán Hawryluk",
    heading: "CTO & AI-Native Full-Stack Engineer",
    main: "I lead and develop digital products end to end, covering architecture, backend, web and mobile applications, infrastructure, and production operations.",
    second:
      "I combine technical experience with SDD and AI agents to turn requirements into scalable solutions, supported by code reviews, testing, and acceptance criteria.",
    contactButton: "Contact Me",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    first:
      "I specialize in backend development with Java and Spring Boot, including APIs, integrations, security, and databases. I complement this experience with web development using React and Next.js, and mobile applications using React Native, SwiftUI, and Kotlin.",
    second:
      "I manage AWS infrastructure, CI/CD pipelines, and app releases on the App Store and Google Play. I work directly with clients to define priorities and make technical decisions, balancing product needs, costs, and maintainability.",
    data: [
      {
        skill: "Agent Orchestration",
        icon: React.createElement(FaRobot),
        color: "#ffcc00",
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
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
      },
      {
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description:
      "Projects developed without AI assistance that demonstrate my experience in architecture, implementation, and production, and the technical judgment I now apply when working with agents.",
    data: [
      {
        title: "ByUClub",
        description: "Benefits platform for managing and promoting discounts integrated into a digital wallet, making them easier to access and use.",
        tags: ["Spring Boot", "React", "AWS"],
        imageUrl: byuClubAppImg,
        demoType: "Deploy",
        demoUrl: "https://www.byuclub.com",
      },
      {
        title: "iCatalogIQ",
        description: "Auditing application that automatically detects inconsistencies and issues in users music catalogs.",
        tags: ["FastAPI", "React", "AWS"],
        imageUrl: icatalogiqImg,
        demoType: "Deploy",
        demoUrl: "https://www.icatalogiq.com",
      },
      {
        title: "TiendaRep",
        description:
          "E-commerce application for managing products, searching for items, and making purchases through a shopping cart with Mercado Pago payments.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: tiendaRepImg,
        demoType: "Deploy",
        demoUrl: "https://www.tiendarep.com.ar",
      },
      {
        title: "Metropistas",
        description: "Roadside assistance application for highways in Puerto Rico, featuring geolocation, service coverage validation, and push notifications.",
        tags: ["Spring Boot", "SwiftUI", "Kotlin"],
        imageUrl: metropistasAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/metropistas/id6742114670?l=en-GBMetropistas",
      },
      {
        title: "OUT - Bars & Experiences",
        description: "Mobile application for discovering cocktail bars in Buenos Aires, making reservations, accessing discounts, and purchasing experiences.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: outAppImg,
        demoType: "Deploy",
        demoUrl: "https://apps.apple.com/ar/app/out-bares-experiencias/id6670214771",
      },
      {
        title: "Instagram Clone",
        description: "Instagram clone that recreates its core features and browsing experience through a mobile application built with React Native.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl: "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "NBL Renders",
        description: "Architectural rendering website that showcases projects through custom design, animations, and illustrations to attract clients.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/web-renders-showcase/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Interactive Render",
        description: "Interactive experience for exploring and customizing an apartment, adjusting finishes and lighting in an immersive virtual environment.",
        tags: ["Unreal Engine 5", "SketchUp"],
        imageUrl: interactiveRenderImg,
        repositoryUrl: "https://github.com/hernanhawryluk/ue5-interactive-render/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/7X-eYt_Ll30",
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    data: [
      {
        skill: "Spec-Driven Development (SDD)",
        icon: React.createElement(FaClipboardList),
        color: "#3178c6",
        description: "I define requirements, tasks, and acceptance criteria to guide implementation and validate deliverables.",
      },
      {
        skill: "Agent Orchestration",
        icon: React.createElement(FaRobot),
        color: "#3178c6",
        description: "I coordinate AI agents for analysis, implementation, testing, and documentation, reviewing their outputs.",
      },
      {
        skill: "Context Management",
        icon: React.createElement(FaBook),
        color: "#3178c6",
        description: "I document project architecture, conventions, and decisions to guide the work of AI agents.",
      },
      {
        skill: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
        description: "I develop interactive interfaces, web application logic, and backend services with Node.js.",
      },
      {
        skill: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
        description: "I apply static typing to web, mobile, and backend applications to catch errors and simplify maintenance.",
      },
      {
        skill: "React Native",
        icon: React.createElement(SiReact),
        color: "#61dafb",
        description: "I develop and maintain mobile applications for iOS and Android, from implementation to release.",
      },
      {
        skill: "Expo",
        icon: React.createElement(SiExpo),
        color: "#000000",
        description: "I use Expo to develop, build, and publish React Native applications on the App Store and Google Play.",
      },
      {
        skill: "Swift",
        icon: React.createElement(SiSwift),
        color: "#F05138",
        description: "I develop native iOS applications, implementing business logic and integrations with backend services.",
      },
      {
        skill: "SwiftUI",
        icon: React.createElement(SiSwift),
        color: "#3178c6",
        description: "I build native iOS interfaces, connecting their components to application data and functionality.",
      },
      {
        skill: "Kotlin",
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
        description: "I develop native Android applications, implementing features and API integrations.",
      },
      {
        skill: "Jetpack Compose",
        icon: React.createElement(SiJetpackcompose),
        color: "#7F52B0",
        description: "I build Android interfaces using declarative components and application state management.",
      },
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f89820",
        description: "I develop and maintain backend services and APIs for production applications with thousands of active users.",
      },
      {
        skill: "Spring Boot",
        icon: React.createElement(SiSpring),
        color: "#6db33f",
        description: "I implement REST APIs, business logic, authentication, and integrations with databases and external services.",
      },
      {
        skill: "Python",
        icon: React.createElement(SiPython),
        color: "#3572A5",
        description: "I develop backend services and scripts to automate tasks and process data.",
      },
      {
        skill: "Django",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
        description: "I develop backend applications with data models, authentication, and administration tools.",
      },
      {
        skill: "REST Framework",
        icon: React.createElement(SiDjango),
        color: "#44b78b",
        description: "I build APIs with Django REST Framework, implementing serialization, authentication, and access permissions.",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
        description: "I use SQLite for local storage and data persistence in prototypes and test environments.",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
        description: "I design relational models, write queries, and optimize data access in production systems.",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
        description: "I model relational data and write queries to integrate data persistence with backend services.",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
        description: "I integrate authentication, storage, real-time data, and push notifications into web and mobile applications.",
      },
      {
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
        description: "I model and query document-oriented data, integrating its storage with backend applications.",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
        color: "#4db33d",
        description: "I define models, manage migrations, and implement type-safe database access in TypeScript projects.",
      },
      {
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
        description: "I write scripts to automate development tasks, deployments, and server administration.",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
        description: "I configure and manage cloud infrastructure, development and production environments, deployments, and observability.",
      },
      {
        skill: "App Store",
        icon: React.createElement(SiAppstore),
        color: "#000000",
        description: "I manage iOS application releases and updates, including builds, review submissions, and version management.",
      },
      {
        skill: "Google Play",
        icon: React.createElement(SiGoogleplay),
        color: "#4285F4",
        description: "I manage Android application publishing, testing tracks, and new version releases.",
      },
      {
        skill: "Docker",
        icon: React.createElement(SiDocker),
        color: "#2496ed",
        description: "I configure containers to maintain consistent environments and simplify service execution and deployment.",
      },
      {
        skill: "HTML",
        icon: React.createElement(SiHtml5),
        color: "#e34f26",
        description: "I structure web interfaces using semantic markup and accessibility principles.",
      },
      {
        skill: "CSS",
        icon: React.createElement(SiHtml5),
        color: "#264de4",
        description: "I implement responsive layouts, custom styles, and animations for web interfaces.",
      },
      {
        skill: "React",
        icon: React.createElement(SiReact),
        color: "#61dafb",
        description: "I develop web interfaces with reusable components, state management, and API integrations.",
      },
      {
        skill: "Node.js",
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
        description: "I develop APIs, backend services, and automation tools with JavaScript and TypeScript.",
      },
      {
        skill: "Express",
        icon: React.createElement(SiExpress),
        color: "#000000",
        description: "I implement REST APIs with routing, middleware, and business logic for backend applications.",
      },
      {
        skill: "Next.js",
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
        description: "I develop web applications with React, routing, server-side rendering, and backend service integrations.",
      },
      {
        skill: "Tailwind",
        icon: React.createElement(SiTailwindcss),
        color: "#38bdf8",
        description: "I build responsive, consistent interfaces using utility classes for styling.",
      },
      {
        skill: "Bootstrap",
        icon: React.createElement(SiBootstrap),
        color: "#7952b3",
        description: "I implement responsive interfaces using components and grid systems adapted to each project.",
      },
      {
        skill: "Git",
        icon: React.createElement(SiGit),
        color: "#f05032",
        description: "I manage versions, branches, and code changes to maintain an organized development history.",
      },
      {
        skill: "GitHub",
        icon: React.createElement(SiGithub),
        color: "#000000",
        description: "I manage repositories, pull requests, code reviews, and continuous integration and deployment pipelines.",
      },
      {
        skill: "Figma",
        icon: React.createElement(SiFigma),
        color: "#f24e1e",
        description: "I work with designs and prototypes to implement interfaces and coordinate decisions with designers.",
      },
      {
        skill: "Asana",
        icon: React.createElement(SiAsana),
        color: "#fc636b",
        description: "I organize tasks, priorities, and deliverables to track development progress and coordinate teamwork.",
      },
      {
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
        description: "I manage backlogs, sprints, and issues to plan features and track their implementation.",
      },
      {
        skill: "Trello",
        icon: React.createElement(SiTrello),
        color: "#0079bf",
        description: "I organize tasks on Kanban boards to visualize progress, pending work, and workflows.",
      },
      {
        skill: "Unreal Engine",
        icon: React.createElement(SiUnrealengine),
        color: "#000000",
        description: "I develop interactive architectural experiences for exploring spaces and customizing finishes and lighting.",
      },
    ],
  },
  certifications: {
    title: "Certifications",
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
    title: "My Experience",
    data: [
      {
        role: "CTO & Full-Stack Developer",
        location: "Hako Software",
        description:
          "I lead the architecture and development of digital products, defining priorities with clients and managing operations on AWS. I apply SDD and coordinate AI agents using acceptance criteria and deliverable validation, balancing scalability, costs, and technical quality.",
        icon: React.createElement(FaCode),
        date: "September 2024 - Present",
      },
      {
        role: "Full-Stack Developer",
        location: "Bytewave - Innovation in Software",
        description:
          "I developed backend services and APIs with Java and Spring Boot for applications with thousands of active users, along with interfaces using React and React Native. I managed AWS infrastructure, CI/CD pipelines, and app releases on the App Store and Google Play.",
        icon: React.createElement(FaCode),
        date: "February 2024 - August 2024",
      },
      {
        role: "Full-Stack Developer",
        location: "Freelance",
        description:
          "I developed commercial products end to end, covering backend, web, mobile, AWS infrastructure, and automated deployments. I published applications on the App Store and Google Play, with projects exceeding 10,000 active users.",
        icon: React.createElement(FaReact),
        date: "October 2022 - March 2024",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    message:
      "Looking to develop a product, evolve a platform, or bring in technical leadership? Get in touch to discuss your project or a professional opportunity.",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    buttonSubmit: "Send",
    buttonCopy: "Copy Email Address",
    toastSent: "Email sent successfully!",
    toastCaptcha: "Please complete the CAPTCHA before sending.",
    toastCopied: "Email address copied to clipboard!",
  },
  footer: {
    text: "All rights reserved.",
    subtitle: "About this site:",
    about: "Built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, and hosted on Vercel.",
  },
  buttons: {
    theme: "Change Theme",
    language: "Change Language",
  },
};

export default en;
