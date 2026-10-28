import type { Metadata } from "next";
import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { MenuList } from "@/components/MenuList";
import { PlantBased } from "@/components/PlantBased";
import { SplitBall } from "@/components/SplitBall";
import { BOBA, COLD, COMBOS, HOT, SAUCES } from "@/lib/menu";

const description =
  "The full Hot Balls Cold Balls menu with prices: meatballs, arancini, mac and cheese balls, gelato, mochi, donut holes, boba and Hot + Cold combos.";

export const metadata: Metadata = {
  title: "Menu",
  description,
  alternates: { canonical: "/menu" },
  openGraph: { title: "Menu | Hot Balls Cold Balls", description, url: "/menu" },
  twitter: { title: "Menu | Hot Balls Cold Balls", description },
};

const r = (i: number) => ({ ["--i" as string]: i });

const JUMPS = [
  { href: "#hot", label: "Hot Balls", cls: "bg-hot-deep hover:bg-hot hover:text-bg" },
  { href: "#cold", label: "Cold Balls", cls: "bg-cold-deep hover:bg-cold hover:text-bg" },
  { href: "#boba", label: "Boba", cls: "bg-bg-raised hover:bg-ink hover:text-bg" },
  { href: "#combos", label: "Combos", cls: "bg-bg-raised hover:bg-ink hover:text-bg" },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="frame grid items-end gap-10 pt-12 pb-16 md:pt-20 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Coming summer 2027</p>
            <h1 className="mt-4 text-[clamp(3.4rem,1rem+10vw,10rem)] leading-[0.9] md:mt-6">The Menu</h1>
            <p className="mt-6 max-w-[34ch] text-lead md:mt-8">
              Portion, cook, sauce, serve. Pick your balls, pick your sauce, pick a side.
            </p>
            <p className="mt-4 text-lg">
              <PlantBased /> = plant-based. Menu and prices may change before opening.
            </p>
            <Link href="/locations" className="btn btn-hot mt-8">
              See locations
            </Link>
          </div>
          <nav aria-label="Menu sections" className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-3">
              {JUMPS.map((j) => (
                <li key={j.href}>
                  <a
                    href={j.href}
                    className={`flex min-h-16 items-center justify-center rounded-full px-4 font-display text-xl font-semibold transition-colors duration-200 md:min-h-20 md:text-2xl ${j.cls}`}
                  >
                    {j.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Hot Balls */}
      <section id="hot" className="section bg-hot-deep" aria-labelledby="hot-title">
        <div className="frame grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <h2 id="hot-title" className="text-h2 text-hot" data-reveal>
                Hot Balls
              </h2>
              <p className="mt-5 max-w-[30ch] text-lead" data-reveal style={r(1)}>
                Snack or Regular. One sauce included, extra sauce $0.75.
              </p>
              {/* TODO: photo, Hot box hero: meatballs in marinara with arancini, 1600x1200, circle crop */}
              <div className="mt-10 hidden w-[min(320px,70%)] overflow-hidden rounded-full bg-bg lg:block" data-reveal="scale" style={r(2)}>
                <Mascot who="blaze" alt="" sizes="320px" className="translate-y-[6%] scale-110" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <MenuList items={HOT} accent="hot" />
            <div className="mt-14 rounded-[var(--radius-card)] bg-bg p-6 md:p-8" data-reveal>
              <h3 className="text-h3">Sauces</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {SAUCES.map((s) => (
                  <li key={s} className="rounded-full bg-hot-deep px-4 py-2 text-lg font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Balls */}
      <section id="cold" className="section bg-cold-deep" aria-labelledby="cold-title">
        <div className="frame grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:order-2 lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <h2 id="cold-title" className="text-h2 text-cold" data-reveal>
                Cold Balls
              </h2>
              {/* TODO: photo, Cold cup hero: gelato scoops and mochi in a Frost cup, 1600x1200, circle crop */}
              <div className="mt-10 hidden w-[min(320px,70%)] overflow-hidden rounded-full bg-bg lg:block" data-reveal="scale" style={r(2)}>
                <Mascot who="frost" alt="" sizes="320px" delay={0.6} className="translate-y-[6%] scale-110" />
              </div>
            </div>
          </div>
          <div className="lg:order-1 lg:col-span-7">
            <MenuList items={COLD} accent="cold" />
          </div>
        </div>
      </section>

      {/* Boba */}
      <section id="boba" className="section bg-bg-raised" aria-labelledby="boba-title">
        <div className="frame">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 id="boba-title" className="text-h2 md:col-span-5" data-reveal>
              Plus, boba.
            </h2>
            <p className="max-w-[40ch] text-lead md:col-span-7" data-reveal style={r(1)}>
              Bubble tea is balls in a cup, so of course it’s here.
            </p>
          </div>
          {/* TODO: photo, boba lineup: brown sugar milk tea, taro and mango fruit tea, 1600x1200 */}
          <ul className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
            {BOBA.map((b, i) => (
              <li
                key={b.name}
                className={`flex flex-col rounded-[var(--radius-card)] bg-bg p-6 md:p-8 ${i === 2 ? "lg:bg-[#2a2335]" : ""}`}
                data-reveal
                style={r(i)}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{b.name}</h3>
                  <SplitBall className="size-6 shrink-0 self-center" />
                </div>
                <p className="mt-2 font-display text-[1.25rem] font-semibold tabular-nums">
                  {b.prices.map((p) => (
                    <span key={p} className="mr-4 inline-block whitespace-nowrap">
                      {p}
                    </span>
                  ))}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {b.options.map((o) => (
                    <li key={o} className="rounded-full bg-bg-raised px-3.5 py-1.5 text-base font-medium">
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Combos */}
      <section id="combos" className="section" aria-labelledby="combos-title">
        <div className="frame">
          <h2 id="combos-title" className="text-h2" data-reveal>
            Combos
          </h2>
          <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12">
          <ul className="flex flex-col gap-10 lg:col-span-8">
            {COMBOS.map((c, i) => (
              <li key={c.name} className="grid gap-2 md:grid-cols-12 md:items-center md:gap-8" data-reveal style={r(i)}>
                <p className="font-display text-[clamp(2.75rem,1.5rem+4vw,5.5rem)] leading-none font-bold tracking-[-0.03em] tabular-nums md:col-span-4">
                  {c.price}
                </p>
                <div className="md:col-span-8">
                  <h3 className="text-h3">{c.name}</h3>
                  <p className="mt-2 max-w-[56ch] text-lg">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Hot meets cold: both mascots on the one ball. */}
          <div className="relative mx-auto aspect-square w-[min(420px,80%)] lg:col-span-4 lg:w-full" data-reveal="scale">
            <SplitBall hot="bg-hot-deep" cold="bg-cold-deep" className="absolute inset-0" />
            <div className="absolute inset-x-[8%] top-1/2 flex -translate-y-1/2 items-end justify-center gap-[4%]">
              <Mascot who="blaze" sizes="(min-width: 1024px) 14vw, 30vw" className="w-[44%]" />
              <Mascot who="frost" sizes="(min-width: 1024px) 14vw, 30vw" className="w-[44%]" delay={0.7} />
            </div>
          </div>
          </div>
          <div className="mt-20 grid gap-4 rounded-[var(--radius-card)] bg-bg-raised p-6 md:mt-28 md:grid-cols-2 md:gap-10 md:p-10" data-reveal>
            <p className="text-lead">Order online at opening on DoorDash and Uber Eats.</p>
            <p className="text-lg">
              Our kitchen handles wheat, dairy, eggs, soy, tree nuts and peanuts. Full allergen and
              nutrition info coming with the final menu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
