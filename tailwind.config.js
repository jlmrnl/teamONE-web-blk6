/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#581c87", // You can choose a specific shade of purple, e.g., 'purple-500'
        indigo: "#1e1b4b",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans"],
        rubik: ["Rubik", "sans"],
      },
      fontFamily: {
        sans: ["Roboto", "sans"], // Use Roboto as the default sans-serif font
        dancing: ["Dancing Script", "cursive"], // Use Dancing Script
        montserrat: ["Montserrat", "sans"], // Use Montserrat
        mukta: ["Mukta", "sans"], // Use Mukta
        poppins: ["Poppins", "sans"], // Use Poppins
        rubik: ["Rubik", "sans"], // Use Rubik
      },
      fontWeight: {
        thin: 100, // Set font weight to 100 (thin)
      },
    },
  },
  plugins: [],
};
