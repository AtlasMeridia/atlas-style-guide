'use client';

import Link from 'next/link';
import { useTokenStore } from '@/lib/store';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  count: number;
  preview: React.ReactNode;
}

function CategoryCard({ title, description, href, count, preview }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-lg border border-[--border-color] bg-[--bg-elevated] hover:border-[--accent]/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-display font-medium text-[--text-primary] group-hover:text-[--accent] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[--text-muted] mt-1">{description}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-[--bg-primary] text-[--text-muted] font-mono">
          {count}
        </span>
      </div>
      <div className="mt-4">{preview}</div>
    </Link>
  );
}

function ColorPreviewRow({ colors }: { colors: string[] }) {
  return (
    <div className="flex gap-1">
      {colors.map((color, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function TypePreview() {
  return (
    <div className="space-y-2">
      <div className="font-display text-2xl text-[--text-primary]">Aa</div>
      <div className="font-body text-base text-[--text-secondary]">Body text</div>
      <div className="font-ui text-sm text-[--text-muted]">UI Label</div>
    </div>
  );
}

function SpacingPreview() {
  return (
    <div className="flex items-end gap-1">
      {[4, 8, 12, 16, 24, 32].map((size) => (
        <div
          key={size}
          className="bg-[--accent]/30 rounded-sm"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

export default function Dashboard() {
  const { tokens } = useTokenStore();

  const colorCount =
    Object.keys(tokens.colors.navy).length +
    Object.keys(tokens.colors.cream).length +
    Object.keys(tokens.colors.accent).length +
    Object.keys(tokens.colors.semantic).length;

  const typographyCount =
    Object.keys(tokens.typography.fonts).length +
    Object.keys(tokens.typography.scale).length;

  const spacingCount = Object.keys(tokens.spacing).length;

  const navyColors = Object.values(tokens.colors.navy).map((c) => c.value);
  const creamColors = Object.values(tokens.colors.cream).map((c) => c.value);

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-medium text-[--text-primary]">
          {tokens.meta.name}
        </h1>
        <p className="text-[--text-secondary] mt-2 max-w-2xl">
          {tokens.meta.description}
        </p>
        <div className="flex items-center gap-4 mt-4 text-sm text-[--text-muted]">
          <span>Version {tokens.meta.version}</span>
          <span className="w-1 h-1 rounded-full bg-[--text-muted]" />
          <span>
            Updated{' '}
            {new Date(tokens.meta.updatedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Token Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryCard
          title="Colors"
          description="Navy, cream, and accent palettes"
          href="/tokens/colors"
          count={colorCount}
          preview={
            <div className="space-y-2">
              <ColorPreviewRow colors={navyColors.slice(0, 4)} />
              <ColorPreviewRow colors={creamColors.slice(0, 4)} />
            </div>
          }
        />

        <CategoryCard
          title="Typography"
          description="Font families and type scale"
          href="/tokens/typography"
          count={typographyCount}
          preview={<TypePreview />}
        />

        <CategoryCard
          title="Spacing"
          description="Consistent spacing scale"
          href="/tokens/spacing"
          count={spacingCount}
          preview={<SpacingPreview />}
        />

        <CategoryCard
          title="Motion"
          description="Transitions and easing"
          href="/tokens/motion"
          count={Object.keys(tokens.motion).length}
          preview={
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-[--accent] animate-pulse" />
              <span className="text-sm text-[--text-muted]">150ms - 600ms</span>
            </div>
          }
        />
      </div>

      {/* Outlets Section */}
      <div className="mt-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-4">
          Outlets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/outlets/web"
            className="p-4 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[--accent]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[--accent]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[--text-primary]">Web</div>
                <div className="text-sm text-[--text-muted]">Primary outlet</div>
              </div>
            </div>
          </Link>

          <Link
            href="/outlets/print"
            className="p-4 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[--accent]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[--accent]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium text-[--text-primary]">Print</div>
                <div className="text-sm text-[--text-muted]">Business cards, stationery</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
