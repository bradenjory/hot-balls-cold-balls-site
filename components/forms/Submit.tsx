"use client";

import { useFormStatus } from "react-dom";
import { buttonClass } from "../Button";

export function Submit({ children }: { children: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={`${buttonClass("hot")} disabled:opacity-70`}>
      {pending ? "Sending…" : children}
    </button>
  );
}
