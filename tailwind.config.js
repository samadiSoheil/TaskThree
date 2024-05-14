/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      VazirRegular: "Vazirmatn-Regular",
      VazirMedium: "Vazirmatn-Medium",
      VazirBold: "Vazirmatn-Bold",
      VazirBlack: "Vazirmatn-Black",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
};
