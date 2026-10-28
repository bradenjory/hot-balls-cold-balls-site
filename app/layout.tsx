import type { Metadata, Viewport } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { RevealObserver } from "@/components/RevealObserver";
import { EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const description =
  "Hot balls, cold balls, boba in between. A fast-casual spot for meatballs, arancini, gelato, mochi and bubble tea, coming to Utah in summer 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Hot balls, cold balls, boba in Utah`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: SITE_NAME,
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description,
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#141019",
  colorScheme: "dark",
};

// If the app script never runs, show everything after a short wait instead of leaving it hidden.
const REVEAL_BOOT =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.add('reveal-all')},3000)";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Ballerz Restaurants LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/symbol.png`,
  email: EMAIL,
  slogan: "Have a Ball",
  areaServed: { "@type": "State", name: "Utah" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as scripted so scroll entrances may hide content until it enters. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="btn btn-hot fixed left-4 top-3 z-[60] -translate-y-24 focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
