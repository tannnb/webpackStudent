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
    usedExports:true,
    // 代码分割,webpack 会自动将lodash等这种第三方库分割到vendors中
    splitChunks:{
      chunks:'all'
    }
  }
}

module.exports = merge(commonConfig,devConfig)
