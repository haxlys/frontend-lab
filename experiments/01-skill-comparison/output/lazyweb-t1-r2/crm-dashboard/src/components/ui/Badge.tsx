import { type FC } from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "danger" | "neutral";
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: "bg-accent-100 text-accent-600",
  success: "bg-green-100 text-green-600",
  warning: "bg-amber-100 text-amber-600",
  danger: "bg-red-100 text-red-500",
  neutral: "bg-navy-100 text-navy-500",
};

export const Badge: FC<BadgeProps> = ({ label, variant = "default", className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium ${variantStyles[variant]} ${className}`}
  >
    {label}
  </span>
);
