'use client';

import { useTokenStore } from '@/lib/store';
import { useState } from 'react';

export default function MotionPage() {
  const { tokens } = useTokenStore();
  const [isAnimating, setIsAnimating] = useState<string | null>(null);

  const triggerAnimation = (key: string) => {
    setIsAnimating(key);
    setTimeout(() => setIsAnimating(null), 1000);
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Motion
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Transition durations and easing curves for consistent animations.
        </p>
      </div>

      {/* Transitions */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Transitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(tokens.motion)
            .filter(([key]) => key !== 'easeOutExpo')
            .map(([key, motion]) => (
              <div
                key={key}
                className="p-6 rounded-lg border border-[--border-color]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <code className="text-sm text-[--accent] font-mono">
                      --transition-{key}
                    </code>
                    <div className="text-xs text-[--text-muted] mt-1">
                      {motion.description}
                    </div>
                  </div>
                  <span className="text-sm text-[--text-muted] font-mono">
                    {motion.value}
                  </span>
                </div>

                {/* Interactive demo */}
                <div className="relative h-12 bg-[--bg-deep] rounded overflow-hidden">
                  <div
                    className="absolute top-2 left-2 w-8 h-8 bg-[--accent] rounded"
                    style={{
                      transition: motion.value,
                      transform: isAnimating === key ? 'translateX(calc(100% + 100px))' : 'translateX(0)',
                    }}
                  />
                </div>

                <button
                  onClick={() => triggerAnimation(key)}
                  className="mt-4 px-4 py-2 text-sm rounded bg-[--bg-elevated] border border-[--border-color] hover:border-[--accent]/50 transition-colors"
                >
                  Preview
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Easing Curves */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Easing Curves
        </h2>
        <div className="p-6 rounded-lg border border-[--border-color]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <code className="text-sm text-[--accent] font-mono">
                --ease-out-expo
              </code>
              <div className="text-xs text-[--text-muted] mt-1">
                {tokens.motion.easeOutExpo.description}
              </div>
            </div>
            <span className="text-sm text-[--text-muted] font-mono">
              {tokens.motion.easeOutExpo.value}
            </span>
          </div>

          {/* Curve visualization */}
          <div className="h-32 bg-[--bg-deep] rounded relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="50" x2="100" y2="50" stroke="var(--border-color)" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="var(--border-color)" strokeWidth="0.5" />

              {/* Bezier curve: cubic-bezier(0.16, 1, 0.3, 1) */}
              <path
                d="M 0,100 C 16,0 30,0 100,0"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              />

              {/* Control points */}
              <circle cx="16" cy="0" r="3" fill="var(--accent-light)" />
              <circle cx="30" cy="0" r="3" fill="var(--accent-light)" />
              <line x1="0" y1="100" x2="16" y2="0" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="100" y1="0" x2="30" y2="0" stroke="var(--accent-light)" strokeWidth="1" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="mt-4 text-xs text-[--text-muted]">
            Control points: P1(0.16, 1) P2(0.3, 1)
          </div>
        </div>
      </section>

      {/* Effects */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-6">
          Effects
        </h2>

        {/* Border Radius */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-[--text-secondary] mb-4">
            Border Radius
          </h3>
          <div className="flex gap-6">
            {Object.entries(tokens.effects.borderRadius).map(([key, radius]) => (
              <div key={key} className="text-center">
                <div
                  className="w-16 h-16 bg-[--accent] mx-auto"
                  style={{ borderRadius: radius.value }}
                />
                <code className="block text-xs text-[--accent] font-mono mt-2">
                  {key === 'default' ? '--border-radius' : `--border-radius-${key}`}
                </code>
                <span className="text-xs text-[--text-muted]">{radius.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div>
          <h3 className="text-lg font-medium text-[--text-secondary] mb-4">
            Shadows
          </h3>
          <div className="flex gap-6">
            {Object.entries(tokens.effects.shadow).map(([key, shadow]) => (
              <div key={key} className="text-center">
                <div
                  className="w-24 h-24 bg-[--bg-elevated] rounded-lg mx-auto"
                  style={{ boxShadow: shadow.value }}
                />
                <code className="block text-xs text-[--accent] font-mono mt-3">
                  {key === 'default' ? '--shadow' : `--shadow-${key}`}
                </code>
                {shadow.description && (
                  <span className="text-xs text-[--text-muted] block mt-1">
                    {shadow.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
