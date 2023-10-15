/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "767.98px" },
      sm: "400px",
      md: "768px",
      mdOnly: { min: "768px", max: "1279.98px" },
      lg: "1280px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        bgMain: "#020F08",
        bgMobile: "#010A05",
      },
      scale: {
        "y-50": ".5",
        "y-100": "1",
        50: "0.5",
        100: "1",
      },
      opacity: {
        50: "0.5",
        100: "1",
      },
    },
  },
  plugins: [],
};
