'use client';

import { useTokenStore } from '@/lib/store';
import { generateCSS } from '@/lib/tokens/generator';

export function Header() {
  const { theme, setTheme, hasUnsavedChanges, tokens, markSaved } = useTokenStore();

  const handleSave = async () => {
    await fetch('/api/export/json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tokens),
    });
    markSaved();
  };

  const handleExportCSS = () => {
    const css = generateCSS(tokens);
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tokens.css';
    a.click();
    URL.revokeObjectURL(url);
    markSaved();
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="h-14 border-b border-[--border-color] bg-[--bg-primary] flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-ui text-[--text-secondary]">
          ATLAS Meridia Style Guide
        </h1>
        {hasUnsavedChanges && (
          <button
            onClick={handleSave}
            className="text-xs px-2 py-0.5 rounded-full bg-[--accent]/20 text-[--accent] font-ui hover:bg-[--accent]/30 transition-colors"
          >
            Save changes
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-[--border-color] hover:bg-[--bg-elevated] transition-colors font-ui"
        >
          {theme === 'dark' ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span>Dark</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Light</span>
            </>
          )}
        </button>

        {/* Export button */}
        <button
          onClick={handleExportCSS}
          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-[--accent] text-[--navy-950] hover:bg-[--accent-light] transition-colors font-ui font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Export CSS
        </button>
      </div>
    </header>
  );
}
