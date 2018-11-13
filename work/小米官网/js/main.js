var userShopEl = document.getElementsByClassName('user-shop')[0];
var shopDetailEl = document.getElementsByClassName('shop-detail')[0];
var searchEl = document.getElementsByClassName('search')[0];
var searchInputEl = document.getElementsByClassName('search-text')[0];
var lisEl = document.getElementsByClassName('con-nav')[0].children;
var proListBlock = document.getElementsByClassName('pro-hide')[0];
var proListDetail = document.getElementsByClassName('pro-hide-c')[0];
var targetEl = document.getElementsByClassName('imgs')[0];
var liW = targetEl.children[0].offsetWidth;
var lis = targetEl.children;
var timer = null;
var count = 0;

initNavHover(lisEl,proListBlock);

// 购物车
userShopEl.onmouseover = function(){
  shopDetailEl.style.display = 'block';
}

userShopEl.onmouseout = function(){
  shopDetailEl.style.display = 'none';
}

// 搜索框
searchInputEl.onfocus = function(){
  addClass(searchEl,'active');
}

searchInputEl.onblur = function(){
  delClass(searchEl,'active');
}

// 隐藏产品
function initNavHover(lisEl,target){
  for(var i=0; i<lisEl.length; i++){
    lisEl[i].index = i;
    lisEl[i].onmouseover = function(){
      addClass(target,'active');
      initNavData(this.index,navData,proListDetail);
    }
    lisEl[i].onmouseout = function(){
      delClass(target,'active');
    }
  }
}

function initNavData(index,data,el) {
	console.log(index);
	var currentData = data[index];
	var str = '';
	for(var i=0; i<currentData.length; i++){
    console.log(str);
    // <div class="pro-hide-detial">
    //   <p class="pro-hide-title">新品</p>
    //   <a href="#" class="pro-hide-img">
    //     <img src="imgs/pc_1.png" alt="">
    //   </a>
    //   <a href="#" class="pro-hide-name">小米MIX 3</a>
    //   <p class="pro-hide-price">3200元起</p>
    // </div>
		var titleBtn = currentData[i].title?'<p class="pro-hide-title">'+currentData[i].title+'</p>':'<p class="pro-hide-title" style="visibility: hidden;"></p>';
		str += '<div class="pro-hide-detial">'+titleBtn+'<a href="#" class="pro-hide-img">'
			+ '<img src="'+currentData[i].img+'" alt=""></a>'
			+ '<a href="#" class="pro-hide-name">'+currentData[i].name+'</a>'
			+ '<p class="pro-hide-price">'+currentData[i].price+'</p></div>';
	}
	el.innerHTML = str;
  console.log(str);
}

    // 轮播部分
setInterval(function(){
	count ++;
	if(count == lis.length){
		count = 0;
		targetEl.style.left = 0;
	}else{
		var target = -1* count * liW;
		animate(targetEl,target);
	}
	console.log(count+'次开始...'+new Date().getSeconds());
},4000);


function animate(el,target) {
// 开始前 应该清楚之前的定时器
  clearInterval(timer);
  timer = setInterval(function(){
    var step = target>el.offsetLeft?20:-20;
    //增加步长
    el.style.left = (el.offsetLeft+step)+'px';
    //计算距离目标的差值
    var cha = target-el.offsetLeft;
    //判断停止条件
    if(Math.abs(cha)<Math.abs(step)){
      //剩下的差值还不够一个步长 直接结束
      el.style.left = target+'px';
      //停止定时器
      clearInterval(timer);
      console.log('移动到'+target+'结束...');
      }
    },17);
  }
