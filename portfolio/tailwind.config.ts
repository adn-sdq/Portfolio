import type { Config } from "tailwindcss";
import generateRandomKeyframes from "./utils/generateRandomKeyframes";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'blob-1': 'blob-1 12s infinite ease-in-out',
        'blob-2': 'blob-2 16s infinite ease-in-out',
        'blob-3': 'blob-3 20s infinite ease-in-out',
        'blob-4': 'blob-4 24s infinite ease-in-out',
      },
      keyframes: {
        'blob-1': (generateRandomKeyframes() as unknown) as Record<string, Record<string, string>>,
        'blob-2': (generateRandomKeyframes() as unknown) as Record<string, Record<string, string>>,
        'blob-3': (generateRandomKeyframes() as unknown) as Record<string, Record<string, string>>,
        'blob-4': (generateRandomKeyframes() as unknown) as Record<string, Record<string, string>>,
      }, 
    },
  },
  plugins: [
    // Reduce letter spacing (text space) by ~1% for all text
    plugin(function({ addBase }) {
      addBase({
        "body, p, a, span, h1, h2, h3, h4, h5, h6": {
          letterSpacing: "-0.01em",
        },
      });
    }),
  ],
} satisfies Config;
