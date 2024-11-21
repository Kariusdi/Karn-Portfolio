import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
