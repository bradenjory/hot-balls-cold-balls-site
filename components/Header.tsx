"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { List, X } from "@phosphor-icons/react";
import { NAV } from "@/lib/site";
import { buttonClass } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-bg">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Hot Balls Cold Balls, home" className="shrink-0">
          <Image
            src="/brand/hbcb-logo-horizontal-tagline-on-dark.png"
            alt="Hot Balls Cold Balls"
            width={2400}
            height={893}
            priority
            className="h-12 w-auto"
            sizes="130px"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="font-medium text-ink/90 underline-offset-8 decoration-2 decoration-hot hover:text-ink hover:underline aria-[current=page]:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href="/#join" className={buttonClass("hot")}>
            Join the Ball Club
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid size-12 place-items-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} weight="bold" /> : <List size={30} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Main"
            className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-bg lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="wrap flex flex-col gap-2 pt-8">
              {NAV.map((item, i) => (
                <m.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, type: "spring", bounce: 0.35 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 font-display text-5xl font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </m.li>
              ))}
              <li className="pt-8">
                <Link href="/#join" className={buttonClass("hot")} onClick={() => setOpen(false)}>
                  Join the Ball Club
                </Link>
              </li>
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
