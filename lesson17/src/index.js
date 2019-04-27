import test from './test'
console.log(test)
function getComponent() {
  // 魔法注释，这样打包的时候就不会是0.js 这种类型的了，而是webpackChunkName配置的名称
  // 需要安装@babel/plugin-syntax-dynamic-import
  // 需要在.babelrc中配置plugins
  // 这个时候是vendors~lodash.js  如果要去掉vendors的话，需要改变splitChunks的配置，看配置文件
  // cacheGroups: {
  //         vendors: false,
  //         default: false
  //       }
  return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default:_}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['a', 'b', 'c'],'-')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})
