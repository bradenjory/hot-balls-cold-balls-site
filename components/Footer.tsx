import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { EMAIL, HANDLE, NAV, SOCIALS_LIVE, SOCIAL_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="frame pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* The lockup PNG has the page colour baked in, so the footer stays on bg. */}
            <Link href="/" aria-label="Hot Balls Cold Balls, home" className="inline-block rounded-[var(--radius-card)]">
              <Image
                src="/brand/logo-on-dark.png"
                alt="Hot Balls Cold Balls, Have a Ball"
                width={2227}
                height={697}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="h-auto w-[min(520px,100%)]"
              />
            </Link>
            <p className="mt-8 max-w-[22ch] font-display text-h3 font-bold tracking-[-0.02em]">
              Hot balls. Cold balls. Boba in between. Coming to Utah.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:pt-4">
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-2 text-lg">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-hot">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/#join" className="transition-colors hover:text-hot">
                    Join the Ball Club
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-3 text-lg">
              <a href={`mailto:${EMAIL}`} className="link w-fit break-all">
                {EMAIL}
              </a>
              <p>{HANDLE}</p>
              {SOCIALS_LIVE && (
                <ul className="flex gap-3" aria-label="Social">
                  <li>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      aria-label="Hot Balls Cold Balls on Instagram"
                      className="inline-flex size-12 items-center justify-center rounded-full bg-bg-raised transition-colors hover:text-hot"
                    >
                      <InstagramLogo size={24} weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL_LINKS.tiktok}
                      aria-label="Hot Balls Cold Balls on TikTok"
                      className="inline-flex size-12 items-center justify-center rounded-full bg-bg-raised transition-colors hover:text-cold"
                    >
                      <TiktokLogo size={24} weight="bold" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <p className="mt-16 text-base text-ink-soft">
          © 2026 Ballerz Restaurants LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
