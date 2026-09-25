import { NextResponse, NextRequest } from 'next/server';
import { writeFileSync } from 'fs';
import path from 'path';
import tokens from '@/data/tokens.json';

export async function GET() {
  return NextResponse.json(tokens, {
    headers: {
      'Content-Disposition': 'attachment; filename="tokens.json"',
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const filePath = path.join(process.cwd(), 'data', 'tokens.json');
  writeFileSync(filePath, JSON.stringify(body, null, 2) + '\n');
  return NextResponse.json({ ok: true });
}
