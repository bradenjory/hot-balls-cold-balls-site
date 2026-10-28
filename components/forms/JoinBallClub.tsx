"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { MASCOTS } from "../Mascot";
import { BallClubForm, type Side } from "./BallClubForm";

/** The Ball Club sign-up: heading and copy, a mascot that answers the side you pick, and the form. */
export function JoinBallClub({
  title,
  body,
  defaultSide = "",
  idPrefix,
}: {
  title: string;
  body: string;
  defaultSide?: Side;
  idPrefix: string;
}) {
  const [side, setSide] = useState<Side>(defaultSide);
  const reduce = useReducedMotion();
  const who = side === "blaze" ? "blaze" : side === "frost" ? "frost" : "symbol";
  const m = MASCOTS[who];

  return (
    <div className="grid items-center gap-x-12 gap-y-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <h2 className="text-h2" data-reveal>
          {title}
        </h2>
        <p className="mt-6 max-w-[38ch] text-lead" data-reveal style={{ ["--i" as string]: 1 }}>
          {body}
        </p>
        <div className="relative mt-10 hidden aspect-square w-[min(380px,70%)] lg:block" aria-live="off">
          <div
            className={`absolute inset-0 rounded-full transition-colors duration-500 ${
              side === "blaze" ? "bg-hot-deep" : side === "frost" ? "bg-cold-deep" : "bg-bg"
            }`}
          />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={who}
              className="absolute inset-[12%]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, rotate: side === "frost" ? 20 : -20 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Image src={m.src} alt="" width={m.width} height={m.height} sizes="300px" className="h-auto w-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <BallClubForm idPrefix={idPrefix} side={side} onSideChange={setSide} />
      </div>
    </div>
  );
}
