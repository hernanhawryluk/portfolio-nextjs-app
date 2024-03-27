import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import {
  SiAsana,
  SiBootstrap,
  SiDjango,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import instagramClonImg from "@/public/projects/instagram-clon.png";
import renderWebImg from "@/public/projects/render-web.png";
import interactiveRenderImg from "@/public/projects/interactive-render.png";
import portfolioWebImg from "@/public/projects/portfolio-web.png";
import ecommerceAppImg from "@/public/projects/ecommerce-app.png";
import blogAppImg from "@/public/projects/blog-app.png";
import taskManagerAppImg from "@/public/projects/task-manager-app.png";
import djangoAppImg from "@/public/projects/django-app.png";
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
    heading: "Full-Stack Developer",
    main: "I develop high-quality web and cross-platform applications for iOS and Android.",
    second:
      "My main stack includes React, Node.js, Next.js, and Django among other key technologies.",
    contactButton: "Contact me here",
    downloadCV: "Download CV",
  },
  about: {
    title: "About me",
    first:
      "I am a Full-Stack Developer, skilled in independently creating web and cross-platform applications for iOS and Android, from the initial conception to deployment. I am familiar with Agile and Scrum methodologies, as well as the use of version control tools like Git.",
    second:
      "I am a native Spanish speaker with advanced proficiency in English, including reading, listening, and conversation skills, enabling me to communicate fluently in both languages. My dedication and experience are evident in polished and high-quality projects that I have developed and shared on GitHub.",
    data: [
      {
        icon: React.createElement(SiReact),
        color: "#61dafb",
      },
      {
        icon: React.createElement(SiNodedotjs),
        color: "#8cc84b",
      },
      {
        icon: React.createElement(SiExpress),
        color: "#000000",
      },
      {
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        icon: React.createElement(SiNextdotjs),
        color: "#000000",
      },
      {
        icon: React.createElement(SiJavascript),
        color: "#f0db4f",
      },
      {
        icon: React.createElement(SiTypescript),
        color: "#3178c6",
      },
      {
        icon: React.createElement(SiPython),
        color: "#3776ab",
      },
      {
        icon: React.createElement(SiDjango),
        color: "#44b78b",
      },
      {
        icon: React.createElement(SiGit),
        color: "#f1502f",
      },
    ],
  },
  projects: {
    title: "My Projects",
    data: [
      {
        title: "Node.js and React App",
        description:
          "A full-stack application developed with the MERN Stack, where users can manage and appoint their tasks. It features authentication, CRUD operations, and good performance.",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
        ],
        imageUrl: taskManagerAppImg,
        repositoryUrl: "https://github.com/hernanhawryluk/tasks-nodejs-backend",
        demoType: "Deploy",
        demoUrl: "https://tasks-react-frontend.vercel.app",
      },
      {
        title: "Next.js Web App",
        description:
          "This portfolio is fully responsive for seamless adaptation to all screens, also providing multilingual support, light and dark modes, animations, and form validation.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: portfolioWebImg,
        repositoryUrl: "https://github.com/hernanhawryluk/portfolio-nextjs-app",
        demoType: "Deploy",
        demoUrl: "#",
      },
      {
        title: "Django Web Server",
        description:
          "Full-stack application developed with Django, leveraging the MVT architecture, featuring dynamic content, secure forms, user authentication, and online booking.",
        tags: ["Python", "Django", "PostreSQL", "Rest Framework", "Bootstrap"],
        imageUrl: djangoAppImg,
        repositoryUrl: "https://github.com/hernanhawryluk/little-lemon-django",
        demoType: "Deploy",
        demoUrl: "https://little-lemon-django-iota.vercel.app",
      },
      {
        title: "Next.js Web App",
        description:
          "A minimalistic blog, featuring Google and Github authentication, category filtering, content pagination, write and comment functionality, good performance and SEO practices.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
          "Prisma",
        ],
        imageUrl: blogAppImg,
        repositoryUrl: "https://github.com/hernanhawryluk/blog-nextjs-app",
        demoType: "Deploy",
        demoUrl:
          "https://blog-nextjs-app-hernan-hawryluks-projects.vercel.app/",
      },
      {
        title: "E-commerce Web Next.js",
        description:
          "Responsive design, user and Google authentication, intuitive shopping cart, Stripe payment integration, product reviews, dashboard for product and order management.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Mongo-DB",
          "Prisma",
        ],
        imageUrl: ecommerceAppImg,
        repositoryUrl: "https://github.com/hernanhawryluk/nextjs-commerce-app",
        demoType: "Deploy",
        demoUrl: "https://nextjs-commerce-app-pi.vercel.app",
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
        title: "Renders Web Site",
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
        tags: ["Unreal Engine 5", "Blueprints", "SketchUp Pro", "3D Warehouse"],
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
        skill: "MongoDB",
        icon: React.createElement(SiMongodb),
        color: "#4db33d",
      },
      {
        skill: "Firebase",
        icon: React.createElement(SiFirebase),
        color: "#ffcb2b",
      },
      {
        skill: "SQLite",
        icon: React.createElement(SiSqlite),
        color: "#3498db",
      },
      {
        skill: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#3498db",
      },
      {
        skill: "Prisma",
        icon: React.createElement(SiPrisma),
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
        title: "Self-taught Student",
        location: "Argentina, Bs. As.",
        description:
          "I acquired skills in web design, object-oriented programming, version control, application development with React, Node.js, and Next.js, among other technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2021 - December 2022",
      },
      {
        title: "Development Experience",
        location: "Argentina, Bs. As.",
        description:
          "I developed numerous projects in various technologies, efficiently solving challenges without depending on a team. These experiences provided me with extensive expertise in both front-end and back-end.",
        icon: React.createElement(FaReact),
        date: "January 2023 - January 2024",
      },
      {
        title: "Full-Stack Developer",
        location: "Argentina, Bs. As.",
        description:
          "Currently, I work as a Full-Stack Web Developer, leveraging my technical and creative skills to create secure, dynamic, and amazing digital experiences.",
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
