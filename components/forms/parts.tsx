"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import type { FormState } from "@/lib/form-state";

export function Honeypot() {
  return (
    <div className="hp" aria-hidden="true">
      <label>
        Leave this empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  state: FormState;
  type?: string;
  required?: boolean;
  help?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "numeric";
  defaultValue?: string;
  multiline?: boolean;
  className?: string;
};

/** Label above, the input, then help text and the inline error, all tied together for screen readers. */
export function Field({
  id,
  name,
  label,
  state,
  type = "text",
  required,
  help,
  placeholder,
  autoComplete,
  inputMode,
  defaultValue,
  multiline,
  className = "",
}: FieldProps) {
  const error = state.fieldErrors?.[name];
  const describedBy = [help ? `${id}-help` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ");
  const common = {
    id,
    name,
    required,
    placeholder,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
    defaultValue: state.values?.[name] ?? defaultValue,
    className: "input",
  } as const;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {!required && <span className="font-normal text-ink-soft"> (optional)</span>}
      </label>
      {multiline ? <textarea {...common} rows={5} /> : <input {...common} type={type} inputMode={inputMode} />}
      {help && (
        <p id={`${id}-help`} className="field-help">
          {help}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({ children, className = "btn-hot" }: { children: ReactNode; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={`btn ${className}`} disabled={pending} aria-disabled={pending}>
      {pending ? "Sending…" : children}
    </button>
  );
}

export function FormMessage({ state }: { state: FormState }) {
  if (state.status !== "error") return null;
  const msg =
    state.message ??
    (state.fieldErrors ? "A couple of things need fixing. Check the fields marked below." : null);
  if (!msg) return null;
  return (
    <p role="alert" className="rounded-[var(--radius-card)] bg-hot-deep px-5 py-4 font-medium">
      {msg}
    </p>
  );
}

/** Replaces the form once it has been accepted, and takes focus so the change is announced. */
export function Success({ children, visual }: { children: ReactNode; visual?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="flex items-center gap-5 rounded-[var(--radius-card)] bg-bg-raised p-6 outline-none md:p-8"
    >
      {visual}
      <p className="font-display text-[1.6rem] leading-tight font-bold tracking-[-0.02em] md:text-[2rem]">
        {children}
      </p>
    </div>
  );
}

/** Focus the first invalid field after a failed submit. */
export function useFocusFirstError(state: FormState, formRef: React.RefObject<HTMLFormElement | null>) {
  useEffect(() => {
    if (state.status === "error" && state.fieldErrors) {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    }
  }, [state, formRef]);
}
