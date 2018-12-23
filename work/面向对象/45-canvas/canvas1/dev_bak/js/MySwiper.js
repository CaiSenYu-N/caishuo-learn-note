/**
* 自动轮播的封装 依赖于jq
**/
;(function(){
	function MySwiper(eleStr,data){
		//如果是一个jq对象  一般命名的时候 加$xx
		// 什么时候给Myswiper添加属性 以及添加什么属性?
		// 构造函数的形参,必须赋值给对象的属性  才能在原型对象中调用
		this.$ele = $(eleStr);
		this.imgs = data;
		//一个突破的宽度
		this.offsetW = this.$ele.width();
		//计数器
		this.count = 0;
		this.timer = null;
		this.init();
	}
	// 在原型对象里的方法 可以被所有的 实例对象共享
	MySwiper.prototype = {
		//一般都需要一个init方法.
		init:function(){
			this.bindHtml();
			this.autoPlay();
			this.bindHover();
		},
		bindHtml:function(){
			var str = '<ul class="swiper">';
			for(var i = 0 ; i < this.imgs.length ; i++){
				str += '<li class="slide"><img src="img/'+this.imgs[i]+'" alt=""></li>';
			}
			str += '</ul>';
			//插入页面
			this.$ele.html(str);
			//重新设置.swiper的宽度
			this.$ele.children('.swiper').width(this.$ele.width()*this.imgs.length);
			//重新设置图片宽度
			this.$ele.children('.swiper .slide').width(this.$ele.width());
			// $('.banner .swiper').width($('.banner').width()*imgs.length);
		},
		autoPlay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.$ele.children('.swiper').animate({
					left: (-1)*that.offsetW*that.count,
					},
					'fast', function() {
					that.count ++;
					if(that.count == that.imgs.length){
						clearInterval(that.timer);
					}
				});

			}, 2000);
		},
		bindHover:function(){
			var that = this;
			this.$ele.hover(function(){
				console.log('ddd')
				clearInterval(that.timer);
			},function(){
				//离开的时候 开启轮播
				that.autoPlay();
			})
			// this.$ele.on('mouseenter',function(){
			// 	clearInterval(that.timer);
			// })
		},
		bindArr:function(){

		},
		bindDott:function(){

		}
		// ....
	}
	//动态的给window对象添加属性
	window.MySwiper = MySwiper;
	
})();

