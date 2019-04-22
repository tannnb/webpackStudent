# entry和output

如果entry配置了多个打包入口，他们filename必须要不同，如果名称相同则打包会失败，名称重复冲突

解决办法，将filename用占位符表示，例[name]

filename:'[name].bundle.js'


打包生成的文件会制动引入html中；

如果想再打包后引入的js前加上http地址，可配置publicPath

publicPath: '/'；   //cdn地址
