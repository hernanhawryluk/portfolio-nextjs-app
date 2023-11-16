"use client";

import React from "react";
import { useSectionInView, useToast } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import { useI18nContext } from "@/context/i18n-context";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ClipboardButton from "./clipboard-button";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(
    language === "en" ? "Contact" : "Contacto",
    0.5
  );

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center scroll-mt-28"
    >
      <SectionHeading>{t("contact.title")}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t("contact.messageBefore")}
        <a className="underline" href="mailto:hernanhawryluk@gmail.com">
          hernanhawryluk@gmail.com
        </a>
        {t("contact.messageAfter")}
      </p>

      <form
        className="mt-10 flex flex-col items-center dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            useToast(error.toString(), "error", theme);
            return;
          }

          useToast(t("contact.toastSent"), "success", theme);
        }}
      >
        <input
          className="h-14 px-4 w-[100%] rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          required
          maxLength={80}
          placeholder={t("contact.placeholderEmail")}
        />
        <textarea
          className="h-52 my-3 p-4 w-[100%] rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder={t("contact.placeholderMessage")}
          name="message"
          required
          maxLength={5000}
        />
        <div className="flex gap-3">
          <SubmitButton />

          <ClipboardButton />

          <a
            href="https://www.linkedin.com/in/hernan-hawryluk/"
            target="_blank"
            className="bg-white h-12 w-12 text-gray-700 flex justify-center items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/5"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/hernanhawryluk/"
            target="_blank"
            className="bg-white h-12 w-12 text-gray-700 flex items-center justify-center rounded-full outline-none text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/5"
          >
            <BsGithub />
          </a>
        </div>
      </form>
    </motion.section>
  );
}
