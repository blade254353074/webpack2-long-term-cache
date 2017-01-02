const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const template = path.resolve('src/index.html')

module.exports = {
  entry: {
    libs: ['es6-promise/auto', 'whatwg-fetch'],
    vendor: path.resolve('src/bootstrap.js'),
    entry1: path.resolve('src/entry1.js'),
    entry2: path.resolve('src/entry2.js')
  },
  output: {
    publicPath: '',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].js'
  },
  resolve: {
    alias: { 'babel-runtime/core-js/promise': 'es6-promise' }
  },
  cache: true,
  devtool: '#source-map',
  performance: { hints: false },
  module: {
    rules: [{
      test: /\.jsx?$/i,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: { context: __dirname },
      debug: true
    }),
    new HtmlWebpackPlugin({
      filename: 'entry1.html',
      template,
      chunks: ['manifest', 'libs', 'vendor', 'entry1']
    }),
    new HtmlWebpackPlugin({
      filename: 'entry2.html',
      template,
      chunks: ['manifest', 'libs', 'vendor', 'entry2']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'libs', 'manifest'],
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
