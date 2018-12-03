var box = document.getElementById('box1');
var box2 = box.nextElementSibling || box.nextSibling;

box2.onclick = function(){
  box2.style.backgroundColor = 'blue';
}
