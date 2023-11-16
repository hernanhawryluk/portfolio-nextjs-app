"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";

export default function About() {
  const { language, t } = useI18nContext();
  const { ref } = useSectionInView(language === "en" ? "About" : "Perfil", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 1 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-3">{t("about.first")}</p>
      <p>{t("about.second")}</p>
    </motion.section>
  );
}
