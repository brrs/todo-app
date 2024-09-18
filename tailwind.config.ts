import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        outline: "var(--outline)",

        onPrimary: "var(--on-primary)",
        onPrimarySecondary: "var(--on-primary-secondary)",
        onSecondary: "var(--on-secondary)",
        onTertiary: "var(--on-tertiary)",
        onAccent: "var(--on-accent)",

        date: "var(--date)"
      },
    },
  },
  plugins: [],
};
export default config;
