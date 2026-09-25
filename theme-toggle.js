/* ═══════════════════════════════════════════════════════════════
   <theme-toggle> · Minerali
   Self-mounting graphite ⇄ cream switch. Drop one line on any page:
       <script src="theme-toggle.js" defer></script>
   Reads/writes data-theme on <html>, persists to localStorage.
   Styled entirely from colors_and_type.css tokens — no bulk, no deps.

   Optional attributes (on the script tag or a placed <theme-toggle>):
     data-themes="graphite cream"   the two states to flip between
     data-position="top-right"      top-right | top-left | bottom-right | bottom-left
     data-storage-key="mn-theme"   localStorage key
   Place <theme-toggle></theme-toggle> yourself to anchor it inline
   instead of fixed.
   ═══════════════════════════════════════════════════════════════ */
(() => {
  const STORE = 'mn-theme';

  class ThemeToggle extends HTMLElement {
    connectedCallback() {
      const themes = (this.getAttribute('data-themes') || 'graphite cream')
        .split(/\s+/).filter(Boolean).slice(0, 2);
      if (themes.length < 2) themes.push('cream');
      this.themes = themes;
      this.key = this.getAttribute('data-storage-key') || STORE;

      // Resolve the starting theme: stored > current attr > first listed.
      const stored = (() => { try { return localStorage.getItem(this.key); } catch { return null; } })();
      const current = stored || document.documentElement.getAttribute('data-theme') || themes[0];
      this.apply(themes.includes(current) ? current : themes[0], false);

      this.render();
    }

    apply(theme, persist = true) {
      document.documentElement.setAttribute('data-theme', theme);
      this.active = theme;
      if (persist) { try { localStorage.setItem(this.key, theme); } catch {} }
      if (this.shadowRoot) this.paint();
    }

    flip() {
      const next = this.themes[(this.themes.indexOf(this.active) + 1) % this.themes.length];
      this.apply(next);
    }

    render() {
      const root = this.attachShadow({ mode: 'open' });
      const fixed = !this.hasAttribute('data-inline');
      const pos = (this.getAttribute('data-position') || 'top-right').split('-');
      const [vy, vx] = [pos[0] || 'top', pos[1] || 'right'];

      root.innerHTML = `
        <style>
          :host {
            ${fixed ? `position: fixed; ${vy}: 20px; ${vx}: 20px;` : 'display: inline-block;'}
            z-index: 2147483000;
            font-family: var(--font-mono, 'JetBrains Mono', ui-monospace, monospace);
          }
          .wrap {
            display: inline-flex;
            border: 1px solid var(--border-color, #2e2e33);
            background: var(--bg-elevated, #202024);
            border-radius: var(--border-radius-lg, 2px);
            overflow: hidden;
          }
          button {
            font: inherit;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            padding: 8px 12px 7px;
            border: 0;
            background: transparent;
            color: var(--text-muted, #7a7266);
            cursor: pointer;
            position: relative;
            transition: color 120ms linear, background 120ms linear;
          }
          button + button { border-left: 1px solid var(--border-color, #2e2e33); }
          button:hover { color: var(--text-primary, #ecdfc8); }
          button[aria-pressed="true"] {
            color: var(--text-primary, #ecdfc8);
            background: color-mix(in srgb, var(--text-primary, #ecdfc8) 7%, transparent);
          }
          button[aria-pressed="true"]::after {
            content: "";
            position: absolute;
            left: 0; right: 0; bottom: 0;
            height: 2px;
            background: var(--accent-cut, #2be0c8);
          }
          :focus-visible { outline: 2px solid var(--accent-cut, #2be0c8); outline-offset: 2px; }
        </style>
        <div class="wrap" role="group" aria-label="Theme">
          ${this.themes.map(t => `<button type="button" data-t="${t}">${t}</button>`).join('')}
        </div>
      `;
      root.querySelectorAll('button').forEach(b =>
        b.addEventListener('click', () => this.apply(b.dataset.t)));
      this.paint();
    }

    paint() {
      this.shadowRoot?.querySelectorAll('button').forEach(b =>
        b.setAttribute('aria-pressed', String(b.dataset.t === this.active)));
    }
  }

  if (!customElements.get('theme-toggle')) customElements.define('theme-toggle', ThemeToggle);

  // Auto-mount a fixed toggle if the page didn't place one itself.
  const script = document.currentScript;
  const boot = () => {
    if (document.querySelector('theme-toggle')) return;
    const el = document.createElement('theme-toggle');
    if (script) {
      for (const a of ['data-themes', 'data-position', 'data-storage-key']) {
        const v = script.getAttribute(a);
        if (v) el.setAttribute(a, v);
      }
    }
    document.body.appendChild(el);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
