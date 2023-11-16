"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";
import { useI18nContext } from "@/context/i18n-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18nContext();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 2xl:w-[4rem] 2xl:h-[4rem] 2xl:text-2xl"
      title={"buttons.theme"}
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
