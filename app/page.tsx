import { Button } from "@/components/Button";
import { BallFrame, Mascot, SplitDot } from "@/components/Ball";
import { Marquee } from "@/components/Marquee";
import { TiltCard } from "@/components/TiltCard";
import { WasatchMap } from "@/components/WasatchMap";
import { BallClub } from "@/components/forms/BallClub";
import { CITIES } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero: the split ball, enormous and cropped by the right edge */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[56%] hidden aspect-square h-[94%] -translate-y-1/2 rounded-full bg-raised lg:block"
        />
        <div className="wrap relative grid items-center gap-8 py-10 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:gap-6 lg:py-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">Coming to Utah, summer 2027</p>
            <h1 className="hero-title mt-5">
              <span className="block whitespace-nowrap text-hot">Hot balls.</span>
              <span className="block whitespace-nowrap text-cold">Cold balls.</span>
              <span className="block whitespace-nowrap">Boba in between.</span>
            </h1>
            <p className="mt-6 max-w-[36ch] text-lead">
              Meatballs, arancini and mac-and-cheese balls on one side. Gelato, mochi and donut holes on the other. Pick
              yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/menu">See the menu</Button>
              <Button href="#join" variant="outline">
                Join the Ball Club
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            {/* Team photo: the face up top, Blaze and Frost at its feet. Positions keep the three balls apart. */}
            <div className="mx-auto grid max-w-[520px] grid-cols-[1fr_1.5fr_1fr] items-end gap-3 lg:relative lg:block lg:aspect-[1.15] lg:w-[min(100%,calc((100svh-200px)*1.15))] lg:max-w-none">
              <Mascot name="blaze" className="lg:absolute lg:bottom-0 lg:left-0 lg:w-[27%]" sizes="(min-width:1024px) 170px, 28vw" />
              <Mascot
                name="symbol"
                priority
                bob="bob-late"
                className="lg:absolute lg:top-0 lg:left-[21%] lg:w-[58%]"
                sizes="(min-width:1024px) 380px, 40vw"
              />
              <Mascot name="frost" className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[27%]" sizes="(min-width:1024px) 170px, 28vw" />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Menu teaser */}
      <section className="section-gap" aria-labelledby="kitchen">
        <div className="wrap">
          <div className="reveal">
            <h2 id="kitchen" className="text-h2">
              One kitchen. Two temperatures.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            <TiltCard className="h-full">
              <article className="reveal flex h-full flex-col rounded-[24px] bg-raised p-7 md:p-9">
                {/* TODO: photo, a hot box of meatballs in marinara with arancini, shot from above, 1200x1200 */}
                <div className="flex items-center gap-5">
                  <BallFrame field="hot" mascot="blaze" className="w-20 shrink-0 md:w-24" sizes="96px" />
                  <h3 className="text-h3 text-hot">Hot Balls</h3>
                </div>
                <p className="mt-6 max-w-[44ch] grow">
                  Meatballs (beef, chicken, plant-based), crispy arancini, mac-and-cheese balls, falafel, buffalo
                  chicken balls and garlic dough balls.
                </p>
                <div className="mt-7">
                  <Button href="/menu#hot">Hot menu</Button>
                </div>
              </article>
            </TiltCard>
            <TiltCard className="h-full">
              <article className="reveal flex h-full flex-col rounded-[24px] bg-raised p-7 md:p-9">
                {/* TODO: photo, a cold cup of gelato scoops, mochi and donut holes, shot from above, 1200x1200 */}
                <div className="flex items-center gap-5">
                  <BallFrame field="cold" mascot="frost" className="w-20 shrink-0 md:w-24" sizes="96px" />
                  <h3 className="text-h3 text-cold">Cold Balls</h3>
                </div>
                <p className="mt-6 max-w-[44ch] grow">
                  Gelato and ice-cream scoops, mochi, cookie-dough bites, donut holes, cake pops and fresh fruit balls.
                </p>
                <div className="mt-7">
                  <Button href="/menu#cold" variant="cold">
                    Cold menu
                  </Button>
                </div>
              </article>
            </TiltCard>
          </div>
          <div className="reveal mt-4 grid items-center gap-6 rounded-[24px] bg-raised-2 p-7 md:grid-cols-[auto_1fr_auto] md:gap-8 md:p-9">
            {/* Boba pearls: the motif at its smallest */}
            <div aria-hidden="true" className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={`size-5 rounded-full ${i % 2 ? "bg-cold" : "bg-hot"}`} />
              ))}
            </div>
            <div>
              <h3 className="text-h3">Plus, boba. Literally balls in a cup.</h3>
              <p className="mt-3">Make it a Hot + Cold combo: a savory box plus a cold ball or a boba.</p>
            </div>
            <Button href="/menu#boba" variant="outline">
              See the boba
            </Button>
          </div>
        </div>
      </section>

      {/* Rivalry */}
      <section className="section-gap bg-raised" aria-labelledby="rivalry">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">The rivalry</p>
            <h2 id="rivalry" className="mt-4 text-h2">
              Pick a side.
            </h2>
          </div>
          <div className="relative mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            <TeamBlock
              team="blaze"
              title="Team Blaze"
              body="The hot side. Blaze is all crunch, sauce and swagger. If your order comes in a box and drips a little, you’re one of us."
              cta="I’m Team Blaze"
            />
            <TeamBlock
              team="frost"
              title="Team Frost"
              body="The cold side. Frost keeps it cool: scoops, mochi and anything with sprinkles. If you’ve ever had dessert first, you’re one of us."
              cta="I’m Team Frost"
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 z-10 hidden size-16 -translate-1/2 lg:grid place-items-center rounded-full bg-ink font-display text-2xl font-bold text-bg lg:size-20 lg:text-3xl"
            >
              vs
            </span>
          </div>
          <div className="reveal mt-4 flex flex-col gap-3 rounded-[24px] bg-bg p-7 md:flex-row md:items-center md:gap-10 md:p-9">
            <h3 className="shrink-0 text-h3">Every order is a vote.</h3>
            <p className="text-lead">Team Blaze or Team Frost: on your cup, your sticker, and the leaderboard in every store.</p>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="section-gap" aria-labelledby="spots">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-6">
            <h2 id="spots" className="text-h2">
              Six Utah spots. Coming soon.
            </h2>
            <p className="mt-6 text-lead">Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City.</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 font-display text-lg font-semibold sm:text-[1.375rem]">
              {CITIES.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  <SplitDot />
                  {c.name}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/locations">See locations</Button>
            </div>
          </div>
          <div className="reveal lg:col-span-5 lg:col-start-8">
            <WasatchMap className="mx-auto w-full max-w-[440px] lg:h-[min(68svh,600px)] lg:w-auto lg:max-w-none" />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="section-gap bg-raised" aria-labelledby="tag-us">
        <div className="wrap">
          <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="tag-us" className="text-h2 lg:col-span-7">
              Tag us. We’ll make you famous-ish.
            </h2>
            <p className="text-lead lg:col-span-5">@hotballscoldballs on Instagram and TikTok. Both go live closer to opening.</p>
          </div>
          {/* One bubble per shot, largest first. Each becomes a photo once it exists. */}
          <div className="reveal mt-12 grid grid-cols-2 items-end gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6">
            {/* TODO: photo, storefront at dusk with the giant glowing ball sign, 1600x1600 */}
            <Bubble label="The giant glowing ball out front" field="raised2" mascot="symbol" width="w-full" />
            {/* TODO: photo, the neon wall inside with a friend group posing, 1200x1200 */}
            <Bubble label="The neon wall" field="hot" mascot="blaze" width="w-[86%]" />
            {/* TODO: photo, a hand fanning out the first sticker drop, 800x800 */}
            <Bubble label="Sticker drops" field="cold" mascot="frost" width="w-[86%] md:w-[72%]" />
            {/* TODO: photo, a Blaze cup and a Frost cup clinking, 800x800 */}
            <Bubble label="Team cups" field="raised2" mascot="symbol" width="w-[72%] md:w-[58%]" />
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="section-gap" aria-labelledby="join-title">
        <div className="wrap">
          <BallClub>
            <h2 id="join-title" className="text-h2">
              Join the Ball Club.
            </h2>
            <p className="mt-6 text-lead">
              First to know when we open near you, first in line for sticker drops, and a free ball on your birthday.
            </p>
          </BallClub>
        </div>
      </section>
    </>
  );
}

