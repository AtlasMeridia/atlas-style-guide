# Minerali

**Minerali** is the default design system for **kennyliu.io** and internal ATLAS / AtlasCortex projects unless a project says otherwise — personal publishing, AI tooling, internal operator surfaces, and family-archive projects operated by Kenny Liu. Ink-and-paper, square, flat, Fraunces-and-mono, nocturnal by default.

> **Naming:** *Minerali* is the **system**. **ATLAS / Meridia**, **Hermes**, and **Aeon** are **product** wordmarks that live under it — they are not renamed. The transitional *"Remix"* codename is retired: this house style is simply Minerali.

The earlier warm "paper-and-ink with amber spot" base system has been **retired** — do not use navy / cream / amber-gold, Cormorant Garamond, Lora, DM Sans, or IBM Plex Mono.

**Version:** 6.0 (June 2026) — single source `--ds-version` in `colors_and_type.css`. **Source of truth:** this README + `colors_and_type.css`.

---

## Default scope

Use Minerali for all new internal projects, ATLAS Meridia operator tools, AtlasCortex-facing prototypes, and **kennyliu.io** unless the owning project has a more specific design note. The archived pre-Minerali system lives in `v1/` for reference only; it is not the default for new work.

---

## Surface profiles

Minerali has one token file and several usage profiles. Pick the profile before
starting layout work.

| Profile | Use for | Ground | Guidance |
| --- | --- | --- | --- |
| **Editorial** | `kennyliu.io` notes, essays, manifestos | `graphite` default with optional `cream` reader toggle | Use the long-form template, 608px prose, Literata body, drop cap on the first paragraph, and one strong Fraunces display headline. |
| **External business** | Consulting, sales, service, and credibility pages on `kennyliu.io` or ATLAS Meridia | `cream` default | Keep Minerali's square, flat, literary character, but lower the heat: rust is the primary signal, acid is limited to small marks or one word, no drop cap unless the page is essay-shaped, and page density should be calmer than app chrome. |
| **Internal operator** | Dashboards, diagnostics, agent tools, support utilities | `graphite` default | Use dense mono chrome, hairline grids, tabular numbers, and sharper acid prompts. This is where the nocturnal terminal feeling belongs. |
| **Archive / stationery** | Living Archive, family-history pages, print, note cards | `cream` default for reading and print | Use restrained botanical motifs, generous margins, Noto Serif TC for Traditional Chinese, and avoid app-style density. |

External pages should still feel unmistakably Minerali. Do not revert to the old
warm navy / amber system, rounded marketing cards, gradient heroes, stock
photography, or generic SaaS typography.

---

## Products represented

| Surface | Type |
| --- | --- |
| **kennyliu.io** / Headless ATLAS | Next.js site + Ghost CMS, long-form writing |
| **Internal ATLAS / AtlasCortex tools** | Dashboards, prototypes, agent interfaces, support utilities |
| **Hermes** | AI agent interface ("the agent that grows with you") |
| **Aeon** | Local-first AI companion with persistent memory |
| **Living Archive** | Bilingual (EN / zh-TW) Liu family history archive |
| **Stationery** | Letterhead, note cards — half-letter, dotted grid, botanical line art |

All surfaces share one token file. Only density and component shape differ.

---

## Content Fundamentals

Minerali copy is **first-person, essayistic, and quietly confident** — a thoughtful technologist writing for themselves and a small audience of peers, not a startup pitching.

### Voice

- **First person, singular.** "I" not "we." "You" is the reader (Hermes — *"the agent that grows with you"*).
- **Quiet, not quirky.** No exclamation points. No emoji. No startup-speak. Favor understatement.
- **Sentence case, always** — buttons, headings, nav. Title Case only for proper nouns and the wordmark (ATLAS Meridia, Hermes, Aeon).
- **Concrete over abstract.** Describe mechanism, not hype.
- **Em dashes and ampersands welcome.** The serif display earns them.

### Casing & symbols

