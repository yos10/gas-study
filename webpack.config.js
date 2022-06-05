const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [new GasPlugin()],
};
