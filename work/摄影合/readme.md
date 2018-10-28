## 设计稿问题
+ 首页版心问题
+ 

## 代码问题
+ 导航激活样式,激活active一般设置为li而不是内部标签,因为css无法通过内部标签选中父类元素
+ 样式设置

``` html
	
	1. 首先代码无法看懂当前标签的作用,第二不够灵活.
	2. 绝对性词汇! left/right/red/green/center  ===>  不适合当做class声明的.
		可以配合功能使用  xx-left/xx-right/ danger/ success / xx-center
	<a href="#">
		<span class="right"></span>
	</a>

	<a href="#" class="arrow-right">
		<span></span>
	</a>

```
+ 某一个块功能代码 都要尽量少的影响其他元素/位置. 代码的健壮性/可移植性.

+ 一个页面中公用的代码部分,要用一个盒子包括

``` html

	<div class="common-title">
		<div class="dec">
		  <span class="dec-line line-left"></span>
		  <span class="dec-word">Exhibittion of works</span>
		  <span class="dec-line line-right"></span>
		</div>
		<p class="show-word">作品展示</p>

	</div>

```

+ 豫ICP备11028596号 一般是链接 http://www.miitbeian.gov.cn/

+ logo直接用a标签代替
+ 代码优化:

```html
	<!-- 把共有的样式提取出来 是写css最需要提高的地方 -->
	<!-- 啰嗦 不够灵活 -->
	<p class="content-theme-sidebar-top">
	<p class="content-theme-sidebar-bottom">					
	<p class="content-theme-sidebar-left">
	<!-- 应该这么写 -->
	<p class="content-theme-sidebar aside-top">
	<p class="content-theme-sidebar aside-bottom">					
	<p class="content-theme-sidebar aside-left">
	<!-- 在比如 -->
	<a href="#" class="arrow-left"><</a>
	<a href="#" class="arrow-right">></a>

	<!-- 应该 -->
	<a href="#" class="arrow arrow-left"><</a>
	<a href="#" class="arrow arrow-right">></a>


```