;(function($){
	function Ball(cvs,options){
		this.cvs = cvs;
		this.ctx = cvs.getContext('2d');
		this.x = options.x||50; 
		this.y = options.y||50;
		this.r = options.r||50;
		this.color = options.color || this.rdColor();
		this.init();

	}
	Ball.prototype = {
		init: function () {
			//规定一个方向
			this.speedX = this.rdSpeed();
			this.speedY = this.rdSpeed();
			if(this.speedX == this.speedY && this.speedX==0){
				this.init();
			}
		},
		rdSpeed:function () {
			return Math.floor(Math.random()*3);
		},
		rdColor: function(){
			return `rgba(${rd255()},${rd255()},${rd255()})`;
		},
		draw: function(){
			this.ctx.beginPath();
			this.ctx.fillStyle = this.color;
			this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
			this.ctx.fill();
			this.ctx.closePath();
			//改变小球下一次的运行方向
			this.play();
		},
		play:function(){
			this.x += this.speedX;
			this.y += this.speedY;
			//x轴触及了右边缘
			if((this.x+this.r) >= cvs.width){
				this.x = cvs.width-this.r;
				this.speedX *= -1;
			}
			if((this.x-this.r) <= 0){
				this.x = this.r;
				this.speedX *= -1;
			}
			if((this.y+this.r) >= cvs.height){
				this.y = cvs.height-this.r;
				this.speedY *= -1;
			}
			if((this.y-this.r) <= 0){
				this.y = this.r;
				this.speedY *= -1;
			}
		}
	}
	function add(){

	}
	function sub(){

	}
	function rd255(){
		return Math.floor(Math.random()*256);
	}
	window.Ball = Ball;
})();
//这种封装能够防止全局变量污染