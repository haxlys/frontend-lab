import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  width?: string;
  height?: string;
};

export function Skeleton({ className, width, height }: Props) {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-ink-100', className)}
      style={{ width, height }}
    />
  );
}
