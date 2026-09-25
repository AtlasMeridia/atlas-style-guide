'use client';

import outlets from '@/data/outlets.json';

export default function WebOutletPage() {
  const webOutlet = outlets.outlets.find((o) => o.id === 'web');

  if (!webOutlet) return null;

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Web Outlet
        </h1>
        <p className="text-[--text-secondary] mt-2">{webOutlet.description}</p>
      </div>

      {/* Breakpoints */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Breakpoints
        </h2>
        <div className="space-y-3">
          {webOutlet.specs.breakpoints &&
            Object.entries(webOutlet.specs.breakpoints).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-4 p-4 rounded-lg border border-[--border-color]"
              >
                <code className="w-16 text-sm text-[--accent] font-mono">
                  {key}
                </code>
                <span className="text-sm text-[--text-muted] font-mono w-20">
                  {value}
                </span>
                <div className="flex-1">
                  <div
                    className="h-4 bg-[--accent]/20 rounded"
                    style={{
                      width: `${Math.min(100, (parseInt(value) / 1536) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Usage Guidelines
        </h2>
        <div className="prose-like space-y-4 text-[--text-secondary]">
          <p>
            The web outlet is the primary application of the ATLAS Meridia design system.
            All tokens are designed with web usage in mind, with CSS custom properties
            as the primary output format.
          </p>
          <p>
            Use the <code className="text-[--accent]">tokens.css</code> file exported
            from this style guide as the source of truth for your web projects.
          </p>
        </div>
      </section>

      {/* Implementation */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Implementation
        </h2>
        <div className="p-4 rounded-lg bg-[--bg-elevated] border border-[--border-color]">
          <pre className="text-sm text-[--text-secondary] font-mono overflow-x-auto">
{`/* Import in your global CSS */
@import 'tokens.css';

/* Use tokens via CSS custom properties */
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-ui);
  padding: var(--space-4);
  border-radius: var(--border-radius);
  transition: var(--transition-base);
}

/* Tailwind usage */
<div className="bg-[--bg-primary] text-[--text-primary]">
  ...
</div>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
