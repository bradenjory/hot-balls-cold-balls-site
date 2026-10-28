"use server";

import { deliver, failure, field, isBot, isEmail } from "@/lib/forms";
import { TOPICS, type FormState } from "@/lib/form-state";

export async function joinBallClub(_prev: FormState, fd: FormData): Promise<FormState> {
  const values = { email: field(fd, "email"), zip: field(fd, "zip"), side: field(fd, "side") };
  if (isBot(fd)) return { status: "success" };

  const fieldErrors: Record<string, string> = {};
  if (!values.email) fieldErrors.email = "Enter your email so we can reach you.";
  else if (!isEmail(values.email)) fieldErrors.email = "That email doesn’t look right. Check for typos.";
  if (values.zip && !/^\d{5}(-\d{4})?$/.test(values.zip))
    fieldErrors.zip = "Use a 5-digit ZIP code, like 84043.";
  if (values.side && values.side !== "blaze" && values.side !== "frost")
    fieldErrors.side = "Pick Team Blaze or Team Frost.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const res = await deliver("ballclub", {
    email: values.email,
    zip: values.zip,
    side: values.side === "blaze" ? "Team Blaze" : values.side === "frost" ? "Team Frost" : "",
  });
  return res.ok ? { status: "success" } : failure("ballclub", res.reason, values);
}

export async function castTownVote(_prev: FormState, fd: FormData): Promise<FormState> {
  const values = { email: field(fd, "email"), town: field(fd, "town") };
  if (isBot(fd)) return { status: "success" };

  const fieldErrors: Record<string, string> = {};
  if (!values.email) fieldErrors.email = "Enter your email so we can tell you what happens.";
  else if (!isEmail(values.email)) fieldErrors.email = "That email doesn’t look right. Check for typos.";
  if (!values.town) fieldErrors.town = "Tell us which town or neighborhood you’re voting for.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const res = await deliver("townvote", values);
  return res.ok ? { status: "success" } : failure("townvote", res.reason, values);
}

export async function sendContact(_prev: FormState, fd: FormData): Promise<FormState> {
  const values = {
    firstName: field(fd, "firstName"),
    lastName: field(fd, "lastName"),
    email: field(fd, "email"),
    topic: field(fd, "topic"),
    message: field(fd, "message"),
  };
  if (isBot(fd)) return { status: "success" };

  const fieldErrors: Record<string, string> = {};
  if (!values.firstName) fieldErrors.firstName = "Enter your first name.";
  if (!values.lastName) fieldErrors.lastName = "Enter your last name.";
  if (!values.email) fieldErrors.email = "Enter your email so we can write back.";
  else if (!isEmail(values.email)) fieldErrors.email = "That email doesn’t look right. Check for typos.";
  if (!(values.topic in TOPICS)) fieldErrors.topic = "Pick what this is about.";
  if (!values.message) fieldErrors.message = "Write us a message.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const res = await deliver("contact", {
    ...values,
    topic: TOPICS[values.topic as keyof typeof TOPICS],
  });
  return res.ok ? { status: "success" } : failure("contact", res.reason, values);
}
