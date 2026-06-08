import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
} as const;

export function Card({ className, padding = 'md', children, ...rest }: CardProps) {
  return (
    <div className={cn('card', paddings[padding], className)} {...rest}>
      {children}
    </div>
  );
}

interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export function CardHeader({ title, description, action, className, ...rest }: CardHeaderProps) {
  return (
    <div
      className={cn('flex items-start justify-between gap-3 pb-4', className)}
      {...rest}
    >
      <div className="min-w-0">
        <h3 className="text-md font-semibold text-ink-primary leading-tight">{title}</h3>
        {description ? (
          <p className="mt-0.5 text-xs text-ink-tertiary leading-relaxed">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
