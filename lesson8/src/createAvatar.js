import logo from './logo.png'
function createAvater () {
  var img = new Image()
  img.src = logo
  img.classList.add('avatar')
  var root = document.getElementById('root')
  root.append(img)
}
export default createAvater
