# NWCEX Landing Page Design

_Started 2026-05-30 18:34 UTC_

---

## User

Create a Landing Page website design for  North-West Care Exchange (NWCEX) Overall Brand Direction

The overall aesthetic should feel:
* Premium
* Corporate
* Modern
* Executive
* Clean and credible
Colour Palette

Please stick to:
* Charcoal
* White
* Beige
* Gold accents only
Website Vision

The website should position NWCEX as:

* A premium social care forum and event platform
* A growing executive network/community
* A credible professional organisation within the social care space
* A future membership/subscription-based platform

Although we are North-West based, this is intended to be a national platform where providers, professionals, commissioners and sector leaders from across the UK can engage, collaborate and learn.

Purpose of the Platform

The North-West Care Exchange is designed to bring together:

* Children’s social care providers
* Adult social care providers
* Commissioners
* Industry experts
* Entrepreneurs and sector leaders

The aim is to create a space for:

* Sharing best practice
* Discussing sector challenges
* Regulatory insight
* Financial and operational sustainability
* Leadership development
* Networking and collaboration
* Learning from industry experts
* Improving outcomes for service users

Topics may include:

* Regulatory compliance
* Financial sustainability
* Workforce pressures
* Working effectively with commissioners
* Leadership and governance
* Innovation and scaling within care services

Landing Page Direction

For the homepage/landing page, we would like visuals that show:

* Executive-style conferences
* Networking environments
* Panel discussions
* Corporate event settings
* Diverse professionals interacting in high-end environments

The page should contain the About section, a section to show the speakers with a sliding carousel, Booking event tiers, a contact us form section and a footer with the address information . Make it smooth and stick to the brand colors. The website should have a section where we integrate with Eventbrite and the footer should show the banking details i.e account number and the short code

## Assistant

_[tool: list_files]_

I'll start by exploring the NWCEX design system and its website UI kit so I build on the real brand foundations.I'll read the core design files and the website UI kit.

_[tool: read_file]_

_[tool: list_files]_

The website UI kit exists — let me read it fully so I fork it rather than starting from scratch.

_[tool: read_file]_

_[tool: read_file]_

This is a complete website UI kit I can fork. Let me read all the JSX components to understand the patterns.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: questions_v2]_

I now have the full picture — there's a complete website UI kit I can fork, with the brand's charcoal/gold system, components, and a ticket modal. Before I build, a few focused questions so I get this right.

## User

Questions answered:
- prices: Use sensible differentiated prices per tier
- imagery: Use tasteful charcoal/gold placeholder blocks for now
- eventbrite: A mock embedded Eventbrite checkout widget styled to the brand
- speakers: Salom plus a few invented sample speakers to show the design
- contact_fields: Name, email, organisation, message
- variations: Decide for me
- scope: Decide for me

## Assistant

_[tool: update_todos]_

Brief is clear and I have a full UI kit to fork. Let me set up the project structure.

_[tool: copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: write_file]_

Now I'll build the landing page. Starting with the shell and forked primitives.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the speaker carousel — a key requested feature.

_[tool: write_file]_

Now the booking tiers and the mock Eventbrite embedded checkout.

_[tool: write_file]_

Now the contact form and footer with address + banking details.

_[tool: write_file]_

Now the ticket modal and app composition.Now the tweaks panel starter and App composition.

_[tool: copy_starter_component]_

_[tool: write_file]_

Now the app composition with tasteful tweaks.Now the shell HTML.

_[tool: write_file]_

_[tool: update_todos]_

Let me check it loads cleanly.

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean. Let me take a screenshot to check the layout.

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

The hero's left column looks empty — let me verify whether the headline rendered.

_[tool: view_image]_

_[tool: done]_

That empty left column is an html-to-image capture artifact — the entrance animation restarts in the screenshot clone and captures its opacity:0 first frame (the nav, which has no animation, renders fine). In a real browser it's visible. Let me hand off to the user and verify properly.

_[tool: fork_verifier_agent]_

The NWCEX landing page is built and live. It forks the design system's website kit and adds everything you asked for, in the charcoal/white/beige/gold system:

