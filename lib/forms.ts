import "server-only";
import type { FormState } from "./form-state";

export type FormKey = "ballclub" | "townvote" | "contact";

const SUBJECTS: Record<FormKey, string> = {
  ballclub: "New Ball Club signup",
  townvote: "New town vote",
  contact: "New contact message",
};

const ENV_IDS: Record<FormKey, string> = {
  ballclub: "FORMSPREE_BALLCLUB_ID",
  townvote: "FORMSPREE_TOWNVOTE_ID",
  contact: "FORMSPREE_CONTACT_ID",
};

type Delivery = { ok: true } | { ok: false; reason: string };

/**
 * Sends one submission to the configured provider. Set FORM_PROVIDER to "formspree" (default)
 * or "webhook". Never reports success unless the provider accepted the submission.
 */
export async function deliver(form: FormKey, data: Record<string, string>): Promise<Delivery> {
  const provider = (process.env.FORM_PROVIDER || "formspree").toLowerCase();
  try {
    if (provider === "webhook") {
      const url = process.env.FORM_WEBHOOK_URL;
      if (!url) return { ok: false, reason: "FORM_WEBHOOK_URL is not set" };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, data, submittedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? { ok: true } : { ok: false, reason: `webhook responded ${res.status}` };
    }

    const id = process.env[ENV_IDS[form]];
    if (!id) return { ok: false, reason: `${ENV_IDS[form]} is not set` };
    const res = await fetch(`https://formspree.io/f/${encodeURIComponent(id)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _subject: SUBJECTS[form] }),
      signal: AbortSignal.timeout(10_000),
    });
    return res.ok ? { ok: true } : { ok: false, reason: `formspree responded ${res.status}` };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : "network error" };
  }
}

export const field = (fd: FormData, name: string) => {
  const v = fd.get(name);
  return typeof v === "string" ? v.trim() : "";
};

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/** True when the hidden honeypot field was filled in, which people never do. */
export const isBot = (fd: FormData) => field(fd, "website") !== "";

export const failure = (form: FormKey, reason: string, values: Record<string, string>): FormState => {
  console.error(`[forms] ${form} submission was not delivered: ${reason}`);
  return {
    status: "error",
    message:
      "That didn’t go through on our end. Please try again, or email us at hello@hotballscoldballs.com.",
    values,
  };
};
