"use client";

import React from "react";
import { useI18nContext } from "@/context/i18n-context";

export default function Footer() {
  const { t } = useI18nContext();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Hernan Hawryluk. {t("footer.text")}
      </small>
      <p className="text-xs ">
        <span className="font-semibold">{t("footer.subtitle")}</span>{" "}
        {t("footer.about")}.
      </p>
    </footer>
  );
}
