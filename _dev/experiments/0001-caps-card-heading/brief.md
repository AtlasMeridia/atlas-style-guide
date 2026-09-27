# 0001 — Caps card heading

**Question.** Should Minerali have an uppercase Fraunces heading for dense card headers?

**Origin.** The robotica Linette console (`robotica/_dev/linette-mcp-console/index.html:29`) sets its card titles as `.item h3`: Fraunces 700 at 18px (`--text-base`), with -0.01em tracking. Kenny asked how the same face would look in all caps. Three renders on 2026-09-26 compared the options:

1. Sentence case (current).
2. Caps with nothing else changed. This was too heavy and wide, and it pushed trailing tags onto a new line.
3. Caps at 16px with +0.06em tracking. This keeps the original width and reads as a weighted label. It is the candidate.

**Round 2 (lighter weights).** The page now tunes the candidate: weight 400–700, 16 or 18px, caps or sentence case. Caps tracking is +0.06em at 16px and +0.05em at 18px; sentence case keeps -0.01em. Early read: at 500–600, caps reads as titling rather than shouting. At 400 it is elegant but closest to the body. Sentence case at 500 separates from the body only by weight and face. The default is caps at 500 and 16px.

**Round 3 (Kenny's direction).** Kenny is leaning towards caps at 500 and 18px with less tracking, and a smaller card body to keep the heading dominant. The page adds tracking (−0.01 to +0.06em) and card-body size (14–18px) controls, and opens on 500 · 18px · +0.03em · caps · body 16px. The left column stays at today's console values.

**What to watch.** In Minerali today, caps belong to the mono chrome (refs, tags, buttons, mono `h2` section labels). Caps Fraunces sits closer to that voice, so check whether the heading still separates from the labels around it, in both themes, at one and two columns.

**Specimen.** `index.html` rebuilds the console's card pattern with neutral copy. The candidate lives in local CSS as `.mn-caps-head`; it is not in `colors_and_type.css`.

**Outcome (adopted in v6.3, 2026-09-26).** Fraunces 600 · 18px · caps · +0.02em, over a 15px card body. It holds in both themes: the heading carries the card, and the 15px Literata body stays legible at graphite's 300 weight on a 1x display. It is now the page default. Adopted as `.mn-card`, `.mn-ref`, `.mn-card-head`, and `.mn-card-body`, with a new `--text-card` 15px step; the specimen is `preview/cards.html`. This page keeps its local tuning class for reference.