- UI labels, buttons, headings: **sentence case**.
- Wordmark: **ATLAS** set muted, the product name set in paper, split by an **acid slash** — a two-tone mark. See `preview/wordmark.html`.
- Token names: **kebab-case** custom properties (`--mn-paper`, `--text-primary`).
- **No emoji**, ever. The bullet-dot `·` is the meta separator. No arrow glyphs — use a real icon or the word.

---

## Visual Foundations

The aesthetic is **ink ground, paper text, square and flat**. Mono sets the voice; Fraunces sets the display; Literata carries long reading. **No gradients. No blurs. No bounce.**

### Color

- **One ground, three depths** (raw tokens, theme-independent). Ink `#07080a` → ink-2 `#0d0e11` → ink-3 `#111317`, used directly by terminals, cards, and modals. The default theme (**graphite**) lifts the *page* to `#1a1a1d` so long text reads without strain.
- **Paper, not white.** `--mn-paper #e6ddc8` primary text, `--mn-bone #b8ad93` secondary, `--mn-chalk #f4ecd9` emphatic.
- **Two warm signals + one cut.** **Rust** `--mn-rust #c75a2a` is the primary signal — links, drop caps, accents. **Oxblood** `--mn-oxblood #3a0f10` is a deep warm fill. **Acid** `--mn-acid #2be0c8` is *the cut* — use it on **≤15%** of any surface (active state, a single emphatic word, the prompt glyph). It is a knife, not a fill.
- **Dividers are hairlines.** `--mn-hairline #1c1e22`, always 1px. Cards at rest use a hairline border, never a shadow.
- **No gradients in product UI.** Solid fills only.

### Token model — two layers, one rule

Tokens come in two layers; using the wrong one is the easiest way to break a theme:

- **Raw brand tokens** (`--mn-ink`, `--mn-paper`, `--mn-rust`, `--mn-acid` …) are **theme-independent** — they hold the same value in every theme. Use them **only** for brand-fixed marks that must not change between grounds: the logo, the acid cut, a terminal surface that is always deep ink.
- **Semantic tokens** (`--bg-primary`, `--bg-elevated`, `--text-primary`, `--text-secondary`, `--text-muted`, `--border-color`, `--accent`, `--accent-cut`) are **per-theme**. Use them for everything that must adapt — body text, page grounds, borders, links. **Set text with `--text-primary` / `--text-secondary`, never with `--mn-paper`**, or the surface won't flip in cream.

### Themes

Set `data-theme` on `<html>`. Two scopes, both in `colors_and_type.css`:

- **`graphite`** — the default (`:root`). Lifted ground, nocturnal but readable. The single dark ground.
- **`cream`** (alias `light`) — daylight paper reading. The variant, never the default.

For a user-facing switch, ship `theme-toggle.js` (see below) rather than wiring `data-theme` by hand. (A surface that genuinely needs the deepest `#07080a` ink uses the raw `--mn-ink` token directly — there is no longer a separate `dark` theme.)

### Typography

Four faces, each with one job:

- **Fraunces — display only.** Heroes, `h1`–`h3`, drop caps, stat values. Driven by optical size; the display hero uses `opsz 144`, `WONK 1`, weight 900 **italic** with tight `-0.04em` tracking and `0.86` leading.
- **Literata — body & long-form reading.** `--font-body`, ~20px (`--text-body`), low `opsz` (~28) at weight ~340. The reading face for prose, leads, and templates.
- **JetBrains Mono — the voice.** Every UI label, button, slug, and number is mono caps. `--font-ui` *is* the mono.
- **Noto Serif TC — CJK.** Traditional Chinese for the Living Archive.
- **Italic is reserved, not a texture.** Only the **Display XL hero** (`.display` / `.mn-display`) is italic — plus the **ampersand glyph**. Everything else is roman; use extra **weight** (800–900) where it needs presence.
- **One emphasis channel, never stacked.** Emphasis is color alone (`em` → accent), or weight when it must survive grayscale/print. Don't combine signals.
- **Type scale tops out hard.** `5xl` 88px, `4xl` 64px. Body reading size is 20px.
- **Drop caps** open long-form articles — rust, Fraunces roman, ~4.5em, float left. The hallmark of the reading surface.

### Spacing & layout

