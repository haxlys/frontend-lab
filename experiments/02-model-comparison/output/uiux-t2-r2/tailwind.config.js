/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "#000000",
          50: "#0B0B0F",
          100: "#111118",
          200: "#1A1A24",
          300: "#27272F",
        },
        neon: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          green: "#10B981",
        },
      },
      fontFamily: {
        display: [
          "Geist",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "Geist",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        ultratight: "-0.04em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.25) 0%, rgba(0,0,0,0) 60%)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      boxShadow: {
        "glow-purple": "0 0 60px -10px rgba(139,92,246,0.55)",
        "glow-blue": "0 0 60px -10px rgba(59,130,246,0.55)",
        "glow-green": "0 0 60px -10px rgba(16,185,129,0.55)",
        "inner-glow":
          "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 30px 60px -20px rgba(0,0,0,0.7)",
      },
      animation: {
        "fade-in": "fadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-up": "slideUp 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "shimmer": "shimmer 2.4s linear infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        "drift": "drift 14s ease-in-out infinite",
        "orbit": "orbit 18s linear infinite",
        "blink": "blink 1.1s steps(2, start) infinite",
        "typewriter": "typewriter 3.6s steps(28, end) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "0.6",
            filter: "blur(40px)",
          },
          "50%": {
            opacity: "1",
            filter: "blur(60px)",
          },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px,-20px) scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(140px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(140px) rotate(-360deg)",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        typewriter: {
          "0%, 5%": { width: "0ch" },
          "45%, 60%": { width: "22ch" },
          "85%, 100%": { width: "0ch" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
