# NWCEX — North-West Care Exchange · Landing Page

A premium, executive landing page for the North-West Care Exchange — a national
forum and event platform for the UK social care sector. Built from the Claude
Design handoff bundle (`NWCEX Landing Page - Offline.html`) and implemented as a
real Vite + React app.

Brand system: **charcoal · white · beige · gold accents only** —
premium, corporate, modern, executive, clean, credible.

## Stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/)
- [lucide-react](https://lucide.dev/) for icons
- Design tokens (colour, type, spacing, elevation, motion) in `src/styles.css`,
  inline component styles for pixel fidelity with the design.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Sections (top to bottom)

| Section | File | Notes |
| --- | --- | --- |
| Sticky nav + scroll-spy | `src/components/Header.jsx` | `Header` |
| Hero — "Redefining the Norm" | `src/components/Header.jsx` | `Hero`, full-width single column |
| About the Exchange | `src/components/About.jsx` | `About` + image placeholders |
| Topics band (6 sector themes) | `src/components/About.jsx` | `Pillars` |
| Meet the Speakers (carousel) | `src/components/Speakers.jsx` | 7 speakers, poster-style cards |
| Featured event + programme | `src/components/Event.jsx` | `FeaturedEvent` |
| Network stats band | `src/components/Event.jsx` | `NetworkBand` |
| Ticket tiers | `src/components/Booking.jsx` | `Booking` (£75–£245) |
| Mock Eventbrite checkout | `src/components/Booking.jsx` | `Eventbrite`, live totals + fee |
| Contact form | `src/components/Contact.jsx` | name / email / organisation / message |
| Footer + banking details | `src/components/Contact.jsx` | Manchester address, acct 40040363, sort 20-55-41 |
| Ticket modal | `src/components/TicketModal.jsx` | shared booking modal |

Shared building blocks (logo, buttons, eyebrow, gold frame, placeholders) live in
`src/components/primitives.jsx`; the icon wrapper is `src/components/Icon.jsx`.

## Implementation notes

- The design's dev-only "Tweaks" panel (accent shade / display typeface / topics
  toggle) was **not** ported — its chosen defaults (gold `#C18A2E`, Cinzel display
  face, topics band on) are baked into `src/styles.css`.
- Speaker portraits and the textured card background are real bundled assets in
  `src/assets/`, pulled from the Figma design.
- The Eventbrite checkout and contact form are **mock/visual** — wire them to live
  endpoints (Eventbrite embed, a form handler) before launch. The placeholder
  collage in the About section is ready to swap for real conference photography.

The original design handoff (chat transcript, prototype HTML, JSX, assets) is kept
under `design_bundle/` for reference.
