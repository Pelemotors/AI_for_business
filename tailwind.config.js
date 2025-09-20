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
        // Gradient colors from the image
        cyan: '#00d4ff',
        purple: '#7c3aed',
        pink: '#ff6b6b',
        orange: '#ffa500',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundSize: {
        '400%': '400% 400%',
      }
    },
  },
  plugins: [],
}