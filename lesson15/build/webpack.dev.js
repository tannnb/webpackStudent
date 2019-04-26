const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

 const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': 'http://www.tannnb.com',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization:{
    usedExports:true
  }
}

module.exports = merge(commonConfig,devConfig)
