"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MASCOTS } from "./Mascot";

/** The half-and-half face rolls in from the right once, then rests. */
export function RollingBall({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const m = MASCOTS.symbol;
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { x: "60%", rotate: 300 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image src={m.src} alt={m.alt} width={m.width} height={m.height} priority sizes="(min-width: 1024px) 30vw, 50vw" className="h-auto w-full" />
    </motion.div>
  );
}
