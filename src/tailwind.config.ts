// tailwind.config.ts
import type { Config } from "tailwindcss";
// import fontFamily from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  //   content: [
  //     "./src/**/*.{ts,tsx}", // catches src/pages, src/components, etc.
  //     "./src/app/**/*.{ts,tsx}", // explicitly include app directory
  //     "./components/**/*.{ts,tsx}", // if you also have a root-level components folder
  //   ],
  //   content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"], notes app config
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: "#2563eb", // your main brand color
          light: "#60a5fa",
          dark: "#1e3a8a",
        },
        // Semantic color tokens
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444", // red-500
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9", // slate-100
          foreground: "#64748B",
        },
        background: "#FFFFFF",
        foreground: "#0F172A",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        body: ["10rem", { lineHeight: "1.5rem" }],
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
