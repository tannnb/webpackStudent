// 同步引入lodas模块
/*
import _ from 'lodash'
var element = document.createElement('div')
element.innerHTML = _.join(['a', 'b', 'c'],'-')
document.body.appendChild(element)
*/




// 异步方法

// 懒加载，通过import异步的去加载一个文件
async function getComponent() {
  const {default:_} = await import(/* webpackChunkName:"lodash" */ 'lodash')
  var element = document.createElement('div')
  element.innerHTML = _.join(['a', 'b', 'c'],'-')
  return element
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})

