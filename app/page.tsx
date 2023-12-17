"use client";

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.9 });

  return (
    <main className="flex flex-col items-center px-4 2xl:px-[5%]">
      <div
        ref={ref}
        className="flex flex-col items-center justify-between relative"
      >
        <Intro />
        <div
          className={`${
            inView ? "opacity-100" : "opacity-0"
          } transition duration-1000 `}
        >
          <SectionDivider />
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
