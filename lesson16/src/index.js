// 1m
import _ from 'lodash'

// 业务逻辑1m
console.log(_.join(['a', 'b', 'c'],'***'))

// 10W行业务逻辑
console.log(_.join(['a', 'b', 'c'],'***'))

// 打包之后main.js  2m
// 打包文件会很大，加载时间长
// 用户重新访问页面，又要加载2m的内容


// 第二种方式
// main.js 被拆分成lodash.js(1m) 和main.js(1m)
// 当业务逻辑发生变化时，只要加载main.js即可


// code splitting 代码分割
