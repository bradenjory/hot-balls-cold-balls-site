import { Button } from "@/components/Button";
import { Mascot } from "@/components/Ball";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Our Story",
  "Cheeky name. Wholesome face. Why we put every round food under one roof, split the menu down the middle and started in Utah.",
  "/our-story",
);

export default function OurStoryPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[58%] hidden aspect-square h-[92%] -translate-y-1/2 rounded-full bg-raised lg:block"
        />
        <div className="wrap relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h1 className="mt-6 text-display">
              Cheeky name. <span className="text-hot">Wholesome face.</span>
            </h1>
            <p className="mt-8 max-w-[44ch] text-lead">
              Dozens of the foods people love are already round. We put them all under one roof, split the menu down the
              middle, and gave it a name you’ll repeat to your friends. That’s the whole idea.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Mascot name="symbol" priority className="mx-auto w-[min(56vw,400px)] lg:w-[min(100%,calc(100svh-240px),440px)]" sizes="(min-width:1024px) 440px, 70vw" />
          </div>
        </div>
      </section>

      <section className="section-gap bg-raised" aria-labelledby="ideas">
        <div className="wrap">
          <h2 id="ideas" className="reveal text-h2">
            <span>Three big ideas.</span>
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <article className="reveal grid items-center gap-8 rounded-[24px] bg-bg p-8 md:grid-cols-[1fr_auto] md:p-12 lg:col-span-12">
              <div>
                <h3 className="text-h2">Everything’s a ball.</h3>
                <p className="mt-5 max-w-[44ch] text-lead">
                  The food, the space, the brand. One simple kitchen, a deep menu, endless new flavors.
                </p>
              </div>
              <div aria-hidden="true" className="flex items-end gap-3">
                <span className="size-16 rounded-full bg-hot md:size-24" />
                <span className="size-24 rounded-full bg-raised-2 md:size-36" />
                <span className="size-12 rounded-full bg-cold md:size-16" />
              </div>
            </article>
            <article className="reveal flex flex-col rounded-[24px] bg-hot p-8 text-bg md:p-12 lg:col-span-7">
              <h3 className="text-h3">Made to share.</h3>
              <p className="mt-5 max-w-[40ch] text-lead">
                A giant glowing sphere out front, a neon wall inside, stickers in every bag. Bring your camera.
              </p>
              <div className="mt-8 w-32 self-end md:w-40">
                <Mascot name="blaze" decorative sizes="160px" />
              </div>
            </article>
            <article className="reveal flex flex-col rounded-[24px] bg-bg p-8 md:p-12 lg:col-span-5">
              <h3 className="text-h3 text-cold">Born in Utah.</h3>
              <p className="mt-5 text-lead">
                Utah has the youngest population in the country, so it felt like the right place to start. Lunch,
                after-school, late night.
              </p>
              <div className="mt-8 w-32 self-end md:w-40">
                <Mascot name="frost" decorative bob="bob-late" sizes="160px" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-gap" aria-labelledby="crews">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-8">
            <p className="eyebrow">Want in?</p>
            <h2 id="crews" className="mt-4 text-h2">
              We’re building opening crews.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lead">
              Flexible shifts around school, real training, and a uniform you’ll actually want to wear.
            </p>
          </div>
          <div className="reveal lg:col-span-4 lg:justify-self-end">
            <Button href="/contact#work-with-us">See careers</Button>
          </div>
        </div>
      </section>
    </>
  );
}
