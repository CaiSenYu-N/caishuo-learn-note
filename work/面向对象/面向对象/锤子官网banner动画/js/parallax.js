;(function(){
	function Parallax($pNode,maxW,maxH,maxZ,maxDeg){
		this.$banner = $pNode;
		this.maxW = maxW;
		this.maxH = maxH;
		this.maxZ = maxZ;
		this.maxDeg = maxDeg;
		//自定义的入口函数
		this.init();
	}
	
	Parallax.prototype = {
		init:function(){
			// 大盒子中心点坐标
			this.centerX = this.$banner.offset().left+this.$banner.width()/2;
			this.centerY = this.$banner.offset().top+this.$banner.height()/2;
			//确定是谁需要变换  查 children  find 区别
			this.subNodes = this.$banner.find('[data-parallax]');
			
			this.mouseenterEvent(this);
			this.mousemoveEvent(this);
			this.mouseleaveEvent(this);
		},
		mouseenterEvent:function(that){
			// 思考: 怎么才能知道到底哪些才是需要被加特效的元素呢?
			// $('.banner>.title').css('transition','none');
			// $('.banner>.text').css('transition','none');
			this.$banner.on('mouseenter',function(){
				that.subNodes.each(function(index,item){
					$(item).css('transition','none');
				})
			})
		},
		mousemoveEvent:function(that){
			// var that = this;
			this.$banner.on('mousemove',function(e){
				// chaX/chaY 不需要再其他函数调用 所以无需变为全局变量(对象属性)
				var chaX = that.centerX-e.pageX;
				var chaY = that.centerY-e.pageY;
				// 当前x差值 距离中心点 比例
				var blX = chaX/(that.$banner.width()/2);
				var blY = chaY/(that.$banner.height()/2);
				
				var degY = -1*that.maxDeg*blX;
				var degX = that.maxDeg*blY;
				// 问题 怎么才能知道哪些元素需要开启视差效果呢?
				//需要被变换的子类元素
				// 在回调函数里  this一般会发生变换
				that.subNodes.each(function(index,item){
					//获取自定义属性的 变换幅度 范围 0~1 ,0 不变换,1 完全变换  粘性
					var bl = $(item).data('parallax');
					// false 则不反转 true为反转    
					var reverse = $(item).data('reverse')?1:-1;
					$(item).css('transform','translateX('+that.maxW*blX*bl*reverse+'px) translateY('+that.maxH*blY*bl*reverse+'px) translateZ('+that.maxZ*blX*blY*bl*reverse+'px) rotateX('+degX*bl*reverse+'deg) rotateY('+degY*bl*reverse+'deg)');
				})
			})
		},
		mouseleaveEvent:function(that){
			// var that = this;
			this.$banner.on('mouseleave',function(){
				that.subNodes.each(function(index,item){
					$(item).css('transition','all ease .4s');
					$(item).css('transform','translateX(0) translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)');
				})
			})
		}
	}
	// window
	window._ = Parallax;
})();
