import type { Metadata } from "next";
import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { SplitBall } from "@/components/SplitBall";

const description =
  "Why Hot Balls Cold Balls exists: dozens of foods people love are already round, so we put them under one roof, split the menu down the middle and started in Utah.";

export const metadata: Metadata = {
  title: "Our Story",
  description,
  alternates: { canonical: "/our-story" },
  openGraph: { title: "Our Story | Hot Balls Cold Balls", description, url: "/our-story" },
  twitter: { title: "Our Story | Hot Balls Cold Balls", description },
};

const r = (i: number) => ({ ["--i" as string]: i });

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="frame grid items-center gap-10 pt-12 pb-16 md:pt-20 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h1 className="mt-4 text-display md:mt-6">
              Cheeky name. <span className="block text-hot">Wholesome face.</span>
            </h1>
            <p className="mt-6 max-w-[44ch] text-lead md:mt-8">
              Dozens of the foods people love are already round. We put them all under one roof,
              split the menu down the middle, and gave it a name you’ll repeat to your friends.
              That’s the whole idea.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-[min(460px,84%)] lg:col-span-5 lg:w-full">
            <div className="absolute inset-0 rounded-full bg-bg-raised" />
            <Mascot who="symbol" priority sizes="(min-width: 1024px) 26vw, 60vw" className="absolute inset-[16%]" />
            <Mascot who="blaze" priority sizes="(min-width: 1024px) 12vw, 26vw" delay={0.4} className="absolute bottom-[-2%] left-[-4%] w-[34%]" />
            <Mascot who="frost" priority sizes="(min-width: 1024px) 12vw, 26vw" delay={0.9} className="absolute right-[-4%] bottom-[-2%] w-[34%]" />
          </div>
        </div>
      </section>

      {/* Three big ideas */}
      <section className="section bg-bg-raised" aria-labelledby="ideas">
        <div className="frame">
          <h2 id="ideas" className="text-h2" data-reveal>
            Three big ideas.
          </h2>

          <div className="mt-12 grid items-center gap-10 rounded-[var(--radius-card)] bg-bg p-6 md:mt-16 md:grid-cols-12 md:p-12" data-reveal style={r(1)}>
            <div className="md:col-span-7">
              <h3 className="text-[clamp(2.2rem,1.2rem+3.4vw,4.25rem)] leading-none">Everything’s a ball.</h3>
              <p className="mt-5 max-w-[40ch] text-lead">
                The food, the space, the brand. One simple kitchen, a deep menu, endless new flavors.
              </p>
            </div>
            {/* One shape at every size, the way the menu works. */}
            <div className="relative aspect-[16/10] md:col-span-5" aria-hidden="true">
              <SplitBall className="absolute top-[4%] left-[6%] w-[46%]" />
              <span className="absolute top-[10%] right-[8%] aspect-square w-[22%] rounded-full bg-hot" />
              <span className="absolute right-[24%] bottom-[6%] aspect-square w-[30%] rounded-full bg-cold" />
              <span className="absolute bottom-[14%] left-[14%] aspect-square w-[12%] rounded-full bg-ink" />
              <SplitBall className="absolute right-[4%] bottom-[44%] w-[10%] rotate-180" />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-12">
            <div className="flex flex-col gap-6 rounded-[var(--radius-card)] bg-cold-deep p-6 md:col-span-5 md:p-10" data-reveal style={r(1)}>
              {/* TODO: photo, guests taking a photo at the neon wall, 1200x1200, circle crop */}
              <Mascot who="frost" alt="" sizes="200px" className="w-[44%] max-w-[200px]" />
              <div>
                <h3 className="text-h3">Made to share.</h3>
                <p className="mt-4 max-w-[36ch] text-lg">
                  A giant glowing sphere out front, a neon wall inside, stickers in every bag. Bring
                  your camera.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-8 rounded-[var(--radius-card)] bg-hot-deep p-6 sm:grid-cols-2 md:col-span-7 md:p-10" data-reveal style={r(2)}>
              <div>
                <h3 className="text-h3">Born in Utah.</h3>
                <p className="mt-4 max-w-[36ch] text-lg">
                  Utah has the youngest population in the country, so it felt like the right place to
                  start. Lunch, after-school, late night.
                </p>
              </div>
              <Mascot who="blaze" alt="" sizes="220px" delay={0.5} className="mx-auto w-[60%] max-w-[220px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Opening crews */}
      <section className="section" aria-labelledby="crews">
        <div className="frame grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow" data-reveal>
              Want in?
            </p>
            <h2 id="crews" className="mt-4 max-w-[16ch] text-h2" data-reveal style={r(1)}>
              We’re building opening crews.
            </h2>
            <p className="mt-6 max-w-[38ch] text-lead" data-reveal style={r(2)}>
              Flexible shifts around school, real training, and a uniform you’ll actually want to
              wear.
            </p>
            <Link href="/contact#work-with-us" className="btn btn-hot mt-8" data-reveal style={r(3)}>
              See careers
            </Link>
          </div>
          {/* TODO: photo, opening crew in uniform behind the counter, 1600x1200 */}
          <div className="flex items-end justify-center gap-2 lg:col-span-5" data-reveal="scale" style={r(2)}>
            <Mascot who="blaze" sizes="(min-width: 1024px) 14vw, 36vw" className="w-[42%] max-w-[230px]" />
            <Mascot who="frost" sizes="(min-width: 1024px) 14vw, 36vw" delay={0.6} className="w-[42%] max-w-[230px]" />
          </div>
        </div>
      </section>
    </>
  );
}
