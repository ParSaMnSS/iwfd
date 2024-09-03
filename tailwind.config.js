/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ["./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
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
  plugins: [
    require('flowbite/plugin')
  ],
}