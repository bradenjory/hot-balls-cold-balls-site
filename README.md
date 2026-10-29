# Hot Balls Cold Balls

Marketing website for Hot Balls Cold Balls, a fast-casual restaurant coming to Utah in summer 2027.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion. The original brief and brand assets are in [`brand-kit/`](brand-kit/).

## Run it

Needs Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
```

## Forms

Three forms, each a Next.js server action in [`lib/forms.ts`](lib/forms.ts): Ball Club (home and Pick a Side), Town Vote (Locations) and Contact.
Each one validates on the server, shows inline errors, has a honeypot field for spam, and shows a real success state.

They post to [Formspree](https://formspree.io). Create one Formspree form per site form and set its ID (the part after `formspree.io/f/`):

| Variable | Form |
| --- | --- |
| `FORMSPREE_BALL_CLUB_ID` | Join the Ball Club (email, ZIP, side) |
| `FORMSPREE_TOWN_VOTE_ID` | Bring us to your town (email, city) |
| `FORMSPREE_CONTACT_ID` | Contact (name, email, topic, message) |

Copy `.env.example` to `.env.local` for local work. Without an ID, development logs the submission to the terminal and shows success; production shows an error asking the visitor to email us, so a submission is never dropped silently.
To switch provider (Resend, Supabase), change `deliver()` in `lib/forms.ts`; nothing else touches the provider.

Query presets: `/pick-a-side?side=blaze|frost` preselects the side, `/contact?topic=general|careers|real-estate|creators|catering` preselects the topic.

## Deploy (Vercel)

1. Import the repository in Vercel. The framework preset (Next.js) needs no changes.
2. Add the three `FORMSPREE_*` variables under Project Settings, Environment Variables.
3. Point `hotballscoldballs.com` at the project. The canonical URL, sitemap and share tags use that domain (`SITE_URL` in [`lib/site.ts`](lib/site.ts)).

## Content switches

- Social icons: set `SOCIALS_LIVE = true` in `lib/site.ts` once @hotballscoldballs is live on Instagram and TikTok.
- Menu and prices: [`lib/menu.ts`](lib/menu.ts). Cities: `CITIES` in `lib/site.ts`.

## Images still needed

No real photography exists yet, so every photo slot shows a mascot on a flat team colour inside a circle (the site's one shape). Each slot has a `TODO` comment at its call site; pass `photo="/photos/…"` and `alt` to `BallFrame` to drop a picture in.

| Where | Subject | Size |
| --- | --- | --- |
| Home, menu teaser | A hot box of meatballs in marinara with arancini, from above | 1200x1200 |
| Home, menu teaser | A cold cup of gelato scoops, mochi and donut holes, from above | 1200x1200 |
| Home, social gallery | Storefront at dusk with the giant glowing ball sign | 1600x1600 |
| Home, social gallery | The neon wall inside, a friend group posing | 1200x1200 |
| Home, social gallery | A hand fanning out the first sticker drop | 800x800 |
| Home, social gallery | A Blaze cup and a Frost cup clinking | 800x800 |
| Menu, each item (14) | The item cut out on a plain background, shown as a circle | 400x400 |
| Pick a Side, stickers | Blaze in launch costume, Frost in launch costume, the Utah drop, campus colors | 800x800 transparent PNG each |

Brand art also needed: a transparent SVG of the horizontal logo (the PNG has the `#141019` background baked in, so it can only sit on that colour), and a re-export of the Blaze vs Frost banner in brand orange and teal (it currently uses red and blue).

## Design notes

The design follows the `design-taste-frontend` skill in `.agents/skills/`. Its "one motif" direction runs the whole site: the ball (half orange, half teal) is the photo frame, the list bullet, the map pin and the eyebrow dot.
Where the brief and the skill disagreed (eyebrows, coloured words in headlines, pill buttons, the 🌱 marker, 24px cards, the three-line hero headline), the brief won.
