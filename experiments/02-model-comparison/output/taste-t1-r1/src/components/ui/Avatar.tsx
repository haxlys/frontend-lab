import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  src?: string;
  status?: 'online' | 'offline' | 'busy';
}

const sizes = {
  xs: 'h-5 w-5 text-2xs',
  sm: 'h-6 w-6 text-2xs',
  md: 'h-8 w-8 text-xs',
  lg: 'h-10 w-10 text-sm',
} as const;

const statusSizes = {
  xs: 'h-1.5 w-1.5 ring-1',
  sm: 'h-1.5 w-1.5 ring-1',
  md: 'h-2 w-2 ring-2',
  lg: 'h-2.5 w-2.5 ring-2',
} as const;

const statusColors = {
  online: 'bg-emerald-500',
  offline: 'bg-slate-300',
  busy: 'bg-amber-500',
} as const;

// Deterministic, professional palette (no purple/violet)
const palette = [
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-800',
  'bg-rose-100 text-rose-700',
  'bg-blue-100 text-blue-700',
  'bg-teal-100 text-teal-700',
  'bg-orange-100 text-orange-700',
  'bg-slate-200 text-slate-700',
];

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, size = 'md', src, status, className, ...rest }: AvatarProps) {
  const initials = getInitials(name);
  const color = palette[hashName(name) % palette.length];

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center rounded-full font-medium select-none',
        'ring-1 ring-inset ring-black/[0.04]',
        sizes[size],
        color,
        className,
      )}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full rounded-full object-cover" />
      ) : (
        <span className="leading-none tracking-tight">{initials}</span>
      )}
      {status ? (
        <span
          className={cn(
            'absolute right-0 bottom-0 block rounded-full ring-surface-raised',
            statusSizes[size],
            statusColors[status],
          )}
        />
      ) : null}
    </span>
  );
}

interface AvatarStackProps {
  names: string[];
  max?: number;
  size?: 'xs' | 'sm' | 'md';
}

export function AvatarStack({ names, max = 3, size = 'sm' }: AvatarStackProps) {
  const visible = names.slice(0, max);
  const overflow = names.length - visible.length;

  return (
    <div className="flex -space-x-1.5">
      {visible.map((n) => (
        <Avatar key={n} name={n} size={size} className="ring-2 ring-surface-raised" />
      ))}
      {overflow > 0 ? (
        <span
          className={cn(
            'relative inline-flex items-center justify-center rounded-full bg-slate-100 text-ink-tertiary font-medium ring-2 ring-surface-raised',
            sizes[size],
          )}
        >
          +{overflow}
        </span>
      ) : null}
    </div>
  );
}