function TeamBlock({ team, title, body, cta }: { team: "blaze" | "frost"; title: string; body: string; cta: string }) {
  const hot = team === "blaze";
  return (
    <TiltCard className="h-full">
      <article
        className={`reveal flex h-full flex-col gap-6 rounded-[24px] bg-bg p-7 sm:flex-row sm:items-center md:flex-col md:items-start md:p-9 lg:flex-row lg:items-center ${
          hot ? "lg:pr-14" : "lg:flex-row-reverse lg:pl-14"
        }`}
      >
        <div className={`w-28 shrink-0 rounded-full p-4 sm:w-32 lg:w-40 lg:p-5 ${hot ? "bg-hot" : "bg-cold"}`}>
          <Mascot name={team} bob={hot ? "bob" : "bob-late"} sizes="160px" />
        </div>
        <div className="min-w-0">
          <h3 className={`text-h3 ${hot ? "text-hot" : "text-cold"}`}>{title}</h3>
          <p className="mt-3 max-w-[38ch]">{body}</p>
          <div className="mt-6">
            <Button href={`/pick-a-side?side=${team}#join`} variant={hot ? "hot" : "cold"}>
              {cta}
            </Button>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

function Bubble({ label, field, mascot, width }: { label: string; field: "hot" | "cold" | "raised2"; mascot: "blaze" | "frost" | "symbol"; width: string }) {
  return (
    <figure className="flex flex-col items-center">
      <BallFrame field={field} mascot={mascot} className={width} sizes="(min-width:768px) 320px, 45vw" />
      <figcaption className="mt-3 text-center text-base text-muted">{label}</figcaption>
    </figure>
  );
}
