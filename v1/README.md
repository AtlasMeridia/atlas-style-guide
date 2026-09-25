# ATLAS Meridia Style Guide

Design token management and visual reference for ATLAS Meridia properties.

**Live:** https://style.kennypliu.com/

## Overview

This app serves as the canonical source for:
- **Design tokens** (colors, typography, spacing, motion) in `/data/tokens.json`
- **Outlet specifications** (web, print) in `/data/outlets.json`
- **Aesthetic direction** (mood, motifs) in `/aesthetic/`

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Exporting Tokens

- **CSS**: `/api/export/css` downloads `tokens.css`
- **JSON**: `/api/export/json` downloads `tokens.json`

## TODO

Aesthetic direction is temporarily housed in `/aesthetic/`. Find a dedicated platform for mood boards and visual direction (Are.na, Figma, etc.).
