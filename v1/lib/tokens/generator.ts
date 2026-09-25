/**
 * CSS Token Generator
 *
 * Converts the JSON token schema to CSS custom properties
 */

import type { DesignTokens } from '@/types/tokens';

export function generateCSS(tokens: DesignTokens): string {
  const lines: string[] = [];

  lines.push(`/* ═══════════════════════════════════════════════════════════════`);
  lines.push(`   ATLAS MERIDIA DESIGN TOKENS`);
  lines.push(`   Version: ${tokens.meta.version}`);
  lines.push(`   Last updated: ${new Date(tokens.meta.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`);
  lines.push(`   `);
  lines.push(`   Usage: Import in globals.css after Tailwind base`);
  lines.push(`   These tokens are the source of truth for all styling.`);
  lines.push(`   ═══════════════════════════════════════════════════════════════ */`);
  lines.push('');
  lines.push(':root {');

  // Colors
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     COLOR SYSTEM');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  lines.push('  /* Navy Scale — desaturated, slightly warm */');
  for (const [key, color] of Object.entries(tokens.colors.navy)) {
    lines.push(`  --navy-${key}: ${color.value};`);
  }
  lines.push('  ');
  lines.push('  /* Warm Cream Scale — muted, paper-like */');
  for (const [key, color] of Object.entries(tokens.colors.cream)) {
    lines.push(`  --cream-${key}: ${color.value};`);
  }
  lines.push('  ');
  lines.push('  /* Amber-Gold Accent Scale */');
  lines.push(`  --accent-light: ${tokens.colors.accent.light.value};`);
  lines.push(`  --accent: ${tokens.colors.accent.default.value};`);
  lines.push(`  --accent-dark: ${tokens.colors.accent.dark.value};`);
  lines.push(`  --accent-deep: ${tokens.colors.accent.deep.value};`);
  lines.push('  ');
  lines.push('  /* Semantic Colors */');
  lines.push(`  --success: ${tokens.colors.semantic.success.value};`);
  lines.push(`  --error: ${tokens.colors.semantic.error.value};`);
  lines.push(`  --warning: var(--accent);`);

  // Typography
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     TYPOGRAPHY');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  lines.push('  /* Font Families (set via next/font in layout.tsx) */');
  lines.push(`  --font-display: ${tokens.typography.fonts.display.family};`);
  lines.push(`  --font-body: ${tokens.typography.fonts.body.family};`);
  lines.push(`  --font-ui: ${tokens.typography.fonts.ui.family};`);
  lines.push(`  --font-mono: ${tokens.typography.fonts.mono.family};`);
  lines.push(`  --font-chinese: ${tokens.typography.fonts.chinese.family};`);
  lines.push('  ');
  lines.push('  /* Type Scale */');
  for (const [key, size] of Object.entries(tokens.typography.scale)) {
    const comment = size.px ? ` /* ${size.px}${size.description ? ' — ' + size.description : ''} */` : '';
    lines.push(`  --text-${key}: ${size.value};${comment}`);
  }
  lines.push('  ');
  lines.push('  /* Line Heights */');
  for (const [key, lh] of Object.entries(tokens.typography.lineHeight)) {
    lines.push(`  --leading-${key}: ${lh.value};`);
  }
  lines.push('  ');
  lines.push('  /* Letter Spacing */');
  for (const [key, ls] of Object.entries(tokens.typography.letterSpacing)) {
    const comment = ls.description ? `   /* ${ls.description} */` : '';
    lines.push(`  --tracking-${key}: ${ls.value};${comment}`);
  }

  // Spacing
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     SPACING');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  for (const [key, space] of Object.entries(tokens.spacing)) {
    const comment = space.px ? ` /* ${space.px} */` : '';
    lines.push(`  --space-${key}: ${space.value};${comment}`);
  }

  // Layout
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     LAYOUT');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  for (const [key, width] of Object.entries(tokens.layout)) {
    const comment = width.description ? ` /* ~${width.px} — ${width.description} */` : '';
    lines.push(`  --width-${key}: ${width.value};${comment}`);
  }

  // Motion
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     MOTION');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  lines.push(`  --transition-fast: ${tokens.motion.fast.value};`);
  lines.push(`  --transition-base: ${tokens.motion.base.value};`);
  lines.push(`  --transition-slow: ${tokens.motion.slow.value};`);
  lines.push(`  --ease-out-expo: ${tokens.motion.easeOutExpo.value};`);

  // Effects
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     EFFECTS');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  for (const [key, radius] of Object.entries(tokens.effects.borderRadius)) {
    const cssKey = key === 'default' ? 'border-radius' : `border-radius-${key}`;
    lines.push(`  --${cssKey}: ${radius.value};`);
  }
  lines.push('  ');
  for (const [key, shadow] of Object.entries(tokens.effects.shadow)) {
    const cssKey = key === 'default' ? 'shadow' : `shadow-${key}`;
    lines.push(`  --${cssKey}: ${shadow.value};`);
  }

  // Icons
  lines.push('  ');
  lines.push('  /* ─────────────────────────────────────────────────────────────');
  lines.push('     ICONS');
  lines.push('     ───────────────────────────────────────────────────────────── */');
  lines.push('  ');
  lines.push(`  --icon-library: "${tokens.icons.library}";`);
  lines.push(`  --icon-weight: ${tokens.icons.weight};`);
  for (const [key, value] of Object.entries(tokens.icons.stroke)) {
    lines.push(`  --icon-stroke-${key}: ${value};`);
  }

  lines.push('}');

  // Light mode theme
  lines.push('');
  lines.push('/* ═══════════════════════════════════════════════════════════════');
  lines.push('   LIGHT MODE THEME');
  lines.push('   ═══════════════════════════════════════════════════════════════ */');
  lines.push('');
  lines.push(':root,');
  lines.push('[data-theme="light"] {');
  lines.push(`  --bg-primary: ${tokens.themes.light.bgPrimary};`);
  lines.push(`  --bg-deep: ${tokens.themes.light.bgDeep};`);
  lines.push(`  --bg-elevated: ${tokens.themes.light.bgElevated};`);
  lines.push(`  --text-primary: ${tokens.themes.light.textPrimary};`);
  lines.push(`  --text-secondary: ${tokens.themes.light.textSecondary};`);
  lines.push(`  --text-muted: ${tokens.themes.light.textMuted};`);
  lines.push(`  --border-color: ${tokens.themes.light.borderColor};`);
  lines.push('  ');
  lines.push(`  --body-weight: ${tokens.themes.light.bodyWeight};`);
  lines.push(`  --body-tracking: ${tokens.themes.light.bodyTracking};`);
  lines.push(`  --accent-text: ${tokens.themes.light.accentText};`);
  lines.push('}');

  // Dark mode theme
  lines.push('');
  lines.push('/* ═══════════════════════════════════════════════════════════════');
  lines.push('   DARK MODE THEME (Default for ATLAS Meridia)');
  lines.push('   ═══════════════════════════════════════════════════════════════ */');
  lines.push('');
  lines.push('[data-theme="dark"] {');
  lines.push(`  --bg-primary: ${tokens.themes.dark.bgPrimary};`);
  lines.push(`  --bg-deep: ${tokens.themes.dark.bgDeep};`);
  lines.push(`  --bg-elevated: ${tokens.themes.dark.bgElevated};`);
  lines.push(`  --text-primary: ${tokens.themes.dark.textPrimary};`);
  lines.push(`  --text-secondary: ${tokens.themes.dark.textSecondary};`);
  lines.push(`  --text-muted: ${tokens.themes.dark.textMuted};`);
  lines.push(`  --border-color: ${tokens.themes.dark.borderColor};`);
  lines.push('  ');
  lines.push(`  --body-weight: ${tokens.themes.dark.bodyWeight};`);
  lines.push(`  --body-tracking: ${tokens.themes.dark.bodyTracking};`);
  lines.push(`  --accent-text: ${tokens.themes.dark.accentText};`);
  lines.push('}');

  // System preference fallback
  lines.push('');
  lines.push('/* System preference fallback */');
  lines.push('@media (prefers-color-scheme: dark) {');
  lines.push('  :root:not([data-theme="light"]) {');
  lines.push(`    --bg-primary: ${tokens.themes.dark.bgPrimary};`);
  lines.push(`    --bg-deep: ${tokens.themes.dark.bgDeep};`);
  lines.push(`    --bg-elevated: ${tokens.themes.dark.bgElevated};`);
  lines.push(`    --text-primary: ${tokens.themes.dark.textPrimary};`);
  lines.push(`    --text-secondary: ${tokens.themes.dark.textSecondary};`);
  lines.push(`    --text-muted: ${tokens.themes.dark.textMuted};`);
  lines.push(`    --border-color: ${tokens.themes.dark.borderColor};`);
  lines.push('    ');
  lines.push(`    --body-weight: ${tokens.themes.dark.bodyWeight};`);
  lines.push(`    --body-tracking: ${tokens.themes.dark.bodyTracking};`);
  lines.push(`    --accent-text: ${tokens.themes.dark.accentText};`);
  lines.push('  }');
  lines.push('}');

  return lines.join('\n');
}

