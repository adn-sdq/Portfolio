import type { Config } from "tailwindcss";
import generateRandomKeyframes from "./components/generateRandomKeyframes";

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
        'blob-1': 'blob-1 10s infinite ease-in-out',
        'blob-2': 'blob-2 12s infinite ease-in-out',
        'blob-3': 'blob-3 14s infinite ease-in-out',
        'blob-4': 'blob-4 16s infinite ease-in-out',
      },
      keyframes: {
        'blob-1': generateRandomKeyframes(),
        'blob-2': generateRandomKeyframes(),
        'blob-3': generateRandomKeyframes(),
        'blob-4': generateRandomKeyframes(),
      }, 
    },
  },
  plugins: [],
} satisfies Config;
