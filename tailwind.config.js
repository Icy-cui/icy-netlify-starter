module.exports = {
  content: [
    // using ./src/ dir
    "./src/**/*.{js,ts,jsx,tsx}",
    // using ./ dir
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/index.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    // add more paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark"
  },
};
