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
        primary: "#8C0000",
        secondary: "#BD2000",
        accent: "#FA1E0E",
        highlight: "#FFBE0F",
        dark: "#0a0a0a",
        darker: "#050505",
      },
    },
  },
  plugins: [],
} satisfies Config;
