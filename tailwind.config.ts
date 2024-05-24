import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      KaiseiFont: ["Kaisei Decol", "serif"],
      InriaFont: ["Inria Serif", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "sm-gradient":
          "linear-gradient(180deg, rgba(55, 65, 81, 0.2) 0%, rgba(12, 17, 28, 0.2) 100%)",
        "btn-gradient": "linear-gradient(180deg, #374151 0%, #111827 100%)",
        "red-gradient":
          "linear-gradient(91.47deg, #EF4444 34.77%, #EA580C 59.04%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
