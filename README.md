# Swayam Heartcare — homepage design prototype

A high-fidelity homepage prototype for **Swayam Heartcare and Wellness**, Rohtak
(existing site: https://swayamheartcare.com). Phase 2 of the engagement.

> **This is a design prototype, not a production site.** The callback form sends
> nothing. Content that the Phase 1 audit could not verify is flagged in the
> page itself. Nothing on the live website has been touched.

## Run it

```bash
npm install
npm run dev
```

Then open **http://localhost:4321**.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built output |

## Deploying

| Command | Use for |
|---|---|
| `npm run build` | **Netlify, Vercel, any host serving at a domain root.** Astro's absolute `/assets/…` paths are correct there. |
| `npm run build:artifact` | **Only** the claude.ai artifact deploy, which is not served from a root. Runs the build then rewrites asset URLs to relative. Never use this for Netlify or Vercel. |

`netlify.toml` and `vercel.json` are both committed and set the same things:
build command, `dist` as the publish directory, Node 22, immutable caching on
the fingerprinted `/assets/*` files, and an `X-Robots-Tag: noindex, nofollow`
header.

> **Keep the noindex until launch.** The page already carries a `noindex` meta
> tag; the header is the belt to its braces. This prototype uses the practice's
> real name, brand mark, address and phone, so it must not be indexed and
> mistaken for swayamheartcare.com. Remove both only when it becomes the real
> site, on the real domain, with the content verified.

Astro's asset directory is set to `assets` rather than the default `_astro`,
because some static hosts reserve paths beginning with an underscore.

### Connecting a host

1. Create an empty GitHub repository — no README, licence or .gitignore, since
   this repo already has them.
2. `git remote add origin <url>` then `git push -u origin main`.
3. On Netlify: *Add new site → Import an existing project*, pick the repo. The
   build settings come from `netlify.toml`, so change nothing.
   On Vercel: *Add New → Project*, pick the repo; `vercel.json` does the same.
4. Every push to `main` redeploys; pull requests get their own preview URL.

## Reviewing the prototype

- **"Prototype notes"** — a pill at the bottom-left on desktop. Switching it on
  highlights every unverified claim with a label saying what must be confirmed
  with the client. There are **19** such items. Switched off, you see the design
  as proposed.
- Unverified content always carries a faint dotted underline, notes on or off,
  so nothing uncertain is ever presented as settled fact.
- Resize the window: the layout is built and checked at **375 / 768 / 1440 px**.

## Design system

Everything lives in `src/styles/global.css` under `@theme` — colour, type scale,
spacing, radii. No component hard-codes a value outside those tokens.

**Clinical Warmth**, the direction recommended in `redesign-strategy.md`:

| | |
|---|---|
| Paper | `#FBFAF7` — warm off-white, never pure white |
| Ink | `#13241F` / `#4A5A54` / `#646F6A` |
| Teal | `#0E3B33` · `#1F6F5F` · `#8FB9AE` · `#E3EFEA` |
| Clay | `#C2603F` — the only accent, used for primary actions and at most twice per screen |
| Serif | Fraunces Variable — display and headings |
| Sans | Inter Variable — body, labels, UI |

Sections are separated by **hairline rules and whitespace**, not by stacked
full-width colour bands. Only two sections use deep colour — the doctor profile
and the organisations band — because colour is the strongest emphasis available
and is spent deliberately.

## Motion

Three rules the system never breaks, all enforced in `global.css`:

1. **The first screen never depends on JavaScript.** The hero entrance is pure
   CSS (`.enter`, `.enter-scale`, `.line-mask`, `.wipe`), so it runs whether or
   not a script loads. Only content below the fold uses the observer.
2. **The observer path fails open.** `[data-reveal]` elements only hide once
   `.js` is set, which happens solely when `IntersectionObserver` exists and
   motion is welcome. If nothing has been revealed after 2.5s the mechanism is
   dropped entirely and the page shows. Above-the-fold items are also revealed
   directly, without waiting for a callback.
3. **`prefers-reduced-motion: reduce` disables all of it** — no animation is
   even declared, and a catch-all reduces any stray duration to ~0.

What moves, and why:

| Effect | Where | Purpose |
|---|---|---|
| Masked line lift | Hero headline | The one "designed" entrance; reserved for the hero |
| Drawn underline | The keyword in the headline | Points at the subject in the practice's accent |
| Clip wipe | Hero photograph | Arrives rather than fades |
| Slow drift | Hero photograph | Depth on scroll (Chrome/Edge; still elsewhere) |
| ECG trace that draws itself | Two section dividers | The practice's own mark — a head with a heartbeat — enlarged |
| Filling spine | Beside the seven services | Binds them into one sequence, and shows progress through it |
| Reading progress | Header hairline | Orientation on a long page |
| Reveal on scroll | Everything below the fold | Staggered within each group |
| Row hover | Service rows | A clay rule draws, the number steps aside, the row warms |
| Magnetic lean | Primary CTA only | Fine-pointer devices only; purely cosmetic |
| Grain plate, ghost type | Whole page, doctor, footer | Surface and ground tone, so flat colour is not empty |
| Stacked scroll | Twice: into the founder, and into contact | A chapter break — the outgoing panel pins while the next rises over it |

**Stacked scroll.** `.stack-base` pins and `.stack-over` rises over it. Used at
exactly two joins: *Why Swayam → Meet the founder*, and *For Organisations →
Visit & enquire*. The arriving panel needs an **opaque background** or the
pinned one shows through, plus a rounded top edge and upward shadow to read as
a sheet arriving.

**Service deck.** The seven services are three stacked panels (3 / 3 / 1 plus
the self-qualification list), each pinning ~18px lower than the last so the
edges beneath stay visible. Grouped by the practice's own numbering, not by
invented themes.

**Sticky fit — why there is no height media query.** A pinned panel taller than
the window would be clipped. The first attempt guarded this with
`min-height`, which was wrong: it switched the effect off entirely for anyone
on a shorter window, and at 1920x810 — an ordinary maximised laptop — both
section stacks silently fell back to normal scrolling.

Instead a small script measures each panel and sets `--stack-top` /
`--deck-top`. When the panel fits, it pins at its intended offset; when it
does not, `top` goes negative so the panel pins bottom-aligned, scrolling up
until its lower edge meets the viewport bottom. Nothing is ever clipped and
the effect runs at any height. Verified at 700, 810, 900 and 1100px tall, and
at 1024px wide where the tallest deck panel (646px) auto-fits from 88px to
46px.

Everything is still gated at `min-width: 1024px`; below that the panels are
ordinary blocks. With JavaScript off the CSS fallbacks apply (`top: 0` and the
staggered deck offsets).

Services as a whole (1883px) and Testimonials (1184px) were never candidates
for *section* stacking — only Why Swayam (888px) and Organisations (832px) are
short enough to work as pinned panels.

## Structure

```
src/
  data/content.ts        All copy. Single source of truth, traced to the audit.
  styles/global.css      Design tokens + the handful of component classes.
  layouts/Base.astro     Head, meta, JSON-LD, skip link, the two inline scripts.
  components/
    Header.astro         Sticky header + full-screen mobile menu
    Hero.astro           Headline, actions, credential strip
    WhySwayam.astro      Three propositions
    DoctorProfile.astro  Deep-teal trust section, sticky portrait
    Services.astro       The seven services as a numbered editorial list
    Testimonials.astro   One lead quote + three supporting
    Organisations.astro  PROVISIONAL — see below
    VisitContact.astro   Address, hours slot, map placeholder
    CallbackForm.astro   Inert enquiry form with validation + demo state
    Footer.astro
    MobileActionBar.astro  Fixed Call / Request bar below lg
    PhotoFrame.astro     Designed photography placeholder
    Flag.astro           Unverified-content marker
    Logo.astro           Typographic wordmark stand-in
  pages/index.astro
```

## What the prototype deliberately fixes

Each of these is a verified defect from `website-audit.md`:

| Old site | Here |
|---|---|
| Hero headline and the only CTA are `display:none` below 768px | Hero is real page content; headline and both actions render at every width |
| All `h1`/`p`/`li` at `opacity:0.1` until jQuery runs — page blank if JS fails | Zero JS bundles. All content is in the HTML. Motion is additive and respects `prefers-reduced-motion` |
| Hero caption overflows its box by 304px and is clipped | Fluid `clamp()` type; no clipping at any width |
| No `tel:` link anywhere on the site | Phone is a `tel:` link in header, hero, contact, footer and the mobile bar |
| ~2.86 MB of images, 44-megapixel logo | 101 KB total transfer, 5 requests |
| 8 `<h1>`s per page, no `h2`–`h6` structure | One `h1`, proper heading order |
| 4 of 5 form labels unassociated; duplicate `id` | Every label has a real `for`; ids unique |
| Form resets on failure, keeps input on success | Input preserved on failure; demo state on success |
| No meta description, Open Graph or structured data | All three present, with `MedicalClinic` JSON-LD |
| Auto-advancing carousels hiding 5 of 8 testimonials | Static; institutional testimonials promoted to the homepage |

## Assets

Two real assets were taken from the live site and prepared for the prototype.
Both are the client's own material, used as temporary placeholders; ownership
and the vector source are still unconfirmed (Q10).

| File | Source | What was done |
|---|---|---|
| `src/assets/swayam-mark.png` | `images/original.png` | Cropped to the brand tile at (1250, 2609) 1110×1130, and the solid red canvas knocked out to transparency so the mark sits on any ground. 512px, 23 KB. |
| `src/assets/swayam-logo-original.png` | same | The full lockup, trimmed of dead space only. **Not used in the layout** — kept for comparison. |
| `src/assets/dr-rajeev-sharma.png` | `images/Dr.Rajeev-Sharma.png` | Unmodified. Framing is done in CSS so the source stays intact. |
| `src/assets/clinic-room.jpeg` | client, 3024×1701 | **Real photograph of the Model Town consulting room.** Full-bleed in the clinic band, blurred 2px behind a deep teal scrim. |
| `src/assets/clinic-counselling.jpeg` | client, 4028×2265 | **Real photograph of a counselling session.** Shown unmodified beside the lead testimonial. |
| `src/assets/hero-consultation.png` | client, 1536×1024 | **Appears to be AI-generated** — see the warning below. Hero placeholder only. |

> **The hero image should probably be replaced.** The two clinic photographs
> above are genuine — the same shots the old site owned but buried at 40%
> opacity. The hero still uses an apparently AI-generated image in which the
> doctor resembles Dr. Sharma and the room is not his. Now that real
> photography exists, that risk is avoidable. The clinic-room shot is
> wide-angle and dim, so it is not a drop-in replacement for the hero, but a
> proper photograph of that room would be.

The supplied logo is a 7438×5911px PNG whose artwork occupies about **13%** of
the canvas — an amber wordmark and a black head-and-pulse mark on a yellow tile,
over a full-bleed red field. The prototype uses the **mark** with the wordmark
set in the proposed typeface, because the amber-on-red lockup does not sit in
this palette. That is a real decision for the client, flagged in the footer
(Q11).

The portrait is only 300×450px, so it is displayed at **320px wide** — close to
its native size, which keeps it sharp — rather than filling the column. A
higher-resolution portrait would let that block grow (Q13).

## Known gaps

- **Clinic and workshop photography.** Still none. Those slots are designed
  frames stating the photograph that belongs there, so each doubles as a shot
  list. The two existing consulting-room images on the live site are
  straight-from-phone shots at 1 MB each and were not used.
- **The mobile menu disclosure needs JS.** All content and both contact actions
  remain reachable without it (footer nav + the fixed action bar), but the
  hamburger panel will not open. Worth revisiting in production.
- **No inner pages.** Homepage only, by agreement. Nav links are in-page anchors.
- **`noindex` is set** in `Base.astro` so the prototype can never be indexed.
  Remove it at launch.

## The provisional section

`Organisations.astro` is built on the inference that corporate and institutional
workshops are still an active business line — 7 of the 8 published testimonials
describe group sessions. **The client has not confirmed this** (Q1).

To remove it: delete the `<Organisations />` line in `src/pages/index.astro` and
the `For Organisations` entry in `src/data/content.ts`. Nothing else depends on it.

## Content that was not carried over

Four things from the existing site are deliberately absent, with reasons in
`src/data/content.ts`:

1. *"This program will 100% help you to tackle stress"* — an absolute efficacy
   guarantee from a medical practice.
2. *"address and cure these issues"* — a cure claim about psychological conditions.
3. The statistics on `blog2.html` — sourced to a 2006 atlas, projecting to 2020.
4. *"Suicidal tendencies are increasing because of a lack of proper knowledge
   about how life works."*

## Before any of this goes live

- Written consent for every named testimonial and organisation (Q16).
- Dr. Sharma's exact qualifications (Q8).
- Opening hours, map pin and directions (Q15).
- Where enquiries should be delivered, and a privacy policy (Q2, Q27).

Full list: `open-questions.md` in the Phase 1 audit, currently at
`C:\Users\HP\Desktop\swayam-audit\`.
