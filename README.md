# Hot Balls Cold Balls

Marketing website for Hot Balls Cold Balls, a fast-casual restaurant coming to Utah in summer 2027.

Next.js (App Router) with TypeScript, Tailwind CSS v4, Motion and Phosphor icons. Fonts are Fredoka and DM Sans via `next/font/google`. The brief, brand assets and screenshots of the old Squarespace site are in [`brand-kit/`](brand-kit/). Screenshots of this build at 1440px and 390px are in [`docs/screenshots/`](docs/screenshots/).

## Run it

Needs Node 20.9 or newer (built and tested on Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start   # production build on http://localhost:3000
```

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/menu` | `app/menu/page.tsx` (menu data in `lib/menu.ts`) |
| `/locations` | `app/locations/page.tsx` |
| `/pick-a-side` | `app/pick-a-side/page.tsx` (reads `?side=blaze|frost`) |
| `/our-story` | `app/our-story/page.tsx` |
| `/contact` | `app/contact/page.tsx` (reads `?topic=general|careers|real-estate|creators|catering`) |

Site-wide settings (domain, email, nav, cities, social links) are in `lib/site.ts`. Brand tokens are at the top of `app/globals.css`.

## Forms

There are three forms. Each posts to its own server action in `app/actions.ts`, which validates the fields and passes the submission to `deliver()` in `lib/forms.ts`:

- **Join the Ball Club** (home and Pick a Side)
- **Town Vote** (Locations)
- **Contact** (Contact)

Every form has a honeypot field. If the provider is missing or rejects a submission, the visitor sees an error that offers the email address, and the server logs the reason. A submission is never reported as a success unless the provider accepted it. The forms also work with JavaScript turned off.

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `FORM_PROVIDER` | `formspree` (default) or `webhook` |
| `FORMSPREE_BALLCLUB_ID` | Formspree form ID for Join the Ball Club (the part after `formspree.io/f/`) |
| `FORMSPREE_TOWNVOTE_ID` | Formspree form ID for the town vote |
| `FORMSPREE_CONTACT_ID` | Formspree form ID for the contact form |
| `FORM_WEBHOOK_URL` | Only with `FORM_PROVIDER=webhook`. Receives `POST { form, data, submittedAt }` as JSON. |

To move to another provider (Resend, Supabase, a CRM), add a branch to `deliver()` in `lib/forms.ts`. The forms and actions stay the same.

## Deploy (Vercel)

1. Import the repo in Vercel. The framework preset is detected automatically; no build settings need to change.
2. Add the environment variables above under Project → Settings → Environment Variables.
3. Add the domain `hotballscoldballs.com`. The canonical URLs, sitemap and share tags already use it (`SITE_URL` in `lib/site.ts`).

`/pick-a-side` and `/contact` render on request, because they read the query string to preselect a side or topic. Every other page is static.

## Before launch

- **Social accounts.** When Instagram and TikTok are live, set `SOCIALS_LIVE = true` in `lib/site.ts` and check the two URLs there. The footer icons appear once that's done.
- **Logo.** `public/brand/logo-on-dark.png` has the page color baked in, so it only works on the dark background. We need a transparent SVG of the lockup.
- **Team banner.** `public/brand/blaze-vs-frost.png` uses red and blue instead of the brand orange and teal. It should be redrawn in brand colors.
- **Photos.** Every slot below is marked with a `TODO` comment in the code. Mascots and drawn shapes stand in until real photos exist.

| Page | Slot | Size |
|---|---|---|
| Home | Hot box: meatballs, arancini and mac-and-cheese balls in a branded box | 1600x1200, circle crop |
| Home | Cold cup: gelato scoops, mochi and donut holes in a team cup | 1600x1200, circle crop |
| Home | Boba: brown sugar milk tea with tapioca pearls | 1600x1200, circle crop |
| Home | Storefront at dusk with the giant glowing ball out front | 1600x1600, circle crop |
| Home | The neon "Have a Ball" wall with people posing | 1200x1200, circle crop |
| Home | A hand holding the launch sticker set | 1200x1200, circle crop |
| Home | A Blaze sleeve cup and a Frost sleeve cup side by side | 1200x1200, circle crop |
| Menu | Hot hero: meatballs in marinara with arancini | 1600x1200, circle crop |
| Menu | Cold hero: gelato scoops and mochi in a Frost cup | 1600x1200, circle crop |
| Menu | Boba lineup: brown sugar milk tea, taro, mango fruit tea | 1600x1200 |
| Pick a Side | A Blaze sleeve box and a Frost sleeve cup on the counter | 1600x1000 |
| Pick a Side | Sticker art: launch Blaze, launch Frost, Utah drop, campus colors, mystery | 1000x1000 transparent PNG each |
| Pick a Side | The Ball Club app on a phone showing the side leaderboard | 1200x1600 |
| Our Story | Guests taking a photo at the neon wall | 1200x1200, circle crop |
| Our Story | Opening crew in uniform behind the counter | 1600x1200 |

## Design skill

The `design-taste-frontend` skill (v2.1.5) is vendored in `.agents/skills/design-taste-frontend/`, with a symlink in `.claude/skills/`. `skills-lock.json` records its source and commit. It was copied by hand because the `skills` CLI couldn't run in the build session.
