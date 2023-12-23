/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'scripto': ['Scripto', 'cursive'],
      'mosk': ['Mosk', 'sans-serif'],
      'sfui': ['SF UI Display', 'sans-serif'],
    },
    extend: {},
  },
  presets: [keepPreset],
  darkMode: "class",
  plugins: [nextui()]
};
