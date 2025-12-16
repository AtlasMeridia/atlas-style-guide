'use client';

import outlets from '@/data/outlets.json';

export default function StationeryPage() {
  const outlet = outlets.outlets.find((o) => o.id === 'print-stationery');

  if (!outlet) return null;

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Stationery
        </h1>
        <p className="text-[--text-secondary] mt-2">{outlet.description}</p>
        <span className="mt-2 inline-block text-xs px-2 py-1 rounded bg-[--accent]/20 text-[--accent]">
          {outlet.status}
        </span>
      </div>

      {/* Product Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg border border-[--border-color]">
            <h3 className="text-lg font-medium text-[--text-primary] mb-2">
              Letterhead
            </h3>
            <div className="text-sm text-[--text-muted] space-y-1">
              <p>Standard: 8.5&quot; x 11&quot;</p>
              <p>Bleed: 0.125&quot;</p>
              <p>Safe zone: 0.5&quot;</p>
            </div>
          </div>
          <div className="p-6 rounded-lg border border-[--border-color]">
            <h3 className="text-lg font-medium text-[--text-primary] mb-2">
              Envelopes
            </h3>
            <div className="text-sm text-[--text-muted] space-y-1">
              <p>#10 Standard: 4.125&quot; x 9.5&quot;</p>
              <p>A7 (invitations): 5.25&quot; x 7.25&quot;</p>
            </div>
          </div>
          <div className="p-6 rounded-lg border border-[--border-color]">
            <h3 className="text-lg font-medium text-[--text-primary] mb-2">
              Note Cards
            </h3>
            <div className="text-sm text-[--text-muted] space-y-1">
              <p>A2: 4.25&quot; x 5.5&quot;</p>
              <p>A6: 4.5&quot; x 6.25&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          General Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Color Space</div>
            <div className="text-lg font-mono text-[--text-primary]">
              {outlet.specs.colorSpace}
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Resolution</div>
            <div className="text-lg font-mono text-[--text-primary]">
              {outlet.specs.resolution}
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Vendor</div>
            <div className="text-lg font-mono text-[--text-primary]">
              {outlet.specs.vendor?.name}
            </div>
          </div>
        </div>
      </section>

      {/* MOO Product Selection */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          MOO Products
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
                MOO offers notecards and custom stationery. Specific products will be
                selected based on use case requirements (personal correspondence,
                thank you notes, formal communications).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Guidelines */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Design Guidelines
        </h2>
        <div className="space-y-4 text-[--text-secondary]">
          <div className="p-4 rounded-lg border border-[--border-color]">
            <h3 className="font-medium text-[--text-primary] mb-2">Letterhead</h3>
            <ul className="space-y-1 text-sm">
              <li>Header area: Top 1.5&quot; for logo and contact info</li>
              <li>Content margins: 1&quot; on all sides minimum</li>
              <li>Footer area: Bottom 0.75&quot; for subtle branding</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <h3 className="font-medium text-[--text-primary] mb-2">Envelopes</h3>
            <ul className="space-y-1 text-sm">
              <li>Return address: Top left corner, 0.25&quot; from edges</li>
              <li>Keep clear of postal marking area (bottom right)</li>
              <li>Logo placement: Flap (back) or top left (front)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
