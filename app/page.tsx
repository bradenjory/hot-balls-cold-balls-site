import type { Metadata } from "next";
import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { Marquee } from "@/components/Marquee";
import { SplitBall } from "@/components/SplitBall";
import { TiltCard } from "@/components/TiltCard";
import { UtahMap } from "@/components/UtahMap";
import { JoinBallClub } from "@/components/forms/JoinBallClub";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const r = (i: number) => ({ ["--i" as string]: i });

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div className="frame grid items-center gap-y-6 pt-8 pb-0 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12 lg:py-10">
          <div className="relative z-10 lg:col-span-7">
            <p className="eyebrow">Coming to Utah, summer 2027</p>
            <h1 className="mt-4 text-display md:mt-6">
              <span className="block text-hot">Hot balls.</span>
              <span className="block text-cold">Cold balls.</span>
              <span className="block">Boba in between.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-lead md:mt-8">
              Meatballs, arancini and mac-and-cheese balls on one side. Gelato, mochi and donut holes
              on the other. Pick yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/menu" className="btn btn-hot">
                See the menu
              </Link>
              <Link href="#join" className="btn btn-outline">
                Join the Ball Club
              </Link>
            </div>
          </div>

          {/* The brand ball at hero scale: Blaze, the half-and-half face and Frost stand on it in one row. */}
          <div className="relative -mx-[var(--margin)] aspect-[2/1] overflow-hidden lg:col-span-5 lg:mx-0 lg:aspect-[1/1.05] lg:overflow-visible">
            <SplitBall
              animate
              hot="bg-hot-deep"
              cold="bg-cold-deep"
              className="absolute top-[34%] left-1/2 w-[112%] -translate-x-1/2 lg:top-1/2 lg:left-[58%] lg:w-[128%] lg:-translate-y-1/2"
            />
            <div className="absolute inset-x-[6%] top-[4%] flex items-end justify-center lg:inset-x-0 lg:top-1/2 lg:left-[8%] lg:-translate-y-1/2">
              <Mascot who="blaze" priority delay={0} sizes="(min-width: 1024px) 14vw, 28vw" className="relative z-0 -mr-[4%] w-[29%]" />
              <Mascot who="symbol" priority delay={0.4} sizes="(min-width: 1024px) 18vw, 36vw" className="relative z-10 w-[38%]" />
              <Mascot who="frost" priority delay={0.8} sizes="(min-width: 1024px) 14vw, 28vw" className="relative z-0 -ml-[4%] w-[29%]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Menu teaser */}
      <section className="section bg-bg-raised" aria-labelledby="menu-teaser">
        <div className="frame">
          <h2 id="menu-teaser" className="max-w-[16ch] text-h2" data-reveal>
            One kitchen. Two temperatures.
          </h2>
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
            <TiltCard className="h-full">
              <article
                className="flex h-full flex-col rounded-[var(--radius-card)] bg-hot-deep p-6 md:p-10"
                data-reveal
                style={r(1)}
              >
                {/* TODO: photo, Hot box: meatballs, arancini and mac-and-cheese balls in a branded box, 1600x1200, circle crop */}
                <div className="mb-8 w-[min(260px,60%)] overflow-hidden rounded-full bg-bg">
                  <Mascot who="blaze" alt="" sizes="260px" delay={0.2} className="translate-y-[6%] scale-110" />
                </div>
                <h3 className="text-h3 text-hot">Hot Balls</h3>
                <p className="mt-4 max-w-[46ch] text-lg">
                  Meatballs (beef, chicken, plant-based), crispy arancini, mac-and-cheese balls,
                  falafel, buffalo chicken balls and garlic dough balls.
                </p>
                <div className="mt-auto pt-8">
                  <Link href="/menu#hot" className="btn btn-hot">
                    Hot menu
                  </Link>
                </div>
              </article>
            </TiltCard>
            <TiltCard className="h-full">
              <article
                className="flex h-full flex-col rounded-[var(--radius-card)] bg-cold-deep p-6 md:p-10"
                data-reveal
                style={r(2)}
              >
                {/* TODO: photo, Cold cup: gelato scoops, mochi and donut holes in a team cup, 1600x1200, circle crop */}
                <div className="mb-8 w-[min(260px,60%)] overflow-hidden rounded-full bg-bg">
                  <Mascot who="frost" alt="" sizes="260px" delay={1} className="translate-y-[6%] scale-110" />
                </div>
                <h3 className="text-h3 text-cold">Cold Balls</h3>
                <p className="mt-4 max-w-[46ch] text-lg">
                  Gelato and ice-cream scoops, mochi, cookie-dough bites, donut holes, cake pops and
                  fresh fruit balls.
                </p>
                <div className="mt-auto pt-8">
                  <Link href="/menu#cold" className="btn btn-cold">
                    Cold menu
                  </Link>
                </div>
              </article>
            </TiltCard>
          </div>
          <div
            className="mt-4 grid items-center gap-6 rounded-[var(--radius-card)] bg-bg p-6 md:grid-cols-12 md:p-10"
            data-reveal
          >
            {/* TODO: photo, Boba: brown sugar milk tea with tapioca pearls, 1600x1200, circle crop */}
            <div className="flex gap-2 md:col-span-3" aria-hidden="true">
              <SplitBall className="size-14 md:size-20" />
              <span className="size-14 rounded-full bg-ink md:size-20" />
              <SplitBall className="size-14 rotate-180 md:size-20" />
            </div>
            <h3 className="text-h3 md:col-span-5">Plus, boba. Literally balls in a cup.</h3>
            <p className="text-lg md:col-span-4">
              Make it a Hot + Cold combo: a savory box plus a cold ball or a boba.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Rivalry */}
      <section className="section" aria-labelledby="rivalry">
        <div className="frame">
          <p className="eyebrow" data-reveal>
            The rivalry
          </p>
          <h2 id="rivalry" className="mt-4 text-h2" data-reveal style={r(1)}>
            Pick a side.
          </h2>

          {/* One ball, split across the two teams. */}
          <div className="relative mt-10 aspect-[2/1] overflow-hidden md:mt-14 md:aspect-[2.6/1]" data-reveal="scale" style={r(2)}>
            <SplitBall
              hot="bg-hot-deep"
              cold="bg-cold-deep"
              className="absolute top-[3%] left-1/2 w-[min(100%,1000px)] -translate-x-1/2"
            />
            <div className="absolute inset-x-0 bottom-0 mx-auto flex w-[min(100%,1000px)] items-end justify-center gap-[8%] pb-[2%]">
              <Mascot who="blaze" sizes="(min-width: 768px) 22vw, 36vw" className="w-[30%] max-w-[300px]" delay={0.3} />
              <Mascot who="frost" sizes="(min-width: 768px) 22vw, 36vw" className="w-[30%] max-w-[300px]" delay={1.1} />
            </div>
          </div>

          <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-16">
            <div data-reveal>
              <h3 className="text-h3 text-hot">Team Blaze</h3>
              <p className="mt-4 max-w-[44ch] text-lg">
                The hot side. Blaze is all crunch, sauce and swagger. If your order comes in a box and
                drips a little, you’re one of us.
              </p>
              <Link href="/pick-a-side?side=blaze#join" className="btn btn-hot mt-8">
                I’m Team Blaze
              </Link>
            </div>
            <div data-reveal style={r(1)}>
              <h3 className="text-h3 text-cold">Team Frost</h3>
              <p className="mt-4 max-w-[44ch] text-lg">
                The cold side. Frost keeps it cool: scoops, mochi and anything with sprinkles. If
                you’ve ever had dessert first, you’re one of us.
              </p>
              <Link href="/pick-a-side?side=frost#join" className="btn btn-cold mt-8">
                I’m Team Frost
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-4 rounded-[var(--radius-card)] bg-bg-raised p-6 md:mt-28 md:grid-cols-2 md:items-center md:gap-12 md:p-10" data-reveal>
            <h3 className="text-h3">Every order is a vote.</h3>
            <p className="text-lead">
              Team Blaze or Team Frost: on your cup, your sticker, and the leaderboard in every store.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Locations teaser */}
      <section className="section bg-bg-raised" aria-labelledby="spots">
        <div className="frame grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="spots" className="max-w-[14ch] text-h2" data-reveal>
              Six Utah spots. Coming soon.
            </h2>
            <p className="mt-6 max-w-[36ch] text-lead" data-reveal style={r(1)}>
              Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City.
            </p>
            <Link href="/locations" className="btn btn-hot mt-10" data-reveal style={r(2)}>
              See locations
            </Link>
          </div>
          <div className="md:col-span-5" data-reveal style={r(1)}>
            <UtahMap className="mx-auto w-full max-w-[400px]" />
          </div>
        </div>
      </section>

      {/* 6. Social */}
      <section className="section" aria-labelledby="social">
        <div className="frame grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="social" className="text-h2" data-reveal>
              Tag us. We’ll make you famous-ish.
            </h2>
            <p className="mt-6 max-w-[34ch] text-lead" data-reveal style={r(1)}>
              @hotballscoldballs on Instagram and TikTok. Both go live closer to opening.
            </p>
          </div>
          <SocialGallery />
        </div>
      </section>

      {/* 7. Join the Ball Club */}
      <section id="join" className="section bg-bg-raised" aria-label="Join the Ball Club">
        <div className="frame">
          <JoinBallClub
            idPrefix="home-join"
            title="Join the Ball Club."
            body="First to know when we open near you, first in line for sticker drops, and a free ball on your birthday."
          />
        </div>
      </section>
    </>
  );
}

