import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export default function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  icon,
  className = "",
  ...props
}: CTAButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center font-medium transition-all duration-500 cursor-pointer";

  const sizes = {
    sm: "px-5 py-2 text-sm rounded-lg gap-2",
    md: "px-7 py-3 text-base rounded-xl gap-2.5",
    lg: "px-9 py-4 text-lg rounded-xl gap-3",
  };

  const variants = {
    primary:
      "bg-neon-purple text-white shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_50px_rgba(139,92,246,0.35)] hover:-translate-y-0.5",
    secondary:
      "border border-white/10 text-white hover:border-neon-purple/50 hover:bg-glass-hover hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] hover:-translate-y-0.5",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Glow pulse ring for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            animation: "pulse-glow 2s infinite",
          }}
        />
      )}

      {/* Border gradient on primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl p-[1px] -z-10">
          <span className="block h-full w-full rounded-xl bg-gradient-to-r from-neon-purple/0 via-neon-purple/30 to-electric-blue/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
      )}

      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>

      {/* Shine effect on hover */}
      <span
        className="absolute inset-0 -z-10 overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <span
          className="absolute -inset-full block -translate-x-full animate-[shimmer_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </span>

      {/* Secondary glow ring */}
      {variant === "secondary" && (
        <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 0 20px rgba(139, 92, 246, 0.15), 0 0 20px rgba(139, 92, 246, 0.05)",
          }}
        />
      )}
    </button>
  );
}
