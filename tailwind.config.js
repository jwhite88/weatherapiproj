/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offblack: {
          50: "#585c61",
          100: "#4e5257",
          200: "#44484d",
          300: "#3a3e43",
          400: "#303439",
          500: "#262a2f",
          600: "#1c2025",
          700: "#12161b",
          800: "#080c11",
          900: "#000207",
        },
      },
    },
  },
  plugins: [],
};
