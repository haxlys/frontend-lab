import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md";
  className?: string;
}

export function Avatar({ src, alt, fallback, size = "md", className }: AvatarProps) {
  const sizes = {
    sm: "h-7 w-7 text-xs",
    md: "h-8 w-8 text-sm",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? fallback}
        className={cn("rounded-full object-cover ring-2 ring-white", sizes[size], className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-royal-600 text-white font-medium",
        "ring-2 ring-white",
        sizes[size],
        className,
      )}
    >
      {fallback}
    </span>
  );
}
