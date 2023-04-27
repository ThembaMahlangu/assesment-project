/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "navy",
        secondary: "gold",
        theme: "gray",
        dark: "#000",
        light: "#fff",
      },
    },
  },
  plugins: [],
}