const path = require('path');

module.exports = {
  mode: 'production',
  entry: [ './calculateCelsiusToFahrenheit.js',
  './calculateCelsiusToKelvin.js',
  './calculateFahrenheitToCelsius.js',
  './calculateFahrenheitToKelvin.js',
  './calculateKelvinToCelsius.js',
  './calculateKelvinToFahrenheit.js',
  './calculateKilometersToMiles.js',
  './calculateMilesToKilometers.js'
],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/javascripts'),
    libraryTarget: 'var',
    library: 'main'
  },
};