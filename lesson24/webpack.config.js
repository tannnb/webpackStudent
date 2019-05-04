const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,  // 配置 就可以实现路由跳转
    proxy: {
      // 只在开发环境下起作用
      // 将请求转发到http://www.dell-lee.com
      // 如果配置了pathRewrite，那么会根据配置，进行路径重写 目标请求header.json 实际请求的是demo.json
      // 如果是多个路径可以使用context:['/react/api','/api']
      // 如果要对根目录进行转发 '/',那么要配置index:''
      // index:'',  如果请求访问的 '/'
      '/react/api': {
        target: 'http://www.dell-lee.com',
        secure: false,  // 配置后可对https进行转发
        pathRewrite: {
          'header.json': 'demo.json',
        },
        changeOrigin:true,  // 可以突破对Origin的限制，一般加上即可
       /* bypass: function (req, res, proxy) {
          // 如果遇到请求html的情况 直接跳过转发流程直接返回
          if (req.headers.accept.indexOf('html') !== -1) {
            return false
          }
        },*/
        headers:{
          host:'www.tannnb.com',  // 配置请求头
          cookie:'cookie'         // 配置cookie 可以模拟鉴权等
        }
      },

    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240,
          },
        },
      }, {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
