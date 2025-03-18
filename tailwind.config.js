/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "primary-800": "#1D4C2A",
        "primary-500": "#367448",
        "gold-500": "#C8C286",
        "flower-red": "#E56A54",
        sunshine: "#FFC038",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
