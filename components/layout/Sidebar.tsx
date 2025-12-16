'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Dashboard', href: '/' },
  {
    label: 'Tokens',
    href: '/tokens',
    children: [
      { label: 'Colors', href: '/tokens/colors' },
      { label: 'Typography', href: '/tokens/typography' },
      { label: 'Spacing', href: '/tokens/spacing' },
      { label: 'Motion', href: '/tokens/motion' },
    ],
  },
  {
    label: 'Outlets',
    href: '/outlets',
    children: [
      { label: 'Web', href: '/outlets/web' },
      { label: 'Print', href: '/outlets/print' },
    ],
  },
  { label: 'Preview', href: '/preview' },
  { label: 'History', href: '/history' },
];

function NavLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isParentActive = item.children?.some((child) => pathname === child.href);

  return (
    <div>
      <Link
        href={item.href}
        className={`
          flex items-center px-3 py-2 text-sm rounded-md transition-colors
          ${depth > 0 ? 'ml-4' : ''}
          ${
            isActive
              ? 'bg-[--accent]/10 text-[--accent]'
              : isParentActive
                ? 'text-[--text-primary]'
                : 'text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--bg-elevated]'
          }
        `}
      >
        {item.label}
      </Link>
      {item.children && (isActive || isParentActive) && (
        <div className="mt-1 space-y-1">
          {item.children.map((child) => (
            <NavLink key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-[--border-color] bg-[--bg-deep] flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-[--border-color]">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-xl font-semibold italic">
            <span className="text-[--text-muted] tracking-[-0.05em]">ATLAS</span>
            <span className="text-[--text-primary] ml-[0.06em]">Style</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>

      {/* Version badge */}
      <div className="p-4 border-t border-[--border-color]">
        <div className="text-xs text-[--text-muted] font-ui">
          Version <span className="text-[--accent]">4.1.0</span>
        </div>
      </div>
    </aside>
  );
}
