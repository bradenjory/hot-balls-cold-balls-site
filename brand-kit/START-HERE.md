# Hot Balls Cold Balls: website build brief

Paste everything below this line into a new Claude Code session that is attached to the new website repo. This kit's folder must be in that repo at `brand-kit/` (see `README.md`).

---

You are building the marketing website for **Hot Balls Cold Balls**, a pre-launch fast-casual restaurant brand opening in Utah in summer 2027. The site currently exists on Squarespace (`https://cat-buttercup-ltxr.squarespace.com`). We audited it with the `design-taste-frontend` skill and decided to rebuild it as a coded site in this repo. This brief contains everything from that audit: the design direction, exact brand tokens, final page copy with all fixes applied, form specs, and a list of problems the rebuild must fix. Brand assets are in `brand-kit/assets/`. Screenshots of the current site are in `brand-kit/reference/current-site/` (named `<page>-<desktop|mobile>-<nn>.png`, each a 1800px-tall slice at 1440px or 1600px-tall slice at 390px wide).

## 0. Before you write code

1. Install the design skill and follow it for every design decision:
   ```
   npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
   ```
   Then load it (it installs to `.agents/skills/design-taste-frontend/` with a symlink in `.claude/skills/`). Commit the skill and `skills-lock.json` with the first commit.
