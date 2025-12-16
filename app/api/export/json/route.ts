import { NextResponse } from 'next/server';
import tokens from '@/data/tokens.json';

export async function GET() {
  return NextResponse.json(tokens, {
    headers: {
      'Content-Disposition': 'attachment; filename="tokens.json"',
    },
  });
}
