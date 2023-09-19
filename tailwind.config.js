module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_ab: "#fdfdfdab",
          A700_0a: "#ffffff0a",
          A700: "#fdfdfd",
          A700_a2: "#fdfdfda2",
          A700_5e: "#fdfdfd5e",
          A700_05: "#ffffff05",
          A700_7e: "#fdfdfd7e",
          A700_14: "#ffffff14",
          A700_21: "#ffffff21",
        },
        blue_gray: {
          100: "#cfd4dc",
          700: "#475466",
          800: "#464d50",
          "100_01": "#d9d9d9",
        },
        orange: { A100: "#fdd26e" },
        gray: {
          100: "#f2f3f6",
          900: "#1f2129",
          "100_01": "#f2f2f2",
          "900_7f": "#21282c7f",
          "900_0c": "#1018280c",
        },
        green: {
          400: "#44c577",
          500: "#3da466",
          "500_01": "#3fa268",
          "400_01": "#44c677",
        },
        teal: { 200: "#73c2b4" },
        red: { 300: "#d8727d", "300_01": "#cd7848", "300_02": "#cd7849" },
        colors: "#101215ff",
      },
      fontFamily: { poppins: "Poppins" },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
