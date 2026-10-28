import type { Metadata } from "next";
import { SITE_NAME } from "./site";

const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Hot Balls Cold Balls logo: a half-orange, half-teal winking ball beside the words Hot Balls, Cold Balls, Have a Ball",
};

/** Per-page title, description, canonical URL and share tags, all with the shared share image. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE_NAME, title: full, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: full, description, images: [OG_IMAGE.url] },
  };
}
