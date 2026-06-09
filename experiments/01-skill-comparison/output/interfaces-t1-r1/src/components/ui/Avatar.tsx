interface AvatarProps {
  initials: string;
  size?: "sm" | "md";
}

const colors = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-purple-100 text-purple-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-teal-100 text-teal-700",
];

function hashInitials(initials: string) {
  let h = 0;
  for (let i = 0; i < initials.length; i++) {
    h = (h * 31 + initials.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(h) % colors.length;
}

export function Avatar({ initials, size = "md" }: AvatarProps) {
  const sizeClass = size === "sm" ? "h-7 w-7 text-[10px]" : "h-8 w-8 text-xs";
  const color = colors[hashInitials(initials)];

  return (
    <div
      className={`${sizeClass} ${color} flex shrink-0 items-center justify-center rounded-full font-semibold`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
