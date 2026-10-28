"use client";

import { useState } from "react";
import { CITIES } from "@/lib/site";
import { SplitBall } from "./SplitBall";
import { UtahMap } from "./UtahMap";

/** The six spots as a list beside the map; pointing at a spot lights its pin. */
export function LocationsExplorer() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <ul className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
        {CITIES.map((c, i) => (
          <li
            key={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            className={`group flex flex-col rounded-[var(--radius-card)] p-6 transition-colors duration-300 md:p-7 ${
              active === c.name ? "bg-hot-deep" : "bg-bg-raised"
            }`}
            data-reveal
            style={{ ["--i" as string]: i % 2 }}
          >
            <div className="flex items-center gap-3">
              <SplitBall
                className={`size-5 shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                  active === c.name ? "scale-125 rotate-180" : ""
                }`}
              />
              <h3 className="font-display text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{c.name}</h3>
            </div>
            <p className="mt-2 text-lg">{c.note}</p>
            <p className="mt-4 text-base text-ink-soft">Location coming soon. Opening TBD.</p>
          </li>
        ))}
      </ul>
      <div className="lg:col-span-5">
        <UtahMap active={active} className="mx-auto w-full max-w-[460px] lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]" />
      </div>
    </div>
  );
}
