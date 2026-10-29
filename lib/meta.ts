import type { Metadata } from "next";

/** Per-page title, description, canonical URL and share tags. The share image comes from app/opengraph-image.tsx. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}
