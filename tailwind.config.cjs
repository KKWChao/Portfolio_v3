module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBg: "#4F6367",
        MediumBg: "#7A9E9F",
        LightBg: "#B8D8D8",
        LighterBg: "#EEF5DB",
        Highlight: "#FE5F55",
        HighlightHover: "#58A7AF",
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
      md: "1080px",
      lg: "1536px",
    },
  },
  plugins: [],
};
