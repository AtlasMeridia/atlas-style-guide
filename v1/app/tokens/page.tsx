'use client';

import Link from 'next/link';
import { useTokenStore } from '@/lib/store';

export default function TokensOverview() {
  const { tokens } = useTokenStore();

  const categories = [
    {
      name: 'Colors',
      href: '/tokens/colors',
      count:
        Object.keys(tokens.colors.navy).length +
        Object.keys(tokens.colors.cream).length +
        Object.keys(tokens.colors.accent).length +
        Object.keys(tokens.colors.semantic).length,
    },
    {
      name: 'Typography',
      href: '/tokens/typography',
      count:
        Object.keys(tokens.typography.fonts).length +
        Object.keys(tokens.typography.scale).length,
    },
    {
      name: 'Spacing',
      href: '/tokens/spacing',
      count: Object.keys(tokens.spacing).length,
    },
    {
      name: 'Motion',
      href: '/tokens/motion',
      count: Object.keys(tokens.motion).length,
    },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-display font-medium text-[--text-primary] mb-6">
        Design Tokens
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="p-6 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-[--text-primary]">
                {cat.name}
              </span>
              <span className="text-sm text-[--text-muted] font-mono">
                {cat.count} tokens
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
