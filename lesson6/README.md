# 打包静态资源

要在js文件中引用css，需要配置style-loader，css-loader

postcss-loader 添加css3浏览器厂商前缀

sass-loader  将sass类型文件编译成正常的css文件

css-loader 分析多个css的关系，并合并成一段css或者多段

style-loader 将合并后的css挂载到页面的header部分


开启css模块化，防止影响其他文件样式 styles[name]
