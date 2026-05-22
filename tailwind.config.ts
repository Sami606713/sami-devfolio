import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        foreground: "#E8EAF0",
        accent: "#00D4FF",
        surface: "#111827",
        "surface-2": "#1a2235",
        muted: "#6B7280",
        border: "rgba(255,255,255,0.08)",
      },
    },
  },
};

export default config;
