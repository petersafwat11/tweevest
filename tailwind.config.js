/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: "transparent",
        primary: "#376FFF",
        primarylight: "#64B5F3",
        white: "#ffffff",
        dark: "#1C3475",
        grey1: "#F8F8F8",
        grey2: "#ECEEF1",
        greenlight: "#DDF9EF",
        green: "#55C2A3",
        redlight: "#FDEEEE",
        red: "#EB5757",
      },
      colors: {
        transparent: "transparent",
        primary: "#376FFF",
        primarylight: "#64B5F3",
        white: "#ffffff",
        textwhite: "#D1D5DB",
        dark: "#1C3475",
        dark2: "#727FA4",
        border: "#ECEEF1",
        greenlight: "#DDF9EF",
        green: "#55C2A3",
        redlight: "#FDEEEE",
        red: "#EB5757",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
      },
      boxShadow: {
        Shadow1: "0px 30px 80px rgba(15, 29, 36, 0.04)",
        Shadow2: "0px 24px 48px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};