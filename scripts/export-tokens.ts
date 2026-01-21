#!/usr/bin/env npx tsx
/**
 * ATLAS Token Export Script
 *
 * Generates distributable token files from tokens.json
 * Run with: npx tsx scripts/export-tokens.ts
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOKENS_PATH = join(ROOT, 'data/tokens.json');
const DIST_PATH = join(ROOT, 'dist');

// Import the generator (using dynamic import for ESM compatibility)
import { generateCSS } from '../lib/tokens/generator.js';
import type { DesignTokens } from '../types/tokens.js';

function main() {
  console.log('ATLAS Token Export');
  console.log('==================\n');

  // Ensure dist directory exists
  if (!existsSync(DIST_PATH)) {
    mkdirSync(DIST_PATH, { recursive: true });
  }

  // Load tokens
  const tokensRaw = readFileSync(TOKENS_PATH, 'utf-8');
  const tokens: DesignTokens = JSON.parse(tokensRaw);
  const version = tokens.meta.version;

  console.log(`Source: data/tokens.json`);
  console.log(`Version: ${version}`);
  console.log(`Updated: ${tokens.meta.updatedAt}\n`);

  // Generate CSS
  const css = generateCSS(tokens);
  const cssPath = join(DIST_PATH, `tokens-${version}.css`);
  const cssLatestPath = join(DIST_PATH, 'tokens.css');
  writeFileSync(cssPath, css);
  writeFileSync(cssLatestPath, css);
  console.log(`[CSS] ${cssPath}`);
  console.log(`[CSS] ${cssLatestPath} (latest)\n`);

  // Export JSON with version metadata
  const jsonExport = {
    ...tokens,
    _export: {
      generatedAt: new Date().toISOString(),
      format: 'atlas-meridia-tokens',
    }
  };
  const jsonPath = join(DIST_PATH, `tokens-${version}.json`);
  const jsonLatestPath = join(DIST_PATH, 'tokens.json');
  writeFileSync(jsonPath, JSON.stringify(jsonExport, null, 2));
  writeFileSync(jsonLatestPath, JSON.stringify(jsonExport, null, 2));
  console.log(`[JSON] ${jsonPath}`);
  console.log(`[JSON] ${jsonLatestPath} (latest)\n`);

  // Summary
  console.log('Export complete!');
  console.log(`Files written to: dist/`);
}

main();
