# NWCEX — North-West Care Exchange · Design System

A premium brand and UI system for **The North-West Care Exchange (NWCEX)** — a
national social-care forum, events platform and growing executive network for the
UK care sector.

> Premium · Corporate · Modern · Executive · Clean · Credible

---

## 1. Company / Product context

**The North-West Care Exchange (NWCEX)** positions itself as a premium professional
organisation and events platform serving the UK social-care sector. Although
North-West based, it is intended as a **national platform** where providers,
professionals, commissioners and sector leaders engage, collaborate and learn.

**Who it brings together**
- Children's social care providers
- Adult social care providers
- Commissioners
- Industry experts
- Entrepreneurs & sector leaders

**What it is for** — sharing best practice, discussing sector challenges,
regulatory insight, financial & operational sustainability, leadership development,
networking & collaboration, learning from industry experts, and ultimately improving
outcomes for service users.

**Topics** — regulatory compliance, financial sustainability, workforce pressures,
working effectively with commissioners, leadership & governance, innovation and
scaling within care services.

**Trajectory** — a premium social-care **forum & event platform**, an executive
**network/community**, and a future **membership / subscription** platform.

### Products represented in this system
1. **Marketing / membership website** — the primary surface. Positions NWCEX as a
   credible national platform; promotes flagship events, the network, and membership.
   → `ui_kits/website/`
2. **Event poster / announcement system** — speaker reveals, panellist cards and
   conference announcements in the flagship dark-and-gold poster style.
   → `slides/`

### Source material provided
- `uploads/NWCEX.jpg.jpeg` — "Redefining the Norm" speaker poster (dark variant)
- `uploads/white.jpg.jpeg` — same poster, light/white variant
- Written creative brief (paraphrased throughout this README)

No codebase, Figma file or live site was supplied — the system is derived from the
two event posters, the supplied logo, and the written brief. Flagship event
referenced: **"Redefining the Norm"**, Deansgate Hotel, Manchester, 22 Aug 2026.

---

## 2. Content fundamentals (voice & tone)

The brand voice is **executive, measured and credible** — it speaks to senior
decision-makers, not the general public.

- **Register:** professional, confident, aspirational. Never casual, never playful.
- **Person:** institutional third-person for positioning ("NWCEX brings together…"),
  warm second-person for calls to action ("Book your ticket", "Join the network").
- **Casing:** **Title Case** and **ALL-CAPS letterspaced** labels carry the premium
  feel. Headlines are set in caps (e.g. *REDEFINING THE NORM*). Eyebrows, nav items,
  buttons and the logo subline are uppercase and widely tracked.
- **Sentence style:** short, declarative, outcome-oriented. Lead with the value.
- **Emoji:** **never.** This is a corporate, executive brand.
- **Numerals / detail:** practical specifics are stated plainly and confidently
  (dates "22ND, AUGUST 2026", times "09:00 – 17:30", tiers, locations).

**Voice examples (from source + on-brand extensions)**
- Hero: *"Redefining the norm in social care."*
- Eyebrow: `A NATIONAL FORUM FOR SOCIAL CARE LEADERS`
- CTA: `BOOK YOUR TICKET` · `JOIN THE NETWORK` · `BECOME A MEMBER`
- Descriptor (serif italic): *"a national exchange for providers, commissioners and sector leaders."*
- Section label: `BEST PRACTICE · REGULATION · LEADERSHIP · SUSTAINABILITY`

**Don't:** exclamation-heavy hype, slang, jokey copy, vague filler, buzzword soup.

---

## 3. Visual foundations

### Colour
A tightly restrained palette — **charcoal, white, beige, and gold accents only.**
Never bright, never playful.

- **Charcoal / ink** is the dominant brand colour: deep, near-black warm charcoals
  (`--ink-800 #16171A` … `--ink-600 #2A2620`) used full-bleed behind hero and poster
  content. Surfaces are matte, not glossy.
- **Gold** is an **accent only** — an antique/bronze gold (`--gold-500 #C18A2E`,
  deepening to `--gold-600 #A26B11`). Used for the brand mark, hairline frames, key
  words in a headline, rules, icons and small emphasis. Never large flat fills of
  bright gold; it reads as foil/engraving, not neon.
- **Beige & white** carry the light surfaces (`--beige-100 #F4EFE4`, `--paper #FFFFFF`)
  for editorial, calm sections. The brand alternates **charcoal blocks** and
  **beige/white blocks** for rhythm.
- Use at most **one or two** background colours per surface; let charcoal and beige
  do the work and reserve gold for accents.

