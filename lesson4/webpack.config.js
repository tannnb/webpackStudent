const path = require('path')

module.exports = {
  // 打包入口文件; 完整写法 => { main:'./src/index.js' }
  entry:'./src/index.js',

  // 打包出口，生成的文件
  output:{
    // 生成文件的名字
    filename:'bundle.js',
    // 打包出的文件放入的目录，不指定path，webpack内部默认文件夹就是dist
    path:path.resolve(__dirname,'bundle')
  }
}
