/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#2563eb',
        deepPurple: '#7c3aed',
        ink: '#0f172a',
        slate: '#475569',
        mint: '#22c55e',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}