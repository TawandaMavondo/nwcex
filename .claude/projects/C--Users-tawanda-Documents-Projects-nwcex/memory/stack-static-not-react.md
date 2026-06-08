---
name: stack-static-not-react
description: NWCEX landing page is a static HTML/CSS/JS site, deliberately not React/Vite
metadata:
  type: project
---

The NWCEX landing page (this repo's root: index.html + css/ + js/ + assets/) is implemented as **plain static HTML/CSS/JS** — no framework, no build step. Icons via Lucide CDN, fonts via Google Fonts CDN.

**Why:** The Claude Design handoff prototype (kept in `design_bundle/`) is React-via-CDN+Babel, and an earlier session had started a Vite+React port (`src/`, `vite.config.js`). On 2026-06-08 the user explicitly chose "Static HTML/CSS/JS" when asked how to implement, so the Vite/React scaffold was removed (recoverable in git history before that change).

**How to apply:** Do not reintroduce React/Vite/JSX into the root site. `design_bundle/` JSX is reference only — translate any design changes into the static `index.html`/`css/styles.css`/`js/app.js`. The site reflects the *final* chat state: 9 `sp-*` speaker portraits, £224/£300/£146 early-bird pricing, keyed transparent wordmark, two-column hero, charcoal (#202123) section surfaces.
