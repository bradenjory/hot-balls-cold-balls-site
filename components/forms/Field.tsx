import type { ReactNode } from "react";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

export const inputClass =
  "block w-full rounded-full bg-[var(--field,var(--color-bg))] px-6 h-14 text-ink placeholder:text-muted/70 ring-2 ring-inset ring-transparent transition-shadow hover:ring-ink/30 focus:outline-none focus:ring-cold aria-[invalid=true]:ring-hot [&:is(textarea)]:h-auto [&:is(textarea)]:rounded-[24px] [&:is(textarea)]:py-4";

export function Field({
  id,
  label,
  helper,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  helper?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-semibold">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {helper && (
        <p id={`${id}-help`} className="mt-2 px-2 text-base text-muted">
          {helper}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 px-2 text-base font-medium text-hot">
          <WarningCircle size={20} weight="fill" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export const describedBy = (id: string, error?: string, helper?: boolean) =>
  [helper && `${id}-help`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

/** Hidden from people, visible to bots. Filled means spam. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] size-0 overflow-hidden">
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function FormMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="rounded-[24px] bg-raised px-6 py-4 font-medium text-hot">
      {message}
    </p>
  );
}

export function Success({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex items-center gap-4 rounded-[24px] bg-raised p-6 md:p-8">
      <span aria-hidden="true" className="inline-block size-10 shrink-0 rounded-full border-l-[20px] border-r-[20px] border-l-hot border-r-cold" />
      <p className="font-display text-h3 font-bold leading-tight tracking-tight">{children}</p>
    </div>
  );
}
