var btn = document.getElementsByClassName('btn')[0];
var mask = document.getElementsByClassName('mask')[0];

btn.onclick = function(){
  mask.style.display = 'block';
  this.style.display = 'none';
}

mask.onclick = function(){
  this.style.display = 'none';
  btn.style.display = 'block';
}
