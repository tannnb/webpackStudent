import './index.css'


var oBtn = document.createElement('button')
oBtn.innerText = '点击'
document.body.appendChild(oBtn)

oBtn.onclick = function () {
  var oItem = document.createElement('div')
  oItem.innerText = 'item'
  document.body.appendChild(oItem)

}

