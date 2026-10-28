export type FormState = {
  status: "idle" | "success" | "error";
  /** Shown above the submit button when the whole submission failed. */
  message?: string;
  fieldErrors?: Record<string, string>;
  /** Echo of what was sent, so fields keep their values after a failed attempt. */
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

export const TOPICS = {
  general: "General",
  careers: "Careers",
  "real-estate": "Real estate / a site",
  creators: "Creators & press",
  catering: "Catering & events",
} as const;

export type TopicKey = keyof typeof TOPICS;
