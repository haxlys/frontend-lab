import type { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({ children, href = "#", variant = "primary", className = "" }: CTAButtonProps) {
  const base = "relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Space_Grotesk'] font-semibold text-base transition-all duration-300 cursor-pointer group overflow-hidden";
  const primary = "bg-white text-black hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-[0.98]";
  const secondary = "border border-white/10 text-white hover:border-white/30 hover:bg-white/5 active:scale-[0.98]";

  return (
    <a href={href} className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)]" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
