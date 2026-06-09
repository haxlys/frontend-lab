import { type FC } from "react";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<string, string> = {
  sm: "w-7 h-7 text-[11px]",
  md: "w-8 h-8 text-xs",
  lg: "w-10 h-10 text-sm",
};

export const Avatar: FC<AvatarProps> = ({ initials, size = "md", className = "" }) => (
  <div
    className={`${sizeMap[size]} rounded-full bg-navy-700 text-white font-semibold flex items-center justify-center flex-shrink-0 ${className}`}
  >
    {initials}
  </div>
);
