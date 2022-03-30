module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arvo-bold': ['Arvo']
      },
      colors: {
        'antique-white': '#ffffff',
        'prussian-blue': '#1D3557',
        'blue-munsell': '#348AA7',
        'imperial-red': '#E63946',
        'imperial-red-darker': '#cc1b3b',
      }
    }
  },
  plugins: [],
}
