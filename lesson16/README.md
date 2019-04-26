# code splitting代码分割

如果安装了第三方包，比如lodash.js  webpack打包的时会将lodash也进行打包

可以在optimization中配置splitChunks:{chunks:'all'}

归纳：代码分割，和webpack无关

webpack中实现代码分割，两种方式

1。同步代码：只需要在webpack.common.js中做optimization的配置

2。异步代码(import)：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中


