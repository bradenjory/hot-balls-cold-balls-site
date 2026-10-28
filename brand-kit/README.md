# Hot Balls Cold Balls: handoff kit

Everything needed to rebuild the Hot Balls Cold Balls website as a coded site in a new repo, picking up exactly where the Squarespace audit left off.

## What's in here

| Path | What it is |
|---|---|
| `START-HERE.md` | The brief to paste into the new chat. Self-contained: design direction, brand tokens, final copy for all six pages, form specs, the audit fixes, open decisions and the definition of done. |
| `assets/brand/` | Logo, half-and-half symbol, Blaze and Frost mascots, and the Blaze vs Frost banner, downloaded at full resolution from the live site. Keep these. |
| `assets/placeholders-replace-me/` | The 12 placeholder cards from the old site. Reference only: they show which slots need real photos. Don't publish them. |
| `reference/current-site/` | Screenshots of every page of the current Squarespace site at desktop (1440px) and phone (390px) widths. |

## How to use it

1. **Create the new repo** on GitHub (for example `hot-balls-cold-balls-site`). Tick "Add a README" so it isn't empty.
2. **Add this kit to the repo as a folder named `brand-kit/`.** Either:
   - On github.com: open the repo, choose Add file → Upload files, and drag in the unzipped `hot-balls-cold-balls` folder's contents into a `brand-kit/` folder; or
   - With git: copy this folder into the repo as `brand-kit/`, then commit and push.
3. **Start a new Claude Code session on that repo** (claude.ai/code, or `claude` in a local clone).
4. **Paste the contents of `START-HERE.md`**, starting from the line under the `---`. Claude will install the design skill, ask you the open decisions once, then build.

## Network notes for a cloud session

If the session runs in a Claude Code cloud environment with limited network access, these hosts may need to be allowed (environment menu → Edit → Network access → Allowed domains):

- `fonts.googleapis.com` and `fonts.gstatic.com`: Google Fonts for Fredoka and DM Sans. If you'd rather not allow them, the brief tells Claude to fall back to the same fonts from npm.
- Your form provider (for example `formspree.io`), once you pick one.
- Optional, to compare with the old site: `cat-buttercup-ltxr.squarespace.com`, `static1.squarespace.com`, `images.squarespace-cdn.com`, `assets.squarespace.com`, `definitions.sqspcdn.com`, `file.squarespace-cdn.com`.

GitHub and the npm registry are normally reachable already, which covers installing the design skill.
