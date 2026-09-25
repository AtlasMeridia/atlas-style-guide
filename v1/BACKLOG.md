# Backlog

## Now
- [ ] **Desaturate accent color family**: The current accent tokens (`#c9924a`, `#ddb878`, `#a87a3a`, `#8a6530`) are too bright/saturated for dark mode — they pop harshly against navy backgrounds. Reduce saturation ~30% across the accent family in `data/tokens.json` and `app/globals.css`. Warning inherits from accent so it updates automatically. Reference values already landed in Naked Robot (`shared/base.css`): `--accent-light: #c4a87c`, `--accent: #b58a52`, `--accent-dark: #9a7442`, `--accent-deep: #806238`. Audit any hardcoded `rgba(201, 146, 74, ...)` in components for the same fix.

## Next

## Later

## Done
