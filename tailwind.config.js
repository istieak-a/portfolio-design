/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'scripto': ['Scripto', 'cursive'],
      'mosk': ['Mosk', 'sans-serif'],
      'sfui': ['SF UI Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  presets: [keepPreset],
};
