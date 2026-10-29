"use server";

import { EMAIL, TOPICS } from "./site";

export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  message?: string;
  values?: Record<string, string>;
};

type Rule = { required?: string; email?: boolean; zip?: boolean; oneOf?: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ENV = {
  ballClub: "FORMSPREE_BALL_CLUB_ID",
  townVote: "FORMSPREE_TOWN_VOTE_ID",
  contact: "FORMSPREE_CONTACT_ID",
} as const;

// ponytail: Formspree is the only provider. To swap (Resend, Supabase), change deliver() and nothing else.
async function deliver(form: keyof typeof ENV, fields: Record<string, string>) {
  const id = process.env[ENV[form]];
  if (!id) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[forms] ${form} (no ${ENV[form]} set, logged only)`, fields);
      return;
    }
    throw new Error(`${ENV[form]} is not set`);
  }
  const res = await fetch(`https://formspree.io/f/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...fields, _subject: `Website: ${form}` }),
  });
  if (!res.ok) throw new Error(`Formspree ${res.status}: ${await res.text()}`);
}

async function handle(form: keyof typeof ENV, rules: Record<string, Rule>, data: FormData): Promise<FormState> {
  const values: Record<string, string> = {};
  for (const key of Object.keys(rules)) values[key] = String(data.get(key) ?? "").trim();

  // Honeypot: real people never see this field. Pretend it worked so bots move on.
  if (String(data.get("company") ?? "")) return { status: "success" };

  const errors: Record<string, string> = {};
  for (const [key, rule] of Object.entries(rules)) {
    const v = values[key];
    if (!v) {
      if (rule.required) errors[key] = rule.required;
      continue;
    }
    if (rule.email && !EMAIL_RE.test(v)) errors[key] = "That email doesn’t look right. Check for typos.";
    if (rule.zip && !/^\d{5}(-\d{4})?$/.test(v)) errors[key] = "Use a 5-digit ZIP code, like 84043.";
    if (rule.oneOf && !rule.oneOf.includes(v)) errors[key] = "Pick one of the options.";
  }
  if (Object.keys(errors).length) return { status: "error", errors, values };

  try {
    await deliver(form, values);
    return { status: "success" };
  } catch (err) {
    console.error(`[forms] ${form} failed`, err, values);
    return {
      status: "error",
      values,
      message: `Something went wrong on our end and your message wasn’t sent. Try again, or email us at ${EMAIL}.`,
    };
  }
}

const email = { required: "Add your email so we can reach you.", email: true };

export async function joinBallClub(_: FormState, data: FormData) {
  return handle("ballClub", { email, zip: { zip: true }, side: { oneOf: ["blaze", "frost"] } }, data);
}

export async function castTownVote(_: FormState, data: FormData) {
  return handle("townVote", { email, city: { required: "Tell us which city or neighborhood." } }, data);
}


export async function sendContact(_: FormState, data: FormData) {
  return handle(
    "contact",
    {
      firstName: { required: "Add your first name." },
      lastName: { required: "Add your last name." },
      email,
      topic: { oneOf: Object.keys(TOPICS) },
      message: { required: "Write us a message." },
    },
    data,
  );
}
