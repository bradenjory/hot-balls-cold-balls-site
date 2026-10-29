"use client";

import { useActionState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import { sendContact, type FormState } from "@/lib/forms";
import { TOPICS } from "@/lib/site";
import { Field, FormMessage, Honeypot, Success, describedBy, inputClass } from "./Field";
import { Submit } from "./Submit";

export function Contact({ defaultTopic = "general" }: { defaultTopic?: string }) {
  const [state, action] = useActionState<FormState, FormData>(sendContact, { status: "idle" });
  const e = state.errors ?? {};
  const v = state.values ?? {};
  if (state.status === "success") return <Success>Thanks! We’ll get back to you soon.</Success>;

  return (
    <form id="contact-form" action={action} noValidate className="relative grid gap-6 rounded-[24px] bg-raised p-6 md:p-10">
      <Honeypot />
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="c-first" label="First name" error={e.firstName}>
          <input id="c-first" name="firstName" autoComplete="given-name" required defaultValue={v.firstName}
            aria-invalid={!!e.firstName} aria-describedby={describedBy("c-first", e.firstName)} className={`${inputClass}`} />
        </Field>
        <Field id="c-last" label="Last name" error={e.lastName}>
          <input id="c-last" name="lastName" autoComplete="family-name" required defaultValue={v.lastName}
            aria-invalid={!!e.lastName} aria-describedby={describedBy("c-last", e.lastName)} className={`${inputClass}`} />
        </Field>
      </div>
      <Field id="c-email" label="Email" error={e.email}>
        <input id="c-email" name="email" type="email" autoComplete="email" required defaultValue={v.email}
          aria-invalid={!!e.email} aria-describedby={describedBy("c-email", e.email)} className={`${inputClass}`} />
      </Field>
      <Field id="c-topic" label="What’s this about?" error={e.topic}>
        <div className="relative">
          <select id="c-topic" name="topic" defaultValue={v.topic ?? (TOPICS[defaultTopic] ? defaultTopic : "general")}
            className={`${inputClass} appearance-none pr-14`}>
            {Object.entries(TOPICS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <CaretDown size={20} weight="bold" aria-hidden="true" className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2" />
        </div>
      </Field>
      <Field id="c-message" label="Message" error={e.message}>
        <textarea id="c-message" name="message" rows={5} required defaultValue={v.message}
          aria-invalid={!!e.message} aria-describedby={describedBy("c-message", e.message)}
          className={inputClass} />
      </Field>
      <FormMessage message={state.message} />
      <div>
        <Submit>Send it</Submit>
      </div>
    </form>
  );
}

/** Contact form with the topic preset from ?topic=. Wrap in <Suspense> with a plain <Contact> fallback. */
export function ContactFromQuery() {
  const topic = useSearchParams().get("topic") ?? undefined;
  return <Contact key={topic} defaultTopic={topic} />;
}
