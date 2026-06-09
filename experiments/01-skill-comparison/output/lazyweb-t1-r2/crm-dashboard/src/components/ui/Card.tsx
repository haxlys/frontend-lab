import { type FC, type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-navy-200 rounded-md p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${className}`}
  >
    {children}
  </div>
);
