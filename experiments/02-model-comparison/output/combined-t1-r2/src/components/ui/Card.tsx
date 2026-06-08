import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg shadow-card ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function CardHeader({
  title,
  subtitle,
  action,
  className = "",
  ...rest
}: CardHeaderProps) {
  return (
    <div
      className={`flex items-start justify-between gap-4 px-5 pt-5 pb-4 ${className}`}
      {...rest}
    >
      <div className="min-w-0">
        <h3 className="text-[14px] font-semibold text-ink-primary tracking-[-0.005em]">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[12.5px] text-ink-tertiary">{subtitle}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-5 pb-5 ${className}`} {...rest}>
      {children}
    </div>
  );
}
