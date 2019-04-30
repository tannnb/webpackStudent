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
   module:{
    rules:[
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      }
    ]
   },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
   output:{
     filename: '[name].js',
     chunkFilename:'[name].js'
   }
}

module.exports = merge(commonConfig,devConfig)
