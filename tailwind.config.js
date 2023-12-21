/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dukaan-blue-800": "#1e2640",
        "dukaan-blue-600": "#0e4f82",
        "dukaan-blue-400": "#146eb4",

        "dukaan-gray-800": "#4d4d4d",
        "dukaan-gray-700": "#3f3f46",
        "dukaan-gray-600": "#71717a",
        "dukaan-gray-300": "#ccc",
        "dukaan-gray-200": "#dfdddd",
        "dukaan-gray-100": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
