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
    // 这个时候打包的文件就是lodash.js  去掉了vendor前缀
    // 代码分割,webpack 会自动将lodash等这种第三方库分割到vendors中
    // 如果splitChunks:{}  那么webpack会采用默认的配置
    splitChunks:{
      // 在代码分割的时候，只对异步代码进行分割，如果同步 异步都想做分割，就配置成"all"
      // 如果改成all，那么需要配置cacheGroups才会起作用
      // 如果是同步的代码会直接走cacheGroups
      chunks: "all"
    }
  }
}

module.exports = merge(commonConfig,devConfig)
