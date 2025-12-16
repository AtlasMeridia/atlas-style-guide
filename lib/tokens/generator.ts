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
