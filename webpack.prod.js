const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'production',
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
