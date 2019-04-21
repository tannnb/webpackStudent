const path = require('path')

module.exports = {
  // 打包模式(默认production)；如果不配置则将会有警告提示;
  // production(压缩代码) || development(不压缩代码)
  mode: 'development',

  // 打包入口文件; 完整写法 => { main:'./src/index.js' }
  entry:'./src/index.js',


  module:{
    // 配置规则
    rules:[
      // file-loader能打包的，url-loader都可以打包，配置一样
      // url-loader 打包图片会将图片转成base64
      {
        test:/\.(jpg|png|gif)$/,
        use:{
          loader:'file-loader'
        }
      }
    ]
  },

  // 打包出口，生成的文件
  output:{
    // 生成文件的名字
    filename:'bundle.js',
    // 打包出的文件放入的目录，不指定path，webpack内部默认文件夹就是dist
    path:path.resolve(__dirname,'bundle')
  }
}
