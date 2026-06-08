import type { ReactNode } from "react";

export function BentoBox({ children, className = "", glow = false }: { children: ReactNode; className?: string; glow?: boolean }) {
  return (
    <div className={`relative glass-card p-6 sm:p-8 overflow-hidden ${glow ? "glow-border" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
      {children}
    </div>
  );
}
