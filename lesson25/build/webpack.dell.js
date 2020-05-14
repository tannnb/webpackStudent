const path = require('path')
module.exports = {
  mode:'production',
  entry:{
    vendor:['react','react-dom','lodash']
  },
  output:{
    filename:'[name].dll.js',
    path:path.resolve(__dirname,'../dll'),  // 将入口的包打包进一个文件目录下
    library:'[name]'
  }
}
