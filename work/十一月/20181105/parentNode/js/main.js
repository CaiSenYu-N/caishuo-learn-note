var innerBox = document.getElementsByClassName('innerbox')[0];
var pNode = innerBox.parentNode;
var btn = document.getElementsByClassName('btn')[0];

btn.onclick = function(){
  //css中的属性写法在js中为驼峰命名法，如:background-color在js中应写为backgroundColor;
  innerBox.style.backgroundColor = 'pink';
  pNode.style.backgroundColor = 'green';
}

innerBox.onclick = function(){
  pNode.style.backgroundColor = 'red';
}
