"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import en from "@/locale/en";
import { FaGitAlt } from "react-icons/fa";
import { useI18nContext } from "@/context/i18n-context";
import { TbWorldCheck } from "react-icons/tb";

type CertificationProps = (typeof en.certifications.data)[number];

export default function Certification({
  imageUrl,
  validationUrl,
}: CertificationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { t, language } = useI18nContext();

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
      className="group mb-3"
    >
      <article className="flex align-center justify-center bg-gray-100 sm:max-w-[42rem] sm:h-[31rem] sm:p-4 border border-black/5 rounded-lg overflow-hidden last:mb-0 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 backdrop-blur-[0.5rem]">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:block rounded-lg transition"
        />
      </article>
    </motion.div>
  );
}
