"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Marks each .reveal block once it scrolls into view. CSS does the animating. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-in", "");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal:not([data-in])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
