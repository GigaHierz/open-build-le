module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#81FF83",
        grey: "#272727",
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
