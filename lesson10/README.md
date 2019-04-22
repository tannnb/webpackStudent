# SourceMap的配置

sourceMap
现在知道dist目录下main.js文件96行出错了


sourceMap它是一个映射关系，他知道dist目录下main.js文件96行实际上对应的是src目录下的index.js文件的第一行

当前其实是index.js中第一行代码错了

module不仅能检测项目中的代码错误 还能检测第三方包的代码错误

eval 打包速度最快的一种方式 


开发时可以配置cheap-module-eval-source-map方便调试错误(建议)

线上代码的话，一般关闭devtool 或者使用 cheap-module-source-map
