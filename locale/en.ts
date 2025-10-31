import React from "react";
import { FaCode, FaJava, FaReact } from "react-icons/fa";
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
  SiFramer,
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
import { LuGraduationCap } from "react-icons/lu";
import metropistasAppImg from "@/public/projects/metropistas-app.png";
import outAppImg from "@/public/projects/out-app.png";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import ecommerceAppImg from "@/public/projects/ecommerce-app.png";
import googleProjectManagementImg from "@/public/certifications/google-project-management.png";
import ibmNodeJsImg from "@/public/certifications/ibm-node-js.png";
import metaFrontEndDeveloperImg from "@/public/certifications/meta-front-end-developer.png";
import metaBackEndDeveloperImg from "@/public/certifications/meta-back-end-developer.png";
import metaReactNativeImg from "@/public/certifications/meta-react-native-specialization.png";
import platziOOPImg from "@/public/certifications/platzi-oop.png";
import platziHtmlCssImg from "@/public/certifications/platzi-html-css.png";

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
    greeting: "Hernan Hawryluk",
    heading: "Full-Stack Mobile Developer",
    main: "Native and cross-platform development focused on quality, performance, and user experience.",
    second:
      "Experience with React Native, Swift, and Kotlin. I build back-ends with Spring Boot and other technologies, deploying to production environments such as AWS, App Store, and Google Play.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    first:
      "As a full-stack developer, I actively participate in every layer of a project —mobile, web, and back-end— with a strong focus on quality, performance, security, and continuous integration (CI/CD). I specialize in end-to-end project management, from requirements definition and client planning to deployment on AWS and publishing on the App Store and Google Play.",
    second:
      "I've worked with and led development teams, driving effective solutions, promoting collaboration, and ensuring goals are met through Agile and Scrum methodologies. I possess an advanced level of technical comprehension and intermediate spoken English, allowing me to communicate effectively in international technical environments. This ensures organized, efficient, and high-quality development processes.",
    data: [
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiSwift),
        color: "#F05138",
      },
      {
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
      },
      {
        skill: "Java",
        icon: React.createElement(FaJava),
        color: "#f89820",
      },
      {
        icon: React.createElement(SiSpring),
        color: "#6db33f",
      },
      {
        icon: React.createElement(SiPython),
        color: "#3572A5",
      },
      {
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
    ],
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "Metropistas - Route Assistance",
        description:
          "Road assistance app for highways in Puerto Rico. Integrates geolocation, coverage validation, and push notifications.",
        tags: ["SwiftUI", "Kotlin", "Spring Boot"],
        imageUrl: metropistasAppImg,
        demoType: "Deploy",
        demoUrl:
          "https://apps.apple.com/ar/app/metropistas/id6742114670?l=en-GBMetropistas",
      },
      {
        title: "OUT - Bars & Experiences",
        description:
          "Mobile app designed to explore and discover cocktail bars in Buenos Aires. Includes instant reservations, discount implementation, and experience purchases.",
        tags: ["React Native", "TypeScript", "Expo"],
        imageUrl: outAppImg,
        demoType: "Deploy",
        demoUrl:
          "https://apps.apple.com/ar/app/out-bares-experiencias/id6670214771",
      },
      {
        title: "Smart Store - E-Commerce",
        description:
          "E-commerce platform with a responsive admin panel, user management, advanced search and filtering, intuitive shopping cart, and secure Stripe payment integration.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        imageUrl: ecommerceAppImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/nextjs-commerce-app/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
      },
      {
        title: "Instagram Clone",
        description:
          "Fully functional Instagram replica that reproduces the core features and user experience of the original platform, offering a modern, smooth, and fully operational interface.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/instagram-clone-app/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "NBL Renders",
        description:
          "Promotional website for high-quality architectural renders, featuring animations, custom design, and unique illustrations, optimized to attract clients and deliver an exceptional user experience.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/web-renders-showcase/blob/main/README.es.md",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Interactive Render",
        description:
          "Interactive 3D experience that allows users to explore and customize an apartment, adjusting finishes and lighting for an immersive and detailed visualization.",
        tags: ["Unreal Engine 5", "SketchUp"],
        imageUrl: interactiveRenderImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/ue5-interactive-render/blob/main/README.es.md",
        demoType: "Video",
        demoUrl: "https://youtu.be/7X-eYt_Ll30",
      },
    ],
  },
  skills: {
    title: "My Skills",
    data: [
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
        skill: "Swift",
        icon: React.createElement(SiSwift),
        color: "#F05138",
      },
      {
        skill: "SwiftUI",
        icon: React.createElement(SiSwift),
        color: "#3178c6",
      },
      {
        skill: "Kotlin",
        icon: React.createElement(SiKotlin),
        color: "#7F52B0",
      },
      {
        skill: "Jetpack Compose",
        icon: React.createElement(SiJetpackcompose),
        color: "#7F52B0",
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
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
      },
      {
        skill: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
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
        skill: "Bash",
        icon: React.createElement(SiGnubash),
        color: "#000000",
      },
      {
        skill: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#FF9900",
      },
      {
        skill: "App Store",
        icon: React.createElement(SiAppstore),
        color: "#000000",
      },
      {
        skill: "Google Play",
        icon: React.createElement(SiGoogleplay),
        color: "#4285F4",
      },
      {
        skill: "Docker",
        icon: React.createElement(SiDocker),
        color: "#2496ed",
      },
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
        skill: "Jira",
        icon: React.createElement(SiJirasoftware),
        color: "#0052cc",
      },
      {
        skill: "Trello",
        icon: React.createElement(SiTrello),
        color: "#0079bf",
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
    title: "My Experience",
    data: [
      {
        role: "Self-Taught Student",
        location: "Platzi - Coursera",
        description:
          "Completed specializations in front-end, back-end, and mobile development through advanced international courses on Platzi and Coursera, strengthening my skills by creating real-world products and commercial projects.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - February 2024",
      },
      {
        role: "Full-Stack Developer",
        location: "Freelance",
        description:
          "Designed and developed complete commercial projects, including mobile apps and web platforms with API integration, authentication, and admin dashboards. Some projects reached over 10,000 active users and received excellent client feedback.",
        icon: React.createElement(FaReact),
        date: "October 2022 - March 2024",
      },
      {
        role: "Mobile Developer",
        location: "Bytewave - Innovation in Software",
        description:
          "Responsible for developing native and cross-platform applications (iOS, Android, React Native). Collaborate in architecture design, back-end development, and AWS deployment, participating in all stages of the product lifecycle.",
        icon: React.createElement(FaCode),
        date: "February 2024 - Present",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    message:
      "Don't hesitate to get in touch! I'm excited about new job opportunities. You can do so through this form, by sending me a direct email, or by connecting with me on LinkedIn or GitHub. Looking forward to connecting!",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    buttonSubmit: "Submit",
    buttonCopy: "Copy Email Address",
    toastSent: "Email sent successfully!",
    toastCaptcha: "Verify captcha before sending.",
    toastCopied: "Email address copied to clipboard!",
  },
  footer: {
    text: "All rights reserved.",
    subtitle: "About this website",
    about:
      "built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
  },
  buttons: {
    theme: "Change theme",
    language: "Change language",
  },
};

export default en;
