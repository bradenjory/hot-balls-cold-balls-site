"use client";

import { useActionState } from "react";
import { castTownVote, type FormState } from "@/lib/forms";
import { Field, FormMessage, Honeypot, Success, describedBy, inputClass } from "./Field";
import { Submit } from "./Submit";

export function TownVote() {
  const [state, action] = useActionState<FormState, FormData>(castTownVote, { status: "idle" });
  const e = state.errors ?? {};
  if (state.status === "success") return <Success>Vote counted. We’ll let you know if we’re headed your way.</Success>;

  return (
    <form action={action} noValidate className="relative grid gap-5 rounded-[24px] bg-raised p-6 md:p-8">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <Field id="tv-email" label="Email" error={e.email}>
          <input id="tv-email" name="email" type="email" autoComplete="email" required defaultValue={state.values?.email}
            aria-invalid={!!e.email} aria-describedby={describedBy("tv-email", e.email)} className={`${inputClass}`} />
        </Field>
        <Field id="tv-city" label="City or neighborhood" error={e.city}>
          <input id="tv-city" name="city" required placeholder="Orem, Sugar House, St. George" defaultValue={state.values?.city}
            aria-invalid={!!e.city} aria-describedby={describedBy("tv-city", e.city)} className={`${inputClass}`} />
        </Field>
      </div>
      <FormMessage message={state.message} />
      <div>
        <Submit>Cast my vote</Submit>
      </div>
    </form>
  );
}
