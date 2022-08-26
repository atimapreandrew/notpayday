/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        veryDarkBlue: "#010005",
        darkCyan: "#d3ede3",
        grayish: "#6c757d",
        veryDarkCyan: "#09757e",
      },
      backgroundImage: {
        ctabg: "url('/src/assets/card_7.webp')",
      },
    },
  },
  plugins: [],
};
