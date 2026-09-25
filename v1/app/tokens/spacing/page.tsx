'use client';

import { useTokenStore } from '@/lib/store';

export default function SpacingPage() {
  const { tokens } = useTokenStore();

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Spacing
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Consistent spacing scale based on a 4px base unit.
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Spacing Scale
        </h2>
        <div className="space-y-3">
          {Object.entries(tokens.spacing).map(([key, space]) => (
            <div
              key={key}
              className="flex items-center gap-4 p-3 rounded-lg border border-[--border-color]"
            >
              <code className="w-24 text-sm text-[--accent] font-mono shrink-0">
                --space-{key}
              </code>
              <div className="w-20 text-sm text-[--text-muted] font-mono shrink-0">
                {space.value}
              </div>
              <div className="w-16 text-sm text-[--text-muted] shrink-0">
                {space.px}
              </div>
              <div className="flex-1 flex items-center">
                <div
                  className="h-6 bg-[--accent]/30 rounded"
                  style={{ width: space.px }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Layout Widths */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Layout Widths
        </h2>
        <div className="space-y-4">
          {Object.entries(tokens.layout).map(([key, width]) => (
            <div
              key={key}
              className="p-4 rounded-lg border border-[--border-color]"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <code className="text-sm text-[--accent] font-mono">
                    --width-{key}
                  </code>
                  <span className="text-sm text-[--text-muted] ml-4">
                    {width.value} ({width.px})
                  </span>
                </div>
                {width.description && (
                  <span className="text-sm text-[--text-muted]">
                    {width.description}
                  </span>
                )}
              </div>
              <div
                className="h-8 bg-[--accent]/20 rounded border border-[--accent]/30"
                style={{ width: '100%', maxWidth: width.px }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visual Reference */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Visual Reference
        </h2>
        <div className="p-6 rounded-lg border border-[--border-color] bg-[--bg-elevated]">
          <div className="flex flex-wrap items-end gap-2">
            {Object.entries(tokens.spacing).map(([key, space]) => (
              <div key={key} className="flex flex-col items-center">
                <div
                  className="bg-[--accent] rounded"
                  style={{
                    width: space.px,
                    height: space.px,
                  }}
                />
                <span className="text-xs text-[--text-muted] mt-2 font-mono">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
