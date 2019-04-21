# 使用plugins让打包更便捷

 html-webpack-plugin会在【打包结束】后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
 
 注意生成的文件只会引入打包后的js，而root根节点是没有的，需要进行配置即可


clean-webpack-plugin 当在【打包之前】，会使用cleanWebpackPlugin插件帮助我们去删除dist下的内容
