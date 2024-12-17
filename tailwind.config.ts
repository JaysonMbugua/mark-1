/* Tailwind configuration file*/
import type { Config } from "tailwindcss";

export default {
  /*This tells tailwind where to look for files that contain class names.*/
  /* This ensures that only the classes actually used in these files are included in the final CSS build, reducing file size.*/
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /*Defines design system of the project*/
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
