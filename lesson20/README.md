# 浏览器缓存(Caching)

主要是通过output: {  filename: '[name].[contenthash].js' } 的contenthash

// 打包的时候加行哈希值，如果代码没有进行改变，那么打包出来还是原来的文件，用户线上访问，由于哈希值都是一致，直接从浏览器缓存读取
