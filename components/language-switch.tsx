"use client";

import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { useI18nContext } from "@/context/i18n-context";

export default function LanguageSwitch() {
  const { language, changeLanguage } = useI18nContext();

  return (
    <button
      className="fixed right-20 bottom-5 sm:left-5 text-xl bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 "
      onClick={() => {
        changeLanguage(language === "en" ? "es" : "en");
      }}
    >
      <MdOutlineLanguage />
    </button>
  );
}
