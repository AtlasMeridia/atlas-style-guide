'use client';

import { useTokenStore } from '@/lib/store';
import type { ColorValue } from '@/types/tokens';

interface ColorSwatchProps {
  name: string;
  color: ColorValue;
  cssVar: string;
  scale: string;
  colorKey: string;
}

function ColorSwatch({ name, color, cssVar, scale, colorKey }: ColorSwatchProps) {
  const { updateColor } = useTokenStore();

  return (
    <div className="group">
      <div className="relative w-full aspect-square mb-2">
        <div
          className="absolute inset-0 rounded-lg transition-transform group-hover:scale-105"
          style={{ backgroundColor: color.value }}
        />
        <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity pointer-events-none">
          <span className="text-white text-xs font-mono">Edit</span>
        </div>
        <input
          type="color"
          value={color.value}
          onChange={(e) => updateColor(scale, colorKey, e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-lg"
          aria-label={`Edit ${name} color`}
          title={`Edit ${name}`}
        />
      </div>
      <div className="text-sm">
        <div className="font-medium text-[--text-primary]">{name}</div>
        <button
          onClick={() => navigator.clipboard.writeText(cssVar)}
          className="text-xs text-[--text-muted] font-mono hover:text-[--accent] transition-colors"
          title="Copy CSS variable"
        >
          {cssVar}
        </button>
        <div className="text-xs text-[--text-muted] mt-0.5 font-mono">{color.value}</div>
        {color.description && (
          <div className="text-xs text-[--text-muted] mt-1 opacity-60">
            {color.description}
          </div>
        )}
      </div>
    </div>
  );
}

interface ColorScaleProps {
  title: string;
  colors: Record<string, ColorValue>;
  prefix: string;
}

function ColorScale({ title, colors, prefix }: ColorScaleProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-display font-medium text-[--text-primary] mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {Object.entries(colors).map(([key, color]) => (
          <ColorSwatch
            key={key}
            name={key}
            color={color}
            cssVar={`--${prefix}-${key}`}
            scale={prefix}
            colorKey={key}
          />
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  const { tokens } = useTokenStore();

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Colors
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Click any swatch to edit its color. Click the variable name to copy it.
        </p>
      </div>

      <ColorScale title="Navy Scale" colors={tokens.colors.navy} prefix="navy" />
      <ColorScale title="Cream Scale" colors={tokens.colors.cream} prefix="cream" />

      {/* Accent Colors */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-4">
          Accent Colors
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Light"   color={tokens.colors.accent.light}   cssVar="--accent-light" scale="accent" colorKey="light"   />
          <ColorSwatch name="Default" color={tokens.colors.accent.default} cssVar="--accent"       scale="accent" colorKey="default" />
          <ColorSwatch name="Dark"    color={tokens.colors.accent.dark}    cssVar="--accent-dark"  scale="accent" colorKey="dark"    />
          <ColorSwatch name="Deep"    color={tokens.colors.accent.deep}    cssVar="--accent-deep"  scale="accent" colorKey="deep"    />
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-12">
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-4">
          Semantic Colors
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <ColorSwatch name="Success" color={tokens.colors.semantic.success} cssVar="--success" scale="semantic" colorKey="success" />
          <ColorSwatch name="Error"   color={tokens.colors.semantic.error}   cssVar="--error"   scale="semantic" colorKey="error"   />
          <ColorSwatch name="Warning" color={tokens.colors.semantic.warning} cssVar="--warning" scale="semantic" colorKey="warning" />
        </div>
      </section>

      {/* Theme Variables */}
      <section>
        <h2 className="text-xl font-display font-medium text-[--text-primary] mb-4">
          Theme Variables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-[--navy-900] border border-[--navy-600]">
            <h3 className="text-lg font-medium text-[#d5cab8] mb-4">Dark Mode</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#9a8f80]">--bg-primary</span>
                <span className="font-mono text-[#bfb4a4]">{tokens.themes.dark.bgPrimary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a8f80]">--text-primary</span>
                <span className="font-mono text-[#bfb4a4]">{tokens.themes.dark.textPrimary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a8f80]">--text-muted</span>
                <span className="font-mono text-[#bfb4a4]">{tokens.themes.dark.textMuted}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[--cream-100] border border-[--cream-400]">
            <h3 className="text-lg font-medium text-[--navy-700] mb-4">Light Mode</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[--navy-400]">--bg-primary</span>
                <span className="font-mono text-[--navy-600]">{tokens.themes.light.bgPrimary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--navy-400]">--text-primary</span>
                <span className="font-mono text-[--navy-600]">{tokens.themes.light.textPrimary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--navy-400]">--text-muted</span>
                <span className="font-mono text-[--navy-600]">{tokens.themes.light.textMuted}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
