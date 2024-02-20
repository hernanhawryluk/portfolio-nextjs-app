"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import { useI18nContext } from "@/context/i18n-context";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ClipboardButton from "./clipboard-button";
import { useTheme } from "@/context/theme-context";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/actions/verifyCaptcha";

export default function Contact() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(
    language === "en" ? "Contact" : "Contacto",
    0.5
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const toastOptions = {
    style: {
      borderRadius: "10px",
      backdropFilter: "blur(4px)",
      background:
        theme === "light"
          ? "rgba(240, 240, 240, 0.8)"
          : "rgba(50, 50, 50, 0.7)",
      color: theme === "light" ? "#000" : "#fff",
    },
  };

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
      <p className="text-gray-700 mt-3 dark:text-white/80">
        {t("contact.message")}
      </p>

      <form
        className="mt-10 flex flex-col items-center dark:text-black"
        action={async (formData) => {
          if (isVerified) {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error.toString(), toastOptions);
              return;
            }

            toast.success(t("contact.toastSent"), toastOptions);
            recaptchaRef.current?.reset();
            setIsverified(false);
          } else {
            toast.error(t("contact.toastCaptcha"), toastOptions);
          }
        }}
      >
        <input
          className="h-14 px-4 w-[100%] rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all backdrop-blur-[0.4rem]"
          type="email"
          name="senderEmail"
          required
          maxLength={80}
          placeholder={t("contact.placeholderEmail")}
        />
        <textarea
          className="h-52 my-3 p-4 w-[100%] rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all backdrop-blur-[0.4rem]"
          placeholder={t("contact.placeholderMessage")}
          name="message"
          required
          maxLength={5000}
        />

        <div className="flex flex-wrap gap-3 justify-center mt-1">
          <div className="flex gap-3 flex-wrap justify-center">
            <SubmitButton />
            <ClipboardButton />
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/hernan-hawryluk/"
              target="_blank"
              aria-label="LinkedIn"
              className="bg-white h-12 w-12 text-gray-700 flex justify-center items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/hernanhawryluk/"
              target="_blank"
              aria-label="GitHub"
              className="bg-white h-12 w-12 text-gray-700 flex items-center justify-center rounded-full outline-none text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 dark:border-white/10 backdrop-blur-[0.3rem]"
            >
              <BsGithub />
            </a>
          </div>

          <ReCAPTCHA
            className="bg-gray-800 opacity-80 mb-2 mt-1 overflow-hidden rounded-[18px] border-2 w-[306px] h-[80px] dark:border-white/10"
            hl={language == "en" ? "en" : "es"}
            theme="dark"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </div>
      </form>
    </motion.section>
  );
}
