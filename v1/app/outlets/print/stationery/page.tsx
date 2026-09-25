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

      {/* Aesthetic Direction */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Aesthetic Direction
        </h2>
        <div className="p-6 rounded-lg border border-[--border-color] bg-[--bg-secondary]">
          <div className="space-y-4 text-[--text-secondary]">
            <p>
              Visual language emphasizes <strong className="text-[--text-primary]">hand-drawn elegance</strong> over
              digital precision. Black and white botanical line art with photographic delicacy.
            </p>
            <div>
              <div className="text-sm text-[--text-muted] mb-2">Key Motifs</div>
              <div className="flex flex-wrap gap-2">
                {['Ginkgo leaves', 'Wrens', 'Chrysanthemums', 'Chinese ink-style'].map((motif) => (
                  <span
                    key={motif}
                    className="text-sm px-3 py-1 rounded-full border border-[--border-color] text-[--text-secondary]"
                  >
                    {motif}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-[--text-muted]">
              See <code className="text-xs bg-[--bg-primary] px-1 py-0.5 rounded">aesthetic/print/stationery.md</code> for
              full direction notes.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Specifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Letterhead Size</div>
            <div className="text-lg font-mono text-[--text-primary]">5.5&quot; × 8.5&quot;</div>
            <div className="text-xs text-[--text-muted]">half-letter</div>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color]">
            <div className="text-xs text-[--text-muted] mb-1">Grid Spacing</div>
            <div className="text-lg font-mono text-[--text-primary]">0.25&quot;</div>
            <div className="text-xs text-[--text-muted]">dotted</div>
          </div>
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
        </div>
      </section>

      {/* Grid Details */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Dotted Grid
        </h2>
        <div className="p-6 rounded-lg border border-[--border-color]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs text-[--text-muted] mb-1">Dots per row</div>
              <div className="text-lg font-mono text-[--text-primary]">23</div>
            </div>
            <div>
              <div className="text-xs text-[--text-muted] mb-1">Dots per column</div>
              <div className="text-lg font-mono text-[--text-primary]">35</div>
            </div>
            <div>
              <div className="text-xs text-[--text-muted] mb-1">Total dots</div>
              <div className="text-lg font-mono text-[--text-primary]">805</div>
            </div>
            <div>
              <div className="text-xs text-[--text-muted] mb-1">Dot color</div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded border border-[--border-color]"
                  style={{ backgroundColor: '#CCCCCC' }}
                />
                <span className="font-mono text-[--text-primary]">#CCCCCC</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-[--text-muted] mt-4">
            Grid generator: <code className="text-xs bg-[--bg-primary] px-1 py-0.5 rounded">assets-local/stationery/Letterhead ATLAS/Stationary Assets/dotted_grid_generator.py</code>
          </p>
        </div>
      </section>

      {/* Production Assets */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Production Assets
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg border border-[--border-color] flex justify-between items-center">
            <div>
              <div className="font-medium text-[--text-primary]">letter - front.psd</div>
              <div className="text-sm text-[--text-muted]">Front page master</div>
            </div>
            <span className="text-xs text-[--text-muted]">6.3 MB</span>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color] flex justify-between items-center">
            <div>
              <div className="font-medium text-[--text-primary]">letter - back.psd</div>
              <div className="text-sm text-[--text-muted]">Back page master with grid</div>
            </div>
            <span className="text-xs text-[--text-muted]">48 MB</span>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color] flex justify-between items-center">
            <div>
              <div className="font-medium text-[--text-primary]">envelope-ginko.psd</div>
              <div className="text-sm text-[--text-muted]">Ginkgo-themed envelope</div>
            </div>
            <span className="text-xs text-[--text-muted]">1.0 MB</span>
          </div>
          <div className="p-4 rounded-lg border border-[--border-color] flex justify-between items-center">
            <div>
              <div className="font-medium text-[--text-primary]">envelope-crow eye.psd</div>
              <div className="text-sm text-[--text-muted]">Crow-themed envelope</div>
            </div>
            <span className="text-xs text-[--text-muted]">1.1 MB</span>
          </div>
        </div>
        <p className="text-sm text-[--text-muted] mt-4">
          Files located at <code className="text-xs bg-[--bg-primary] px-1 py-0.5 rounded">assets-local/stationery/</code> (symlinked, git-ignored)
        </p>
      </section>
    </div>
  );
}
