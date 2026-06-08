import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'brand' | 'teal' | 'amber' | 'rose' | 'violet' | 'emerald';

const toneStyles: Record<Tone, string> = {
  neutral: 'bg-ink-100 text-ink-700 ring-ink-200',
  brand: 'bg-brand-50 text-brand-700 ring-brand-100',
  teal: 'bg-teal-50 text-teal-600 ring-teal-500/15',
  amber: 'bg-amber-50 text-amber-700 ring-amber-500/15',
  rose: 'bg-rose-50 text-rose-600 ring-rose-500/15',
  violet: 'bg-violet-50 text-violet-600 ring-violet-500/15',
  emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-500/15',
};

type Props = {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
};

export function Badge({ children, tone = 'neutral', dot, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
        toneStyles[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />}
      {children}
    </span>
  );
}

type AvatarProps = {
  initials: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
};

const avatarSizes = {
  xs: 'h-5 w-5 text-[10px]',
  sm: 'h-6 w-6 text-[11px]',
  md: 'h-8 w-8 text-xs',
};

export function Avatar({ initials, color = 'bg-ink-100 text-ink-700', size = 'sm', className }: AvatarProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wide',
        color,
        avatarSizes[size],
        className,
      )}
    >
      {initials}
    </span>
  );
}
