import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 2s ease-in-out infinite",
      },
      keyframes: {
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        primary: "#636FA4",
        secondary: "#E8CBC0",
        tertiary: "#FFFFFF",
      },
      screens: {
        xs: "340px", // min-width
        llg: "1000px",
      },
    },
  },
  plugins: [],
} satisfies Config;
