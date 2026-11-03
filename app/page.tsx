"use client";

import React from "react";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Certifications from "@/components/certifications";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView } = useInView({ threshold: 0.9 });

  return (
    <ActiveSectionContextProvider>
      <Header />
      <main className="flex flex-col items-center px-4 pt-28 sm:pt-0 2xl:px-[5%]">
        <div
          ref={ref}
          className="flex flex-col items-center justify-between relative"
        >
          <Intro />
          <SectionDivider inView={inView} />
        </div>
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </ActiveSectionContextProvider>
  );
}

export default React.memo(Home);
