---
name: minerali-design
description: Use this skill to generate well-branded interfaces and assets in Minerali — the default design system behind kennyliu.io, internal ATLAS / AtlasCortex projects, Hermes, Aeon, Living Archive, and stationery unless a project says otherwise. Minerali is the house design language — colors, type, fonts, themes, components. Apply when the user asks for a mock, slide, landing page, app screen, letterhead, internal tool, or any surface that should look like Kenny Liu's properties.
user-invocable: true
---

# Minerali design skill

Read `README.md` first — the full source of truth on scope, voice, color, type, themes, motion, and iconography. **Minerali is the default for kennyliu.io and internal ATLAS / AtlasCortex projects unless a project says otherwise; the earlier base system (navy/cream/amber, Cormorant/Lora/DM Sans/IBM Plex Mono) is retired — never use it.**

Then orient yourself with:

- `colors_and_type.css` — the token file. Every design MUST link this first and use `var(--…)` — never hardcode hex or font families. Themes: `data-theme="graphite"` (default) or `"cream"` (daylight).
- `preview/` — one-purpose specimens for every token family. Open one in a browser to confirm how a token *looks* before using it. Use `preview/external-business.html` for consulting, sales, and credibility pages.
- `assets/` — real logos (wordmark + monogram). Copy into your output; never hotlink.
- `theme-toggle.js` — self-mounting `<theme-toggle>` switch (graphite ⇄ cream). Copy alongside the CSS; add `<script src="theme-toggle.js" defer>` for a user-facing theme switch.
- `fonts/README.md` — the four families load from Google Fonts CDN: `Fraunces`, `Literata`, `JetBrains Mono`, `Noto Serif TC`.
- `Blog Post.html` + `blog-post.css` — the long-form template. Copy both for anything article- or blog-shaped.

## Working rules

1. **Choose the surface profile first.** Editorial and internal operator surfaces default to `graphite`. External business pages — consulting, sales, service, credibility, intake, and portfolio pages — default to `cream`, use rust as the primary signal, and keep acid to small marks or one emphasized word. Archive / stationery work also defaults to `cream`.
2. **Graphite is the house default, not the only default.** Apply `data-theme="graphite"` for editorial, app, diagnostic, and prototype work unless asked otherwise. Apply `data-theme="cream"` for external business and archive / print work. (There are only two themes.)
3. **Four faces, one job each.** **Fraunces** for display and headings *only*; **Literata** for body and long-form reading (it is the `body` default); **JetBrains Mono** for all UI chrome, labels, buttons, numbers; **Noto Serif TC** for CJK. No Inter, no Cormorant, no system stack. For operator surfaces, put `.mn-chrome` on the app shell so mono becomes the default inside it.
   - **Hero vs. heading.** Only the display hero gets `opsz 144`, `WONK 1`, italic 900, and `-0.04em`. The base styles set `h1`–`h3` at automatic optical size, weight 700, and `-0.02em`. Don't override headings back to the hero cut, because it collapses word spaces.
4. **Ink ground, paper text — via the right tokens.** Build grounds on `--bg-primary` / `--bg-elevated` and set text with `--text-primary` / `--text-secondary` — the **theme-aware** tokens, so the surface flips correctly in cream. Reserve the raw `--mn-paper` / `--mn-ink` brand tokens for marks that must *not* theme (the logo, the cut, an always-deep terminal).
5. **One cut, two signals.** **Rust** is the warm signal for links, emphasis, and drop caps. Use `--accent-text` for rust text and `--accent` for fills, borders, and large marks. **Acid** (`--accent-cut`) is *the cut*, only for a live/active state, the prompt glyph (`▚` `∴`, cursor), the wordmark slash, or **one** hero word. It is never used for links, body emphasis, `code`, slugs, headings, or static numbers. Budget: ≤15% of internal/editorial surfaces, ≤5% of external business ones, one `.mn-btn.acid` per surface. If a design feels flat, the answer is never "add a color" — it's "use the type scale and a hairline harder."
6. **Square & flat.** `border-radius: 0`. Dividers and resting borders are 1px `--border-color`. Shadows only on modals/popovers.
7. **No emoji. No gradients. No backdrop blur. No bounce easings. No full-bleed stock photography.** Invariants.
8. **Sentence case everywhere** except the wordmark and proper nouns. Caps are applied by CSS only: mono chrome, and `.mn-card-head` for dense operator cards (Fraunces 600, 18px, +0.02em over a 15px `.mn-card-body`). **Italic** only for the display hero, the wordmark/monogram, and the ampersand. **Emphasis** is one channel: `em` = color, `strong` = weight, never both.
9. **Iconography:** inline stroke SVG in the Heroicons idiom (2px stroke, 24px viewBox, `currentColor`). Lucide from CDN is acceptable in prototypes, flagged as a substitution. Never emoji, raster, or arrow glyphs.
10. **Long-form copy:** drop cap on the opening paragraph (rust, Fraunces, ~4.5em, float left) in a 608px column; body set in Literata at 20px in `--text-primary`, at `--body-weight` (300 graphite, 400 cream), with automatic optical size. Secondary text is for decks and captions, never running copy.
11. **Small type floor:** `--text-2xs` (11px) for mono caps labels only; running text 12px or larger. Every text token already meets AA; don't introduce colors that don't.

### Theme toggle

For any surface that should let the reader switch grounds, use `theme-toggle.js` — never hand-roll a switcher. Copy it next to `colors_and_type.css` and add one line: `<script src="theme-toggle.js" defer></script>`. It mounts a fixed top-right control, flips `data-theme` on `<html>`, persists to `localStorage`, and styles itself from the active theme's tokens (no extra CSS). Place a `<theme-toggle></theme-toggle>` tag yourself to anchor it inline instead. Configure via `data-themes` (default `"graphite cream"`), `data-position`, `data-storage-key`. Don't add it to a surface that already controls theme through Tweaks (e.g. `Blog Post.html`) — the two will fight. See `preview/theme-toggle.html`.

Reusable `.mn-*` classes ship in the token file: `.mn-slug` (quiet text, acid only on `.glyph`), `.mn-display`, `.mn-tag`, `.mn-btn` (`.acid`, `.ghost`, `.danger`), `.mn-knife`, `.mn-hairline`, `.mn-num`, `.mn-chrome`. Prefer them over reinventing.

## What to produce

- **Visual artifacts** (slides, mocks, prototypes, pages): copy needed assets into the output folder, write a static HTML file, `<link>` `colors_and_type.css`, set `data-theme` for the profile (`graphite` or `cream`), and reuse the `.mn-*` classes and preview patterns. Prefer copying a pattern over inventing one.
- **Production code:** use tokens verbatim from `colors_and_type.css` (kebab-case custom properties); cite the README rule you're applying. Don't re-derive values.

## When invoked without other guidance, ask

1. What are you building — a slide, page, app screen, stationery, something else?
2. Surface profile — editorial, external business, internal operator, or archive / stationery?
3. How much copy? (If long-form, commit to a drop cap and 608px column.)
4. Which surface should it echo — kennyliu.io long-form, Hermes app chrome, internal operator tools, or neither?

Then act as an expert designer and return a single HTML file (mocks) or production code (real work).
