"use client";

import { useActionState, useRef } from "react";
import { castTownVote } from "@/app/actions";
import { initialFormState } from "@/lib/form-state";
import { Field, FormMessage, Honeypot, SubmitButton, Success, submitWithoutReset, useFocusFirstError } from "./parts";

export function TownVoteForm() {
  const [state, action, pending] = useActionState(castTownVote, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);
  useFocusFirstError(state, formRef);

  if (state.status === "success") {
    return <Success>Vote counted. We’ll let you know if we’re headed your way.</Success>;
  }
  return (
    <form ref={formRef} action={action} onSubmit={submitWithoutReset(action)} noValidate className="relative flex flex-col gap-6">
      <Honeypot />
      <Field
        id="vote-email"
        name="email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        state={state}
      />
      <Field
        id="vote-town"
        name="town"
        label="City or neighborhood"
        placeholder="Orem, Sugar House, St. George"
        autoComplete="address-level2"
        required
        state={state}
      />
      <FormMessage state={state} />
      <div>
        <SubmitButton pending={pending}>Cast my vote</SubmitButton>
      </div>
    </form>
  );
}