- **Hero** — poster-style "REDEFINING THE NORM" with Salom's portrait and a keynote nameplate
- **About** — national-platform positioning with the audience list and a photo collage (tasteful charcoal/gold placeholders, ready to swap for real photography)
- **Topics band** — the six sector themes (regulation, sustainability, workforce, commissioners, governance, innovation)
- **Speakers carousel** — Salom plus five sample panellists, with sliding nav arrows + dots
- **Programme**, **stats band**, then **booking tiers** with differentiated prices (£75–£245)
- **Mock Eventbrite checkout** — quantity steppers, live order total + fee, brand-styled "Powered by eventbrite"
- **Contact form** — name / email / organisation / message with validation + success state
- **Footer** — Manchester address, contact lines, and the banking panel (account 40040363, sort code 20-55-41)

Smooth scroll-spy nav, gold hover/lift states, and a working ticket modal throughout. I added a small **Tweaks** panel (toolbar toggle) to explore the gold accent shade, display typeface (Cinzel vs Cormorant), and the topics band on/off.

A verifier is double-checking interactions in the background. Next steps when you're ready: drop in real conference/networking photos for the placeholders, and wire the Eventbrite/contact forms to live endpoints.

## User

Verifier agent check completed

## Assistant

Verifier confirms everything works — hero content, the speaker carousel, the Eventbrite stepper/totals, and the section layout all check out. The NWCEX landing page is ready for you to review.

## User

Save as standalone HTML: NWCEX Landing Page.html

## Assistant

I'll prepare a standalone copy. The resources referenced in JS code are the speaker images (set via JSX `src` and CSS `background`), so I'll lift those into meta tags.

Let me check the image references in my code.

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Only one image is actually used in JS (speaker-headshot.jpg, in both the hero and Salom's card — the rest use initials). I'll make the references use `window.__resources` with a fallback so the same files work both in dev and standalone.Now copy the HTML and add the meta tag + thumbnail template.

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

All assets bundled. Let me verify it works offline.

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean — only the expected Babel warning. Let me confirm the bundled headshot renders, then deliver.

_[tool: save_screenshot]_

_[tool: view_image]_

The bundled headshot renders correctly and everything loads offline (the empty hero-left is just the entrance animation's first frame at capture time — the verifier already confirmed it's visible). Delivering the file.

_[tool: present_fs_item_for_download]_

Done — **NWCEX Landing Page — Offline.html** is ready to download above. It's a single self-contained file (with the speaker photo and all styles inlined) that works completely offline, no internet needed.

## User

Remove the Programme to Event on the website and also the tags on the panel speakers

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

I'll make both changes: rename the "Programme" nav item to "Event", and remove the role tags from the speaker cards.

_[tool: done]_

Done — the nav now reads **Event** instead of Programme, and the role tags (Keynote Speaker, Panellist, etc.) are removed from the speaker cards.

Note: these edits are in the working `NWCEX Landing Page.html`. If you want the offline/standalone file updated too, just say so and I'll re-bundle it.

## User

on the event tiers fix the tags on the tiers.

## Assistant

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

The scroll math was off. Let me jump to the tickets section properly.

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: read_file]_

The screenshot capture keeps rendering from the top. Let me read the tier code directly — I know the tags are absolutely positioned at the top-right, which collides with the tier name. Let me restructure them to sit cleanly inline.

_[tool: str_replace_edit]_

The tags are absolutely positioned over the tier name, causing overlap. I'll give each card a dedicated tag row at the top — the badge sits inline above the tier name, with an empty placeholder on untagged cards so all four stay aligned.Now let me verify the fix renders cleanly.

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: done]_

The screenshot tool reloads the page each capture, so my scroll resets — but the code change is sound. The tags now sit inline above each tier name with reserved space on untagged cards, so no overlap. Let me hand off and let the verifier confirm at the tickets section.

_[tool: fork_verifier_agent]_

Fixed — the "Most popular" and "Best value" badges now sit inline above each tier name (with a reserved gap on the untagged cards so all four stay aligned), instead of floating over the title text. A verifier is confirming the layout in the background.

## User

Verifier agent check completed

## Assistant

Verified — the tier badges now sit cleanly above each tier name with all four cards aligned. You're all set.

## User

Update the speakers with the ones which are in the figma design

## Assistant

I'll explore the Figma file to find the speakers, then update them in the design. Let me start by orienting myself.

_[tool: fig_ls]_

_[tool: read_file]_

I see the user changed the heading to "Meet the Speakers". Now let me find the speakers in the Figma file.

