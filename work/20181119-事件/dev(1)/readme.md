# 三大家族总结

## offset家族
### 基础知识
+ offsetLeft/offsetTop  
	- 盒子距离上一个定位的父类(body)的左(上)边距,单位number类型
	- 父类的border不算
+ offsetWidth/offsetHeight  
	- 盒子宽高 包含盒子border+ padding
+ offsetParent
	- 具有定位元素的父类,如果没有找body
+ 和style.width/height/left/top区别
	- 数据类型
	- 不可读写

### 案例
+ 闪现动画
+ 匀速动画封装
+ 匀速轮播
+ 任意元素距离body的边距

## scroll家族
### 基础知识
+ scrollWidth/scrollHeight
	- 包含内容部分,不包含border
	- 如果内容超出,只包含上不padding,不包含底部padding.

+ scrollLeft/scrollTop
	- 可被读写!!!
	- 被卷进去的部分,可以应用于body,也可以应用于标签元素
	- 兼容写法: 

		```javascript
			 //  window.pageYOffset 只有高级浏览器才具有
			var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
			var top= document.documentElement.scrollTop ||document.body.scrollTop

		```
+ onscroll事件
	- 监听浏览器对象,即使滚动1px,也能触发.

+ window.scrollTo(x,y)
	- 浏览器跳到固定坐标(x,y),一般x=0

+ 骨架标签获取
	- html  document.documentElement
	- title  设值: document.title ='xx'
	- head  
	- body

### 案例
+ 缓动公式
+ 缓动轮播
+ 无限轮播(循环轮播)
+ 固定导航栏
+ 返回头部
+ 广告跟随(代码块)

## Event对象
### 基础知识
+ event是什么
	- 是触发的事件对象本身,事件的三要素:元素 什么事件(event)  怎么处理
+ 获取方式
	- 高级浏览器,function(event){event}
	- IE浏览器  window.event
	- 兼容写法:   var e = event || window.event;
+ 属性
	- pageX/pageY  鼠标触发事件(click/onmousemove/...)的位置距离页面左/顶的距离.IE浏览器没有该属性.
	- clientX/clientY  相对浏览器可是区域的距离,跟浏览器大小有关,和位置没有关系
	- screenX/screenY  相对屏幕的坐标
	- 兼容: pageX = e.clientY + window.document.scrollTop(查兼容)
+ onmouseMove
	- 当鼠标移动的时候触发

+ onmouseDown/onmouseUp
	- 鼠标按下/松开触发

### 案例
+ 拖拽 


### markdown
	+ ctrl+shift+p 打开命令窗口 
	+ install package 打开安装目录
	+ markdownpreview  查找markdown预览插件(如果已经安装,查找无结果)
	+ 如果没有查到,退出输入 	ctrl+shift+p 打开命令窗口 ==> list package ==> 查看是否安装
	+ 已经安装: crtl+shift+p ==> markdown 根据提示选择

