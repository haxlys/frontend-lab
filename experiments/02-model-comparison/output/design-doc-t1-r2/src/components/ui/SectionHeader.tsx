import type { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  title,
  description,
  action,
  className = '',
  children,
}: Props) {
  return (
    <div className={`flex items-start justify-between gap-4 mb-4 ${className}`}>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-ink-900 tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-ink-500 mt-0.5">{description}</p>
        )}
      </div>
      {action}
      {children}
    </div>
  );
}
