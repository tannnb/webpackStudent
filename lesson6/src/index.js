import logo from './logo.png'
import './index.scss'

var root = document.getElementById('root')
var img = new Image()
img.src = logo
img.classList.add('avatar')

root.append(img)
