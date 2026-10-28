import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/forms/ContactForm";
import { SplitBall } from "@/components/SplitBall";
import { EMAIL, mailto } from "@/lib/site";
import { TOPICS, type TopicKey } from "@/lib/form-state";

const description =
  "Questions, collabs, catering or careers: get in touch with Hot Balls Cold Balls. Join an opening crew, send us a site, or apply as a Ball Ambassador.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Hot Balls Cold Balls", description, url: "/contact" },
  twitter: { title: "Contact | Hot Balls Cold Balls", description },
};

const r = (i: number) => ({ ["--i" as string]: i });

const WAYS = [
  {
    title: "Join an opening crew.",
    body: "Crew members, shift leads and store managers for our first Utah stores. Flexible shifts around school. Ages 14 and up.",
    cta: "Apply to join a crew",
    href: mailto("Careers"),
  },
  {
    title: "Landlords & brokers.",
    body: "High-visibility retail near high schools and universities on the Wasatch Front. Send us the flyer.",
    cta: "Send us a site",
    href: mailto("Real estate"),
  },
  {
    title: "Be a Ball Ambassador.",
    body: "Local student creators get first tastes, launch-day access and exclusive stickers. Press kit available on request.",
    cta: "Apply as a creator",
    href: "?topic=creators#contact-form",
  },
];

const FAQ = [
  {
    q: "When do you open?",
    a: "Our first Utah stores open in summer 2027. Join the Ball Club and you’ll hear first.",
  },
  {
    q: "Where will you be?",
    a: "Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City to start. Vote for your town on the Locations page.",
  },
  {
    q: "Is the name… family-friendly?",
    a: "Cheeky name, wholesome face. It’s meatballs and mochi, we promise. Kids love it.",
  },
  {
    q: "Do you have vegetarian or allergy-friendly options?",
    a: "Plant-based meatballs, falafel and most cold balls are meat-free. Full allergen info will be posted with the final menu.",
  },
  {
    q: "Do you cater?",
    a: "Yes. Ball boxes for parties, teams, offices and events. Send us a note through the form above and pick “Catering & events.”",
  },
  { q: "Do you franchise?", a: "Not right now. Every store is company-owned." },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const { topic } = await searchParams;
  const preset: TopicKey = typeof topic === "string" && topic in TOPICS ? (topic as TopicKey) : "general";

  return (
    <>
      {/* Hero with the form */}
      <section>
        <div className="frame pt-12 pb-20 md:pt-20">
          <p className="eyebrow">Say hi.</p>
          <h1 className="mt-4 max-w-[20ch] text-[clamp(2.6rem,1rem+4.6vw,5.5rem)] leading-[0.98] md:mt-6">
            Got a question? Have a ball with us.
          </h1>
          <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="max-w-[34ch] text-lead">
                Questions, collabs, catering ideas, or just a strong opinion about hot vs. cold.
              </p>
              <a href={`mailto:${EMAIL}`} className="link mt-6 inline-block font-display text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-semibold break-all">
                {EMAIL}
              </a>
            </div>
            <div id="contact-form" className="scroll-mt-28 rounded-[var(--radius-card)] bg-bg-raised p-6 md:p-10 lg:col-span-7">
              <ContactForm key={preset} defaultTopic={preset} />
            </div>
          </div>
        </div>
      </section>

      {/* Crews, spaces and creators */}
      <section id="work-with-us" className="section bg-bg-raised" aria-labelledby="ways">
        <div className="frame">
          <h2 id="ways" className="text-h2" data-reveal>
            Crews, spaces and creators.
          </h2>
          <ul className="mt-12 flex flex-col gap-4 md:mt-16">
            {WAYS.map((w, i) => (
              <li
                key={w.title}
                className="grid items-center gap-5 rounded-[var(--radius-card)] bg-bg p-6 md:grid-cols-12 md:gap-8 md:p-8"
                data-reveal
                style={r(i)}
              >
                <div className="flex items-center gap-4 md:col-span-4">
                  <SplitBall className={`size-8 shrink-0 ${i === 1 ? "rotate-90" : i === 2 ? "rotate-180" : ""}`} />
                  <h3 className="font-display text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{w.title}</h3>
                </div>
                <p className="text-lg md:col-span-5">{w.body}</p>
                <div className="md:col-span-3 md:text-right">
                  {w.href.startsWith("mailto:") ? (
                    <a href={w.href} className="btn btn-outline">
                      {w.cta}
                    </a>
                  ) : (
                    <Link href={w.href} scroll={false} className="btn btn-outline">
                      {w.cta}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq">
        <div className="frame grid gap-10 lg:grid-cols-12">
          <h2 id="faq" className="text-h2 lg:col-span-4" data-reveal>
            Questions, answered.
          </h2>
          <div className="faq flex flex-col gap-3 lg:col-span-8">
            {FAQ.map((f, i) => (
              <details key={f.q} className="group rounded-[var(--radius-card)] bg-bg-raised" data-reveal style={r(i % 3)}>
                <summary className="flex items-center justify-between gap-6 px-6 py-5 md:px-8 md:py-6">
                  <h3 className="font-display text-[1.375rem] leading-tight font-semibold md:text-[1.6rem]">{f.q}</h3>
                  <span className="faq-icon inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-bg group-hover:bg-hot group-hover:text-bg">
                    <Plus size={20} weight="bold" aria-hidden="true" />
                  </span>
                </summary>
                <p className="max-w-[60ch] px-6 pb-6 text-lg md:px-8 md:pb-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
