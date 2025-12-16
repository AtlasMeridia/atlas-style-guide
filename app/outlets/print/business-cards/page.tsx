'use client';

import outlets from '@/data/outlets.json';

export default function BusinessCardsPage() {
  const outlet = outlets.outlets.find((o) => o.id === 'print-business-cards');

  if (!outlet) return null;

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Business Cards
        </h1>
        <p className="text-[--text-secondary] mt-2">{outlet.description}</p>
        <span className="mt-2 inline-block text-xs px-2 py-1 rounded bg-[--accent]/20 text-[--accent]">
          {outlet.status}
        </span>
      </div>

      {/* Specifications */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {outlet.specs.dimensions && (
            <>
              <div className="p-4 rounded-lg border border-[--border-color]">
                <div className="text-xs text-[--text-muted] mb-1">Dimensions</div>
                <div className="text-lg font-mono text-[--text-primary]">
                  {outlet.specs.dimensions.width} x {outlet.specs.dimensions.height}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-[--border-color]">
                <div className="text-xs text-[--text-muted] mb-1">Bleed</div>
                <div className="text-lg font-mono text-[--text-primary]">
                  {outlet.specs.dimensions.bleed}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-[--border-color]">
                <div className="text-xs text-[--text-muted] mb-1">Safe Zone</div>
                <div className="text-lg font-mono text-[--text-primary]">
                  {outlet.specs.dimensions.safeZone}
                </div>
              </div>
            </>
          )}
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Resolution</div>
            <div className="text-lg font-mono text-[--text-primary]">
              {outlet.specs.resolution}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Guide */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Visual Guide
        </h2>
        <div className="p-8 rounded-lg bg-[--bg-elevated] border border-[--border-color]">
          {/* Card mockup with zones */}
          <div className="relative mx-auto" style={{ width: '350px', height: '200px' }}>
            {/* Bleed area */}
            <div
              className="absolute inset-0 bg-[--error]/10 border border-[--error]/30 rounded"
              style={{ margin: '-12.5px' }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-[--error]">
                Bleed (0.125&quot;)
              </span>
            </div>

            {/* Trim line */}
            <div className="absolute inset-0 border-2 border-dashed border-[--text-muted] rounded" />

            {/* Safe zone */}
            <div
              className="absolute bg-[--success]/10 border border-[--success]/30 rounded"
              style={{ inset: '25px' }}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-[--success]">
                Safe Zone (0.25&quot; from edge)
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[--error]/20 border border-[--error]/30 rounded" />
              <span className="text-[--text-muted]">Bleed area (will be trimmed)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-dashed border-[--text-muted] rounded" />
              <span className="text-[--text-muted]">Trim line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[--success]/20 border border-[--success]/30 rounded" />
              <span className="text-[--text-muted]">Safe zone (keep text here)</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOO Product Selection */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          MOO Product
        </h2>
        <div className="p-6 rounded-lg border border-[--accent]/30 bg-[--accent]/5">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-[--accent] shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <div className="font-medium text-[--text-primary]">Product Selection TBD</div>
              <p className="text-sm text-[--text-muted] mt-1">
                {outlet.specs.vendor?.notes}
              </p>
              <p className="text-sm text-[--text-muted] mt-2">
                MOO offers several business card options including Original, Luxe, Cotton,
                and Super cards. Selection will depend on paper weight, finish, and
                budget requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Guidance */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Typography for Print
        </h2>
        <div className="space-y-4 text-[--text-secondary]">
          <p>
            Minimum font sizes for business cards:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--accent]" />
              <span>Name: 10-12pt (Cormorant Garamond)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--accent]" />
              <span>Title/Role: 8-9pt (DM Sans)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[--accent]" />
              <span>Contact info: 7-8pt (DM Sans)</span>
            </li>
          </ul>
          <p className="text-sm text-[--text-muted] mt-4">
            Note: Sans-serif fonts (DM Sans) are generally more legible at small sizes
            in print. Consider using Cormorant Garamond only for names or headlines.
          </p>
        </div>
      </section>
    </div>
  );
}
