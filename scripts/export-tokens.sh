#!/bin/bash
# ATLAS Token Export Script
# Generates CSS and JSON exports from tokens.json

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

echo "Running token export..."
npx tsx scripts/export-tokens.ts

echo ""
echo "Exported files:"
ls -la dist/
