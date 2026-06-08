/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#0B0B0F",
          800: "#111118",
          700: "#1A1A24",
        },
        neon: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        display: [
          "Space Grotesk",
          "Geist",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "Inter",
          "Geist",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.05em",
        ultratight: "-0.04em",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 16s linear infinite",
        "ping-slow": "ping 4s cubic-bezier(0,0,0.2,1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "orbit": "orbit 18s linear infinite",
        "blob": "blob 14s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
            filter: "blur(40px)",
          },
          "50%": {
            opacity: "0.9",
            filter: "blur(60px)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg,#8B5CF6 0%,#3B82F6 50%,#10B981 100%)",
        "neon-gradient-soft":
          "linear-gradient(135deg,rgba(139,92,246,0.18) 0%,rgba(59,130,246,0.18) 50%,rgba(16,185,129,0.18) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
        "dot-pattern":
          "radial-gradient(rgba(255,255,255,0.08) 1px,transparent 1px)",
      },
      boxShadow: {
        "neon-purple": "0 0 30px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
        "neon-blue": "0 0 30px rgba(59,130,246,0.35), 0 0 60px rgba(59,130,246,0.15)",
        "neon-emerald": "0 0 30px rgba(16,185,129,0.35), 0 0 60px rgba(16,185,129,0.15)",
        "inner-glow": "inset 0 0 40px rgba(139,92,246,0.08)",
      },
    },
  },
  plugins: [],
};
