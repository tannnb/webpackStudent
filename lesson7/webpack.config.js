const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  // 打包模式(默认production)；如果不配置则将会有警告提示;
  // production(压缩代码) || development(不压缩代码)
  mode: 'development',

  // 打包入口文件; 完整写法 => { main:'./src/index.js' }
  entry:{
    main:'./src/index.js',
    sub:'./src/index.js'
  },


  module:{
    // 配置规则
    rules:[
      //1. file-loader能打包的，url-loader都可以打包，配置一样
      // url-loader 打包图片会将图片转成base64,可以控制图片打包大小类型(推荐)
      {
        test:/\.(jpg|png|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            // placeholder 占位符
            // 打包图片的名字：[name] 表示原来的图片名，[ext] 原来的后缀名
            name:'[name]_[hash].[ext]',
            // 将图片打包到指定目录
            outputPath: './images',
            // 如果图片字节大于2k(2048)的话，会打包到制定目录，反之则将图片转成base64
            limit: 2048,
          }
        }
      },

      // 2. 打包静态资源
      // css-loader   会分析出css文件的关系，最终将各个css文件合并成一段css
      // style-loader 得到css-loader生成的内容后，style-loader将style样式挂载到html上
      // 若是使用预编译则需要借用对应的loader：例如sass
      // postcss-loader  自动添加css3前缀;需要创建postcss.config.js 文件写入配置（需要安装autoprefixer插件）
      // 注意，顺序为从右往左,从上往下；每个loader都可以配置自己的属性，用对象方式；
      // 如果scss文件引入了另一个scss，那么为了保证scss合并之前 将所有scss都编译完成，importLoaders:2 执行之前，也要去执行2个loader既postcss-loader和sass-loader 先执行
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:2,
              // 开启css modules模块化打包，可以避免css冲突
              modules: true,
            }
          },
          'sass-loader',
          'postcss-loader'
        ],
      },

      // 3. 打包iconfont字体文件的打包形式
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
        }
      }

    ]
  },

  plugins:[
    // HtmlWebpacklPlugin会在【打包结束】后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    // 注意生成的文件只会引入打包后的js，而root根节点是没有的，需要进行配置即可
    new HtmlWebpackPlugin({
      // 以自定的模版生成html模版
      template: 'src/index.html',
      // 可以手动配置html中的各项参数
      // title: 'Output Management'
    }),


    // 当在【打包之前】，会使用cleanWebpackPlugin插件帮助我们去删除dist下的内容 2.0版本，会默认删除dist目录下的文件
    new CleanWebpackPlugin()

  ],

  // 打包出口，生成的文件
  output:{

    // 如果想再打包后引入的js前加上http地址可配置publicPath: http://cdn.com.cn
    publicPath: '/',

    // 生成文件的名字
    // 如果entry配置了多个打包入口，他们filename必须要不同，如果名称相同则打包会失败，名称重复冲突
    // 解决办法，将filename用占位符表示，例[name]
    filename:'[name].bundle.js',
    // 打包出的文件放入的目录，不指定path，webpack内部默认文件夹就是dist
    path:path.resolve(__dirname,'dist')
  }
}
