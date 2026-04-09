/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B1121',
          light: '#F8FAFC',
          gray: '#94A3B8',
          border: '#1E293B',
        }
      }
    },
  },
  plugins: [],
}
