"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import en from "@/locale/en";
import { FaGitAlt } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { useI18nContext } from "@/context/i18n-context";

type ProjectProps = (typeof en.projects.data)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  repositoryUrl,
  demoType,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useI18nContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      onClick={() => setIsFocused(!isFocused)}
      className="group cursor-pointer mb-3"
    >
      <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition sm:group-even:pl-5 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-[0.5rem]">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-9 sm:max-w-[54%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 sm:w-[28.25rem] rounded-t-lg transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
        <motion.div
          animate={{ opacity: isFocused ? 1 : 0 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
          className="hidden absolute left-4 bottom-3 w-[91%] sm:w-[95%] justify-between"
        >
          <a
            href={repositoryUrl}
            target="_blank"
            className="px-2 py-1 bg-white/70 backdrop-blur-[0.5rem] rounded-2xl text-gray-800 dark:bg-red-950/60 dark:text-gray-300 font-medium borderBlack hover:scale-110 focus:scale-105 transition hover:dark:text-gray-200 shadow-md dark:shadow-gray-900"
          >
            <span className="flex items-center text-xl gap-2">
              <FaGitAlt /> REPOSITORY
            </span>
          </a>
          <a
            href={demoUrl}
            target="_blank"
            className="px-2 py-1 bg-white/70 backdrop-blur-[0.5rem] rounded-2xl text-gray-800 dark:bg-emerald-950/60 dark:text-gray-300 font-medium borderBlack hover:scale-110 focus:scale-105 transition hover:dark:text-gray-200 shadow-md dark:shadow-gray-900"
          >
            <span className="flex items-center text-xl gap-2">
              <TbWorldCheck /> {demoType.toUpperCase()}
            </span>
          </a>
        </motion.div>
      </article>
    </motion.div>
  );
}
