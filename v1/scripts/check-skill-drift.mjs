#!/usr/bin/env node
/**
 * Skill Drift Check
 *
 * Scans ~/Projects/atlas-agent-skills/atlas-meridia-design/ for hex colors
 * and font families that aren't declared in data/tokens.json. Any match
 * means the skill has drifted from the source of truth.
 *
 * Exits 1 on drift so it can gate CI / the export pipeline.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOKENS_PATH = join(ROOT, 'data/tokens.json');
const SKILL_ROOT = join(homedir(), 'Projects/atlas-agent-skills/atlas-meridia-design');

// Files whose only job is to BE a snapshot — skip drift checks on them,
// they're either symlinks to dist/ or intentionally frozen references.
const SKIP_FILES = new Set(['tokens.css', 'semantic.css']);
const SKIP_DIRS = new Set(['node_modules', '.git']);
const TEXT_EXT = /\.(css|md|html|svg|json|txt|js|ts|mjs)$/i;

function collectTokenHexes(tokens) {
  const hexes = new Set();
  const walk = (obj) => {
    if (!obj || typeof obj !== 'object') return;
    for (const v of Object.values(obj)) {
      if (typeof v === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(v)) {
        hexes.add(v.toLowerCase());
      } else if (typeof v === 'object') {
        walk(v);
      }
    }
  };
  walk(tokens.colors);
  // Theme blocks contain literal hexes for text-primary/secondary/muted
  walk(tokens.themes);
  return hexes;
}

function collectTokenFonts(tokens) {
  const names = new Set();
  for (const f of Object.values(tokens.typography.fonts)) {
    // extract the quoted primary family — "'Cormorant Garamond', Georgia, serif"
    const m = f.family.match(/'([^']+)'/);
    if (m) names.add(m[1]);
  }
  return names;
}

function walkFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walkFiles(p, out);
    else if (TEXT_EXT.test(entry) && !SKIP_FILES.has(entry)) out.push(p);
  }
  return out;
}

function main() {
  const tokens = JSON.parse(readFileSync(TOKENS_PATH, 'utf-8'));
  const allowedHexes = collectTokenHexes(tokens);
  const allowedFonts = collectTokenFonts(tokens);

  const drifts = [];
  const hexRe = /#[0-9a-fA-F]{6}\b/g;
  const fontRe = /'([A-Z][A-Za-z0-9 ]+)'/g;

  for (const file of walkFiles(SKILL_ROOT)) {
    const text = readFileSync(file, 'utf-8');
    const rel = relative(SKILL_ROOT, file);

    const seenHexes = new Set(text.match(hexRe) || []);
    for (const hex of seenHexes) {
      if (!allowedHexes.has(hex.toLowerCase())) {
        drifts.push({ file: rel, kind: 'hex', value: hex });
      }
    }

    for (const m of text.matchAll(fontRe)) {
      const name = m[1];
      if (name.length < 5) continue; // skip random quoted short strings
      // Only flag if it LOOKS like a font family (has "Sans", "Serif", "Mono",
      // or is a known family we're checking)
      const looksLikeFont = /\b(Sans|Serif|Mono|Garamond|Lora|DM|IBM|Noto)\b/.test(name);
      if (!looksLikeFont) continue;
      if (!allowedFonts.has(name)) {
        drifts.push({ file: rel, kind: 'font', value: name });
      }
    }
  }

  if (drifts.length === 0) {
    console.log(`[drift-check] OK — skill is in sync with tokens v${tokens.meta.version}`);
    console.log(`  scanned: ${SKILL_ROOT}`);
    console.log(`  allowed hexes: ${allowedHexes.size}, fonts: ${allowedFonts.size}`);
    return;
  }

  console.error(`\n[drift-check] FAIL — ${drifts.length} drift(s) in skill vs tokens v${tokens.meta.version}:\n`);
  const byFile = new Map();
  for (const d of drifts) {
    if (!byFile.has(d.file)) byFile.set(d.file, []);
    byFile.get(d.file).push(d);
  }
  for (const [file, items] of byFile) {
    console.error(`  ${file}`);
    for (const it of items) console.error(`    ${it.kind}: ${it.value}`);
  }
  console.error(`\nFix: update the skill to reference tokens by name (var(--…)), or sync the hex to data/tokens.json.`);
  process.exit(1);
}

main();
