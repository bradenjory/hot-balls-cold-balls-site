import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Mascot } from "@/components/Ball";
import { Suspense } from "react";
import { Contact, ContactFromQuery } from "@/components/forms/Contact";
import { EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Contact",
  "Questions, collabs, catering ideas, careers or a site to pitch? Say hi to Hot Balls Cold Balls. Answers to common questions too.",
  "/contact",
);

const WORK = [
  {
    title: "Join an opening crew.",
    body: "Crew members, shift leads and store managers for our first Utah stores. Flexible shifts around school. Ages 14 and up.",
    cta: "Apply to join a crew",
    href: `mailto:${EMAIL}?subject=Careers`,
    mascot: "blaze" as const,
    field: "bg-hot",
  },
  {
    title: "Landlords & brokers.",
    body: "High-visibility retail near high schools and universities on the Wasatch Front. Send us the flyer.",
    cta: "Send us a site",
    href: `mailto:${EMAIL}?subject=Real%20estate`,
    mascot: "symbol" as const,
    field: "bg-raised-2",
  },
  {
    title: "Be a Ball Ambassador.",
    body: "Local student creators get first tastes, launch-day access and exclusive stickers. Press kit available on request.",
    cta: "Apply as a creator",
    href: "/contact?topic=creators#contact-form",
    mascot: "frost" as const,
    field: "bg-cold",
  },
];

const FAQ = [
  ["When do you open?", "Our first Utah stores open in summer 2027. Join the Ball Club and you’ll hear first."],
  ["Where will you be?", "Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City to start. Vote for your town on the Locations page."],
  ["Is the name… family-friendly?", "Cheeky name, wholesome face. It’s meatballs and mochi, we promise. Kids love it."],
  ["Do you have vegetarian or allergy-friendly options?", "Plant-based meatballs, falafel and most cold balls are meat-free. Full allergen info will be posted with the final menu."],
  ["Do you cater?", "Yes. Ball boxes for parties, teams, offices and events. Send us a note through the form above and pick “Catering & events.”"],
  ["Do you franchise?", "Not right now. Every store is company-owned."],
];

export default function ContactPage() {
  return (
    <>
      <section className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">Say hi</p>
          <h1 className="mt-6 text-[clamp(2.5rem,4.2vw,3.5rem)]">Got a question? Have a ball with us.</h1>
          <p className="mt-8 max-w-[40ch] text-lead">
            Questions, collabs, catering ideas, or just a strong opinion about hot vs. cold.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-block text-lead font-semibold underline decoration-hot decoration-2 underline-offset-4 hover:text-hot"
          >
            {EMAIL}
          </a>
          <div className="mt-12 hidden max-w-[380px] grid-cols-[1fr_1.3fr_1fr] items-end gap-4 lg:grid">
            <Mascot name="blaze" decorative sizes="130px" />
            <Mascot name="symbol" decorative bob="bob-late" sizes="160px" />
            <Mascot name="frost" decorative sizes="130px" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <Suspense fallback={<Contact />}>
            <ContactFromQuery />
          </Suspense>
        </div>
      </section>

      <section id="work-with-us" className="section-gap bg-raised" aria-labelledby="work-title">
        <div className="wrap">
          <h2 id="work-title" className="reveal text-h2">
            <span>Crews, spaces and creators.</span>
          </h2>
          <div className="mt-12 grid gap-4">
            {WORK.map((w) => (
              <article key={w.title} className="reveal grid items-center gap-6 rounded-[24px] bg-bg p-7 sm:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-9">
                <div className={`w-20 rounded-full p-3 md:w-28 md:p-4 ${w.field}`}>
                  <Mascot name={w.mascot} decorative sizes="112px" bob="" />
                </div>
                <div>
                  <h3 className="text-h3">{w.title}</h3>
                  <p className="mt-3 max-w-[56ch]">{w.body}</p>
                </div>
                <div className="sm:col-start-2 md:col-start-auto">
                  <Button href={w.href} variant={w.mascot === "frost" ? "cold" : "hot"}>
                    {w.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap" aria-labelledby="faq">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 id="faq" className="reveal text-h2 lg:col-span-4">
            <span>Questions, answered.</span>
          </h2>
          <div className="reveal grid gap-3 lg:col-span-8">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group rounded-[24px] bg-raised open:bg-raised-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-display text-[1.375rem] font-semibold leading-tight md:px-8 [&::-webkit-details-marker]:hidden">
                  {q}
                  <Plus size={24} weight="bold" aria-hidden="true" className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="max-w-[60ch] px-6 pb-7 text-lead md:px-8">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
