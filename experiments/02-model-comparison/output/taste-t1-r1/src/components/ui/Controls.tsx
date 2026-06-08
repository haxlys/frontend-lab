import { type ChangeEvent, type ReactNode, useId } from 'react';
import { cn } from '@/lib/cn';

interface SegmentedProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: ReactNode; count?: number }>;
  size?: 'sm' | 'md';
  className?: string;
}

export function Segmented<T extends string>({
  value,
  onChange,
  options,
  size = 'sm',
  className,
}: SegmentedProps<T>) {
  const groupId = useId();
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-sm border border-line bg-surface-sunken p-0.5',
        className,
      )}
    >
      {options.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            id={`${groupId}-${opt.value}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(opt.value)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-xs font-medium transition-colors duration-150 ease-out-quart focus-ring',
              size === 'sm' ? 'h-6 px-2.5 text-xs' : 'h-7 px-3 text-sm',
              isActive
                ? 'bg-surface-raised text-ink-primary shadow-card'
                : 'text-ink-tertiary hover:text-ink-secondary',
            )}
          >
            {opt.label}
            {typeof opt.count === 'number' ? (
              <span
                className={cn(
                  'rounded-xs px-1 py-0.5 text-2xs num',
                  isActive ? 'bg-slate-100 text-ink-secondary' : 'text-ink-muted',
                )}
              >
                {opt.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
  ariaLabel?: string;
}

export function Select({ value, onChange, options, className, ariaLabel }: SelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);
  return (
    <div className={cn('relative inline-block', className)}>
      <select
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        className={cn(
          'h-8 appearance-none rounded-sm border border-line bg-surface-raised pl-3 pr-8 text-sm text-ink-primary',
          'hover:border-line-strong transition-colors duration-150 focus-ring cursor-pointer',
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-tertiary"
        width={12}
        height={12}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
