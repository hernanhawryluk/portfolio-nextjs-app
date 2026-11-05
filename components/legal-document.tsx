"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18nContext } from "@/context/i18n-context";
import type {
  LegalBlock as LegalBlockProps,
  LegalDocument as LegalDocumentProps,
} from "@/lib/types";

// Captures **bold**, URLs (without trailing punctuation) and email addresses.
const inlinePattern =
  /(\*\*.+?\*\*|https?:\/\/\S*[^\s.,;:!?)»]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/;

export default function LegalDocument({
  appName,
  lastUpdated,
  content,
}: LegalDocumentProps) {
  const { language, t } = useI18nContext();
  const { title, intro, sections } = content[language as keyof typeof content];
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
          <h1 className="mt-2 text-3xl font-medium xl:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-white/50">
            {t("legal.lastUpdated")}:{" "}
            <time dateTime={lastUpdated}>{formattedDate}</time>
          </p>
        </header>

        <div className="mt-6 space-y-3 leading-relaxed text-gray-700 dark:text-white/70">
          {intro.map((paragraph, index) => (
            <p key={index}>
              <InlineText text={paragraph} />
            </p>
          ))}
        </div>

        {sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-xl font-semibold xl:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-gray-700 dark:text-white/70">
              {section.body.map((block, index) => (
                <LegalBlock key={index} block={block} />
              ))}
            </div>
          </section>
        ))}
      </motion.article>
    </main>
  );
}

function LegalBlock({
  block,
  nested = false,
}: {
  block: LegalBlockProps;
  nested?: boolean;
}) {
  if (typeof block === "string") {
    return (
      <p>
        <InlineText text={block} />
      </p>
    );
  }

  return (
    <ul
      className={`${
        nested ? "list-[circle]" : "list-disc"
      } pl-5 space-y-2 marker:text-gray-400 dark:marker:text-white/40`}
    >
      {block.list.map((item, index) =>
        typeof item === "string" ? (
          <li key={index}>
            <InlineText text={item} />
          </li>
        ) : (
          <li key={index} className="space-y-2">
            {item.map((child, childIndex) => (
              <LegalBlock key={childIndex} block={child} nested />
            ))}
          </li>
        )
      )}
    </ul>
  );
}

function InlineText({ text }: { text: string }) {
  // split() with a capture group puts the matches at the odd indexes.
  return (
    <>
      {text.split(inlinePattern).map((part, index) => {
        if (index % 2 === 0) return part;

        if (part.startsWith("**")) {
          return (
            <strong
              key={index}
              className="font-semibold text-gray-950 dark:text-white/90"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }

        const isUrl = part.startsWith("http");

        return (
          <a
            key={index}
            href={isUrl ? part : `mailto:${part}`}
            className="font-medium text-gray-950 underline underline-offset-4 decoration-black/20 break-words hover:decoration-black transition dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
          >
            {isUrl ? <WrappableUrl url={part} /> : part}
          </a>
        );
      })}
    </>
  );
}

// Lets a long URL wrap after the slashes of its path, so it doesn't leave
// the punctuation that follows it alone on the next line.
function WrappableUrl({ url }: { url: string }) {
  const schemeEnd = url.indexOf("//") + 2;
  const [host, ...path] = url.slice(schemeEnd).split("/");

  return (
    <>
      {url.slice(0, schemeEnd)}
      {host}
      {path.map((segment, index) => (
        <React.Fragment key={index}>
          /<wbr />
          {segment}
        </React.Fragment>
      ))}
    </>
  );
}
