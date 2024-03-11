/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8f00ef",
        offWhite: "#f0f0f0",
        dark: "#242424",

      }
    },
  },
  plugins: [],
}

