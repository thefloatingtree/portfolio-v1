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
        'antique-white': '#FFF2DE',
        'prussian-blue': '#1D3557',
        'blue-munsell': '#348AA7',
        'imperial-red': '#E63946'
      }
    }
  },
  plugins: [],
}
