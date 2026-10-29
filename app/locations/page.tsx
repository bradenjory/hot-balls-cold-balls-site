import { Button } from "@/components/Button";
import { Mascot, SplitDot } from "@/components/Ball";
import { WasatchMap } from "@/components/WasatchMap";
import { TownVote } from "@/components/forms/TownVote";
import { CITIES } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Locations",
  "Six Hot Balls Cold Balls spots coming to the Wasatch Front: Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City. Vote for your town.",
  "/locations",
);

export default function LocationsPage() {
  return (
    <>
      <section className="wrap grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">Coming soon</p>
          <h1 className="mt-6 text-display">
            Rolling into <span className="text-hot">Utah.</span>
          </h1>
          <p className="mt-8 max-w-[40ch] text-lead">
            Six spots along the Wasatch Front, close to the campuses and neighborhoods where you already hang out. Sign
            up and we’ll tell you the minute yours opens.
          </p>
          <div className="mt-10">
            <Button href="/menu">See the menu</Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <WasatchMap className="mx-auto w-full max-w-[420px] lg:h-[min(72svh,620px)] lg:w-auto lg:max-w-none" />
        </div>
      </section>

      <section className="section-gap bg-raised" aria-labelledby="spots">
        <div className="wrap">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <h2 id="spots" className="text-h2">
              Pick your spot.
            </h2>
            <Button href="/#join">Join the Ball Club</Button>
          </div>
          <ul className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c, i) => (
              <li key={c.name} className={`flex flex-col rounded-[24px] p-7 md:p-8 ${i % 2 ? "bg-bg" : "bg-raised-2"}`}>
                <SplitDot className="size-5 border-l-[10px] border-r-[10px]" />
                <h3 className="mt-6 text-h3">{c.name}</h3>
                <p className="mt-2 text-lead">{c.note}</p>
                <p className="mt-6 text-muted">Location coming soon. Opening TBD.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-gap" aria-labelledby="vote">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <h2 id="vote" className="text-h2">
              Bring us to your town.
            </h2>
            <p className="mt-6 text-lead">Tell us where you want the next one. The town with the most votes gets a closer look.</p>
            <div className="mt-10 grid max-w-[300px] grid-cols-2 items-end gap-5">
              <Mascot name="blaze" decorative sizes="160px" />
              <Mascot name="frost" decorative bob="bob-late" sizes="160px" />
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <TownVote />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32" aria-labelledby="landlords">
        <div className="wrap">
          <div className="reveal grid gap-8 rounded-[24px] bg-raised p-8 md:p-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow">Landlords &amp; brokers</p>
              <h2 id="landlords" className="mt-3 text-h2">
                Got a space with foot traffic?
              </h2>
              <p className="mt-6 max-w-[52ch] text-lead">
                We’re looking for 2,500-3,000 sq ft end-caps and pads near high schools and universities along the
                Wasatch Front. Drive-thru preferred, not required.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button href="mailto:hello@hotballscoldballs.com?subject=Real%20estate">Submit a site</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
