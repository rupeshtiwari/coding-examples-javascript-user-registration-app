const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'User Registration',
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    })
  ]
};
