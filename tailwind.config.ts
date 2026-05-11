import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-mazius)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
      colors: {
        background: "#F1F1F1",
        foreground: "#050505",
        muted: "#8b8b8b",
        border: "#DADADA",
        surface: "#ffffff",
        dark: "#0f0f0f",
      },
      letterSpacing: {
        tighter: "-0.03em",
        display: "-0.02em",
      },
    },
  },
  plugins: [typography],
};

export default config;
