"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Skill from "./skill";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";
import en from "@/locale/en";

type SkillProps = (typeof en.skills.data)[number];

export default function Skills() {
  const { language, t } = useI18nContext();
  const { ref } = useSectionInView(
    language === "en" ? "Skills" : "Tecnologías",
    0.5
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[64rem] sm:max-w-[42rem] lg:max-w-[56rem] xl:max-w-[76rem] 2xl:max-w-[98rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("skills.title")}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {t("skills.data").map((item: SkillProps, index: number) => (
          <Skill key={index} {...item} index={index} />
        ))}
      </ul>
    </section>
  );
}
