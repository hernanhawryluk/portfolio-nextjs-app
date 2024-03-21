"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type SectionDividerProps = {
  inView: boolean;
};

export default function SectionDivider({ inView }: SectionDividerProps) {
  return (
    <div
      className={`${
        inView ? "opacity-100" : "opacity-0"
      } transition duration-1000 `}
    >
      <motion.div
        className="hidden sm:block absolute bottom-[50px] 2xl:bottom-14"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.125 }}
      >
        <Link
          className="border-gray-600 dark:border-gray-200 sm:flex flex-col items-center justify-end h-[2.8rem] w-[1.8rem] 2xl:h-[3.3rem] 2xl:w-[2rem] border-2 rounded-full"
          href="#about"
        >
          <div className="bg-gray-600 dark:bg-gray-200 h-2 w-2 mb-2 animate-bounce rounded-full"></div>
        </Link>
      </motion.div>
    </div>
  );
}
