/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#009FD9",
        "secondary-dark": "#474443",
        "secondary-light": "#D9D9D9",
      },
      fontFamily: {
        "Work-sans": ["Work Sans", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat"],
        Ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
