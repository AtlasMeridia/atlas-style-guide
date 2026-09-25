'use client';

import { useTokenStore } from '@/lib/store';

export default function PreviewPage() {
  const { tokens, theme, setTheme } = useTokenStore();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-medium text-[--text-primary]">
            Live Preview
          </h1>
          <p className="text-[--text-secondary] mt-2">
            Preview components with the current token values.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 text-sm rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
        >
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Component Specimens */}
      <div className="space-y-8">
        {/* Typography */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-display text-[--text-primary]" style={{ letterSpacing: 'var(--tracking-tight)' }}>
              Display Heading
            </h1>
            <h2 className="text-2xl font-display text-[--text-primary]">
              Section Heading
            </h2>
            <p className="text-[--text-body] font-body text-[--text-secondary]" style={{ lineHeight: 'var(--leading-relaxed)' }}>
              Body text in Lora. The quick brown fox jumps over the lazy dog.
              This is how long-form content appears in the design system, with
              comfortable reading line height and subtle letter spacing.
            </p>
            <p className="text-sm font-ui text-[--text-muted]">
              UI text in DM Sans — labels, navigation, meta information
            </p>
            <code className="inline-block px-2 py-1 text-sm font-mono bg-[--bg-elevated] text-[--accent-light] rounded">
              Monospace code
            </code>
          </div>
        </section>

        {/* Buttons */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-lg bg-[--accent] text-[--navy-950] font-ui font-medium hover:bg-[--accent-light] transition-colors">
              Primary
            </button>
            <button className="px-4 py-2 rounded-lg border border-[--border-color] text-[--text-primary] font-ui hover:border-[--accent]/50 transition-colors">
              Secondary
            </button>
            <button className="px-4 py-2 rounded-lg text-[--accent] font-ui hover:underline">
              Text Button
            </button>
            <button className="px-4 py-2 rounded-lg bg-[--bg-elevated] text-[--text-muted] font-ui opacity-50 cursor-not-allowed">
              Disabled
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[--bg-elevated] border border-[--border-color]">
              <h3 className="font-medium text-[--text-primary]">Card Title</h3>
              <p className="text-sm text-[--text-muted] mt-2">
                Card description with secondary text styling.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[--bg-elevated] border border-[--accent]/30">
              <h3 className="font-medium text-[--accent]">Highlighted Card</h3>
              <p className="text-sm text-[--text-muted] mt-2">
                With accent border for emphasis.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[--accent]/10 border border-[--accent]/20">
              <h3 className="font-medium text-[--text-primary]">Accent Background</h3>
              <p className="text-sm text-[--text-secondary] mt-2">
                Subtle accent tint.
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Form Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
            <div>
              <label className="block text-sm text-[--text-muted] mb-2 font-ui">
                Text Input
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-3 py-2 rounded-lg bg-[--bg-elevated] border border-[--border-color] text-[--text-primary] placeholder:text-[--text-muted] focus:border-[--accent] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[--text-muted] mb-2 font-ui">
                Select
              </label>
              <select className="w-full px-3 py-2 rounded-lg bg-[--bg-elevated] border border-[--border-color] text-[--text-primary] focus:border-[--accent] focus:outline-none transition-colors">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Alerts</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[--success]/10 border border-[--success]/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[--success]" />
                <span className="font-medium text-[--success]">Success</span>
              </div>
              <p className="text-sm text-[--text-secondary] mt-1">
                Operation completed successfully.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[--accent]/10 border border-[--accent]/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[--accent]" />
                <span className="font-medium text-[--accent]">Warning</span>
              </div>
              <p className="text-sm text-[--text-secondary] mt-1">
                Please review before continuing.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[--error]/10 border border-[--error]/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[--error]" />
                <span className="font-medium text-[--error]">Error</span>
              </div>
              <p className="text-sm text-[--text-secondary] mt-1">
                Something went wrong. Please try again.
              </p>
            </div>
          </div>
        </section>

        {/* Prose Preview */}
        <section className="p-6 rounded-lg border border-[--border-color]">
          <h2 className="text-lg font-medium text-[--text-primary] mb-6">Article Prose</h2>
          <article className="max-w-prose">
            <h1 className="text-3xl font-display text-[--text-primary] mb-4" style={{ letterSpacing: 'var(--tracking-tight)' }}>
              Article Title
            </h1>
            <p className="text-sm text-[--text-muted] font-ui mb-6">
              December 16, 2025 — 5 min read
            </p>
            <div className="font-body text-[--text-secondary] space-y-4" style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>
                <span className="float-left text-5xl font-display text-[--accent] mr-2 mt-1" style={{ lineHeight: '0.8' }}>T</span>
                he opening paragraph with a drop cap. This demonstrates how article content appears with the ATLAS Meridia design tokens applied. The typography is carefully tuned for comfortable reading.
              </p>
              <p>
                Regular paragraph text continues here. Links look <a href="#" className="text-[--accent-text] underline decoration-[--accent]/40 hover:decoration-[--accent]">like this</a>. The body font is Lora, chosen for its readability in long-form content.
              </p>
              <blockquote className="border-l-3 border-[--accent] pl-6 italic text-[--text-secondary]">
                Blockquotes are styled with an accent border and italic text, providing visual distinction for quoted content.
              </blockquote>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
