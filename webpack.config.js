const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  devServer: {
    allowedHosts: [
      'all'
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/styles.css', to: './' }, // output path is 'public' folder, already defined.
        { from: './src/pages', to: './pages' },
        { from: './src/directives', to: './directives' },
      ]
    })
  ]
}