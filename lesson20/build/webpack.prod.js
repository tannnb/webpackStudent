const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module:{
    rules:[
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins:[
    // 配置属性
    // 如果一个文件是直接被html引用，那么打包的时候会走filename
    // 反之它是间接被引入html就会走chunkFilename
    // 并且还有 可以将相同文件合并
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].chunk.css'
    })
  ],

  // 不让提示性能上的问题
  performance:false,

  optimization: {
    // css文件压缩
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  output:{
    // 打包的时候加行哈希值，如果代码没有进行改变，那么打包出来还是原来的文件，用户线上访问，由于哈希值都是一致，直接从浏览器缓存读取
    filename: '[name].[contenthash].js',
    chunkFilename:'[name].[contenthash].js'
  }
}

module.exports = merge(commonConfig,prodConfig)