### Typography
The logo uses **engraved Roman capitals** (Trajan-style). To keep consistency across
web & marketing we use three families (see `colors_and_type.css`):
- **Cinzel** — display / logo. Trajan-style engraved caps. Headlines set in caps with
  generous tracking. *(Substitute for the logo's bespoke Trajan-style face — see §6.)*
- **Cormorant Garamond** — editorial high-contrast serif with a refined italic, used
  for speaker names, lede paragraphs and pull-quotes.
- **Montserrat** — clean grotesque for body copy, UI and the signature **letterspaced
  uppercase labels** (the logo subline "NORTH-WEST CARE EXCHANGE" style).

Hierarchy = serif-caps display → serif sub-heads → sans body → letterspaced caps labels.

### Layout & spacing
- 8pt spacing system (`--sp-*`). Generous, executive whitespace.
- Wide content max-widths with confident margins; centered hero compositions.
- A recurring **thin gold frame / rule** motif (the poster's gold bracket lines)
  used to frame imagery and feature cards.
- Vertical letterspaced caps appear as a decorative device on posters (e.g. "KEY
  SPEAKER", "PANELIST" running up the left edge).

### Imagery
- **Subject:** executive conferences, networking environments, panel discussions,
  corporate event settings, diverse professionals in high-end venues. Portraits are
  poised and professional.
- **Treatment:** warm, low-key lighting; charcoal backgrounds; subtle gold rim-light
  and bokeh. Images sit inside thin gold frames or fade into charcoal via a protection
  gradient so white text stays legible. Not bright, not cool-toned; rich and warm.
- Provide real photography via image slots; never auto-generate.

### Borders, radii, shadows
- **Radii are restrained / squared** — 2–4px on inputs/buttons/cards, up to 8px on
  large panels. No big pill-shaped cards. (Pills reserved for small status chips.)
- **Borders:** hairlines — `--line-dark` on charcoal, `--line-light` on beige, and the
  signature `--line-gold` 1px frame for emphasis.
- **Shadows:** soft and low — used sparingly on light surfaces (`--shadow-md/lg`). On
  charcoal, separation comes from value & gold hairlines, not drop-shadows.

### Motion
- Calm and understated. Fades and short upward reveals (`translateY` 8–16px), 200–280ms,
  on a gentle ease-out (`--ease`). **No bounces, no springy/playful motion.**
- Hover: links/buttons lighten toward `--gold-400`; charcoal buttons lift a hair and
  gain a soft shadow. Press: subtle darken + 1px settle (no large scale).
- Gold underlines/rules can draw in on hover for nav and links.

### Transparency & blur
- Used sparingly: charcoal **protection gradients** over imagery for text legibility,
  and an optional translucent charcoal app-bar with light backdrop-blur on scroll.
  Avoid frosted-glass everywhere; it should feel architectural, not trendy.

---

## 4. Iconography

- **Style:** thin, linear, 1.5px-stroke outline icons — restrained and corporate, to
  match the hairline/engraved aesthetic. Icons most often render in **gold**
  (`--gold-500`) on charcoal, or charcoal on beige.
- **Set:** the source posters use simple circular gold "chip" icons (globe = website,
  pin = location, calendar = date) — a website navigation/contact motif. We standardise
  on **[Lucide](https://lucide.dev)** (1.5px outline) loaded from CDN as the closest
  match; see `ui_kits/website/` for usage. *(Substitution flagged — swap for a bespoke
  set if NWCEX commissions one.)*
- **Gold chip icons:** for contact/utility rows, an icon sits inside a small filled
  gold circle (as on the posters' footer). Reusable as `.nwc-icon-chip`.
- **Emoji:** never used. **Unicode dingbats:** only the middot `·` as a separator in
  letterspaced label rows.
- A gold **rosette/seal** badge appears on the posters (the tiered-ticket checkmark) —
  use sparingly as a trust/credential mark.

---

## 5. Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This document — context, voice, visual foundations, iconography |
| `SKILL.md` | Agent-Skills manifest for using this system in Claude Code |
| `colors_and_type.css` | All colour + type tokens and semantic typography classes |
| `assets/` | Logo, source posters, speaker portrait |
| `preview/` | Design-system cards (colours, type, components) shown in the DS tab |
| `ui_kits/website/` | Marketing / membership website UI kit (index.html + JSX) |
| `slides/` | Event poster / announcement templates (index.html + JSX) |

### Assets
- `assets/nwcex-logo-charcoal.png` — primary logo on its charcoal plate
- `assets/poster-redefining-dark.jpg` — flagship event poster (dark)
- `assets/poster-redefining-light.jpg` — flagship event poster (light)
- `assets/speaker-portrait.jpg` — featured-speaker name-plate crop

---

## 6. Substitutions & open questions  ⚠️

- **Fonts are best-guess substitutes.** Only flat JPEGs were supplied, so the exact
  brand faces are unknown. The logo's engraved caps are approximated with **Cinzel**
  (Trajan-style), paired with **Cormorant Garamond** and **Montserrat**. *If you have
  the real brand font files (the logo / "REDEFINING THE NORM" face especially), please
  share them and I'll swap them in.*
- **Iconography substituted** with Lucide (closest thin-outline match).
- **Photography** is represented with the supplied poster crops + image slots; no
  general conference/networking library was provided. Real imagery welcome.
- Exact brand gold was sampled from the posters (`#A26B11`–`#C18A2E`); confirm against
  any print/Pantone spec you hold.
