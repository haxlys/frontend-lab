import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "default" | "none" | "sm";
}

export function Card({
  padding = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  const pad =
    padding === "none" ? "" : padding === "sm" ? "p-4" : "p-5";

  return (
    <div
      className={`rounded-lg border border-navy-200 bg-white shadow-sm ${pad} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mb-4 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={`text-sm font-semibold tracking-tight text-navy-900 ${className}`}
    >
      {children}
    </h3>
  );
}
