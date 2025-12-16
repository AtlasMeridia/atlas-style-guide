# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ATLAS Meridia Style Guide — a Next.js app for visually editing and managing the ATLAS Meridia design system. This is the canonical source for design tokens used across kennypliu.com properties.

**Deployed at:** https://style.kennypliu.com/ (Vercel)

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, TypeScript, Zustand

## Setup Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npx tsc --noEmit
```

## Project Structure

- `app/` - Next.js App Router pages
  - `tokens/` - Token browser (colors, typography, spacing, motion)
  - `outlets/` - Outlet-specific guidance (web, print)
  - `preview/` - Live component preview
  - `history/` - Version archive browser
  - `api/export/` - CSS/JSON export endpoints
- `components/` - React components
  - `layout/` - AppShell, Sidebar, Header
  - `editors/` - Visual token editors (future)
  - `preview/` - Preview components
- `lib/` - Utilities
  - `store.ts` - Zustand state management
  - `tokens/generator.ts` - CSS generation from JSON
- `data/` - Data files
  - `tokens.json` - **Source of truth for all design tokens**
  - `outlets.json` - Outlet configurations
- `types/tokens.ts` - TypeScript interfaces
- `public/archive/` - Historical HTML style guides (v1.1–v3.1)

## Key Files

| Purpose | Path |
|---------|------|
| Token definitions | `/data/tokens.json` |
| TypeScript types | `/types/tokens.ts` |
| CSS generator | `/lib/tokens/generator.ts` |
| State management | `/lib/store.ts` |
| Outlet configs | `/data/outlets.json` |

## Design Token Schema

Tokens are stored in JSON with this structure:

```typescript
{
  meta: { name, version, updatedAt, updatedBy },
  colors: { navy, cream, accent, semantic },
  typography: { fonts, scale, lineHeight, letterSpacing },
  spacing: { "1": { value, px }, ... },
  layout: { prose, wide, full },
  motion: { fast, base, slow, easeOutExpo },
  effects: { borderRadius, shadow },
  themes: { light, dark }
}
```

## Editing Tokens

1. Edit `/data/tokens.json`
2. The app uses this directly via Zustand store
3. Export CSS via `/api/export/css` endpoint
4. Copy exported `tokens.css` to Headless ATLAS project

## Styling Conventions

This app uses the same ATLAS Meridia tokens it edits (dogfooding):

```jsx
// Use CSS variables in Tailwind
<div className="bg-[--bg-primary] text-[--text-primary]" />
<div className="border-[--border-color]" />
<div className="text-[--accent]" />
```

## Adding New Token Categories

1. Update `/types/tokens.ts` with new interfaces
2. Add default values in `/data/tokens.json`
3. Update `/lib/tokens/generator.ts` for CSS output
4. Create browser page in `/app/tokens/[category]/page.tsx`
5. Add navigation link in `/components/layout/Sidebar.tsx`

## Outlets

- **Web**: Primary outlet, uses tokens directly as CSS custom properties
- **Print**: Business cards and stationery via MOO (placeholder status)
  - CMYK color guidance provided
  - Specific products TBD

## Related Projects

- **Headless ATLAS** (`/Users/lzr5/Projects/Headless ATLAS/`) - Main Next.js site that consumes the exported tokens
- **atlasm-site Style** (`/Users/lzr5/Projects/atlasm-site/Style/`) - Historical HTML style guides (archived here in `/public/archive/`)

## Deployment

Vercel auto-deploys from `main` branch. DNS via Cloudflare CNAME to `cname.vercel-dns.com`.
