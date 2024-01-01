"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";
import { useTheme } from "@/context/theme-context";
import en from "@/locale/en";

type skillsProps = (typeof en.about.data)[number];

export default function About() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(language === "en" ? "About" : "Perfil", 0.5);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 1 }}
      className="my-24 sm:mt-0 sm:mb-40 max-w-[55rem] text-center scroll-mt-28 sm:text-lg"
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-10 leading-[38px]">{t("about.first")}</p>

      <div className="flex items-center justify-center gap-7 mb-10">
        {t("about.data").map((item: skillsProps, index: number) => (
          <li className="flex gap-2 items-center" key={index}>
            <span
              style={{
                color:
                  theme === "light"
                    ? item.color
                    : item.color === "#000000"
                    ? "#ffffff"
                    : item.color,
              }}
              className="text-[40px]"
            >
              {item.icon}
            </span>
          </li>
        ))}
      </div>

      <p className="leading-[38px]">{t("about.second")}</p>
    </motion.section>
  );
}
