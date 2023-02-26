/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
      spacing: {
        "3/5": "60%",
        "1/12": "8.33%",
        "3/20": "15%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
