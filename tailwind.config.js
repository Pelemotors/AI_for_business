/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: "#3b82f6",
        neonGreen: "#22c55e",
        deepPurple: "#9333ea",
      },
      fontFamily: {
        sans: ["Rubik", "Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
