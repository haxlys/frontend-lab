import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'blue' | 'green' | 'emerald' | 'amber' | 'rose' | 'violet' | 'slate';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  variant?: 'subtle' | 'outline';
  leadingIcon?: ReactNode;
  size?: 'xs' | 'sm';
}

const tones: Record<Tone, { subtle: string; outline: string }> = {
  neutral: {
    subtle: 'bg-slate-100 text-slate-700',
    outline: 'border-slate-200 text-slate-700',
  },
  blue: {
    subtle: 'bg-blue-50 text-blue-700',
    outline: 'border-blue-200 text-blue-700',
  },
  green: {
    subtle: 'bg-green-50 text-green-700',
    outline: 'border-green-200 text-green-700',
  },
  emerald: {
    subtle: 'bg-emerald-50 text-emerald-700',
    outline: 'border-emerald-200 text-emerald-700',
  },
  amber: {
    subtle: 'bg-amber-50 text-amber-800',
    outline: 'border-amber-200 text-amber-800',
  },
  rose: {
    subtle: 'bg-rose-50 text-rose-700',
    outline: 'border-rose-200 text-rose-700',
  },
  violet: {
    subtle: 'bg-violet-50 text-violet-700',
    outline: 'border-violet-200 text-violet-700',
  },
  slate: {
    subtle: 'bg-slate-100 text-slate-600',
    outline: 'border-slate-200 text-slate-600',
  },
};

export function Badge({
  tone = 'neutral',
  variant = 'subtle',
  leadingIcon,
  size = 'sm',
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-sm font-medium',
        size === 'xs' ? 'px-1.5 h-5 text-2xs' : 'px-2 h-5.5 text-xs py-0.5',
        variant === 'subtle' ? tones[tone].subtle : `border ${tones[tone].outline}`,
        className,
      )}
      {...rest}
    >
      {leadingIcon ? <span className="inline-flex shrink-0">{leadingIcon}</span> : null}
      {children}
    </span>
  );
}
