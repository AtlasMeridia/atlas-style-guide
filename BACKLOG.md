# Backlog

## Burn

Tasks explicitly approved for unattended automated dispatch by the capacity-burn scheduler.

## Now

## Next
- [ ] Robotica Linette console (`~/Projects/robotica/_dev/linette-mcp-console/`): move `.item` cards onto `.mn-card` / `.mn-card-head` / `.mn-card-body` from v6.3. Do this from that project.
- [ ] kennyliu.io (`~/Projects/headless-atlas/app/globals.css`): carries Minerali values under legacy `--color-navy-*` / `--color-cream-*` names; migrate to the semantic tokens and pick up the v6.3 contrast, body, and card values. Do this from that project, not here.
- [ ] Robotica media-review (`~/Projects/robotica/apps/media-review/web/tokens.css`): v6.0 copy whose header the minerali→robotica rename sweep changed to "ROBOTICA"; refresh to v6.3 from that project.
- [ ] `atlas-meridia-design` skill wrapper (`~/Projects/AtlasCortex-Support/skills/claude/atlas-meridia-design/`): `ui_kits/` still teaches the retired navy / amber system; remove or rebuild on v6.3.

## Blocked
- [ ] ⏸ Waiting on Kenny — botanical motif source files (ginkgo, wren, chrysanthemum, ink-wash sailboat) for stationery specimens — 2026-09-25

## Later
- [ ] Decide on the name collision: "Minerali" is both this design system and the robotica project's former name (`~/Projects/minerali` → `robotica`). Rename sweeps keep hitting the design system.
- [ ] Blog templates load React and Babel development builds from unpkg only for the Claude Design Tweaks panel; consider a copy-out variant without them.
- [ ] `_adherence.oxlintrc.json` points at an `index.js` that does not exist; regenerate from Claude Design or drop the restricted-imports rule.
- [ ] Bundle fonts locally instead of the Google Fonts CDN if an offline or print surface needs it.

## Done
- [x] Commit the Minerali v6 migration as a baseline (v1 archived) — 2026-09-25
- [x] v6.1 calmer pass: heading optical sizing, Literata body default, AA contrast, acid rule enforced, 11px floor, shared `blog-post.css` — 2026-09-25
- [x] Project scaffolding: `CLAUDE.md`, `BACKLOG.md`, `_dev/` — 2026-09-25
- [x] v6.3 cards: `.mn-card`, `.mn-ref`, caps Fraunces `.mn-card-head`, 15px `.mn-card-body` / `--text-card`, `preview/cards.html` — 2026-09-26
- [x] v6.2 clear body: reading copy in primary text, automatic optical size, `--body-weight` 300 graphite / 400 cream — 2026-09-26
