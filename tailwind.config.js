/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
