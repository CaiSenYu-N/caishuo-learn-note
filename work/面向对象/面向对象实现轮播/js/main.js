function Carousel($ct) {
  // 当new一个对象的时候调用 初始化 事件绑定 自动轮播
  this.init($ct)
  this.bind()
  this.autoPlay()
}

// 原型挂载多个方法
Carousel.prototype = {
  // 初始化
  init:function($ct){
    this.$ct = $ct
    this.$imgCt = this.$ct.find('.img-ct')
    this.$imgs = this.$ct.find('.img-ct > li')
    this.$preBtn = this.$ct.find('.pre')
    this.$nextBtn = this.$ct.find('.next')
    this.$bullets = this.$ct.find('.bullet li')

    this.imgWidth = this.$imgs.width()
    this.imgCount = this.$imgs.length
    this.index = 0
    this.inAnimate = false

    // 在最前、最后分别添加最后一张、第一张图片
    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())
    this.$imgCt.width((this.imgCount + 2) * this.imgWidth)
    this.$imgCt.css('left', -this.imgWidth)
  },

// <-------------绑定事件
  bind: function(){
    // 测试已进入该函数体
    // console.log(this.$imgCt)
    var _this = this;

    // 鼠标移入轮播停止
    this.$imgCt.mouseenter(function(){
      console.log('fff')
      _this.stopAuto()
    })

    // 鼠标离开轮播开启
    this.$imgCt.mouseleave(function(){
      _this.autoPlay()
    })

    // 点击按钮调用上一张/下一张
    this.$nextBtn.on('click', function() {
      _this.playNext(1)
    })
    this.$preBtn.on('click', function() {
      _this.playPre(1)
    })

    // 点击底部状态切换图片
    this.$bullets.on('click', function(){
      var index = $(this).index()
      if(_this.index > index){
        _this.playPre(_this.index - index)
      }else{
        _this.playNext(index - _this.index)
      }
    })
  },
  // 绑定事件结束 ------------>

  // 上一张
  playNext: function(len){
    if(this.isAnimate) return
    this.isAnimate = true
    var _this = this
    this.$imgCt.animate({
      left: '-=' +this.imgWidth*len
    },function(){
      _this.index += len
      if(_this.index === _this.imgCount){
        _this.$imgCt.css('left',-_this.imgWidth)
        _this.index = 0
      }
       _this.setBullet()
       _this.isAnimate = false
    })
  },

  // 下一张
  playPre: function(len){
    if(this.isAnimate) return
    this.isAnimate = true
    var _this = this
    this.$imgCt.animate({
      left: '+=' +this.imgWidth*len
    },function(){
      _this.index -= len
      if(_this.index < 0){
        _this.$imgCt.css('left',-_this.imgWidth * _this.imgCount)
        _this.index = _this.imgCount - 1
      }
       _this.setBullet()
       _this.isAnimate = false
    })
  },

  // 底部状态
  setBullet: function(){
    this.$bullets.eq(this.index).addClass('active')
        .siblings().removeClass('active')
  },

  // 开启自动播放
  autoPlay: function(){
    var _this = this
    this.autoClock = setInterval(function(){
      _this.playNext(1)
    },2000)
  },

  // 停止播放
  stopAuto: function(){
    clearInterval(this.autoClock)
  }
}

new Carousel($('.carousel'))
