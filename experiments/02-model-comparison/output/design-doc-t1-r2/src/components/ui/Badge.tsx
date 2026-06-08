import type { ReactNode } from 'react';

type Tone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

const toneMap: Record<Tone, string> = {
  neutral: 'bg-ink-100 text-ink-700 border border-ink-200',
  brand: 'bg-brand-50 text-brand-700 border border-brand-100',
  success: 'bg-success-50 text-success-700 border border-emerald-100',
  warning: 'bg-warning-50 text-warning-700 border border-amber-100',
  danger: 'bg-danger-50 text-danger-700 border border-rose-100',
};

export function Badge({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 h-5 rounded-md text-2xs font-medium ${toneMap[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
