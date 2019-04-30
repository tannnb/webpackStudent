# css文件代码分割 MiniCssExtractPlugin

在js中引入的css默认会打包斤js里面，不会生成单独的css

`配置方法：将'style-loader'改为'MiniCssExtractPlugin.loader',
在plugins中加入new MiniCssExtractPlugin({})`

注意：是否配置optimization：{usedExports:true}; 如果配置了，那么tree shaking已经生效了，会去分析里面的css js引入有没有使用，如果引入了但是没有使用，那么不会打包进来

解决：在package中 配置"sideEffects":["*.css"] 对css文件不做tree shaking


css代码压缩optimize-css-assets-webpack-plugin

optimization: {  minimizer: [new OptimizeCSSAssetsPlugin({})] }
