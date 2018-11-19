## scroll家族

#### scrollWidth/scrollHeight
	* 元素的宽高,不包括border,但是包括padding.
	* 元素的内容如果超出,获取的是元素内容的实际高度.
	* 即使元素overflow:hideen,依然能获取元素内容高度.

#### scrollTop / scrollLeft
	* 获取元素被卷进去的高度/left,值为number类型.
	* 读写属性. 可以被重新赋值,但是应该是number类型(不能带px).document.documentElement.scrollTop =intvalue;


#### scrollTop兼容问题
```javascript
	// 注意收集总结"代码块" , 即使是收集代码块,尽量也能看懂.
	var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	var top= document.documentElement.scrollTop ||document.body.scrollTop;

```
* onscroll 用于监听浏览器滚动事件,哪怕滚动1px也会触发.

* window.scrollTo(x,y); 浏览器定位到页面的固定位置.

#### 骨架标签获取

* html  document.documentElement
* title document.title = 'xx'
* body  document.body
* head  document.head


## 案例
#### 固定导航栏  
	* 页面100%高度的实现
	* element.offsetHeight 元素的高度
	* window.scrollTo(0,x);
	* document.documentElement.scrollTop = value;
	* 缓动函数的修改

#### 返回头部火箭
	* 获取被卷进去的高度
	* window.onscrll
	* window.scrollTo(0,x);
	* document.documentElement.scrollTop = value;
	* 缓动函数的修改

#### 广告跟随
	* element.offsetTop 距离上一个定位元素(body)的距离
	* 获取被卷进去的高度
	* 缓动函数修改
