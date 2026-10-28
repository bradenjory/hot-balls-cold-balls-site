"use client";

import { useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

const WORDS = ["Have a Ball", "Pick a Side", "#GotBalls"];

/** Full-bleed orange strip. Decoration: hidden from screen readers, never a heading. */
export function Marquee() {
  const [paused, setPaused] = useState(false);
  const run = (
    <>
      {[0, 1].map((n) =>
        WORDS.map((w) => (
          <span key={`${n}-${w}`} className="flex items-center">
            <span className="px-[0.35em]">{w}</span>
            <span className="inline-block size-[0.42em] rounded-full bg-ink" />
          </span>
        )),
      )}
    </>
  );
  return (
    <div className="marquee relative overflow-hidden bg-hot py-5 md:py-7" data-paused={paused}>
      <p
        aria-hidden="true"
        className="marquee-track font-display text-[clamp(3.5rem,2rem+7vw,9.5rem)] leading-none font-bold tracking-[-0.03em] whitespace-nowrap text-ink select-none"
      >
        {run}
        {run}
      </p>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play the scrolling banner" : "Pause the scrolling banner"}
        className="absolute right-3 bottom-3 inline-flex size-11 items-center justify-center rounded-full bg-bg text-ink transition-transform active:scale-90 motion-reduce:hidden"
      >
        {paused ? <Play size={18} weight="fill" /> : <Pause size={18} weight="fill" />}
      </button>
    </div>
  );
}
