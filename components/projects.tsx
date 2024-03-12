"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";
import en from "@/locale/en";

type ProjectProps = (typeof en.projects.data)[number];

export default function Projects() {
  const { language, t } = useI18nContext();
  const { ref } = useSectionInView(
    language === "en" ? "Projects" : "Proyectos",
    0.3
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projects.title")}</SectionHeading>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {t("projects.data").map((project: ProjectProps, index: number) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
