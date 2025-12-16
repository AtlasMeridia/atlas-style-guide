'use client';

import Link from 'next/link';
import outlets from '@/data/outlets.json';

export default function OutletsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-medium text-[--text-primary]">
          Outlets
        </h1>
        <p className="text-[--text-secondary] mt-2">
          Application-specific guidance for different media and formats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outlets.outlets.map((outlet) => (
          <Link
            key={outlet.id}
            href={
              outlet.type === 'web'
                ? '/outlets/web'
                : `/outlets/print/${outlet.id.replace('print-', '')}`
            }
            className="p-6 rounded-lg border border-[--border-color] hover:border-[--accent]/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-[--text-primary]">
                  {outlet.name}
                </h3>
                <p className="text-sm text-[--text-muted] mt-1">
                  {outlet.description}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  outlet.status === 'active'
                    ? 'bg-[--success]/20 text-[--success]'
                    : 'bg-[--accent]/20 text-[--accent]'
                }`}
              >
                {outlet.status}
              </span>
            </div>
            {outlet.type === 'print' && outlet.specs.vendor && (
              <div className="mt-4 text-xs text-[--text-muted]">
                Vendor: {outlet.specs.vendor.name}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
