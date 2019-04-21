import logo from './logo.png'
import Styles from './index.scss'
import Fonts from './font.scss'
import createAvatar from './createAvatar'


// 1. css-loader配置了 modules: true开启了模块化，执行下方函数，不会添加样式修饰
createAvatar()



var img = new Image()
img.src = logo
//2. 只有用Styles[name]  才有index.scss样式修饰
img.classList.add(Styles.avatar)
var root = document.getElementById('root')




// 打包字体文件，开启了css模块化
var oFont = document.createElement('i')
oFont.classList.add(Fonts["iconfont"],Fonts["icon-project"])




root.append(oFont)
root.append(img)
