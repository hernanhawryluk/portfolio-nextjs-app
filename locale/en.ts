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
import instagramClonImg from "@/public/instagram-clon.png";
import renderWebImg from "@/public/render-web.png";
import interactiveRenderImg from "@/public/interactive-render.png";
import portfolioWebImg from "@/public/portfolio-web.png";

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
    greeting: "Hello! I'm Hernan.",
    heading: "Cross-Platform Front-End Developer",
    main: "I develop high-quality web and cross-platform applications for iOS and Android. I am fluent in both Spanish and English. I invite you to explore my portfolio to discover standout projects that I have independently developed.",
    occupation:
      "If you're seeking a developer experienced in React, Next.js and React Native, feel free to get in touch!",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first:
      "I am a Front-end developer with Back-end knowledge, enabling me to independently create high-quality websites and cross-platform applications for iOS and Android. My core stack includes React, Next.js, and React Native. I am fluent in Spanish, my native language, and English. My dedication and expertise are reflected in polished and high-quality projects that I have developed and shared on GitHub.",
    second:
      "In my personal life, beyond my role as a developer, I stand out for my conciliation skills and willingness to listen and learn. Furthermore, my passion for music, playing the violin and guitar, and my enjoyment of video games and anime contribute a creative perspective to my approach in development. These experiences and skills enrich my profile, contributing to shaping a professional identity characterized by creativity and collaboration.",
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "Portfolio Website",
        description:
          "This portfolio is fully responsive for seamless adaptation to all screens, also providing multilingual support, light and dark modes, animations, and form validation.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: portfolioWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/portfolio-nextjs-app",
        demoType: "Deploy",
        demoUrl: "#",
      },
      {
        title: "Instagram Clone App",
        description:
          "A fully functional Instagram replica seamlessly compatible with iOS and Android. It includes user authentication, post creation, notifications, real-time interactions, and other features.",
        tags: ["React Native", "Expo", "Firebase"],
        imageUrl: instagramClonImg,
        repositoryUrl: "https://github.com/hernanhawryluk/instagram-clone-app",
        demoType: "Video",
        demoUrl: "https://youtu.be/llQH79EdmfU",
      },
      {
        title: "Archviz Render Web",
        description:
          "A website developed from scratch with responsive design to effectively showcase high-quality architectural renders. It includes a real-time online quotation system, animations, and form validation.",
        tags: ["HTML5", "CSS", "JavaScript"],
        imageUrl: renderWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/web-renders-showcase",
        demoType: "Deploy",
        demoUrl: "https://hernanhawryluk.github.io/web-renders-showcase/",
      },
      {
        title: "Interactive Render",
        description:
          "An apartment designed in a game engine that provides the freedom to explore, interact with all its elements, change lighting, and customize finishes.",
        tags: ["Unreal Engine 5", "Blueprints", "SketchUp Pro"],
        imageUrl: interactiveRenderImg,
        repositoryUrl:
          "https://github.com/hernanhawryluk/ue5-interactive-render",
        demoType: "Video",
        demoUrl: "https://youtu.be/7X-eYt_Ll30",
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
          "I started studying programming with Python and JavaScript through the Platzi platform. In a short time, after reaching an intermediate level of Python, I developed simple applications and games, which are available in my GitHub repository.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - February 2022",
      },
      {
        title: "Skill Refinement",
        location: "Argentina, Bs. As.",
        description:
          "I diversified my education by learning object-oriented programming, databases, Git & GitHub, and complemented my JavaScript knowledge with HTML, CSS, and Responsive Design. This significantly contributed to refining my skills in web development.",
        icon: React.createElement(LuGraduationCap),
        date: "March 2022 - December 2022",
      },
      {
        title: "Expanding Horizons of JavaScript",
        location: "Argentina, Bs. As.",
        description:
          "I studied and carried out at least one project in each of these JavaScript libraries: Node.js, Express, React, Next.js, and React Native. This provided me with comprehensive knowledge of how applications operate on both the front-end and back-end.",
        icon: React.createElement(LuGraduationCap),
        date: "January 2023 - April 2023",
      },
      {
        title: "Skilled Front-End Developer",
        location: "Argentina, Bs. As.",
        description:
          "I am a Front-End Developer specialized in web and cross-platform applications for Android and iOS. My main set of technologies includes React, Next.js, TypeScript, Tailwind, React Native, MongoDB, and Firebase.",
        icon: React.createElement(FaReact),
        date: "May 2023 - Present",
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
