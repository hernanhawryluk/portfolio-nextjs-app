"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hernanhawryluk@gmail.com">
          hernanhawryluk@gmail.com
        </a>{" "}
        or though this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          required
          maxLength={80}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}