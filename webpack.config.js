// webpack.config.js
// see: https://dev.to/tegandbiscuits/building-a-static-site-with-hugo-and-webpack-pd3
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: [
    // path.resolve('src', 'js', 'app.js'),
    path.resolve('themes', 'ulynks', 'assets', 'js', 'app.js'),
    // path.resolve('src', 'css', 'app.css'),
    path.resolve('themes', 'ulynks', 'assets', 'css', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};