/* Four circles at four sizes, each a slot for a real photo once the store exists. */
function SocialGallery() {
  const tiles = [
    {
      // TODO: photo, storefront at dusk with the giant glowing ball out front, 1600x1600, circle crop
      caption: "The giant ball out front",
      who: "symbol" as const,
      ground: "bg-bg-raised",
      place: "col-span-6 lg:col-span-5 lg:row-span-2",
      inner: "w-[78%]",
    },
    {
      // TODO: photo, the neon "Have a Ball" wall inside the store with people posing, 1200x1200, circle crop
      caption: "The neon wall",
      who: "frost" as const,
      ground: "bg-cold-deep",
      place: "col-span-3 lg:col-span-3 lg:mt-10",
      inner: "w-[70%]",
    },
    {
      // TODO: photo, a hand holding the launch sticker set fanned out, 1200x1200, circle crop
      caption: "Sticker drops",
      who: "blaze" as const,
      ground: "bg-hot-deep",
      place: "col-span-3 lg:col-span-2 lg:self-end",
      inner: "w-[72%] -rotate-12",
    },
    {
      // TODO: photo, a Blaze sleeve cup and a Frost sleeve cup side by side, 1200x1200, circle crop
      caption: "Team cups",
      who: "symbol" as const,
      ground: "bg-[#2a2335]",
      place: "col-span-4 col-start-2 lg:col-span-4 lg:col-start-7 lg:w-4/5",
      inner: "w-[64%] rotate-12",
    },
  ];
  return (
    <ul className="grid grid-cols-6 items-start gap-x-4 gap-y-8 lg:col-span-8 lg:grid-cols-12 lg:gap-x-6">
      {tiles.map((t, i) => (
        <li key={t.caption} className={t.place} data-reveal="scale" style={r(i)}>
          <div className={`flex aspect-square items-center justify-center overflow-hidden rounded-full ${t.ground}`}>
            <Mascot who={t.who} alt="" sizes="(min-width: 1024px) 24vw, 40vw" delay={i * 0.5} className={t.inner} />
          </div>
          <p className="mt-3 text-center font-display text-lg font-semibold">{t.caption}</p>
        </li>
      ))}
    </ul>
  );
}
