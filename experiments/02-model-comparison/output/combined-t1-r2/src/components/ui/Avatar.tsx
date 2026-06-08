import type { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const sizes = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-[11px]",
  md: "h-8 w-8 text-[12px]",
  lg: "h-10 w-10 text-[13px]",
};

// Stable hash-based color from a small palette — Linear/Intercom-style.
const palette = [
  { bg: "#EEF2FF", text: "#4338CA" },
  { bg: "#ECFEFF", text: "#0E7490" },
  { bg: "#F0FDF4", text: "#15803D" },
  { bg: "#FEF3C7", text: "#A16207" },
  { bg: "#FCE7F3", text: "#BE185D" },
  { bg: "#E0E7FF", text: "#3730A3" },
  { bg: "#FFE4E6", text: "#BE123C" },
  { bg: "#DBEAFE", text: "#1D4ED8" },
];

function getColors(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return palette[hash % palette.length];
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, size = "sm", className = "", ...rest }: AvatarProps) {
  const c = getColors(name);
  return (
    <div
      className={`inline-flex items-center justify-center font-semibold rounded-full border border-white/80 ring-1 ring-border/60 ${sizes[size]} ${className}`}
      style={{ backgroundColor: c.bg, color: c.text }}
      title={name}
      aria-label={name}
      {...rest}
    >
      {initials(name)}
    </div>
  );
}
