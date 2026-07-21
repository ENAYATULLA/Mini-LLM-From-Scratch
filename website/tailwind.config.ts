import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0E14",
        surface: "#0F1420",
        "surface-raised": "#141A28",
        border: "#1E2636",
        "border-soft": "#161D2B",
        ink: "#E7EBF3",
        "ink-muted": "#8B96AB",
        "ink-faint": "#5B6478",
        signal: "#4C8DFF",
        "signal-soft": "#274574",
        attention: "#FFB454",
        "attention-soft": "#4A3A1E",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0A0E14 85%), radial-gradient(circle at 50% 0%, rgba(76,141,255,0.12), transparent 60%)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
