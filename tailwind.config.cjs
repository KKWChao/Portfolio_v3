module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primaryBG-100": "#EDF2F4",
        "secondaryBG-100": "#8D99AE",
        "tertiaryBG-100": "#2B2D42",
      },
    },
    fontFamily: {
      // add fonts here
      // dmsans: ["DM Sans", "sans-serif"]
    },
    backgroundImage: {
      project1: "url('')",
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
