/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
        playfair: ["Playfair"],
        Poppins: ["Poppins"],
        Roboto: ["Roboto"],
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/aspect-ratio"),
    // require("prettier-plugin-tailwindcss"),
  ],
};
