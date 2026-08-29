/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: "#f8f3ee",
          100: "#eee3d7",
          200: "#ddc7b0",
          300: "#c7a689",
          400: "#a87952",
          500: "#8b5e3c",
          600: "#70472d",
          700: "#573522",
          800: "#3b2418",
          900: "#24160f",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};