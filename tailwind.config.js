/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'], // Agrega Bebas Neue
        'roboto': ['Roboto', 'sans-serif'],  
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

