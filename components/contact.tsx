"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

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
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hernanhawryluk@gmail.com">
          hernanhawryluk@gmail.com
        </a>{" "}
        or though this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => await sendEmail(formData)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-black"
          type="email"
          name="senderEmail"
          required
          maxLength={80}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack outline-black"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
