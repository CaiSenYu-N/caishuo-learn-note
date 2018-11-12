var userShopEl = document.getElementsByClassName('user-shop')[0];
var shopDetailEl = document.getElementsByClassName('shop-detail')[0];
var searchEl = document.getElementsByClassName('search')[0];
var searchInputEl = document.getElementsByClassName('search-text')[0];
var lisEl = document.getElementsByClassName('con-nav')[0].children;
var proListBlock = document.getElementsByClassName('pro-hide')[0];
var proListDetail = document.getElementsByClassName('pro-hide-c')[0];

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
