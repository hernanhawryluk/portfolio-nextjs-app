"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 0.4 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>about Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">front-end developer</span> with the
        ability to independently create{" "}
        <span className="font-medium">websites</span> and cross-platform
        applications for <span className="font-medium">iOS</span> and{" "}
        <span className="font-medium">Android</span>. My core stack includes{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">React Native</span>, and{" "}
        <span className="font-medium">Firebase</span>. Fluent in both{" "}
        <span className="font-medium">Spanish</span> and{" "}
        <span className="font-medium">English</span>. I'm equally comfortable
        working in either languages. This facilitates{" "}
        <span className="font-medium">effective communication</span> and{" "}
        <span className="font-medium">performance</span> in international
        environments.
      </p>
      <p>
        I'm a <span className="font-medium">detail-oriented individual</span>{" "}
        committed to delivering{" "}
        <span className="font-medium">
          polished, high-quality products and interfaces
        </span>
        . My GitHub projects serve as a testament to my dedication and skills. I
        also have a{" "}
        <span className="italic">genuine passion for continuous learning</span>,
        and I firmly believe that every problem has a solution, which drives me
        to seek <span className="italic">innovative solutions</span>. This
        ensures that the projects I work on consistently meet the{" "}
        <span className="font-medium">highest quality standards</span>.
      </p>
    </motion.section>
  );
}
