# code splitting代码分割

如果安装了第三方包，比如lodash.js  webpack打包的时会将lodash也进行打包

可以在optimization中配置splitChunks:{chunks:'all'}