_[tool: read_file]_

_[tool: fig_read]_

_[tool: fig_read]_

Let me find the speakers section. I'll grep for "speaker" across the Figma file.

_[tool: fig_grep]_

These are speaker poster cards. Let me read the ones with names — they look like Instagram posts / speaker reveal cards. Let me read the full content of these groups to get names and photos.

_[tool: fig_read]_

_[tool: fig_read]_

_[tool: fig_read]_

This is Salom's poster (already have her). Let me get the other two speakers' names and details. Let me read Instagram-post-2 and Group-27.

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

Three speakers in the Figma design: **Salom Rumbi Chamboko**, **Muzie Nduna**, and **Tapiwa Madovi**. Let me find and view their photos.

_[tool: fig_ls]_

_[tool: fig_ls]_

_[tool: fig_ls]_

Let me copy the speaker photos into the project and view them to see how they're framed.

_[tool: fig_copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

These are the three real speakers as cutout photos. Let me check if they have transparent backgrounds so I can place them on charcoal.

_[tool: str_replace_edit]_

All three are clean cutouts with transparent backgrounds — perfect for placing on a charcoal backdrop. Now I'll update the speaker data with the three real speakers from the design and rework the avatar to display the cutout portraits.

_[tool: str_replace_edit]_

With only three speakers, the carousel won't need to slide on desktop. Let me hide the arrows and dots when there's nothing to page through, so they don't sit permanently disabled.

_[tool: str_replace_edit]_

_[tool: show_html]_

Now let me verify the speakers section renders correctly.

_[tool: multi_screenshot]_

_[tool: done]_

The screenshot tool reloads to the top each capture, so I can't see the scrolled section directly — but the code is sound. Let me hand off and have the verifier confirm the speakers section.

_[tool: fork_verifier_agent]_

Updated the speakers section with the three real speakers from the Figma design:

- **Salom Rumbi Chamboko** — Financial wellbeing & sustainability
- **Muzie Nduna** — Entrepreneurship & scaling
- **Tapiwa Madovi** — Supported living & investment

I pulled their cutout portraits straight from the Figma file and placed them on charcoal backdrops with a gold light-leak to match the brand. Since all three fit in one row, the carousel arrows/dots auto-hide on desktop (they'll reappear and slide on narrow/mobile widths). A verifier is confirming the section in the background.

## User

Verifier agent check completed

## Assistant

Verified — all three speakers (Salom Rumbi Chamboko, Muzie Nduna, Tapiwa Madovi) render with their portrait photos from the Figma design, properly framed on charcoal. You're all set.

## User

Pull back the carousel and update the speakers matching the design of Salom's card

## Assistant

_[tool: fig_grep]_

_[tool: fig_ls]_

Let me explore the new Figma file to see the speaker card design and any new speakers.

_[tool: fig_read]_

The scoped frames (Frame-2, Group-45/47/48/50) look like the speaker cards. Let me read them.

_[tool: fig_screenshot]_

These are full event posters. The user wants the speaker cards restyled to match Salom's poster card look. Let me screenshot Salom's card to see the exact design, and grab the textured background + theme assets.

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: fig_grep]_

Group-45 is a new speaker — **Effie Smillie, CEO Rainbow Medical Services**. The card design is clear now: charcoal background, gold light-streak, cutout photo, angled charcoal name-banner with white serif caps + gold credentials. Let me find all speakers in the scoped frames.

_[tool: fig_read]_

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: fig_grep]_

_[tool: fig_grep]_

More speakers: **Nyasha Gwatidzo**, **Andrew Nyamayaro**, **Bonita Santos**. Let me get Andrew's credentials and find each speaker's photo asset.

_[tool: fig_copy_files]_

I now have all 7 speakers with photos. Let me grab the 4 new portraits plus the textured charcoal/gold background used across the cards.

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

All seven portraits and the textured card background look great. Now I'll redesign the speaker cards to match Salom's poster: charcoal/gold textured backdrop, cutout portrait, and an angled charcoal name-banner with white serif caps + gold credentials. The poster name uses Inknut Antiqua, so let me load that font.I'll add Inknut Antiqua to the font import, then rewrite the speaker cards.

_[tool: str_replace_edit]_

Now I'll rewrite the speaker data and cards to match the poster design.