/**
 * Semantic text styles. Reference-only — every rule uses var(--token),
 * never a raw hex or font family. Drift-proof by construction.
 */
export function generateSemanticCSS(): string {
  return `/* ═══════════════════════════════════════════════════════════════
   ATLAS MERIDIA — Semantic Text Styles
   Generated from dist/tokens.css — all values reference tokens.
   Import AFTER tokens.css.
   ═══════════════════════════════════════════════════════════════ */

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-ui);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

h1, .h1 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-3xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

h2, .h2 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-2xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

h3, .h3 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-xl);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

h4, .h4 {
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: var(--text-lg);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

.display {
  font-family: var(--font-display);
  font-weight: 500;
  font-style: italic;
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

.prose, .body-text {
  font-family: var(--font-body);
  font-weight: var(--body-weight);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--body-tracking);
  color: var(--text-secondary);
}

.lead {
  font-family: var(--font-body);
  font-weight: 400;
  font-style: italic;
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

.ui-label, .meta {
  font-family: var(--font-ui);
  font-weight: 400;
  font-size: var(--text-sm);
  color: var(--text-muted);
  letter-spacing: 0.01em;
}

.caption {
  font-family: var(--font-ui);
  font-size: var(--text-xs);
  color: var(--text-muted);
}

code, .code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--accent-light);
  background: var(--bg-elevated);
  padding: 0.15em 0.4em;
  border-radius: var(--border-radius-sm);
}

a {
  color: var(--accent-text);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--accent) 40%, transparent);
  text-underline-offset: 0.15em;
  transition: text-decoration-color var(--transition-fast);
}
a:hover { text-decoration-color: var(--accent); }

blockquote {
  border-left: 2px solid var(--accent);
  padding-left: var(--space-5);
  font-style: italic;
  color: var(--text-secondary);
}

hr {
  border: 0;
  border-top: 1px solid var(--border-color);
  margin: var(--space-8) 0;
}

.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 4.5em;
  float: left;
  line-height: 0.85;
  padding: 0.05em 0.1em 0 0;
  color: var(--accent);
  font-weight: 400;
}

::selection {
  background: color-mix(in srgb, var(--accent) 30%, transparent);
  color: inherit;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
`;
}
