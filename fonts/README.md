# Fonts

Minerali loads **four** Google Fonts families from the Google Fonts CDN. No local `.ttf` files are bundled — the `@import` at the top of `colors_and_type.css` pulls them at runtime. Always reference the `--font-*` token, never a literal family name.

| Token | Family | Role | Axes / weights |
| --- | --- | --- | --- |
| `--font-display` | **Fraunces** | **Display only** — heroes, headings, drop caps, stat values | `ital,opsz 9..144,wght 300..900`. The XL hero (`.display`) is italic 900, `opsz 144`, `WONK 1`. Headings `h1`–`h3` are roman 700 at automatic optical size, `WONK 0`. |
| `--font-body` | **Literata** | **Body / long-form reading** — the `body` default | `opsz 7..72,wght 300..600` + italic. Weight 340 (graphite) / 380 (cream) via `--body-weight`; low `opsz` (~28) at the 20px reading size. |
| `--font-ui` / `--font-mono` | **JetBrains Mono** | All UI chrome — labels, buttons, slugs, numbers | `400 / 500 / 700` + italic. Mono caps. (`--font-ui` and `--font-mono` are the same family — two names, one face.) |
| `--font-chinese` | **Noto Serif TC** | Traditional Chinese (Living Archive) | `300 / 400 / 500 / 600`. |

**Fraunces is not the body face — Literata is.** Fraunces sets display and headings; Literata sets everything you read at length.

Retired (do not use): Cormorant Garamond, Lora, DM Sans, IBM Plex Mono.
