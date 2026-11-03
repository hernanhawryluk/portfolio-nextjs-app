"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18nContext } from "@/context/i18n-context";
import type { AppPrivacyPolicy, PrivacyPolicyBlock } from "@/lib/types";

export default function PrivacyPolicy({
  appName,
  lastUpdated,
  contactEmail,
  content,
}: AppPrivacyPolicy) {
  const { language, t } = useI18nContext();
  const { intro, sections } = content[language as keyof typeof content];
  const formattedDate = new Intl.DateTimeFormat(language, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(lastUpdated));

  return (
    <main className="flex flex-col items-center px-4 pt-8 pb-16 sm:pt-16">
      <motion.article
        lang={language}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[56rem] xl:max-w-[64rem] 2xl:max-w-[72rem] bg-white border border-black/5 rounded-xl shadow-lg shadow-black/[0.03] px-6 py-8 sm:px-12 sm:py-12 xl:px-16 xl:py-14 xl:text-lg backdrop-blur-[0.5rem] dark:bg-white/10 dark:text-white"
      >
        <header className="pb-6 border-b border-black/5 dark:border-white/10">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
            {appName}
          </p>
          <h1 className="mt-2 text-3xl font-medium xl:text-4xl">
            {t("privacy.title")}
          </h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-white/50">
            {t("privacy.lastUpdated")}:{" "}
            <time dateTime={lastUpdated}>{formattedDate}</time>
          </p>
        </header>

        <div className="mt-6 space-y-3 leading-relaxed text-gray-700 dark:text-white/70">
          {intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-xl font-semibold xl:text-2xl">{section.heading}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-gray-700 dark:text-white/70">
              {section.body.map((block, index) => (
                <PolicyBlock key={index} block={block} />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-8">
          <h2 className="text-xl font-semibold xl:text-2xl">{t("privacy.contact")}</h2>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 inline-block font-medium underline underline-offset-4 decoration-black/20 hover:decoration-black transition dark:decoration-white/30 dark:hover:decoration-white"
          >
            {contactEmail}
          </a>
        </section>
      </motion.article>
    </main>
  );
}

function PolicyBlock({ block }: { block: PrivacyPolicyBlock }) {
  if (typeof block === "string") {
    return <p>{block}</p>;
  }

  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-gray-400 dark:marker:text-white/40">
      {block.list.map((item, index) => (
        <li key={index}>
          {typeof item === "string" ? (
            item
          ) : (
            <>
              <strong className="font-semibold text-gray-950 dark:text-white/90">
                {item.label}:
              </strong>{" "}
              {item.text}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
