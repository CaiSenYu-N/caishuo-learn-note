// 定义左右按钮
var wrap = document.getElementsByClassName('wrap')[0];
var next = document.getElementsByClassName('next')[0];
var pre = document.getElementsByClassName('pre')[0];

next.onclick = function(){
  nextImg();
}

pre.onclick = function(){
  preImg();
}

function nextImg(){
  // dom.style.xx ==> 行内样式
  // 外部样式 需要调用 computedStyle
  var newLeft = parseInt(wrap.style.left)-600;
  wrap.style.left = newLeft + 'px';
}

function preImg(){
  var newLeft =  parseInt(wrap.style.left)+600;
  wrap.style.left = newLeft + 'px';
}