_[tool: str_replace_edit]_

_[tool: show_html]_

The carousel now has 7 speakers, so it slides again with arrows and dots restored. Let me verify it renders.

_[tool: get_webview_logs]_

Clean. Let me hand off and have the verifier confirm the redesigned cards and carousel.

_[tool: done]_

_[tool: fork_verifier_agent]_

Done. I redesigned the speaker cards to match Salom's poster design and brought the carousel back:

- **Card style** — charcoal/gold textured backdrop (pulled from the Figma file), cutout portrait, thin gold hairline frame, and an angled charcoal name-banner with the name in Inknut Antiqua serif caps + role in gold uppercase — matching the event poster exactly.
- **Seven speakers** from the design: Salom Rumbi Chamboko, Effie Smillie, Nyasha Gwatidzo, Andrew Nyamayaro, Tapiwa Madovi, Muzie Nduna, and Bonita Santos.
- **Carousel restored** — with 7 speakers it slides again, arrows and dots back in action.

A verifier is confirming the cards, photos, and carousel sliding in the background.

## User

Verifier agent check completed

## Assistant

Verified — all seven speakers render in the new poster-style cards with photos loading and faces visible, and the carousel slides with working arrows and dots. You're all set.

## User

Save this design as a PDF: NWCEX Landing Page.html

## Assistant

_[tool: read_file]_

Let me read the current HTML to build the print version.

_[tool: write_file]_

Let me verify the print file loads and lays out correctly before adding the print trigger fires.

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: open_for_print]_

Loads cleanly. Now opening the print dialog.The print-ready version is open — your browser's print dialog should appear. If it didn't (popup blocker), open it here: **[NWCEX Landing Page — Print](https://97877800-aa61-4041-b0e8-a75b6dbee298.claudeusercontent.com/v1/design/projects/97877800-aa61-4041-b0e8-a75b6dbee298/serve/NWCEX%20Landing%20Page-print.html?t=cfac8598613d8be17edd2a865c18a94f9d920c29a04455f8d7383fff6e89d0bd.415cc3fb-fa0d-4c6e-845e-4bf3d4145cc2.b92ad3a9-a9be-472f-b8fd-aba1348cbece.1780227007&direct=1)**. In the dialog, choose **Save as PDF**, and enable **Background graphics** so the charcoal/gold styling prints.

## User

Apply comment

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll remove the featured speaker image from the hero and let the text content span the full width.

_[tool: done]_

Removed the featured speaker image from the hero. The headline, intro, CTAs and event details now sit in a clean full-width single-column layout with a larger headline. 

Note: I also have a print version (`NWCEX Landing Page-print.html`) — let me know if you'd like me to regenerate that PDF with this change.

## User

Save as standalone HTML: NWCEX Landing Page.html

## Assistant

_[tool: grep]_

I'll prepare a fresh standalone copy. First let me find all image URLs referenced as strings in JS/JSX (the bundler can't see these).

_[tool: str_replace_edit]_

All eight code-referenced images live in `Speakers.jsx` (7 portraits + the card background). I'll lift them to `window.__resources` with fallbacks so the same file works in both dev and standalone, then build the bundle.Now I'll make the standalone copy with the meta tags and thumbnail. The old standalone file referenced a stale headshot — I'll overwrite it fresh from the current HTML.

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

No unresolved-asset warnings. Let me verify it works offline.

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: multi_screenshot]_

_[tool: present_fs_item_for_download]_

Clean — only the expected Babel warning, and all eight images bundled without errors (the screenshot just captures the top after reload). The standalone file is ready.Done — **NWCEX Landing Page — Offline.html** is ready above. It's a fully self-contained file with all seven speaker portraits, the card background, fonts and styles inlined, so it works completely offline.

## User

Save as standalone HTML: NWCEX Landing Page - Offline.html

## Assistant

_[tool: list_files]_

The file you're viewing is already the fully-bundled standalone export — I created it in the previous step with all seven speaker portraits, the card background, fonts and styles inlined. Re-bundling an already-bundled file isn't necessary. Let me confirm the exact filename and hand it off.

_[tool: present_fs_item_for_download]_

It's already a complete standalone file. Presenting it for download.**NWCEX Landing Page — Offline.html** is ready above — it's already fully self-contained (all images, fonts and styles inlined) and works completely offline.

