"use client";

import { useActionState, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { joinBallClub, type FormState } from "@/lib/forms";
import { Mascot } from "../Ball";
import { Field, FormMessage, Honeypot, Success, describedBy, inputClass } from "./Field";
import { Submit } from "./Submit";

type Side = "blaze" | "frost" | "";

const SIDES = [
  { value: "blaze", label: "Team Blaze", note: "hot side", on: "bg-hot text-bg" },
  { value: "frost", label: "Team Frost", note: "cold side", on: "bg-cold text-bg" },
] as const;

/** The Join the Ball Club block: intro on the left, form on the right. The mascot follows the side you pick. */
export function BallClub({ children, defaultSide = "" }: { children: ReactNode; defaultSide?: Side }) {
  const [state, action] = useActionState<FormState, FormData>(joinBallClub, { status: "idle" });
  const [side, setSide] = useState<Side>((state.values?.side as Side) || defaultSide);
  const e = state.errors ?? {};
  const shown = side || "symbol";

  return (
    <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        {children}
        <div className="relative mt-10 hidden aspect-square w-full max-w-[300px] lg:block" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={shown}
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 12 }}
              transition={{ type: "spring", bounce: 0.45, duration: 0.5 }}
              className="absolute inset-0"
            >
              <Mascot name={shown} decorative sizes="300px" />
            </m.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-7">
        {state.status === "success" ? (
          <Success>You’re in. Watch your inbox for first-bite news.</Success>
        ) : (
          <form action={action} noValidate className="relative grid gap-6 rounded-[24px] bg-raised p-6 md:p-10">
            <Honeypot />
            <Field id="bc-email" label="Email" error={e.email}>
              <input
                id="bc-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                defaultValue={state.values?.email}
                aria-invalid={!!e.email}
                aria-describedby={describedBy("bc-email", e.email)}
                className={`${inputClass}`}
              />
            </Field>
            <Field id="bc-zip" label="ZIP code" optional helper="So we can tell you when we open near you." error={e.zip}>
              <input
                id="bc-zip"
                name="zip"
                inputMode="numeric"
                autoComplete="postal-code"
                defaultValue={state.values?.zip}
                aria-invalid={!!e.zip}
                aria-describedby={describedBy("bc-zip", e.zip, true)}
                className={`${inputClass} max-w-[220px]`}
              />
            </Field>
            <fieldset>
              <legend className="mb-2 font-semibold">Your side</legend>
              <div className="flex flex-wrap gap-3">
                {SIDES.map((s) => (
                  <label
                    key={s.value}
                    className={`cursor-pointer rounded-full px-6 py-3.5 font-display text-[1.0625rem] font-semibold leading-none ring-2 ring-inset transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-cold ${
                      side === s.value ? `${s.on} ring-transparent` : "bg-[var(--field,var(--color-bg))] ring-ink/30 hover:ring-ink/70"
                    }`}
                  >
                    <input
                      type="radio"
                      name="side"
                      value={s.value}
                      checked={side === s.value}
                      onChange={() => setSide(s.value)}
                      className="sr-only"
                    />
                    {s.label} <span className="font-sans font-medium">({s.note})</span>
                  </label>
                ))}
              </div>
              {e.side && <p className="mt-2 px-2 text-base font-medium text-hot">{e.side}</p>}
            </fieldset>
            <FormMessage message={state.message} />
            <div>
              <Submit>Count me in</Submit>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/** Ball Club with the side preset from ?side=blaze|frost. Wrap in <Suspense> with a plain <BallClub> fallback. */
export function BallClubFromQuery({ children }: { children: ReactNode }) {
  const q = useSearchParams().get("side");
  const side = q === "blaze" || q === "frost" ? q : "";
  return (
    <BallClub key={side} defaultSide={side}>
      {children}
    </BallClub>
  );
}
