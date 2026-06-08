import { type ComponentProps, type FC } from "react";

const badgeVariants = {
  default: "bg-navy-100 text-navy-600",
  accent: "bg-accent-100 text-accent-600",
  success: "bg-success-100 text-success-600",
  warning: "bg-warning-100 text-warning-600",
  danger: "bg-danger-100 text-danger-600",
  teal: "bg-teal-100 text-teal-600",
};

type BadgeProps = ComponentProps<"span"> & {
  variant?: keyof typeof badgeVariants;
};

export const Badge: FC<BadgeProps> = ({ variant = "default", className = "", ...props }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeVariants[variant]} ${className}`}
    {...props}
  />
);