2. Look at the reference screenshots and the brand assets before designing.
3. Send me ONE message listing the open decisions in section 9 with your proposed defaults. If I reply "go" (or don't object), use the defaults.
4. Then scaffold, build page by page, and run the skill's pre-flight check before calling anything done.

## 1. Design Read and dials (already decided)

**Design Read:** Reading this as: pre-launch fast-casual restaurant site for Utah teens and college students (roughly 14 to 24, social-first), with a playful, cheeky, sticker-and-rivalry language, leaning toward a locked dark theme, two team accents (hot orange vs. cold teal), rounded Fredoka display type and bouncy but restrained motion.

**Mode:** Redesign, preserve. Keep the brand, logo, mascots, voice, page structure and URL slugs. Rebuild the visuals and fix everything in section 7.

**Dials:** `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 6`, `VISUAL_DENSITY: 4`.

**Theme:** dark only, locked for the whole site. Do not add a light mode. Do not insert light sections. The one exception is the full-bleed orange marquee strip, which is a deliberate brand moment.

## 2. Stack

Use the skill's defaults unless you have a concrete reason not to:
- Next.js (App Router, React Server Components), TypeScript
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Motion (`motion/react`) for animation; respect `prefers-reduced-motion` everywhere
- Fonts via `next/font/google`: **Fredoka** (600, 700) for display, headings and buttons; **DM Sans** (400, 500, 700) for body and UI. No other font families.
  - If the build environment can't reach `fonts.googleapis.com` / `fonts.gstatic.com`, install `@fontsource/fredoka` and `@fontsource/dm-sans` from npm and load the `.woff2` files with `next/font/local` instead.
- Icons: `@phosphor-icons/react`
- Images via `next/image`; hero image `priority`
- Deploy target: Vercel
- Forms: see section 6

## 3. Brand tokens (measured from the live site)

| Token | Hex | Use |
|---|---|---|
| `bg` | `#141019` | Page background (deep purple-black, not pure black) |
| `bg-raised` | `#1C1726` | Alternate section background, cards |
| `ink` | `#FFF4E2` | All text on dark (warm cream) |
| `hot` | `#FF7A1A` | Team Blaze, hot menu, primary CTA, marquee strip |
| `cold` | `#1ED6C6` | Team Frost, cold menu, anything cold |
| ~~`#FFC93C`~~ | retired | The old site used this yellow only on small labels. Do not use it. |

Rules:
- **Hot things are orange, cold things are teal, everything neutral is cream.** This includes buttons: Frost buttons are teal, never orange.
- Primary CTA: filled `hot` pill, `ink` label. Cold-side CTA: filled `cold` pill with `bg` label (check contrast). Secondary: outline pill.
- Corner radius system: full pill for buttons and inputs, 24px for cards and images. Use it everywhere.
- Fredoka headings at weight 700 with slight negative tracking (about -0.02em). Current sizes for reference: H1 68px, H2 47px, H3 37px, large body 23px. Body text minimum 16px, never smaller.
- Shadows, if any, are tinted to `bg`, not black. No neon glows.

## 4. Assets (`brand-kit/assets/`)

**Brand art (keep):**
- `brand/hbcb-logo-horizontal-tagline-on-dark.png` (2400x893): half-orange, half-teal winking face + "HOT BALLS" (orange) / "COLD BALLS" (teal) / "HAVE A BALL" (cream), in rounded caps. The PNG has the `#141019` background baked in (no transparency), so only place it on `bg`. Flag that we need a transparent SVG version.
- `brand/hbcb-symbol.png` (1024x1024, transparent): the half-and-half face alone. Use it for the favicon, app icon and OG image.
- `brand/hbcb-blaze.png` (1200x1267, transparent): Blaze, orange ball mascot with a flame on top and a sweat drop.
- `brand/hbcb-frost.png` (1200x1267, transparent): Frost, teal ball mascot with sunglasses and sparkles.
- `brand/hbcb-blaze-vs-frost-banner.png` (1920x1080): Team Blaze vs Team Frost banner. This is the strongest image on the current site. Note: it uses red/blue backgrounds instead of the brand orange/teal.

**Placeholders (do NOT reuse):** `placeholders-replace-me/` holds 12 placeholder cards from the old site (a mascot on a glow with tiny baked-in captions). They are only here so you know which slots need real photography. Do not put them on the new site. Until real food photos exist, use the mascots and symbol as visuals, and leave clearly labeled image slots per the skill's section 4.8 (e.g. `{/* TODO: photo, meatballs in marinara, 1600x1200 */}`). If an image-generation tool is available, use it for food photography in a consistent style. At the end, list every slot that needs a real photo.

## 5. Pages and copy

Keep these slugs: `/`, `/menu`, `/locations`, `/pick-a-side`, `/our-story`, `/contact`. No cart, no shop.

**Global header:** logo (links home) | Menu, Locations, Pick a Side, Our Story, Contact | CTA button **Join the Ball Club** (goes to `/#join`). Max 80px tall on desktop (the old one was 128px). Single line on desktop; full-screen menu on mobile.

**Global footer:** logo, the tagline "Hot balls. Cold balls. Boba in between. Coming to Utah.", the nav links, `hello@hotballscoldballs.com`, Instagram and TikTok icons for `@hotballscoldballs` (hide them until the accounts are live, see decisions), "© 2026 Ballerz Restaurants LLC. All rights reserved."

**Copy rules:** this copy already has the audit fixes applied. Use it as written. American spelling. No em dashes or en dashes anywhere (skill section 9.G). Use typographic apostrophes and quotes. Small uppercase labels above headlines ("eyebrows") only where marked **[eyebrow]**; the skill caps them at one per three sections. The one name for the waitlist everywhere is **Join the Ball Club**.

### 5.1 Home `/`

1. **Hero.** [eyebrow] Coming to Utah, summer 2027
   - H1 (three lines, colored): "Hot balls." (hot) / "Cold balls." (cold) / "Boba in between." (ink)
   - Subtext: "Meatballs, arancini and mac-and-cheese balls on one side. Gelato, mochi and donut holes on the other. Pick yours."
   - Buttons: **See the menu** (primary, `/menu`) and **Join the Ball Club** (secondary, `#join`)
   - Visual: Blaze, the half-and-half symbol, Frost. On mobile they must sit in one row (or show only the symbol). Do not stack them in a tall column.
2. **Marquee strip** (full-bleed `hot` background, giant cream Fredoka, loops): "Have a Ball ● Pick a Side ● #GotBalls ●". It is decoration: a `<p>` or `aria-hidden` element, not a heading. Pause it under reduced motion.
3. **Menu teaser.** H2 "One kitchen. Two temperatures."
   - **Hot Balls** (hot): "Meatballs (beef, chicken, plant-based), crispy arancini, mac-and-cheese balls, falafel, buffalo chicken balls and garlic dough balls." Button **Hot menu** (hot, `/menu#hot`)
   - **Cold Balls** (cold): "Gelato and ice-cream scoops, mochi, cookie-dough bites, donut holes, cake pops and fresh fruit balls." Button **Cold menu** (cold, `/menu#cold`)
   - **Plus, boba. Literally balls in a cup.** "Make it a Hot + Cold combo: a savory box plus a cold ball or a boba."
4. **Rivalry.** [eyebrow] The rivalry. H2 "Pick a side."
   - **Team Blaze** (hot, Blaze mascot): "The hot side. Blaze is all crunch, sauce and swagger. If your order comes in a box and drips a little, you're one of us." Button **I'm Team Blaze** (`/pick-a-side?side=blaze#join`)
   - **Team Frost** (cold, Frost mascot): "The cold side. Frost keeps it cool: scoops, mochi and anything with sprinkles. If you've ever had dessert first, you're one of us." Button **I'm Team Frost** (cold, `/pick-a-side?side=frost#join`)
   - H3 "Every order is a vote." Body: "Team Blaze or Team Frost: on your cup, your sticker, and the leaderboard in every store."
5. **Locations teaser.** H2 "Six Utah spots. Coming soon." Body: "Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City." (a sentence or a clean grid, never a dot-separated line that wraps). Button **See locations** (`/locations`)
6. **Social.** H2 "Tag us. We'll make you famous-ish." Body: "@hotballscoldballs on Instagram and TikTok. Both go live closer to opening." Visual: a gallery that needs real photos later (storefront with the giant glowing ball, the neon wall, sticker drops, team cups). Do not use a row of four identical cards.
7. **Join the Ball Club** (`id="join"`). H2 "Join the Ball Club." Body: "First to know when we open near you, first in line for sticker drops, and a free ball on your birthday." Ball Club form (section 6). No empty space below the form.

### 5.2 Menu `/menu`

Hero: [eyebrow] Coming summer 2027. H1 "The Menu". Body: "Portion, cook, sauce, serve. Pick your balls, pick your sauce, pick a side." Note: "🌱 = plant-based. Menu and prices may change before opening." Button **See locations**.

Lay prices out as item name + price columns (or a menu card per category), not dot-separated strings. Use one 🌱 marker consistently for plant-based items.

**Hot Balls** (`id="hot"`, hot accent, Blaze). Intro: "Snack or Regular. One sauce included, extra sauce $0.75."

| Item | Prices | Description |
|---|---|---|
| Meatballs | 3 for $5.49, 6 for $8.99 | Beef, chicken or plant-based 🌱, in your sauce of choice. |
| Arancini | 3 for $6.49, 5 for $9.99 | Crispy risotto balls with a melty center. |
| Mac & Cheese Balls | 4 for $4.99, 8 for $8.49 | Fried mac, gooey inside. |
| Buffalo Chicken Balls | 4 for $5.99, 8 for $9.49 | With ranch or blue cheese dip. |
| Falafel 🌱 | 4 for $4.99, 8 for $7.99 | Crispy chickpea balls, tahini drizzle. |
| Garlic Dough Balls | 6 for $3.99, 12 for $6.99 | Warm, buttery, made for dipping. |
| Mix Box | $10.99 | Any 2 kinds, 8 balls. |

Sauces: Ranch, Honey Sriracha, Spicy Buffalo, Garlic Aioli, Marinara, Sweet Chili.

**Cold Balls** (`id="cold"`, cold accent, Frost)

| Item | Prices | Description |
|---|---|---|
| Gelato | 1 scoop $4.49, 2 scoops $6.49 | Rotating flavors, cup or cone. |
| Mochi Ice Cream | 2 for $4.49, 4 for $7.99 | Ice cream wrapped in chewy rice dough. |
| Donut Holes | 6 for $3.49, 12 for $5.99 | Glazed, dusted or filled. |
| Cookie-Dough Bites | Cup $4.49 | Safe-to-eat, by the cup. |
| Cake Pops | 1 for $3.49, 3 for $8.99 | Seasonal mascot designs. |
| Fresh Fruit Balls 🌱 | Cup $3.99 | Melon and seasonal fruit, chilled. |
| Cold Mix Cup | $6.99 | Any 3 cold balls. |

**Plus, boba.** (`id="boba"`) "Bubble tea is balls in a cup, so of course it's here."

| Item | Prices | Options |
|---|---|---|
| Milk teas | Regular $5.49, Large $6.49 | Classic Black, Brown Sugar, Taro, Thai Tea, Matcha |
| Fruit teas | Regular $5.29, Large $6.29 | Mango, Strawberry, Passion Fruit, Peach |
| Toppings | +$0.75 each | Tapioca pearls, Strawberry popping boba, Mango popping boba, Lychee jelly, Cheese foam |

**Combos**

| Combo | Price | Description |
|---|---|---|
| Hot + Cold Combo | $11.99 | A Regular hot box plus a small cold item. Why choose? (You still have to pick a side.) |
| Hot + Cold + Boba | $15.49 | The Hot + Cold Combo plus a regular boba. |
| "Pick a Side" Snack Combo | $8.49 | A snack box plus a small cold item. |

Footer notes: "Order online at opening on DoorDash and Uber Eats." and "Our kitchen handles wheat, dairy, eggs, soy, tree nuts and peanuts. Full allergen and nutrition info coming with the final menu."

### 5.3 Locations `/locations`

Hero: [eyebrow] Coming soon. H1 "Rolling into Utah." (with "Utah." in hot). Body: "Six spots along the Wasatch Front, close to the campuses and neighborhoods where you already hang out. Sign up and we'll tell you the minute yours opens." Button **See the menu**.

H2 "Pick your spot." Six location cards, each "Location coming soon. Opening TBD.":
- **Lehi**: Utah County, north
- **Saratoga Springs**: Utah County, west
- **Draper**: Salt Lake County, south
- **Herriman**: Between the Herriman and Riverton high schools
- **Provo**: Near BYU
- **Salt Lake City**: Near the University of Utah

A simple stylized map of the Wasatch Front with the six pins would beat a placeholder image. Button **Join the Ball Club** (`/#join`).

H2 "Bring us to your town." Body: "Tell us where you want the next one. The town with the most votes gets a closer look." Town Vote form (section 6).

[eyebrow] Landlords & brokers. H2 "Got a space with foot traffic?" Body: "We're looking for 2,500-3,000 sq ft end-caps and pads near high schools and universities along the Wasatch Front. Drive-thru preferred, not required." Button **Submit a site** (`mailto:hello@hotballscoldballs.com?subject=Real%20estate`).

### 5.4 Pick a Side `/pick-a-side`

Hero: [eyebrow] The rivalry. H1 "Hot or cold? Pick a side." ("Hot" in hot, "cold?" in cold). Body: "Team Blaze or Team Frost. Every cup and box you order counts for your side." Visual: the Blaze vs Frost banner.

H2 "Two teams. One rivalry."
- **Team Blaze** (hot): "The hot one. Arancini, meatballs, dough balls. Loud, loyal, a little sweaty." Button **Join Team Blaze** (`#join` with side preset to Blaze)
- **Team Frost** (cold): "The cold one. Gelato, mochi, donut holes, cookie-dough bites. Too cool to sweat it." Button **Join Team Frost** (cold, `#join` with side preset to Frost)

H2 "How the rivalry works" (three items, no "01/02/03" numbering; make it visual, not a small-text list):
- **Order = vote.** Every cup and box gets a Blaze or Frost sleeve. Your order counts for your side.
- **Store leaderboards.** Each store tracks the score. Each month, the winning side votes on a new menu item for the next quarter.
- **Sticker drops.** Every new flavor brings a collectible mascot costume. Collect the set.

H2 "The sticker collection." Body: "Blaze and Frost in launch costumes, a Utah-themed drop, campus colors and a mystery sticker. One in every bag. The first drop arrives at opening. Sticker art coming soon."

H2 "The Ball Club." Body: "Our loyalty app, coming at opening." Perks:
- Streaks: come back, level up
- Combo rewards for going Hot + Cold
- Your side's leaderboard, live
- Early access to every sticker drop
- A free ball on your birthday

Join section (`id="join"`). H2 "Save your spot." Body: "Join the Ball Club, pick your side, and be first in when the app goes live." Ball Club form (section 6), side preselected from `?side=`.

### 5.5 Our Story `/our-story`

Hero: [eyebrow] Our story. H1 "Cheeky name. Wholesome face." ("Wholesome face." in hot). Body: "Dozens of the foods people love are already round. We put them all under one roof, split the menu down the middle, and gave it a name you'll repeat to your friends. That's the whole idea." Visual: the symbol or both mascots (not the old storefront placeholder).

H2 "Three big ideas." Not three equal text-only columns: vary sizes or pair each idea with a mascot.
- **Everything's a ball.** The food, the space, the brand. One simple kitchen, a deep menu, endless new flavors.
- **Made to share.** A giant glowing sphere out front, a neon wall inside, stickers in every bag. Bring your camera.
- **Born in Utah.** Utah has the youngest population in the country, so it felt like the right place to start. Lunch, after-school, late night.

[eyebrow] Want in? H2 "We're building opening crews." Body: "Flexible shifts around school, real training, and a uniform you'll actually want to wear." Button **See careers** (`/contact#work-with-us`).

### 5.6 Contact `/contact`

Hero: [eyebrow] Say hi. H1 "Got a question? Have a ball with us." Body: "Questions, collabs, catering ideas, or just a strong opinion about hot vs. cold." Email link `hello@hotballscoldballs.com`. Contact form (section 6).

H2 "Crews, spaces and creators." (`id="work-with-us"`), three items:
- **Join an opening crew.** "Crew members, shift leads and store managers for our first Utah stores. Flexible shifts around school. Ages 14 and up." Button **Apply to join a crew** (`mailto:hello@hotballscoldballs.com?subject=Careers`)
- **Landlords & brokers.** "High-visibility retail near high schools and universities on the Wasatch Front. Send us the flyer." Button **Send us a site** (`mailto:hello@hotballscoldballs.com?subject=Real%20estate`)
- **Be a Ball Ambassador.** "Local student creators get first tastes, launch-day access and exclusive stickers. Press kit available on request." Button **Apply as a creator** (scrolls to the form with "Creators & press" preselected)

H2 "Questions, answered." Use an accordion:
- **When do you open?** Our first Utah stores open in summer 2027. Join the Ball Club and you'll hear first.
- **Where will you be?** Lehi, Saratoga Springs, Draper, Herriman, Provo and Salt Lake City to start. Vote for your town on the Locations page.
- **Is the name… family-friendly?** Cheeky name, wholesome face. It's meatballs and mochi, we promise. Kids love it.
- **Do you have vegetarian or allergy-friendly options?** Plant-based meatballs, falafel and most cold balls are meat-free. Full allergen info will be posted with the final menu.
- **Do you cater?** Yes. Ball boxes for parties, teams, offices and events. Send us a note through the form above and pick "Catering & events."
- **Do you franchise?** Not right now. Every store is company-owned.

## 6. Forms

Labels above inputs, never placeholder-as-label. Inline error text below each field. A real success state. The submit button is always the filled primary style (the old site's outline submit buttons looked secondary). Keep forms tight: no dead space below them.

1. **Ball Club** (home `#join`, Pick a Side `#join`). Fields: Email (required); ZIP code (optional, helper "So we can tell you when we open near you."); Your side (Team Blaze (hot side), Team Frost (cold side)), preselected from `?side=blaze|frost`. Submit: **Count me in**. Success: "You're in. Watch your inbox for first-bite news." (The old home form also asked for first and last name; see decisions.)
2. **Town Vote** (Locations). Fields: Email (required); City or neighborhood (required, placeholder example "Orem, Sugar House, St. George"). Submit: **Cast my vote**. Success: "Vote counted. We'll let you know if we're headed your way."
3. **Contact**. Fields: First name and Last name (required); Email (required); What's this about? (General, Careers, Real estate / a site, Creators & press, Catering & events), preselectable via `?topic=`; Message (required). Submit: **Send it**. Success: "Thanks! We'll get back to you soon."

Backend: see decisions. Build the form layer so the provider can be swapped (one server action or route handler per form, configured by environment variables), add spam protection (honeypot at minimum), and never silently drop a submission.

## 7. Problems on the current site the rebuild must fix

From the audit (text pass and visual pass at 1440px and 390px):
1. Footer social icons linked to Squarespace's own Facebook, Instagram and X accounts (template defaults). Only link the brand's real accounts.
2. Every image was a placeholder card with captions baked in at 6-9px. Never put text inside images; there are no real food photos yet (see section 4).
3. Team Frost buttons were orange. Cold equals teal everywhere.
4. Form submit buttons were thin outlines. Make them filled primary.
5. Mobile hero stacked three mascots into a column about 600px tall.
6. Headings collided with the next block on mobile ("One kitchen. Two temperatures." into "Hot Balls", "Pick a side." into "Team Blaze") and on the desktop Menu page ("Sauces" into the Cold Balls label). Design each section's mobile layout explicitly.
7. Large empty gaps under forms (about 400px on mobile).
8. The dot-separated city list wrapped with dangling dots.
9. Buttons were wide fixed pills with small 14px labels. Size buttons to their label, 16-18px text, and keep labels on one line.
10. Body text was 14px in many sections. Minimum 16px.
11. Small uppercase labels came in three colors (including the retired yellow) and sat above almost every heading. Use them only where marked in section 5.
12. The FAQ was a long column of six items. Use an accordion.
13. The header was 128px tall. Cap it at 80px.
14. The marquee was a heading, so the homepage had three H1s. One H1 per page.
15. No image had alt text. Write real alt text for every image (mascots: "Blaze, the Team Blaze mascot: an orange ball with a flame on top"; decorative images get `alt=""`).
16. No page had an SEO description, and only the homepage had a share image. Give every page a unique title ("Menu | Hot Balls Cold Balls" style, no em dash), a meta description, Open Graph and Twitter tags, a share image built from the symbol, a favicon from the symbol, `sitemap.xml` and `robots.txt`, and Organization JSON-LD.
17. A shopping cart icon showed although nothing is for sale. No cart.
18. Copy fixes are already applied in section 5 (British spellings, em dashes, the "youngest state" error, the subtext length, the waitlist label, the boba team mismatch).
19. "Hot menu" and "Cold menu" went to the top of the Menu page. Link to `/menu#hot` and `/menu#cold`.

Keep what worked: the logo, the mascots, the Fredoka + DM Sans pairing, the near-black (not pure black) base, the cream text contrast, the single-line desktop nav, the hero fitting in the first screen, the orange marquee, and the voice.

## 8. Motion ideas (MOTION_INTENSITY 6)

Light and on-brand, all disabled or reduced under `prefers-reduced-motion`:
- Looping marquee strip.
- Mascots with a gentle idle bob; a small squash on hover.
- Hot and cold cards that lean toward the cursor or tilt on hover (Motion values, not React state).
- Staggered fade-up reveals on scroll.
- Buttons press down slightly on `:active`.
No custom cursors, no scroll-jacking, no parallax on text.

## 9. Open decisions (ask me once, in one message, with these defaults)

1. **Boba's team.** Default: boba is "in between" (neither team), as on the Home and Menu pages. The old Pick a Side page put it on Team Frost; that copy is already fixed above.
2. **Ball Club form fields.** Default: Email + ZIP + side, no name fields. Alternative: keep First and Last name as the old homepage form did.
3. **Form backend.** Default: Next.js server actions posting to Formspree (one form ID per form in env vars), so no database is needed yet. Alternatives: Resend audiences, or Supabase if we want our own table and the leaderboard later.
4. **Social links.** Default: hide the Instagram and TikTok icons until the accounts are live, keeping the "@hotballscoldballs" text mention. Tell me if they're live.
5. **Domain.** Assumed `hotballscoldballs.com` (it matches the email). Used for metadata, sitemap and canonical URLs.
6. **Photography.** Default: no real photos yet; use mascots plus labeled TODO slots, or generated food photos if you have an image tool. Tell me if I have photos to upload.
7. **Logo.** Default: use the PNG on the `bg` color only, and flag that we need a transparent SVG.

## 10. Definition of done

- All six pages built with the copy above, responsive at 390px, 768px, 1024px and 1440px, and checked in a real browser (take screenshots at 390 and 1440).
- The skill's pre-flight check passes, including zero em dashes and en dashes in visible text, one name per action, eyebrow limits, and button and form contrast.
- Lighthouse: Accessibility 95+, SEO 100, LCP under 2.5s on the homepage.
- `npm run build` and lint pass with no errors.
- A list of every TODO image slot with its subject and size.
- A short README covering how to run the site, the env vars for forms, and how to deploy.
