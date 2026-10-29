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
          className="absolute top-1/2 left-[52%] hidden aspect-square h-[128%] -translate-y-1/2 rounded-full bg-raised lg:block"
        />
        <div className="wrap relative grid items-center lg:min-h-[calc(100svh-72px)] gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Coming to Utah, summer 2027</p>
            <h1 className="mt-6 text-display leading-[0.95]">
              <span className="block text-hot">Hot balls.</span>
              <span className="block text-cold">Cold balls.</span>
              <span className="block">Boba in between.</span>
            </h1>
            <p className="mt-8 max-w-[34ch] text-lead">
              Meatballs, arancini and mac-and-cheese balls on one side. Gelato, mochi and donut holes on the other. Pick
              yours.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/menu">See the menu</Button>
              <Button href="#join" variant="outline">
                Join the Ball Club
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="mx-auto grid max-w-[560px] grid-cols-[1fr_1.5fr_1fr] items-end gap-2 lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <Mascot name="blaze" className="lg:order-2 lg:col-span-1 lg:-mt-16 lg:w-[88%]" sizes="(min-width:1024px) 220px, 28vw" />
              <Mascot
                name="symbol"
                priority
                bob="bob-late"
                className="lg:order-1 lg:col-span-2 lg:mx-auto lg:w-[78%]"
                sizes="(min-width:1024px) 420px, 40vw"
              />
              <Mascot name="frost" className="lg:order-3 lg:col-start-2 lg:-mt-24 lg:ml-auto lg:w-[88%]" sizes="(min-width:1024px) 220px, 28vw" />
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
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            <TiltCard className="h-full">
              <article className="reveal flex h-full flex-col rounded-[24px] bg-raised p-8 md:p-10">
                {/* TODO: photo, a hot box of meatballs in marinara with arancini, shot from above, 1200x1200 */}
                <BallFrame field="hot" mascot="blaze" className="w-36 md:w-44" sizes="176px" />
                <h3 className="mt-8 text-h3 text-hot">Hot Balls</h3>
                <p className="mt-4 max-w-[44ch] grow">
                  Meatballs (beef, chicken, plant-based), crispy arancini, mac-and-cheese balls, falafel, buffalo
                  chicken balls and garlic dough balls.
                </p>
                <div className="mt-8">
                  <Button href="/menu#hot">Hot menu</Button>
                </div>
              </article>
            </TiltCard>
            <TiltCard className="h-full">
              <article className="reveal flex h-full flex-col rounded-[24px] bg-raised p-8 md:p-10">
                {/* TODO: photo, a cold cup of gelato scoops, mochi and donut holes, shot from above, 1200x1200 */}
                <BallFrame field="cold" mascot="frost" className="w-36 md:w-44" sizes="176px" />
                <h3 className="mt-8 text-h3 text-cold">Cold Balls</h3>
                <p className="mt-4 max-w-[44ch] grow">
                  Gelato and ice-cream scoops, mochi, cookie-dough bites, donut holes, cake pops and fresh fruit balls.
                </p>
                <div className="mt-8">
                  <Button href="/menu#cold" variant="cold">
                    Cold menu
                  </Button>
                </div>
              </article>
            </TiltCard>
          </div>
          <div className="reveal mt-6 grid items-center gap-8 rounded-[24px] bg-raised-2 p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
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
          <div className="mt-12 grid gap-16 md:mt-16 md:grid-cols-2 md:gap-10">
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
          </div>
          <div className="reveal mt-16 flex flex-col gap-4 rounded-[24px] bg-bg p-8 md:mt-20 md:flex-row md:items-center md:gap-10 md:p-10">
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
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 font-display text-lg font-semibold sm:text-2xl">
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
            <WasatchMap className="mx-auto w-full max-w-[480px]" />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="section-gap bg-raised" aria-labelledby="tag-us">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 id="tag-us" className="text-h2">
              Tag us. We’ll make you famous-ish.
            </h2>
            <p className="mt-6 text-lead">@hotballscoldballs on Instagram and TikTok. Both go live closer to opening.</p>
          </div>
          <div className="reveal lg:col-span-7">
            {/* Circles of different sizes, one per shot. Each becomes a photo once it exists. */}
            <div className="mx-auto grid w-full max-w-[640px] grid-cols-2 items-start gap-x-6 gap-y-8 sm:relative sm:block sm:aspect-[7/6]">
              {/* TODO: photo, storefront at dusk with the giant glowing ball sign, 1600x1600 */}
              <figure className="sm:absolute sm:top-0 sm:left-0 sm:w-[56%]">
                <BallFrame field="raised2" mascot="symbol" sizes="360px" />
                <figcaption className="mt-3 text-center text-base text-muted">The giant glowing ball out front</figcaption>
              </figure>
              {/* TODO: photo, the neon wall inside with a friend group posing, 1200x1200 */}
              <figure className="w-[80%] justify-self-end sm:absolute sm:top-[4%] sm:right-0 sm:w-[38%]">
                <BallFrame field="hot" mascot="blaze" sizes="240px" />
                <figcaption className="mt-3 text-center text-base text-muted">The neon wall</figcaption>
              </figure>
              {/* TODO: photo, a hand fanning out the first sticker drop, 800x800 */}
              <figure className="w-[80%] sm:absolute sm:bottom-0 sm:left-[46%] sm:w-[28%]">
                <BallFrame field="cold" mascot="frost" sizes="180px" />
                <figcaption className="mt-3 text-center text-base text-muted">Sticker drops</figcaption>
              </figure>
              {/* TODO: photo, a Blaze cup and a Frost cup clinking, 800x800 */}
              <figure className="w-[64%] justify-self-end sm:absolute sm:right-0 sm:bottom-[2%] sm:w-[22%]">
                <BallFrame field="raised2" mascot="symbol" sizes="140px" />
                <figcaption className="mt-3 text-center text-base text-muted">Team cups</figcaption>
              </figure>
            </div>
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
    <TiltCard>
      <article className="reveal grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-6 md:block">
        <div className={`aspect-square w-full rounded-full p-[14%] md:w-[min(100%,400px)] ${hot ? "bg-hot" : "bg-cold"}`}>
          <Mascot name={team} bob={hot ? "bob" : "bob-late"} sizes="(min-width:768px) 300px, 30vw" />
        </div>
        <div>
          <h3 className={`text-h3 md:mt-10 ${hot ? "text-hot" : "text-cold"}`}>{title}</h3>
          <p className="mt-4 max-w-[42ch]">{body}</p>
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