- **8px rhythm** (`--mn-u`). The `--space-*` scale runs 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160 — no odd values.
- **Prose column 608px** (`--width-prose`), wide 832px, max container 1280px.
- Generous vertical rhythm — section gaps are 48px or 96px, not 24px.

### Shape, motion, effects

- **Square.** `--border-radius` and `-sm` are `0`; only large containers get a 2px concession (`-lg`).
- **Flat.** Shadows exist (`sm` / default / `lg`) but are **reserved for modals and popovers** — everything at rest uses a 1px hairline.
- **Fast or none.** `--transition-fast` 120ms, `--transition-base` 250ms, `--transition-slow` 380ms with `cubic-bezier(0.16, 1, 0.3, 1)` — the house curve. No spring, no bounce, no parallax. Fade + translate are the default entrance, never scale-from-0.

### Hover & press

- **Buttons invert.** `.mn-btn` is transparent with a 1px `currentColor` border; on hover it fills paper, text goes ink. The acid variant inverts the other way.
- **Links** deepen their rust underline on hover (45% → 100%).

---

## Iconography

**Inline SVG, stroke-based, 2px width, 24×24 viewBox** in the Heroicons idiom. **[Lucide](https://lucide.dev/)** (CDN, `https://unpkg.com/lucide@latest`) is the drop-in for prototypes — flagged as a substitution; production keeps hand-rolled SVG. Never raster, never emoji. Stroke inherits `currentColor`; accent icons use rust or acid explicitly. Sizing: 16px with `--text-sm`, 20px with `--text-base`, 24px standalone.

### Logos & assets

In `assets/`: wordmark + square "AM" monogram. Copy them into your output folder — never hotlink.

### Theme toggle

`theme-toggle.js` is a self-mounting `<theme-toggle>` web component — a graphite ⇄ cream switch for surfaces that should let the reader change grounds. Copy it next to the CSS and add `<script src="theme-toggle.js" defer></script>`; it mounts fixed top-right, flips `data-theme` on `<html>`, persists to `localStorage`, and is styled entirely from the active theme's tokens (no extra CSS, no dependencies). Place a `<theme-toggle></theme-toggle>` tag to anchor it inline instead of fixed. Attributes: `data-themes` (default `"graphite cream"`), `data-position`, `data-storage-key`. Don't add it to a surface that already controls theme through a Tweaks panel — they'll conflict. Specimen: `preview/theme-toggle.html`.

### Botanical motifs

Print work uses ginkgo, wren, chrysanthemum, and ink-wash sailboat line art. Production source files are not bundled — request from Kenny. For prototypes, leave a placeholder and flag it.

---

## Index

- `colors_and_type.css` — **the** stylesheet: tokens, two themes, base element styles, and the `.mn-*` primitive classes. Link this first; it is the only stylesheet.
- `README.md` — this file; the source of truth on voice, color, type, themes, motion, iconography.
- `SKILL.md` — agent skill manifest (short operator's note; defers to this README).
- `assets/` — logos, marks. Copy out, don't hotlink.
- `theme-toggle.js` — self-mounting `<theme-toggle>` graphite ⇄ cream switch.
- `fonts/README.md` — the four-family load table.
- `preview/` — one-purpose card specimens (colors, type, spacing, components, brand).
- `Blog Post.html` / `Blog Post (EN-中).html` — long-form templates (graphite default, drop cap, Literata body).
- `preview/external-business.html` — calmer `cream` specimen for consulting, service, and credibility pages.
- `v1/` — archived pre-Minerali Next.js style-guide app. Reference only; do not start new work from it unless explicitly asked.
- `_source/` — original zip import preserved for provenance.

## Caveats

- Fonts load from Google Fonts CDN, not bundled `.ttf`. See `fonts/README.md`.
- Iconography uses Lucide as a Heroicons substitute — flagged above.
- The compiler's internal namespace is a stable per-project identifier (`ATLASMeridiaDesignSystemRemix_…`) that does **not** change when the project is renamed — it's intentionally sticky so references never break. It's only surfaced as `window.<Namespace>` for compiled components, of which this system has none, so it is inert. No action needed.
