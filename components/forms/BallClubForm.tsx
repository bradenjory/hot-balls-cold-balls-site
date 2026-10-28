"use client";

import Image from "next/image";
import { useActionState, useRef } from "react";
import { joinBallClub } from "@/app/actions";
import { initialFormState } from "@/lib/form-state";
import { Field, FormMessage, Honeypot, SubmitButton, Success, submitWithoutReset, useFocusFirstError } from "./parts";

export type Side = "blaze" | "frost" | "";

const SIDES = [
  { value: "blaze", label: "Team Blaze", sub: "hot side", img: "/brand/blaze.png" },
  { value: "frost", label: "Team Frost", sub: "cold side", img: "/brand/frost.png" },
] as const;

export function BallClubForm({
  idPrefix,
  side,
  onSideChange,
}: {
  idPrefix: string;
  side: Side;
  onSideChange: (s: Side) => void;
}) {
  const [state, action, pending] = useActionState(joinBallClub, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);
  useFocusFirstError(state, formRef);

  if (state.status === "success") {
    return (
      <Success
        visual={
          <Image
            src={side === "blaze" ? "/brand/blaze.png" : side === "frost" ? "/brand/frost.png" : "/brand/symbol.png"}
            alt=""
            width={96}
            height={96}
            className="size-20 shrink-0 object-contain md:size-24"
          />
        }
      >
        You’re in. Watch your inbox for first-bite news.
      </Success>
    );
  }

  const sideError = state.fieldErrors?.side;
  return (
    <form ref={formRef} action={action} onSubmit={submitWithoutReset(action)} noValidate className="relative flex flex-col gap-6">
      <Honeypot />
      <Field
        id={`${idPrefix}-email`}
        name="email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        state={state}
      />
      <Field
        id={`${idPrefix}-zip`}
        name="zip"
        label="ZIP code"
        inputMode="numeric"
        autoComplete="postal-code"
        help="So we can tell you when we open near you."
        state={state}
        className="max-w-xs"
      />
      <fieldset aria-describedby={sideError ? `${idPrefix}-side-error` : undefined}>
        <legend className="field-label">
          Your side <span className="font-normal text-ink-soft">(optional)</span>
        </legend>
        {/* The side picker is the brand ball split in two: each half is one team. */}
        <div className="grid grid-cols-2 gap-1.5">
          {SIDES.map((s) => {
            const checked = side === s.value;
            const hot = s.value === "blaze";
            return (
              <label
                key={s.value}
                className={[
                  "group relative flex cursor-pointer items-center gap-2.5 py-2.5 transition-colors duration-300 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ink sm:gap-3",
                  hot ? "rounded-l-full pr-3 pl-2.5" : "flex-row-reverse rounded-r-full pr-2.5 pl-3 text-right",
                  checked
                    ? hot
                      ? "bg-hot text-bg"
                      : "bg-cold text-bg"
                    : hot
                      ? "bg-hot-deep hover:bg-[#4a2516]"
                      : "bg-cold-deep hover:bg-[#0f413d]",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="side"
                  value={s.value}
                  checked={checked}
                  onChange={() => onSideChange(s.value)}
                  className="sr-only"
                />
                <Image
                  src={s.img}
                  alt=""
                  width={52}
                  height={55}
                  className={`size-11 shrink-0 object-contain transition-transform duration-500 ease-[var(--ease-out-expo)] sm:size-[52px] ${checked ? "scale-110 -rotate-6" : "group-hover:scale-105"}`}
                />
                <span className="leading-tight">
                  <span className="block font-display text-[1.125rem] font-bold sm:text-[1.25rem]">{s.label}</span>
                  <span className="block text-base">({s.sub})</span>
                </span>
              </label>
            );
          })}
        </div>
        {sideError && (
          <p id={`${idPrefix}-side-error`} className="field-error">
            {sideError}
          </p>
        )}
      </fieldset>
      <FormMessage state={state} />
      <div>
        <SubmitButton pending={pending}>Count me in</SubmitButton>
      </div>
    </form>
  );
}
