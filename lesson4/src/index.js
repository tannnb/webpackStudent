// ES Module
// CommonJS
// CMD
// ADM
// webpack 实际上是一个模块打包工具
import Header from './header.js'
import Slider from './sidebar.js'
import Content from './content.js'

new Header()
new Slider()
new Content()

// 执行npx webpack index.js  将文件翻译成浏览器可识别的类型
