/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
