module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('assets/img/hotel_main.jpg')",
      }
    },
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif'],
        'afacad':['Afacad', 'sans-serif'],
        'playfair':['Playfair Display', 'serif'],
        'opensans':['Open Sans', 'sans-serif'],
        'roboto':['Roboto','sans-serif']
    }
  },
  plugins: [],
}
