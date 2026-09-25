# atlas-style-guide

Minerali v6 is the active design system in this repository root. Use it for
`kennyliu.io`, internal ATLAS / AtlasCortex projects, Hermes, Aeon, Living
Archive, stationery, and related prototypes unless the owning project says
otherwise.

Start with `README.md`, then use `colors_and_type.css` as the token source of
truth. Link the stylesheet first, use semantic CSS variables for theme-aware
surfaces, and prefer the preview specimens over inventing new primitives.

Choose the profile before designing:
- Editorial and internal operator surfaces usually use `graphite`.
- Consulting, sales, service, credibility, intake, and portfolio pages use the
  calmer `cream` external-business profile in `preview/external-business.html`.
- Archive, family-history, and stationery work use `cream` unless the project
  says otherwise.

Track work in `BACKLOG.md`; record sessions in `_dev/dev-log.md`, design
explorations in `_dev/research/`, and trials in `_dev/experiments/`.

The previous Next.js style-guide app is archived in `v1/`. Treat it as reference
material only. Do not use the navy / cream / amber base system for new work
unless Kenny explicitly asks for v1.
