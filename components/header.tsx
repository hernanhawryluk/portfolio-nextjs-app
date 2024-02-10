"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useI18nContext } from "@/context/i18n-context";
import { SectionName } from "@/lib/types";

type Links = [{ name: string; hash: string }];

export default function Header() {
  const { language, t } = useI18nContext();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [links, setLinks] = useState<Links>(t("links"));

  useEffect(() => {
    setLinks(t("links"));
  }, [language, t]);

  return (
    <header className="z-[999] relative sm:flex sm:justify-center">
      <motion.div
        className={clsx(
          "fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[44rem] sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-70",
          {
            "sm:w-[48.3rem]": language === "es",
          }
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link: { name: string; hash: string }) => (
              <li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-300":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name as SectionName);
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-300/50 rounded-full absolute inset-0 -z-10 dark:bg-gray-600/40"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
