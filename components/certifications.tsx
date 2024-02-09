"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";
import en from "@/locale/en";
import Certification from "./certification";

type CertificationProps = (typeof en.certifications.data)[number];

export default function Certifications() {
  const { language, t } = useI18nContext();
  const { ref } = useSectionInView(
    language === "en" ? "Certifications" : "Certificaciones",
    0.5
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("certifications.title")}</SectionHeading>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {t("certifications.data").map(
          (certification: CertificationProps, index: number) => (
            <React.Fragment key={index}>
              <Certification {...certification} />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  );
}
