/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "violet-dk": "#2D2641",
      "blue-gray": "#96A9C6",
      "violet-dk-v": "#2C2830",
      "gray-violet-dk": "#837D88",
      "gray-lt-v": "#FAFAFA",
      "gray-lt": "#DADADA",
      white: "#FFFFFF",
      black: "#2C2830",
      fuchsia: "#C396C6",
      violet: "#9E96C6",
    },
    screens: { desktop: "1280px" },
    letterSpacing: {
      tight: "-1px",
      narrow: "-0.67px",
      normal: "-0.56px",
      wide: "-0.39px",
      wider: "-0.78px",
      widest: "1.5px",
    },
    extend: {},
  },
  plugins: [],
};
