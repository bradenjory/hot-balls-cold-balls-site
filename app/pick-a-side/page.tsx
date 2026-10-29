import Image from "next/image";
import { Button } from "@/components/Button";
import { Mascot, SplitDot } from "@/components/Ball";
import { TiltCard } from "@/components/TiltCard";
import { Suspense } from "react";
import { BallClub, BallClubFromQuery } from "@/components/forms/BallClub";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Pick a Side",
  "Team Blaze or Team Frost? Every cup and box you order counts for your side. Store leaderboards, sticker drops and the Ball Club app.",
  "/pick-a-side",
);

const PERKS = [
  "Streaks: come back, level up",
  "Combo rewards for going Hot + Cold",
  "Your side’s leaderboard, live",
  "Early access to every sticker drop",
  "A free ball on your birthday",
];

// Decorative tallies for the "how it works" visuals. Not real scores.
const VOTES = "hchhchcchhch".split("");

export default function PickASidePage() {
  const intro = (
    <>
      <h2 id="join-title" className="text-h2">
        Save your spot.
      </h2>
      <p className="mt-6 text-lead">Join the Ball Club, pick your side, and be first in when the app goes live.</p>
    </>
  );

  return (
    <>
      <section className="wrap grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">The rivalry</p>
          <h1 className="mt-6 text-display">
            <span className="text-hot">Hot</span> or <span className="text-cold">cold?</span> Pick a side.
          </h1>
          <p className="mt-8 max-w-[38ch] text-lead">
            Team Blaze or Team Frost. Every cup and box you order counts for your side.
          </p>
        </div>
        <div className="lg:col-span-6">
          <Image
            src="/brand/hbcb-blaze-vs-frost-banner.png"
            alt="Team Blaze versus Team Frost: Blaze, the orange ball with a flame, faces Frost, the teal ball in sunglasses"
            width={1920}
            height={1080}
            priority
            sizes="(min-width:1024px) 640px, 100vw"
            className="h-auto w-full rounded-[24px]"
          />
        </div>
      </section>

      <section className="section-gap bg-raised" aria-labelledby="teams">
        <div className="wrap">
          <h2 id="teams" className="reveal text-h2">
            <span>Two teams. One rivalry.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            <Team
              team="blaze"
              title="Team Blaze"
              body="The hot one. Arancini, meatballs, dough balls. Loud, loyal, a little sweaty."
              cta="Join Team Blaze"
            />
            <Team
              team="frost"
              title="Team Frost"
              body="The cold one. Gelato, mochi, donut holes, cookie-dough bites. Too cool to sweat it."
              cta="Join Team Frost"
            />
          </div>
        </div>
      </section>

      <section className="section-gap" aria-labelledby="how">
        <div className="wrap">
          <h2 id="how" className="reveal text-h2">
            <span>How the rivalry works</span>
          </h2>
          <div className="mt-14 grid gap-20 md:mt-20 md:gap-28">
            <Step title="Order = vote." body="Every cup and box gets a Blaze or Frost sleeve. Your order counts for your side.">
              <div aria-hidden="true" className="grid w-full max-w-[420px] grid-cols-6 gap-3">
                {VOTES.map((v, i) => (
                  <span key={i} className={`aspect-square rounded-full ${v === "h" ? "bg-hot" : "bg-cold"}`} />
                ))}
              </div>
            </Step>
            <Step
              flip
              title="Store leaderboards."
              body="Each store tracks the score. Each month, the winning side votes on a new menu item for the next quarter."
            >
              <div aria-hidden="true" className="grid w-full max-w-[420px] gap-4">
                {[
                  ["Blaze", 9, "bg-hot"],
                  ["Frost", 7, "bg-cold"],
                ].map(([name, n, bg]) => (
                  <div key={name as string} className="flex items-center gap-4">
                    <span className="w-16 font-display text-xl font-semibold">{name}</span>
                    <span className="flex gap-1.5">
                      {Array.from({ length: n as number }, (_, i) => (
                        <span key={i} className={`size-6 rounded-full sm:size-7 ${bg}`} />
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </Step>
            <Step title="Sticker drops." body="Every new flavor brings a collectible mascot costume. Collect the set.">
              <div aria-hidden="true" className="flex w-full max-w-[420px] items-center">
                <Sticker name="blaze" className="-rotate-12" />
                <Sticker name="symbol" className="-ml-6 rotate-6" />
                <Sticker name="frost" className="-ml-6 -rotate-3" />
              </div>
            </Step>
          </div>
        </div>
      </section>

      <section className="section-gap bg-raised" aria-labelledby="stickers">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 id="stickers" className="text-h2">
              The sticker collection.
            </h2>
            <p className="mt-6 text-lead">
              Blaze and Frost in launch costumes, a Utah-themed drop, campus colors and a mystery sticker. One in every
              bag. The first drop arrives at opening. Sticker art coming soon.
            </p>
          </div>
          <ul className="reveal grid grid-cols-3 gap-4 lg:col-span-6 lg:col-start-7" aria-label="The first sticker drop">
            {/* TODO: sticker art, Blaze in launch costume, 800x800 transparent PNG */}
            <StickerSlot label="Blaze, launch costume" className="bg-hot" />
            {/* TODO: sticker art, Frost in launch costume, 800x800 transparent PNG */}
            <StickerSlot label="Frost, launch costume" className="bg-cold" />
            {/* TODO: sticker art, Utah-themed drop, 800x800 transparent PNG */}
            <StickerSlot label="The Utah drop" className="bg-raised-2" />
            {/* TODO: sticker art, campus colors set, 800x800 transparent PNG */}
            <StickerSlot label="Campus colors" className="col-start-1 bg-raised-2 sm:col-start-auto" />
            <li className="flex flex-col items-center gap-3 text-center">
              <span aria-hidden="true" className="grid aspect-square w-full place-items-center rounded-full bg-bg font-display text-6xl font-bold text-ink ring-4 ring-ink ring-inset">
                ?
              </span>
              <span className="text-base text-muted">Mystery sticker</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-gap" aria-labelledby="ball-club">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 id="ball-club" className="text-h2">
              The Ball Club.
            </h2>
            <p className="mt-6 text-lead">Our loyalty app, coming at opening.</p>
          </div>
          <ul className="reveal grid gap-3 lg:col-span-7">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-5 rounded-full bg-raised py-4 pr-6 pl-5 font-display text-xl font-semibold sm:text-2xl">
                <SplitDot className="size-6 border-l-[12px] border-r-[12px]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="join" className="section-gap bg-raised" aria-labelledby="join-title">
        <div className="wrap [&_form]:bg-bg [&_form]:[--field:var(--color-raised-2)]">
          <Suspense fallback={<BallClub>{intro}</BallClub>}>
            <BallClubFromQuery>{intro}</BallClubFromQuery>
          </Suspense>
        </div>
      </section>
    </>
  );
}

function Team({ team, title, body, cta }: { team: "blaze" | "frost"; title: string; body: string; cta: string }) {
  const hot = team === "blaze";
  return (
    <TiltCard className="h-full">
      <article className="reveal flex h-full flex-col rounded-[24px] bg-bg p-8 md:p-10">
        <div className={`w-40 rounded-full p-6 md:w-52 ${hot ? "bg-hot" : "bg-cold"}`}>
          <Mascot name={team} bob={hot ? "bob" : "bob-late"} sizes="200px" />
        </div>
        <h3 className={`mt-8 text-h3 ${hot ? "text-hot" : "text-cold"}`}>{title}</h3>
        <p className="mt-4 max-w-[40ch] grow text-lead">{body}</p>
        <div className="mt-8">
          <Button href={`/pick-a-side?side=${team}#join`} variant={hot ? "hot" : "cold"}>
            {cta}
          </Button>
        </div>
      </article>
    </TiltCard>
  );
}

function Step({ title, body, flip, children }: { title: string; body: string; flip?: boolean; children: React.ReactNode }) {
  return (
    <div className="reveal grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={flip ? "md:order-2" : ""}>
        <h3 className="text-h3">{title}</h3>
        <p className="mt-4 max-w-[40ch] text-lead">{body}</p>
      </div>
      <div className={`flex ${flip ? "md:order-1" : "md:justify-end"}`}>{children}</div>
    </div>
  );
}

function Sticker({ name, className }: { name: "blaze" | "frost" | "symbol"; className: string }) {
  return (
    <span className={`squash block w-1/3 rounded-full bg-ink p-2 ${className}`}>
      <Mascot name={name} decorative sizes="140px" bob="" />
    </span>
  );
}

function StickerSlot({ label, className }: { label: string; className: string }) {
  return (
    <li className="flex flex-col items-center gap-3 text-center">
      <span aria-hidden="true" className={`aspect-square w-full rounded-full ring-4 ring-ink ring-inset ${className}`} />
      <span className="text-base text-muted">{label}</span>
    </li>
  );
}
