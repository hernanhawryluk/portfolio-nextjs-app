"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useI18nContext } from "@/context/i18n-context";

export default function Skills() {
  const { language } = useI18nContext();
  const { ref } = useSectionInView(
    language === "en" ? "Skills" : "Tecnologías",
    0.5
  );

  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((item, index) => (
          <motion.li
            className="flex gap-2 items-center bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span style={{ color: item.color }} className="text-2xl opacity-90">
              {item.icon}
            </span>
            {item.skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
