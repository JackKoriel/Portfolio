/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    backgroundSize: {
      "size-200": "200% 200%",
    },
    backgroundPosition: {
      "pos-0": "0% 0%",
      "pos-100": "100% 100%",
    },
  },
  plugins: [],
};
