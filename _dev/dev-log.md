# Dev log

## 2026-09-26 — v6.3 cards

**Origin.** Kenny liked the dense card headers in the robotica Linette console, where `.item h3` is Fraunces 700 at 18px, and wanted to see them in caps. `_dev/experiments/0001-caps-card-heading/` ran three rounds:
1. Caps at 16px with +0.06em.
2. Lighter weights.
3. A tuner for weight, size, case, tracking, and card-body size.

Kenny settled on Fraunces 600 · 18px · caps · +0.02em, over a 15px card body.

**Adopted.**
- `colors_and_type.css` gains `--text-card` (15px) and four primitives: `.mn-card` (hairline, `--bg-deep`, 16px pad, flex header), `.mn-ref` (filled mono index chip), `.mn-card-head`, and `.mn-card-body`. Code inside a head keeps its case.
- New specimen `preview/cards.html`. Type-scale gains the card row.
- The casing rule now says caps are CSS-only, both in README "Casing & symbols" and in SKILL.md rule 8, so the uppercase head doesn't contradict sentence case in the source.
- Version bumped to 6.3.

**Also fixed.** The `theme-toggle.js` header claimed that a placed `<theme-toggle>` sits inline; in fact it needs `data-inline`. The comment is corrected.

## 2026-09-26 — v6.2 clear body

**Problem.** Kenny found the body text muddy, mostly in graphite. The review of the rendered blog and specimens found three causes working together:
- `.prose`, `.body-text`, and `.lead` used `--text-secondary`. It passes AA (7.8:1 graphite, 6.6:1 cream), but it is a mid-value warm tone on a warm ground. The blog body escaped only through a `blog-post.css` override, so its lead paragraph was still the dimmest text on the page.
- `.prose` pinned `opsz 28` on 20px text, and `.lead` pinned `opsz 40` on 24px. The display cuts thin the hairlines.
- `--body-weight` was 340 / 380. On cream, 380 looked washed out.

**Decision (Kenny).** Reading copy uses `--text-primary`, and optical size follows the type size. Weight splits by theme: graphite goes *lighter*, to 300, because light-on-dark blooms and a thinner stroke reads crisper once the color is primary. Cream goes to 400. `.lead` now follows `--body-weight` too, so the graphite lead isn't heavier than the body.

**Kept.** Grayscale smoothing (`antialiased`): switching it off rendered graphite noticeably heavier. `--text-secondary` stays for decks, captions, and marginalia.

**Propagated to specimens and docs.** On the cream business page, the lead, tile, fit-list, and CTA copy is now primary; the metric captions stay secondary. The annotations passage and the voice principles were set in Fraunces and are now Literata at `--body-weight`, since Fraunces is display-only. The CJK body sample is primary. Type-scale shows base / body / lg in Literata. `fonts/README.md`, `SKILL.md`, and `AGENTS.md` state the rule. `_ds_manifest.json` is Claude Design export metadata and still lists older values; regenerate it from Claude Design rather than hand-editing it.

**Artifacts.** The visual proposal is in `research/2026-09-26 body text revision.html` (live specimens with a theme toggle and a weight picker). Version labels are bumped to 6.2.

**Verified.** Rendered all 21 specimens and both templates in graphite and cream with Playwright. There were no page errors. Weight 300 holds at the 15–17px sizes in manifesto and chrome. Nine specimen cards overflow at 390px; these cards were sized for fixed viewports and the overflow is unrelated to this change. Weight and color changes can only narrow text.

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
