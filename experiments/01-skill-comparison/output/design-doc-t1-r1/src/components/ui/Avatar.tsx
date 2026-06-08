import { type FC } from "react";

type AvatarProps = {
  src?: string;
  initials: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline" | "away";
};

const sizeMap = {
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base",
};

const statusDotSize = {
  sm: "h-2 w-2 ring-1",
  md: "h-2.5 w-2.5 ring-1",
  lg: "h-3 w-3 ring-2",
};

const statusColor = {
  online: "bg-success-600",
  offline: "bg-navy-400",
  away: "bg-warning-600",
};

export const Avatar: FC<AvatarProps> = ({ src, initials, size = "md", status }) => (
  <span className="relative inline-flex shrink-0">
    {src ? (
      <img
        src={src}
        alt={initials}
        className={`${sizeMap[size]} rounded-full object-cover`}
      />
    ) : (
      <span
        className={`${sizeMap[size]} flex items-center justify-center rounded-full bg-accent-100 font-medium text-accent-600`}
      >
        {initials}
      </span>
    )}
    {status && (
      <span
        className={`absolute bottom-0 right-0 block rounded-full ${statusDotSize[size]} ring-white ${statusColor[status]}`}
      />
    )}
  </span>
);
