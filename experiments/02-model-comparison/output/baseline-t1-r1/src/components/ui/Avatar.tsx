import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Avatar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { initials?: string }) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white",
        className
      )}
      {...props}
    />
  );
}

export function AvatarFallback({ initials }: { initials: string }) {
  return <span>{initials}</span>;
}
