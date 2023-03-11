module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // temp setup
        DarkBg: "#231F20",
        MediumBg: "#7EBDC2",
        LightBg: "#BADCDE",
        LighterBg: "#EFE6DD",
        Highlight: "#BB4430",
        HighlightHover: "#58A7AF",

        // background color
        backColor: {
          black: "#212121",
          blue: "#0D47AB",
          red: "#770316",
        },
        // Monochrome
        mono: {
          100: "#f1f1f1",
          200: "#d6d7d9",
          300: "#aeb0b5",
          400: "#5b616b",
          500: "#323a45",
          700: "#292929",
          800: "#212121",
        },
        // Blue
        primary: {
          100: "#2D75F0",
          200: "#105EE5",
          300: "#0D47AB",
          400: "#0B3F98",
          500: "#082F72",
        },
        // Red
        secondary: {
          100: "#EF062D",
          200: "#C70525",
          300: "#A4031F",
          400: "#770316",
          500: "#50020F",
        },
        // Other Colors
        tertiaryOrange: {
          100: "#FF540A",
          300: "#FF4D00",
          500: "#CC3D00",
        },
        tertiaryGreen: {
          100: "#78B319",
          300: "#547D12",
          500: "#3C590D",
        },
      },
    },
    fontFamily: {
      // add fonts here
      notosans: ["Noto Sans", "sans-serif"],
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
