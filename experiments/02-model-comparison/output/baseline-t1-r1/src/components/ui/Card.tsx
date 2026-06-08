import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-ink-200 bg-white shadow-card",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
