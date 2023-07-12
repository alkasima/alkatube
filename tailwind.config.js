module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "smaller": {'min': '340px', 'max': '1200px'},
        }
      },
    },
    plugins: [],
  }