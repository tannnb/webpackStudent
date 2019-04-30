const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  entry:'./src/index.js',

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: './images',
            limit: 2048,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

    ],
  },

  // manifest
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin({
      $:'jquery'  // 如果一个模块中发现了$符号，那么webpack自动帮助引入juqery，并吧jquery赋值给$
    })
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
      cacheGroups:{
        vendors:{
          test:/[\\/]node_modules[\\/]/,
          priority:-10,
          name:'vendors'
        }
      }
    }
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
  },

}
