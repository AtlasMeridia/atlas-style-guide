'use client';

import Link from 'next/link';

const historicalVersions = [
  {
    version: 'v3.1',
    date: 'December 2025',
    description: 'Typography refinements, Lora body font, tightened tracking',
    file: '/archive/atlas-meridia-style-guide v3_1.html',
  },
  {
    version: 'v3.0',
    date: 'December 2025',
    description: 'Major typography overhaul, Chinese language support',
    file: '/archive/atlas-meridia-style-guide v3_0.html',
  },
  {
    version: 'v2.0',
    date: 'December 2025',
    description: 'Streamlined structure, dark mode default',
    file: '/archive/atlas-meridia-style-guide v2.html',
  },
  {
    version: 'v1.3',
    date: 'November 2025',
    description: 'Expanded component library',
    file: '/archive/atlas-meridia-style-guide v1_3.html',
  },
  {
    version: 'v1.2',
    date: 'November 2025',
    description: 'Refined color palette',
    file: '/archive/atlas-meridia-style-guide v1_2.html',
  },
  {
    version: 'v1.1',
    date: 'November 2025',
    description: 'Initial design system',
    file: '/archive/atlas-meridia-style-guide v1_1.html',
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Version History
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Archive of previous style guide versions for reference.
        </p>
      </div>

      {/* Current Version */}
      <section className="mb-8">
        <div className="p-6 rounded-lg border-2 border-[--accent] bg-[--accent]/5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-display font-medium text-[--text-primary]">
                  v4.1.0
                </h2>
                <span className="text-xs px-2 py-1 rounded bg-[--accent]/20 text-[--accent]">
                  Current
                </span>
              </div>
              <p className="text-sm text-[--text-muted] mt-1">December 2025</p>
            </div>
          </div>
          <p className="text-[--text-secondary] mt-4">
            Interactive style guide app with visual token editor, multi-outlet support,
            and machine-readable exports. Logo wordmark refinements.
          </p>
        </div>
      </section>

      {/* Historical Versions */}
      <section>
        <h2 className="text-lg font-medium text-[--text-primary] mb-4">
          Archived Versions
        </h2>
        <div className="space-y-3">
          {historicalVersions.map((version) => (
            <div
              key={version.version}
              className="p-4 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-[--text-primary]">
                      {version.version}
                    </h3>
                    <span className="text-xs text-[--text-muted]">{version.date}</span>
                  </div>
                  <p className="text-sm text-[--text-secondary] mt-1">
                    {version.description}
                  </p>
                </div>
                <Link
                  href={version.file}
                  target="_blank"
                  className="text-sm text-[--accent] hover:underline shrink-0"
                >
                  View HTML
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Note */}
      <section className="mt-8">
        <div className="p-4 rounded-lg border border-[--border-color] bg-[--bg-elevated]">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-[--text-muted] shrink-0 mt-0.5"
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
            <div className="text-sm text-[--text-muted]">
              <p>
                Historical versions are static HTML files preserved as references.
                They may not reflect the current token values or interactive features.
              </p>
              <p className="mt-2">
                The current version (v4.1.0) is this interactive app with live editing
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
