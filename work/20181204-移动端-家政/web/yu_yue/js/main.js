resizeFont();
//当屏幕宽度发生变化的时候 触发
window.onresize = function(){
	resizeFont();
}
// 按照设计稿的1/10 ; 设计稿750px ==>  75px;
// 1.求设备的html根节点的基数(宽度的1/10) 在750px的设备上开发
function resizeFont() {
	document.documentElement.style.fontSize = window.innerWidth/10+'px';
}

var hour = document.querySelector('.hour');
var add = document.querySelector('.add');
var down = document.querySelector('.down');
var count =1;
console.log(count);

add.onclick = function(){
	count += 1;
	hour.innerText = count + '小时';
	console.log(count);
}

down.onclick = function(){
	count-=1;
	count<1?count=1:count;
	hour.innerText = count + '小时';
	console.log(count);

}
