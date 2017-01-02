const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('../webpack.prod.config')

module.exports = merge(webpackConfig, {
  output: { path: `${__dirname}/build` },
  recordsPath: `${__dirname}/recordsPath.json`
})
