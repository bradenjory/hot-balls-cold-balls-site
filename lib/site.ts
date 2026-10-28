export const SITE_URL = "https://hotballscoldballs.com";
export const SITE_NAME = "Hot Balls Cold Balls";
export const EMAIL = "hello@hotballscoldballs.com";
export const HANDLE = "@hotballscoldballs";

/** Flip to true (and fill in the URLs) once the accounts are live. */
export const SOCIALS_LIVE = false;
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/hotballscoldballs/",
  tiktok: "https://www.tiktok.com/@hotballscoldballs",
};

export const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/pick-a-side", label: "Pick a Side" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;

export const CITIES = [
  { name: "Lehi", note: "Utah County, north" },
  { name: "Saratoga Springs", note: "Utah County, west" },
  { name: "Draper", note: "Salt Lake County, south" },
  { name: "Herriman", note: "Between the Herriman and Riverton high schools" },
  { name: "Provo", note: "Near BYU" },
  { name: "Salt Lake City", note: "Near the University of Utah" },
] as const;

export const mailto = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
