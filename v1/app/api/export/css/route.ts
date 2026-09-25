import { NextResponse } from 'next/server';
import { generateCSS } from '@/lib/tokens/generator';
import tokens from '@/data/tokens.json';
import type { DesignTokens } from '@/types/tokens';

export async function GET() {
  const css = generateCSS(tokens as DesignTokens);

  return new NextResponse(css, {
    headers: {
      'Content-Type': 'text/css',
      'Content-Disposition': 'attachment; filename="tokens.css"',
    },
  });
}
