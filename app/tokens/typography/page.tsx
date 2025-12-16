'use client';

import { useTokenStore } from '@/lib/store';

export default function TypographyPage() {
  const { tokens } = useTokenStore();

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Typography
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Font families, type scale, and text styling tokens.
        </p>
      </div>

      {/* Font Families */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Font Families
        </h2>
        <div className="space-y-6">
          {Object.entries(tokens.typography.fonts).map(([key, font]) => (
            <div
              key={key}
              className="p-6 rounded-lg border border-[--border-color] bg-[--bg-elevated]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-[--text-primary] capitalize">
                    {key}
                  </h3>
                  <code className="text-xs text-[--accent] font-mono">
                    --font-{key}
                  </code>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[--text-muted]">{font.usage}</div>
                  <div className="text-xs text-[--text-muted] mt-1">
                    Weights: {font.weights.join(', ')}
                  </div>
                </div>
              </div>

              {/* Font specimen */}
              <div
                className="text-4xl text-[--text-primary] mb-2"
                style={{ fontFamily: font.family }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
              <div
                className="text-lg text-[--text-secondary]"
                style={{ fontFamily: font.family }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </div>

              <div className="mt-4 pt-4 border-t border-[--border-color]">
                <code className="text-xs text-[--text-muted] font-mono break-all">
                  {font.family}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Type Scale
        </h2>
        <div className="space-y-4">
          {Object.entries(tokens.typography.scale).map(([key, size]) => (
            <div
              key={key}
              className="flex items-center gap-6 p-4 rounded-lg border border-[--border-color]"
            >
              <div className="w-24 shrink-0">
                <code className="text-sm text-[--accent] font-mono">
                  --text-{key}
                </code>
              </div>
              <div className="w-20 shrink-0 text-right">
                <span className="text-sm text-[--text-muted] font-mono">
                  {size.value}
                </span>
                {size.px && (
                  <span className="text-xs text-[--text-muted] ml-2">
                    ({size.px})
                  </span>
                )}
              </div>
              <div
                className="flex-1 text-[--text-primary] truncate"
                style={{ fontSize: size.value }}
              >
                The quick brown fox
              </div>
              {size.description && (
                <div className="text-sm text-[--text-muted] shrink-0">
                  {size.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Line Heights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(tokens.typography.lineHeight).map(([key, lh]) => (
            <div
              key={key}
              className="p-4 rounded-lg border border-[--border-color]"
            >
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm text-[--accent] font-mono">
                  --leading-{key}
                </code>
                <span className="text-sm text-[--text-muted] font-mono">
                  {lh.value}
                </span>
              </div>
              <div
                className="text-base text-[--text-secondary] border-l-2 border-[--accent]/30 pl-3"
                style={{ lineHeight: lh.value }}
              >
                The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
              </div>
              {lh.description && (
                <div className="text-xs text-[--text-muted] mt-2">
                  {lh.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Letter Spacing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(tokens.typography.letterSpacing).map(([key, ls]) => (
            <div
              key={key}
              className="p-4 rounded-lg border border-[--border-color]"
            >
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm text-[--accent] font-mono">
                  --tracking-{key}
                </code>
                <span className="text-sm text-[--text-muted] font-mono">
                  {ls.value}
                </span>
              </div>
              <div
                className="text-2xl text-[--text-primary] font-display"
                style={{ letterSpacing: ls.value }}
              >
                ATLAS MERIDIA
              </div>
              {ls.description && (
                <div className="text-xs text-[--text-muted] mt-2">
                  {ls.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
