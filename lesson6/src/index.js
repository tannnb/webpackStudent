import logo from './logo.png'
import Styles from './index.scss'
import createAvatar from './createAvatar'


// 1. css-loader配置了 modules: true开启了模块化，执行下方函数，不会添加样式修饰
createAvatar()

var img = new Image()
img.src = logo
//2. 只有用Styles[name]  才有index.scss样式修饰
img.classList.add(Styles.avatar)
var root = document.getElementById('root')
root.append(img)
