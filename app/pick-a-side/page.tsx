import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { SplitBall } from "@/components/SplitBall";
import { TiltCard } from "@/components/TiltCard";
import { TugBar } from "@/components/TugBar";
import { JoinBallClub } from "@/components/forms/JoinBallClub";

const description =
  "Team Blaze or Team Frost? Every cup and box you order counts for your side. See how the rivalry, store leaderboards, sticker drops and the Ball Club app work.";

export const metadata: Metadata = pageMeta("Pick a Side", description, "/pick-a-side");

const r = (i: number) => ({ ["--i" as string]: i });

const PERKS = [
  "Streaks: come back, level up",
  "Combo rewards for going Hot + Cold",
  "Your side’s leaderboard, live",
  "Early access to every sticker drop",
  "A free ball on your birthday",
];

export default async function PickASidePage({
  searchParams,
}: {
  searchParams: Promise<{ side?: string | string[] }>;
}) {
  const { side } = await searchParams;
  const preset = side === "blaze" || side === "frost" ? side : "";

  return (
    <>
      {/* Hero */}
      <section>
        <div className="frame grid items-center gap-10 pt-12 pb-16 md:pt-16 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">The rivalry</p>
            <h1 className="mt-4 text-display md:mt-6">
              <span className="text-hot">Hot</span> or <span className="text-cold">cold?</span>{" "}
              <span className="block">Pick a side.</span>
            </h1>
            <p className="mt-6 max-w-[36ch] text-lead md:mt-8">
              Team Blaze or Team Frost. Every cup and box you order counts for your side.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/brand/blaze-vs-frost.png"
              alt="Team Blaze vs Team Frost: Blaze on an orange field faces Frost on a blue field"
              width={1920}
              height={1080}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-auto w-full rounded-[var(--radius-card)]"
            />
          </div>
        </div>
      </section>

      {/* Two teams */}
      <section className="section pt-8 md:pt-12" aria-labelledby="teams">
        <div className="frame">
          <h2 id="teams" className="text-h2" data-reveal>
            Two teams. One rivalry.
          </h2>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
            <TiltCard>
              <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-hot-deep p-6 md:p-10" data-reveal style={r(1)}>
                <Mascot who="blaze" sizes="(min-width: 768px) 18vw, 45vw" className="ml-auto w-[42%] max-w-[240px]" />
                <h3 className="mt-4 text-h3 text-hot">Team Blaze</h3>
                <p className="mt-3 max-w-[36ch] text-lg">
                  The hot one. Arancini, meatballs, dough balls. Loud, loyal, a little sweaty.
                </p>
                <div className="mt-auto pt-8">
                  <Link href="?side=blaze#join" className="btn btn-hot">
                    Join Team Blaze
                  </Link>
                </div>
              </article>
            </TiltCard>
            <TiltCard>
              <article className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-cold-deep p-6 md:p-10" data-reveal style={r(2)}>
                <Mascot who="frost" sizes="(min-width: 768px) 18vw, 45vw" delay={0.8} className="ml-auto w-[42%] max-w-[240px]" />
                <h3 className="mt-4 text-h3 text-cold">Team Frost</h3>
                <p className="mt-3 max-w-[36ch] text-lg">
                  The cold one. Gelato, mochi, donut holes, cookie-dough bites. Too cool to sweat it.
                </p>
                <div className="mt-auto pt-8">
                  <Link href="?side=frost#join" className="btn btn-cold">
                    Join Team Frost
                  </Link>
                </div>
              </article>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* How it works: three rows, each with its own picture. */}
      <section className="section bg-bg-raised" aria-labelledby="how">
        <div className="frame">
          <h2 id="how" className="text-h2" data-reveal>
            How the rivalry works
          </h2>
          <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <h3 className="text-h3" data-reveal>Order = vote.</h3>
                <p className="mt-4 max-w-[38ch] text-lead" data-reveal style={r(1)}>
                  Every cup and box gets a Blaze or Frost sleeve. Your order counts for your side.
                </p>
              </div>
              {/* TODO: photo, a Blaze sleeve box and a Frost sleeve cup on the counter, 1600x1000 */}
              <div className="flex items-end justify-center gap-6 md:col-span-6 md:col-start-7" data-reveal="scale" style={r(1)} aria-hidden="true">
                <Cup sleeve="bg-hot" who="/brand/blaze.png" />
                <Cup sleeve="bg-cold" who="/brand/frost.png" tall />
              </div>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:order-2 md:col-span-5 md:col-start-8">
                <h3 className="text-h3" data-reveal>Store leaderboards.</h3>
                <p className="mt-4 max-w-[38ch] text-lead" data-reveal style={r(1)}>
                  Each store tracks the score. Each month, the winning side votes on a new menu item
                  for the next quarter.
                </p>
              </div>
              <div className="md:order-1 md:col-span-6" data-reveal style={r(1)}>
                <TugBar />
              </div>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <h3 className="text-h3" data-reveal>Sticker drops.</h3>
                <p className="mt-4 max-w-[38ch] text-lead" data-reveal style={r(1)}>
                  Every new flavor brings a collectible mascot costume. Collect the set.
                </p>
              </div>
              <div className="relative mx-auto aspect-[5/3] w-full max-w-[560px] md:col-span-6 md:col-start-7" data-reveal="scale" style={r(1)} aria-hidden="true">
                <Sticker src="/brand/frost.png" className="top-[4%] left-[8%] w-[34%] -rotate-12" />
                <Sticker src="/brand/symbol.png" className="top-[18%] left-[34%] z-10 w-[36%] rotate-6" />
                <Sticker src="/brand/blaze.png" className="top-[2%] right-[6%] w-[32%] rotate-[14deg]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticker collection */}
      <section className="section" aria-labelledby="stickers">
        <div className="frame grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="stickers" className="text-h2" data-reveal>
              The sticker collection.
            </h2>
            <p className="mt-6 max-w-[40ch] text-lead" data-reveal style={r(1)}>
              Blaze and Frost in launch costumes, a Utah-themed drop, campus colors and a mystery
              sticker. One in every bag. The first drop arrives at opening. Sticker art coming soon.
            </p>
          </div>
          {/* TODO: sticker art for each slot below (launch Blaze, launch Frost, Utah drop, campus colors, mystery), 1000x1000 transparent PNG */}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-7" aria-label="Sticker slots">
            {[
              { label: "Blaze, launch costume", ground: "bg-hot-deep", img: "/brand/blaze.png" },
              { label: "Frost, launch costume", ground: "bg-cold-deep", img: "/brand/frost.png" },
              { label: "Utah drop", ground: "bg-bg-raised", img: "/brand/symbol.png" },
              { label: "Campus colors", ground: "bg-bg-raised", img: "/brand/symbol.png" },
              { label: "Mystery", ground: "bg-[#2a2335]", img: "" },
            ].map((s, i) => (
              <li key={s.label} data-reveal="scale" style={r(i)} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
                <div className={`mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-full ${s.ground}`}>
                  {s.img ? (
                    <Image src={s.img} alt="" width={160} height={160} className="h-auto w-[58%] object-contain opacity-90" />
                  ) : (
                    <span aria-hidden="true" className="font-display text-[5rem] leading-none font-bold">?</span>
                  )}
                </div>
                <p className="mt-3 text-center font-display text-lg font-semibold">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Ball Club app */}
      <section className="section bg-bg-raised" aria-labelledby="app">
        <div className="frame grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="app" className="text-h2" data-reveal>
              The Ball Club.
            </h2>
            <p className="mt-6 text-lead" data-reveal style={r(1)}>
              Our loyalty app, coming at opening.
            </p>
            {/* TODO: photo or render, the Ball Club app on a phone showing the side leaderboard, 1200x1600 */}
          </div>
          <ul className="flex flex-col gap-5 lg:col-span-7">
            {PERKS.map((p, i) => (
              <li key={p} className="flex items-center gap-4 font-display text-[clamp(1.5rem,1rem+1.6vw,2.4rem)] leading-tight font-bold tracking-[-0.02em]" data-reveal style={r(i)}>
                <SplitBall className={`size-7 shrink-0 md:size-9 ${i % 2 ? "rotate-180" : ""}`} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="section" aria-label="Save your spot">
        <div className="frame">
          <JoinBallClub
            key={preset}
            idPrefix="side-join"
            title="Save your spot."
            body="Join the Ball Club, pick your side, and be first in when the app goes live."
            defaultSide={preset}
          />
        </div>
      </section>
    </>
  );
}

function Cup({ sleeve, who, tall }: { sleeve: string; who: string; tall?: boolean }) {
  return (
    <div
      className={`relative w-[38%] max-w-[200px] bg-ink ${tall ? "aspect-[3/4.2]" : "aspect-[3/3.6]"}`}
      style={{ clipPath: "polygon(4% 0, 96% 0, 84% 100%, 16% 100%)", borderRadius: 12 }}
    >
      <div className={`absolute inset-x-0 top-[34%] flex h-[40%] items-center justify-center ${sleeve}`}>
        <Image src={who} alt="" width={90} height={95} className="h-[78%] w-auto" />
      </div>
    </div>
  );
}

function Sticker({ src, className }: { src: string; className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <Image src={src} alt="" width={240} height={253} className="h-auto w-full" />
    </div>
  );
}
