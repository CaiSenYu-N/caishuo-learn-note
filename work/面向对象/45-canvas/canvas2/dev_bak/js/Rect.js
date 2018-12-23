(function(){
	function Rect(ctx,x,y,w,h){
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	Rect.prototype = {
		fill:function(color){
			this.ctx.beginPath();
			this.ctx.fillStyle = color;

			this._draw();

			this.ctx.fill();
			this.ctx.closePath();

			//保证链式调用
			return this;
		},
		stroke:function(color){
			this.ctx.beginPath();
			this.ctx.strokeStyle = color;

			this._draw();
			
			this.ctx.stroke();
			this.ctx.closePath();

			return this;
		},
		//当用户调用scale的时候 并没有真正的缩放 而是设置了缩放的属性
		scale:function(scaleX,scaleY){
			// 把缩放的属性赋给  Rect对象
			this.scaleX = scaleX;
			this.scaleY = scaleY;
			return this;
		},
		translate:function(x,y){
			this.translateX = x;
			this.translateY = y;
			return this;
		},
		rotate:function(rad){
			this.rad = rad;
			return this;
		},
		_draw:function(){
			this.ctx.save();
			// 如果重新设置了缩放 就使用新值 不然就使用1
			this.ctx.scale(this.scaleX||1,this.scaleY||1);
			this.ctx.translate(this.translateX||0,this.translateY||0);
			this.ctx.rotate(this.rad||0);
			//绘制路径
			this.ctx.rect(this.x,this.y,this.w,this.h);
			this.ctx.restore();

		}

	}

	window.Rect = Rect;

})();