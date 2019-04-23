# 配置Babel处理es6

//核心语法库  babel-loader  @babel/core

babel-loader   // 帮助webpack做打包的一个工具

@babel/core     //能够让babel识别js代码里的内容，然后js转成ast抽象语法树，然后吧抽象语法树编译成新的语法出来

@babel/preset-env  // 需要借助这个插件将语法翻译成es5的语法


注意：低版本浏览器可能没有map filter ...等等，所以需要补齐比如安装@babel/polyfill

问题：没有引入@babel/polyfill的时候打包只有30kb，引入之后就变成900kb了，因为webpack将全部方法都引入了
解决：给配置presets配置第二个参数
"presets": [["@babel/preset-env",{useBuiltIns：'usage'}]
这样可以只引入已经用到的函数，减小打包大小


注意：如果在打包一个ui组件库或者类库的时候全局引入@babel/polyfill会污染全局，所以要换一种方式
解决：安装@babel/plugin-transform-runtime和@babel/runtime 这种形式做配置可以解决

babel的配置特别多，所以一般会在根目录下创建一个.babelrc文件单独配置
