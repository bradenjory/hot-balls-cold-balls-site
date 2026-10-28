"use client";

import { motion, useReducedMotion } from "motion/react";

/** A store leaderboard drawn as one bar: the seam between the two sides leans back and forth. */
export function TugBar() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="relative h-20 w-full overflow-hidden rounded-full bg-cold md:h-24">
      <motion.div
        className="absolute inset-y-0 left-0 bg-hot"
        initial={{ width: "50%" }}
        animate={reduce ? { width: "50%" } : { width: ["50%", "58%", "46%", "53%", "50%"] }}
        transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute inset-y-0 left-6 flex items-center font-display text-xl font-bold text-bg md:text-2xl">
        Blaze
      </span>
      <span className="absolute inset-y-0 right-6 flex items-center font-display text-xl font-bold text-bg md:text-2xl">
        Frost
      </span>
    </div>
  );
}
