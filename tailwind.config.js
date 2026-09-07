/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        teal: { deep: '#1F8A8C', light: '#4FC1C2' },
        brand: { green: '#8BC53F' },
        navy: { ink: '#1B2A56', deep: '#101B33' },
        cream: '#F6F1EA',
        charcoal: '#3A2E28',
        coral: '#E8672E'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        bebas: ['"Bebas Neue"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
