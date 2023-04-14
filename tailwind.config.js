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
      height: {
        480: "30rem",
        266: "16.625rem",
        395: "24.688rem",
        902: "56.375rem",
        439: "27.438rem",
        39: "2.438rem",
        1080: "67.5rem",
        730: "45.625rem",
        589: "36.813rem",
        550: "34.375rem",
        73: "4.563rem",
        67: "4.188rem",
        259: "16.188rem",
        1013: "63.313rem",
        231: "14.438rem",
        60.25: "3.766rem",
        575: "35.938rem",
        941: "58.813rem",
        957: "59.813rem",
        766: "47.875rem",
      },
      width: {
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
        40: "2.5rem",
        361: "22.563rem",
      },

      gap: {
        19: "3.75rem",
      },
      borderRadius: {
        mod: "0.625rem",
      },
      colors: {
        costumeOrange: "#F35A43",
        costumeRed: "#C1272D",
        costumeRedBg: "#EB3449",
        costumeBrnBg: "#F5B596",
      },
      spacing: {
        399: "24.938rem",
      },
    },
  },
  plugins: [],
};
