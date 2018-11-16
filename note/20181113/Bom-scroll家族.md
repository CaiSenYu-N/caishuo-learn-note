### scroll家族

+ scrollWidth/scrollHeight
 - 元素的宽高，不包括border,包括padding;
 - 元素内容如果超出。获取的是内容实际宽度/高度；
 - 即使元素设置overflow: hidden，依然能够获取到内容的宽度/高度；

+ scrollTop/scrollLeft
 - 获取元素被卷进去的高度/left，值为number类型；
 - 读写属性，可以重新赋值，但值不应加px，应该为number类型；--
    --document.documentElement.scrollTop =intvalue;

+ scroll兼容问题
```javascript
 // 注意收集总结"代码块" , 即使是收集代码块,尽量也能看懂.
 var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
 var top= document.documentElement.scrollTop ||document.body.scrollTop;

```

+ onscroll用于监听浏览器滚动事件，那怕滚动1px也能监听到；

+ window.onscrollTo(X,Y)--->浏览器定位到页面的指定位置；

+ 骨架的获取：
html: document.documentElement;
title: document.title = 'XX';
body: document.body;
head: document.head;

### 案例
+ 固定导航栏
 - 高度100%的实现；
 - element.offsetHeight 元素的高度；
 - window.scrollTo(0,Y);
 - document.documentElement.scrllTop = value;
 - 缓动函数的修改

+ 回到头部小火箭
 - 获取被卷进去的高度；
 - window.onscroll;
 - window.onscrollTo(0,Y);
 - document.documentElement.scrollTop = value;
 - 缓动函数的修改

 + 广告跟随
 - element.offsetTop距离上一个定位元素或（body）的距离；
 - 获取被卷进去的高度；
 - 缓动函数的修改；
