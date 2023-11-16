import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { useI18nContext } from "@/context/i18n-context";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useI18nContext();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none borderBlack transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 dark:text-white/70 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t("contact.buttonSubmit")}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
