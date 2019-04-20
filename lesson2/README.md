# 什么是模块打包工具

webpack 实际上是一个模块打包工具

####### ES Module
import Header from './header.js'

####### CommonJS规范 
var Header = require('./header.js)

####### 导出模块
module.exports = Header


# 其他注意
不建议全局安装webpack webpack-cli，推荐项目局部安装

如果npm webpack -v 无法打印版本号，则使用npx

例如：npx webpack -v  

npx会去node_modules包中找webpack版本号

查看版本号: npm info webpack
