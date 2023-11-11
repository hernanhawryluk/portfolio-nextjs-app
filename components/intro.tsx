"use client";

import Image from "next/image";
import React from "react";
import portrait from "@/public/portrait.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src={portrait}
              alt="Hernan Hawryluk portrait"
              width={192}
              height={192}
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-x1"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Hernan.</span> I'm a{" "}
        <span className="font-bold">Front-End Developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & mobile apps</span>. <br />
        My focus is <span className="underline">React</span> and{" "}
        <span className="underline">React Native</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 transition active:scale-105 cursor-pointer borderBlack"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/hernan-hawryluk/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://www.linkedin.com/in/hernan-hawryluk/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
