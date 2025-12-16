'use client';

import Link from 'next/link';
import outlets from '@/data/outlets.json';

export default function PrintOutletPage() {
  const printOutlets = outlets.outlets.filter((o) => o.type === 'print');

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Print Outlets
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Guidance for printed materials including business cards and stationery.
        </p>
      </div>

      {/* MOO Notice */}
      <div className="mb-8 p-4 rounded-lg border border-[--accent]/30 bg-[--accent]/5">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div className="font-medium text-[--text-primary]">Print Partner: MOO</div>
            <p className="text-sm text-[--text-muted] mt-1">
              All print materials are produced through MOO. Specific product selections
              are pending. Specs below are standard guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Print Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {printOutlets.map((outlet) => (
          <Link
            key={outlet.id}
            href={`/outlets/print/${outlet.id.replace('print-', '')}`}
            className="p-6 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
          >
            <h3 className="text-lg font-medium text-[--text-primary]">
              {outlet.name}
            </h3>
            <p className="text-sm text-[--text-muted] mt-1">
              {outlet.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-[--text-muted]">
              {outlet.specs.dimensions && (
                <span>
                  {outlet.specs.dimensions.width} x {outlet.specs.dimensions.height}
                </span>
              )}
              <span>{outlet.specs.colorSpace}</span>
              <span>{outlet.specs.resolution}</span>
            </div>
            <span
              className={`mt-4 inline-block text-xs px-2 py-1 rounded ${
                outlet.status === 'active'
                  ? 'bg-[--success]/20 text-[--success]'
                  : 'bg-[--accent]/20 text-[--accent]'
              }`}
            >
              {outlet.status}
            </span>
          </Link>
        ))}
      </div>

      {/* Color Space Guidance */}
      <section className="mt-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          CMYK Color Guidance
        </h2>
        <p className="text-[--text-secondary] mb-4">
          Print colors require CMYK conversion. These are approximate values — always
          verify with a printed proof.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div
              className="w-full aspect-square rounded mb-3"
              style={{ backgroundColor: '#0e1318' }}
            />
            <div className="text-sm font-medium text-[--text-primary]">Navy 900</div>
            <div className="text-xs text-[--text-muted] font-mono mt-1">
              C:85 M:70 Y:50 K:80
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div
              className="w-full aspect-square rounded mb-3"
              style={{ backgroundColor: '#f3f0ea' }}
            />
            <div className="text-sm font-medium text-[--text-primary]">Cream 100</div>
            <div className="text-xs text-[--text-muted] font-mono mt-1">
              C:3 M:4 Y:7 K:0
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div
              className="w-full aspect-square rounded mb-3"
              style={{ backgroundColor: '#c9924a' }}
            />
            <div className="text-sm font-medium text-[--text-primary]">Accent</div>
            <div className="text-xs text-[--text-muted] font-mono mt-1">
              C:15 M:45 Y:75 K:5
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div
              className="w-full aspect-square rounded mb-3"
              style={{ backgroundColor: '#d5cab8' }}
            />
            <div className="text-sm font-medium text-[--text-primary]">Text (dark)</div>
            <div className="text-xs text-[--text-muted] font-mono mt-1">
              C:12 M:15 Y:22 K:5
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
