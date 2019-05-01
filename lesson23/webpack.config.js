const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals:['lodash'],        // 打包的过程中遇到lodash，就忽略lodash
  externals: {
    root:'_',                     // lodash 是通过script标签引入的，一般不建议配置
    lodash:{ commonjs:'lodash' }  // 如果在commonjs环境下，名字必须教lodash const lodash = require('lodash')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library:'library',  // 让其支持script标签引入，会在全集变量里面增加一个library变量 可以直接访问
    libraryTarget:'umd' //让所有引入方式都可以
  },
}
