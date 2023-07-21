/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "7.5rem",
      },
      height: {
        480: "30rem",
        266: "16.625rem",
        395: "24.688rem",
        39: "2.438rem",
        730: "45.625rem",
        589: "36.813rem",
        550: "34.375rem",
        73: "4.563rem",
        259: "16.188rem",
        231: "14.438rem",
        60.25: "3.766rem",
        59.55: "3.722rem",
        480: "30rem",
      },
      width: {
        221: "13.813rem",
        370: "23.125rem",
        401: "25.063rem",
        370: "23.125rem",
        900: "56.25rem",
        599.5: "37.469rem",
        370: "23.125rem",
        39: "2.438rem",
        788: "49.25rem",
        800: "50rem",
        726: "45.375rem",
        432: "27rem",
        68: "4.25rem",
        311: "19.438rem",
        468: "29.25rem",
        1800: "112.5rem",
        545: "34.063rem",
        62.02: "3.876rem",
        60: "3.75rem",
        40: "2.5rem",
        361: "22.563rem",
        7.92: "0.495rem",
        16: "1rem",
      },

      colors: {
        costumeOrange: "#F35A43",
        costumeRed: "#C1272D",
        costumeRedBg: "#EB3449",
        costumeBrnBg: "#F5B596",
        costumeViolet: "#6362D7",
        costumePink: "#FF8FE2",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        SegoeUI: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
