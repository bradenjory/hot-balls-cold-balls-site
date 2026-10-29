import { Fragment } from "react";
import { Button } from "@/components/Button";
import { Mascot, SplitDot } from "@/components/Ball";
import { BOBA, COLD, COMBOS, HOT, SAUCES, type Item } from "@/lib/menu";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Menu",
  "Meatballs, arancini, mac-and-cheese balls, gelato, mochi, donut holes and boba, with prices. Pick your balls, pick your sauce, pick a side.",
  "/menu",
);

function Plant() {
  return (
    <span role="img" aria-label="plant-based">
      🌱
    </span>
  );
}

/** Swaps every 🌱 in a string for the labeled marker. */
function withPlant(text: string) {
  return text.split("🌱").map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <Plant />}
      {part}
    </Fragment>
  ));
}

function MenuList({ items, tone }: { items: Item[]; tone: "hot" | "cold" }) {
  return (
    <ul className="grid gap-x-10 gap-y-9 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <li key={item.name} className="flex gap-5">
          {/* TODO: photo, {item.name} cut out on a plain background, 400x400, masked to a circle */}
          <span aria-hidden="true" className={`mt-0.5 size-10 shrink-0 rounded-full md:size-12 ${tone === "hot" ? "bg-hot" : "bg-cold"}`} />
          <div className="min-w-0 grow">
            <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-tight">
              {item.name} {item.plant && <Plant />}
            </h3>
            <p className="mt-1.5 text-muted">{withPlant(item.desc)}</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${item.name} prices`}>
              {item.prices.map((p) => (
                <li key={p} className="rounded-full bg-raised-2 px-3.5 py-1.5 font-semibold whitespace-nowrap tabular-nums">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

const JUMP = [
  { href: "#hot", label: "Hot Balls" },
  { href: "#cold", label: "Cold Balls" },
  { href: "#boba", label: "Boba" },
  { href: "#combos", label: "Combos" },
];

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Coming summer 2027</p>
            <h1 className="mt-6 text-display">The Menu</h1>
            <p className="mt-8 max-w-[36ch] text-lead">
              Portion, cook, sauce, serve. Pick your balls, pick your sauce, pick a side.
            </p>
            <p className="mt-4 text-muted">
              <Plant /> = plant-based. Menu and prices may change before opening.
            </p>
            <div className="mt-10">
              <Button href="/locations">See locations</Button>
            </div>
          </div>
          <div className="lg:col-span-5" aria-hidden="true">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-[520px]">
              <div className="absolute top-0 left-0 w-[62%] rounded-full bg-hot p-[12%]">
                <Mascot name="blaze" decorative sizes="240px" />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] rounded-full bg-cold p-[12%]">
                <Mascot name="frost" decorative bob="bob-late" sizes="200px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Menu sections" className="sticky top-[72px] z-30 bg-bg">
        <ul className="wrap flex gap-1 overflow-x-auto py-3 sm:gap-2">
          {JUMP.map((j) => (
            <li key={j.href}>
              <a href={j.href} className="block rounded-full bg-raised px-3 py-2.5 font-semibold whitespace-nowrap hover:bg-raised-2 sm:px-5">
                {j.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hot" className="section-gap" aria-labelledby="hot-title">
        <div className="wrap">
          <div className="reveal grid items-center gap-8 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 id="hot-title" className="text-h2 text-hot">
                Hot Balls
              </h2>
              <p className="mt-4 max-w-[30ch] text-lead">Snack or Regular. One sauce included, extra sauce $0.75.</p>
            </div>
            <div className="hidden w-36 rounded-full bg-hot p-5 md:block lg:w-40">
              <Mascot name="blaze" sizes="160px" />
            </div>
            <div className="rounded-[24px] bg-raised p-7 md:col-span-2 lg:col-span-1">
              <h3 className="text-h3">Sauces</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
                {SAUCES.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 whitespace-nowrap">
                    <SplitDot />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal mt-12 md:mt-16">
            <MenuList items={HOT} tone="hot" />
          </div>
        </div>
      </section>

      <section id="cold" className="section-gap bg-raised" aria-labelledby="cold-title">
        <div className="wrap">
          <div className="reveal flex items-center gap-8 lg:gap-12">
            <div className="hidden w-36 shrink-0 rounded-full bg-cold p-5 md:block lg:w-40">
              <Mascot name="frost" sizes="160px" bob="bob-late" />
            </div>
            <h2 id="cold-title" className="text-h2 text-cold">
              Cold Balls
            </h2>
          </div>
          <div className="reveal mt-12 md:mt-16 [&_li_li]:bg-bg">
            <MenuList items={COLD} tone="cold" />
          </div>
        </div>
      </section>

      <section id="boba" className="section-gap" aria-labelledby="boba-title">
        <div className="wrap">
          <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="boba-title" className="text-h2 lg:col-span-6">
              Plus, boba.
            </h2>
            <p className="text-lead lg:col-span-6">Bubble tea is balls in a cup, so of course it’s here.</p>
          </div>
          <div className="mt-12 grid gap-4">
            {BOBA.map((b) => (
              <article key={b.name} className="reveal grid gap-5 rounded-[24px] bg-raised p-7 md:grid-cols-12 md:items-center md:p-9">
                <div className="md:col-span-4">
                  <h3 className="text-h3">{b.name}</h3>
                  <p className="mt-2 font-semibold tabular-nums">{b.prices.join(", ")}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-8" aria-label={`${b.name} options`}>
                  {b.options.map((o) => (
                    <li key={o} className="rounded-full bg-bg px-4 py-2">
                      {o}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="combos" className="section-gap bg-raised" aria-labelledby="combos-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <h2 id="combos-title" className="text-h2">
              Combos
            </h2>
          </div>
          <ul className="reveal grid gap-4 lg:col-span-8">
            {COMBOS.map((c, i) => (
              <li key={c.name} className={`grid gap-4 rounded-[24px] p-7 sm:grid-cols-[1fr_auto] sm:items-start md:p-9 ${i === 0 ? "bg-hot text-bg" : "bg-bg"}`}>
                <div>
                  <h3 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight">{c.name}</h3>
                  <p className={`mt-2 max-w-[48ch] ${i === 0 ? "" : "text-muted"}`}>{c.desc}</p>
                </div>
                <p className="font-display text-[2.25rem] font-bold leading-none tracking-tight tabular-nums">{c.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20" aria-label="Ordering and allergens">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <p className="text-lead">Order online at opening on DoorDash and Uber Eats.</p>
          <p className="text-muted">
            Our kitchen handles wheat, dairy, eggs, soy, tree nuts and peanuts. Full allergen and nutrition info coming
            with the final menu.
          </p>
        </div>
      </section>
    </>
  );
}
