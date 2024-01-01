"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useI18nContext } from "@/context/i18n-context";
import en from "@/locale/en";
import { useTheme } from "@/context/theme-context";

type skillsProps = (typeof en.skills.data)[number];

export default function Skills() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
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
        delay: 0.08 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[64rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("skills.title")}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {t("skills.data").map((item: skillsProps, index: number) => (
          <motion.li
            className="flex gap-2 items-center bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 backdrop-blur-[0.5rem]"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span
              style={{
                color:
                  theme === "light"
                    ? item.color
                    : item.color === "#000000"
                    ? "#ffffff"
                    : item.color,
              }}
              className="text-2xl opacity-90"
            >
              {item.icon}
            </span>
            {item.skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
