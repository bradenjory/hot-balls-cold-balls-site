import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { EMAIL, NAV, SOCIALS_LIVE } from "@/lib/site";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="bg-bg pt-12 pb-10 md:pt-16">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Image
              src="/brand/hbcb-logo-horizontal-tagline-on-dark.png"
              alt="Hot Balls Cold Balls. Have a ball."
              width={2400}
              height={893}
              className="h-auto w-full max-w-[560px]"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
            <p className="mt-8 max-w-[28ch] font-display text-h3 font-semibold leading-tight tracking-tight">
              Hot balls. Cold balls. Boba in between. Coming to Utah.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <nav aria-label="Footer">
              <ul className="space-y-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-lg hover:text-hot">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-5">
              <a href={`mailto:${EMAIL}`} className="block text-lg underline decoration-hot decoration-2 underline-offset-4 hover:text-hot">
                {EMAIL}
              </a>
              {SOCIALS_LIVE && (
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/hotballscoldballs" aria-label="Hot Balls Cold Balls on Instagram" className="grid size-12 place-items-center rounded-full bg-raised hover:bg-raised-2">
                    <InstagramLogo size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@hotballscoldballs" aria-label="Hot Balls Cold Balls on TikTok" className="grid size-12 place-items-center rounded-full bg-raised hover:bg-raised-2">
                    <TiktokLogo size={24} />
                  </a>
                </div>
              )}
              <Button href="/#join">Join the Ball Club</Button>
            </div>
          </div>
        </div>
        <p className="mt-20 text-base text-muted">© 2026 Ballerz Restaurants LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
