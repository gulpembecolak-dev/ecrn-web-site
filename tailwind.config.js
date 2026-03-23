/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FBBF24', // Industrial Yellow
          dark: '#D97706',
        },
        secondary: {
          DEFAULT: '#111827', // Dark Blue/Gray
          light: '#374151',
        }
      }
    },
  },
  plugins: [],
}
