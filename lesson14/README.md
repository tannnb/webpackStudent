# tree shaking

在开发的时候只想引入自己需要的代码，不需要的代码不进入引入，这就需要配置tree shaking
.banblerc文件中如果配置了 "useBuiltIns":"usage"，那么项目文件中就不需要引入import '@babel/polyfill'了
useBuiltIns会自动引入

 注意：如果文件中引入了另一个函数，那么被引入的文件中的所有函数都会被webpack打包进去
 webpack2.0之后 默认就添加了tree shaking，这样没有被引入的函数，webpack不会进行打包，需要手动配置 optimization:{usedExports:true}

// 开发环境的时候 配置tree shaking，另外还需要在package.json中写入 "sideEffects":false 对所有模块进行tree shaking
// 如果需要对特殊文件进行设置 不处理；那么比如：在打包的时候不去处理@babel/polly-fill;需要修改配置"sideEffects":[@babel/polly-fill]
// 一般还会吧css文件忽略"sideEffects":[*.css]
