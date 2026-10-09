"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import en from "@/locale/en";
import { useTheme } from "@/context/theme-context";

type SkillProps = (typeof en.skills.data)[number] & { index: number };

type TooltipLayout = {
  width: number;
  offset: number;
  placement: "top" | "bottom";
};

const TOOLTIP_WIDTH = 288;
const VIEWPORT_GUTTER = 16;
// Below this distance from the top of the viewport the tooltip would sit under the fixed header
const FLIP_THRESHOLD = 220;

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skill({
  skill,
  icon,
  color,
  description,
  index,
}: SkillProps) {
  const { theme } = useTheme();
  const ref = useRef<HTMLLIElement>(null);
  const tooltipId = useId();
  const [tooltip, setTooltip] = useState<TooltipLayout | null>(null);
  const isOpen = tooltip !== null;

  const iconColor =
    theme === "light" ? color : color === "#000000" ? "#ffffff" : color;

  const open = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const width = Math.min(TOOLTIP_WIDTH, viewportWidth - VIEWPORT_GUTTER * 2);
    const centeredLeft = rect.left + rect.width / 2 - width / 2;
    const clampedLeft = Math.min(
      Math.max(centeredLeft, VIEWPORT_GUTTER),
      viewportWidth - VIEWPORT_GUTTER - width
    );

    setTooltip({
      width,
      offset: clampedLeft - centeredLeft,
      placement: rect.top < FLIP_THRESHOLD ? "bottom" : "top",
    });
  };

  const close = () => setTooltip(null);

  // Touch devices have no hover-out, so close when tapping anywhere else
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const arrowLeft = tooltip ? tooltip.width / 2 - tooltip.offset : 0;
  const enterY = tooltip?.placement === "top" ? 8 : -8;

  return (
    <motion.li
      ref={ref}
      tabIndex={0}
      aria-describedby={isOpen ? tooltipId : undefined}
      className={`relative flex gap-2 items-center border rounded-xl px-5 py-3 cursor-default outline-none transition-colors backdrop-blur-[0.5rem] focus-visible:ring-2 focus-visible:ring-black/20 dark:text-white/80 dark:focus-visible:ring-white/30 ${
        isOpen
          ? "z-20 border-black/20 bg-gray-50 dark:bg-white/20"
          : "border-black/[0.1] bg-white dark:bg-white/10"
      }`}
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      onPointerEnter={(e) => e.pointerType === "mouse" && open()}
      onPointerLeave={(e) => e.pointerType === "mouse" && close()}
      onPointerUp={(e) => {
        if (e.pointerType === "mouse") return;
        if (isOpen) close();
        else open();
      }}
      onFocus={(e) => e.currentTarget.matches(":focus-visible") && open()}
      onBlur={close}
      onKeyDown={(e) => e.key === "Escape" && close()}
    >
      <span style={{ color: iconColor }} className="text-2xl opacity-90">
        {icon}
      </span>
      {skill}

      <AnimatePresence>
        {tooltip && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            className={`pointer-events-none absolute z-20 ${
              tooltip.placement === "top" ? "bottom-full pb-3" : "top-full pt-3"
            }`}
            style={{
              width: tooltip.width,
              left: `calc(50% - ${tooltip.width / 2}px + ${tooltip.offset}px)`,
              transformOrigin: `${arrowLeft}px ${
                tooltip.placement === "top" ? "100%" : "0%"
              }`,
            }}
            initial={{ opacity: 0, scale: 0.85, y: enterY }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 420, damping: 28 },
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: enterY / 2,
              transition: { duration: 0.15 },
            }}
          >
            <div
              className="relative rounded-xl border border-black/10 bg-white px-4 py-3 text-left dark:border-white/10 dark:bg-gray-800"
              style={{ boxShadow: `0 12px 32px -12px ${iconColor}80` }}
            >
              <span
                className={`absolute h-3 w-3 rotate-45 border-black/10 bg-white dark:border-white/10 dark:bg-gray-800 ${
                  tooltip.placement === "top"
                    ? "-bottom-1.5 border-b border-r"
                    : "-top-1.5 border-l border-t"
                }`}
                style={{ left: arrowLeft - 6 }}
              />
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-base"
                  style={{ color: iconColor, backgroundColor: `${iconColor}1f` }}
                >
                  {icon}
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {skill}
                </span>
              </div>
              <motion.p
                className="text-sm leading-relaxed text-gray-600 dark:text-white/70"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.06 } }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
