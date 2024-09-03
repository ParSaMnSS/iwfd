/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1692AC',
        'custom-pink': '#AA1A55',
        'custom-red': '#F7435F',
        'custom-orange': '#F78160',
      },
    },
  },
  plugins: [],
}