// 如果在打包一个ui组件库或者类库的时候全局引入@babel/polyfill会污染全局
// import '@babel/polyfill'

const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]

arr.map(item => {
  console.log(item)
})
