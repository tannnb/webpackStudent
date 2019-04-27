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
      chunks: "all",

      // 引入的模块或者库 大于30kb的时候才做代码分割
      minSize: 30000,

      // 比如lodash 1m，配置了maxSize那么它会尝试对lodash进行二次拆分打包，分割成更多的小文件； 一般工具库不建议拆，而且也拆不了，配置的比较少了解即可
      // maxSize: 50000,

      // 满足只要引入了一次就进行代码分割
      minChunks: 1,

      // 建议默认
      maxAsyncRequests: 5,

      // 入口文件进行加载的时候，入口文件可能会引入其他库，最多也只能分割出3个文件，超过3个 就忽略（建议默认）
      maxInitialRequests: 3,

      // 组合文件连结的时候符号
      automaticNameDelimiter: '~',

      //起名是否有效
      name: true,

      // 缓存组
      cacheGroups: {
        // vendors会检测要打包的库时候在node_modules里面，如果满足就会打包到【vendors】这个组里面：vendors~lodash.js
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename:'vendors.js'  // 将打包的组直接改成vendors名称
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename:'common.js'
        }
      }
    }
  }
}

module.exports = merge(commonConfig,devConfig)
