# NWCEX — North-West Care Exchange · Landing Page

A premium, executive landing page for the North-West Care Exchange — a national
forum and event platform for the UK social care sector. Implemented as a
**static HTML / CSS / JS** site from the Claude Design handoff bundle (the final
state of `NWCEX Landing Page.html` and its components).

Brand system: **charcoal · white · beige · gold accents only** —
premium, corporate, modern, executive, clean, credible.

## Stack

- Plain **HTML / CSS / vanilla JS** — no build step, no framework.
- [Lucide](https://lucide.dev/) icons + Google Fonts (Cinzel, Cormorant Garamond,
  Inknut Antiqua, Montserrat) via CDN.
- Design tokens (colour, type, spacing, elevation, motion) in `css/tokens.css`
  (ported verbatim from the design system); page styles in `css/styles.css`.

## Getting started

It's a static site — just open `index.html` in a browser. For a local server
(needed only if your browser blocks anything over `file://`):

```bash
npm start          # serves the folder via `npx serve`
# or:
python -m http.server 8000
```

Then visit the printed URL.

## File layout

```
index.html          # the full landing page (all sections)
css/
  tokens.css        # design-system colour/type/spacing tokens
  styles.css        # page + component styles
js/
  app.js            # scroll-spy nav, speaker carousel, Eventbrite totals,
                    # contact form, ticket modal
assets/             # logo, hero photo, speaker portraits, card background
design_bundle/      # original Claude Design handoff (chat, prototype, assets)
```

## Sections (top to bottom)

| Section | Notes |
| --- | --- |
| Sticky nav + scroll-spy | About · Event · Speakers · Tickets · Contact |
| Hero — "Redefining the Norm" | two-column, headline + CTAs left, conference photo right |
| About the Exchange | national-platform positioning + photo placeholders |
| Topics band | the six sector themes |
| Meet the Speakers | 9-speaker poster-style carousel (arrows + dots, responsive) |
| Featured event + programme | full-day agenda card |
| Network stats band | community positioning |
| Ticket tiers | £224 / £300 / £146, "Most popular" highlighted, early-bird note |
| Mock Eventbrite checkout | quantity steppers + live subtotal / fee / total |
| Contact form | name / email / organisation / message, with validation + success |
| Footer + banking details | Salford address, acct 40040363, sort 20-55-41 |
| Ticket modal | shared booking modal (tier select + confirm) |

## Implementation notes

- This is a faithful static recreation of the **final** design state from the
  handoff chat: 9 approved speaker portraits (`sp-*`), £224/£300/£146 early-bird
  pricing, the keyed transparent NWCEX wordmark, the two-column hero with the
  conference photo, charcoal section surfaces, and frameless speaker portraits.
- The design's dev-only "Tweaks" panel (accent shade / display typeface / topics
  toggle) was **not** ported — its chosen defaults (gold `#C18A2E`, Cinzel display
  face, topics band on) are baked in.
- The Eventbrite checkout and contact form are **mock / visual** — wire them to
  live endpoints (an Eventbrite embed, a form handler) before launch. The About
  photo collage uses tasteful charcoal/gold placeholders, ready to swap for real
  conference photography.

The original design handoff (chat transcript, prototype HTML, JSX, assets) is kept
under `design_bundle/` for reference.
