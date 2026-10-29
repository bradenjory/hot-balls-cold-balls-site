import type { Metadata, Viewport } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import { Motion } from "@/components/Motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-fredoka" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });

const description =
  "Meatballs, arancini and mac-and-cheese balls on one side. Gelato, mochi and donut holes on the other. Boba in between. Coming to Utah, summer 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Have a Ball`, template: `%s | ${SITE_NAME}` },
  description,
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#141019", colorScheme: "dark" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Ballerz Restaurants LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/hbcb-symbol.png`,
  email: EMAIL,
  slogan: "Have a Ball",
  areaServed: { "@type": "State", name: "Utah" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-bg">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Motion>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
        </Motion>
      </body>
    </html>
  );
}
