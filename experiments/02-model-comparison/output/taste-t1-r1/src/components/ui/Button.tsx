import { type ReactNode, type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover active:translate-y-px shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]',
  secondary:
    'bg-surface-sunken text-ink-primary hover:bg-line/60 active:translate-y-px border border-line',
  outline:
    'bg-surface-raised text-ink-primary border border-line hover:bg-surface-sunken active:translate-y-px',
  ghost:
    'bg-transparent text-ink-secondary hover:bg-surface-sunken hover:text-ink-primary',
};

const sizes: Record<Size, string> = {
  sm: 'h-7 px-2.5 text-xs gap-1.5 rounded-sm',
  md: 'h-8 px-3 text-sm gap-1.5 rounded-sm',
  lg: 'h-9 px-3.5 text-sm gap-2 rounded',
  icon: 'h-8 w-8 p-0 rounded-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'secondary', size = 'md', leadingIcon, trailingIcon, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors duration-150 ease-out-quart',
        'focus-ring disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {leadingIcon ? <span className="-ml-0.5 inline-flex shrink-0">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="-mr-0.5 inline-flex shrink-0">{trailingIcon}</span> : null}
    </button>
  );
});
