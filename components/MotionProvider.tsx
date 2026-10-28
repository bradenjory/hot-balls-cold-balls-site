"use client";

import { LazyMotion } from "motion/react";
import type { ReactNode } from "react";

// Motion's animation features load after first paint, keeping them out of the critical path.
const loadFeatures = () => import("motion/react").then((mod) => mod.domAnimation);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
