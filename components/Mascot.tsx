"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export const MASCOTS = {
  blaze: {
    src: "/brand/blaze.png",
    width: 1200,
    height: 1267,
    alt: "Blaze, the Team Blaze mascot: an orange ball with a flame on top",
  },
  frost: {
    src: "/brand/frost.png",
    width: 1200,
    height: 1267,
    alt: "Frost, the Team Frost mascot: a teal ball with sunglasses and sparkles",
  },
  symbol: {
    src: "/brand/symbol.png",
    width: 1024,
    height: 1024,
    alt: "The Hot Balls Cold Balls face: half orange, half teal, winking",
  },
} as const;

type Props = {
  who: keyof typeof MASCOTS;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Seconds to offset the idle bob so neighbours do not move in step. */
  delay?: number;
  /** Pass "" when the mascot is decoration next to text that already names it. */
  alt?: string;
};

/** A mascot with a gentle idle bob and a small squash under the pointer. */
export function Mascot({ who, className, sizes, priority, delay = 0, alt }: Props) {
  const reduce = useReducedMotion();
  const m = MASCOTS[who];
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={
        reduce ? undefined : { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay }
      }
      whileHover={reduce ? undefined : { scaleX: 1.07, scaleY: 0.93 }}
      whileTap={reduce ? undefined : { scaleX: 1.1, scaleY: 0.9 }}
    >
      <Image
        src={m.src}
        width={m.width}
        height={m.height}
        alt={alt ?? m.alt}
        sizes={sizes}
        priority={priority}
        draggable={false}
        className="pointer-events-none h-auto w-full select-none"
      />
    </motion.div>
  );
}
