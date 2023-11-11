"use client";

import React, { useState, useEffect } from "react";
import { MdOutlineLanguage } from "react-icons/md";

type Language = "en" | "es";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("es");
      window.localStorage.setItem("language", "es");
    } else {
      setLanguage("en");
      window.localStorage.setItem("language", "en");
    }
  };

  useEffect(() => {
    const localLanguage =
      (window.localStorage.getItem("language") as Language) || null;

    if (localLanguage) {
      setLanguage(localLanguage);
      if (localLanguage === "es") {
        // change language to spanish
      }
    } else if (navigator.languages[0].startsWith("es")) {
      setLanguage("es");
      // change language to spanish
    }
  }, []);

  return (
    <button
      className="fixed right-20 bottom-5 sm:left-5 text-xl bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 "
      onClick={() => {
        toggleLanguage();
      }}
    >
      <MdOutlineLanguage />
    </button>
  );
}
