import type { Metadata } from "next";
import Link from "next/link";
import { LocationsExplorer } from "@/components/LocationsExplorer";
import { RollingBall } from "@/components/RollingBall";
import { SplitBall } from "@/components/SplitBall";
import { TownVoteForm } from "@/components/forms/TownVoteForm";
import { mailto } from "@/lib/site";

const description =
  "Six Hot Balls Cold Balls spots coming to Utah: Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City. Vote for your town or send us a site.";

export const metadata: Metadata = {
  title: "Locations",
  description,
  alternates: { canonical: "/locations" },
  openGraph: { title: "Locations | Hot Balls Cold Balls", description, url: "/locations" },
  twitter: { title: "Locations | Hot Balls Cold Balls", description },
};

const r = (i: number) => ({ ["--i" as string]: i });

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="frame grid items-center gap-8 pt-12 pb-16 md:pt-20 md:pb-24 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-7">
            <p className="eyebrow">Coming soon</p>
            <h1 className="mt-4 text-display md:mt-6">
              Rolling into <span className="text-hot">Utah.</span>
            </h1>
            <p className="mt-6 max-w-[40ch] text-lead md:mt-8">
              Six spots along the Wasatch Front, close to the campuses and neighborhoods where you
              already hang out. Sign up and we’ll tell you the minute yours opens.
            </p>
            <Link href="/menu" className="btn btn-hot mt-8 md:mt-10">
              See the menu
            </Link>
          </div>
          <div className="relative mx-auto aspect-square w-[min(440px,80%)] lg:col-span-5 lg:w-full">
            <SplitBall animate hot="bg-hot-deep" cold="bg-cold-deep" className="absolute inset-0" />
            <RollingBall className="absolute inset-[18%]" />
          </div>
        </div>
      </section>

      {/* Pick your spot */}
      <section className="section pt-0 md:pt-0" aria-labelledby="spots">
        <div className="frame">
          <h2 id="spots" className="text-h2" data-reveal>
            Pick your spot.
          </h2>
          <div className="mt-10 md:mt-14">
            <LocationsExplorer />
          </div>
          <Link href="/#join" className="btn btn-hot mt-12" data-reveal>
            Join the Ball Club
          </Link>
        </div>
      </section>

      {/* Town vote */}
      <section className="section bg-bg-raised" aria-labelledby="vote">
        <div className="frame grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 id="vote" className="max-w-[14ch] text-h2" data-reveal>
              Bring us to your town.
            </h2>
            <p className="mt-6 max-w-[36ch] text-lead" data-reveal style={r(1)}>
              Tell us where you want the next one. The town with the most votes gets a closer look.
            </p>
          </div>
          <div className="lg:col-span-6" data-reveal style={r(1)}>
            <TownVoteForm />
          </div>
        </div>
      </section>

      {/* Landlords and brokers */}
      <section className="section" aria-labelledby="space">
        <div className="frame">
          <div className="grid gap-10 rounded-[var(--radius-card)] bg-bg-raised p-6 md:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
            <div className="lg:col-span-7">
              <p className="eyebrow" data-reveal>
                Landlords & brokers
              </p>
              <h2 id="space" className="mt-4 max-w-[16ch] text-h2" data-reveal style={r(1)}>
                Got a space with foot traffic?
              </h2>
            </div>
            <div className="lg:col-span-5" data-reveal style={r(2)}>
              <p className="text-lead">
                We’re looking for 2,500-3,000 sq ft end-caps and pads near high schools and
                universities along the Wasatch Front. Drive-thru preferred, not required.
              </p>
              <a href={mailto("Real estate")} className="btn btn-hot mt-8">
                Submit a site
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
