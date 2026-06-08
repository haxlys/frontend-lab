import { type ComponentProps, type FC } from "react";

type CardProps = ComponentProps<"div"> & {
  padded?: boolean;
};

export const Card: FC<CardProps> = ({ padded = true, className = "", children, ...props }) => (
  <div
    className={`rounded-lg border border-navy-200 bg-white shadow-sm ${padded ? "p-6" : ""} ${className}`}
    {...props}
  >
    {children}
  </div>
);
