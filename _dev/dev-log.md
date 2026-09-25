# Dev log

## 2026-09-25 — review and v6.1 calmer pass

**State found.** The v6 migration (Next.js token editor moved to `v1/`, Minerali at root) had sat uncommitted since 2026-06-30. The root `CLAUDE.md` had been deleted, and there was no `BACKLOG.md` or `_dev/`. It was committed as a baseline before any changes.

**Review findings** (full list in `research/2026-09-25 v6.1 review.md`):
- The base `h1`–`h3` used the hero cut (`opsz 144`, weight 800, `-0.04em`) at 28–48px, which collapsed word spaces ("Workflowinventory").
- `body` defaulted to mono, so unclassed paragraphs rendered as code (11 of 13 paragraphs on the cream business page).
- The Literata import requested weights 400–600, so `--body-weight` 340/380 never rendered.
- Contrast failures: rust links on graphite 4.07, acid on cream 2.94, muted text 3.2–3.7.
- Acid had become the main accent (blog and manifesto emphasis, links, slugs, `code`), against the README rule.
- The blog Tweaks defaults overrode the documented template: 736px column, drop cap off, and an 11px overflow at 1280px.

**Decisions (Kenny).** Refine toward calmer, not bolder. Enforce the acid rule rather than codify the drift.

**What changed.**
- Tokens: `--accent-text` #d56b35 on graphite. Graphite text now references `--mn-paper` / `--mn-bone`. Muted text is #90887c on graphite and #736b5d on cream. Cream secondary is #5c5447 and cream acid #0f7a67. Graphite error is #e0675a. All text tokens pass AA; see the README contrast table.
- Base styles: headings use automatic optical size, `WONK 0`, weight 700. `body` is Literata, with chrome elements set to mono and `.mn-chrome` for operator shells. `.prose em`/`strong` use a single channel. `code` is paper, not acid. Slugs are quiet, with acid only on `.glyph`. Added the `--text-2xs` 11px floor, `.mn-btn.danger`, and reduced-motion transitions.
- Templates: shared `blog-post.css` maps `--bp-*` onto the semantic tokens, so cream works with no second palette. Emphasis and links are rust. Removed the backdrop blur, the gradient underline, and the round dot in the bilingual template. The Tweaks panel is guarded so pages work from disk.
- Specimens: the buttons card rebuilt on `.mn-btn`; manifesto is responsive with calmer numerals; the external-business page is set in Literata, with "I" copy and a shorter hero; operator specimens use roman type and keep acid only for live states. Small type is at the 11px floor everywhere, and the grid label overlap is fixed.

**Verified.** Rendered all 21 specimens plus both templates (desktop, 390px mobile, cream, 中) with Playwright. No horizontal overflow and no page errors, except the expected Tweaks panel CORS message from `file://`, which no longer breaks the page.
