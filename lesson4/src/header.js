function Header () {
  var dom = document.getElementById('root')
  var header = document.createElement('div')
  header.innerText = 'header'
  dom.append(header)
}

// 使用ES Module的形式导出，其他文件才能进行引入
export default Header
