"use client";

import { useActionState, useRef } from "react";
import { sendContact } from "@/app/actions";
import { initialFormState, TOPICS, type TopicKey } from "@/lib/form-state";
import { Field, FormMessage, Honeypot, SubmitButton, Success, useFocusFirstError } from "./parts";

export function ContactForm({ defaultTopic = "general" }: { defaultTopic?: TopicKey }) {
  const [state, action] = useActionState(sendContact, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);
  useFocusFirstError(state, formRef);

  if (state.status === "success") {
    return <Success>Thanks! We’ll get back to you soon.</Success>;
  }
  const topicError = state.fieldErrors?.topic;
  return (
    <form ref={formRef} action={action} noValidate className="relative flex flex-col gap-6">
      <Honeypot />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="c-first" name="firstName" label="First name" autoComplete="given-name" required state={state} />
        <Field id="c-last" name="lastName" label="Last name" autoComplete="family-name" required state={state} />
      </div>
      <Field
        id="c-email"
        name="email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        state={state}
      />
      <div>
        <label htmlFor="c-topic" className="field-label">
          What’s this about?
        </label>
        <select
          id="c-topic"
          name="topic"
          className="input"
          defaultValue={state.values?.topic ?? defaultTopic}
          aria-invalid={topicError ? true : undefined}
          aria-describedby={topicError ? "c-topic-error" : undefined}
        >
          {Object.entries(TOPICS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {topicError && (
          <p id="c-topic-error" className="field-error">
            {topicError}
          </p>
        )}
      </div>
      <Field id="c-message" name="message" label="Message" required multiline state={state} />
      <FormMessage state={state} />
      <div>
        <SubmitButton>Send it</SubmitButton>
      </div>
    </form>
  );
}
