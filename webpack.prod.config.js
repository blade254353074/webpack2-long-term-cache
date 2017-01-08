const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js'
  },
  resolve: {
    alias: { 'babel-runtime/core-js/promise': 'es6-promise' }
  },
  module: {
    rules: [{
      test: /\.jsx?$/i,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' }}),
    new webpack.LoaderOptionsPlugin({
      options: { context: __dirname },
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        screw_ie8: true,
        warnings: true
      },
      output: { comments: false }
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    // new BundleAnalyzerPlugin()
  ]
}
