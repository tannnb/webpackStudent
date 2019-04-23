# WebpackDevServer

"bundle": "webpack --watch"  // 只要源代码发生变化，webpack就会监听变化，重新打包

为了实现更多的效果，使用WebpackDevServer

使用webpackdevserver 不会生成dist，插件会吧dist放到内存中读取出来


devServer配置了hot hotOnly,热更新插件才会生效

// 在devServer开启了hot和hotOnly 配置热更新插件，才会生效
// 可以在写css和js的时候 方便时时调试样式
new webpack.HotModuleReplacementPlugin(),
