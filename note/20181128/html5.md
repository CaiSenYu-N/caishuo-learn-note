### html5
#### html5新语法 ----->

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- <input type="text" disabled="disabled">
	<input type="text" readonly="readonly">
	<input type="checkbox" checked="checked"> -->
	<!-- html5可以这样写 -->
	<input type="checkbox" checked>
</body>
</html>
```

#### 语义化标签

> 以前看页面结构是通过class名字，h5可以使用header container footer section(块) hgroup...来命名
，但是不好用，容易弄混。更倾向于使用class命名；

#### input新类型

```
<form action="/abc">
		<!-- email、url、number、range、color -->
		<!-- 新增了5中type类型  -->
		<!-- 这个提示 一般会自己用ui实现  -->
		邮箱: <input type="email"> <br>
		网站: <input type="url"> <br>
		年龄: <input type="number"> <br>
		分数: <input type="range"> <br>
		颜色: <input type="color"> <br>
		<!-- 一般使用第三方的 ,1原生出现的晚  2保持风格统一 -->
		出生日期:  <input type="date">  <input type="month"><br>
		性别: <input type="text" list="data">
			 <datalist id="data">
				 <option>男</option>
				 <option>女</option>
				 <option>不详</option>
			</datalist>
		<input type="submit">
		<br>
		<meter  value="81"    min="0" max="100"  low="60"  high="80" ></meter><br>
		<progress value="22" max="100"></progress><br>
		<div class="progress">
			<div class="line"></div>
		</div>
	</form>
```


#### seo优化

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- 2017 9月份   百度清风算法:对于网站恶意堆叠关键词 会降级 -->
	<!-- seo优化 -->
	<!-- 网站描述,会在百度的搜索结果中现实 -->
	<meta name="description" content="河南郑州不凡学院开设UI设计培训课程和web前端开发课程。北京一线讲师现场教学，学习就等于工作。做自己擅长的事，分享知识与快乐！">
    <!-- 关键词: 百度搜索 哪些词 容易被抓取 -->
    <meta name="keywords" content="不凡学院,郑州UI培训,河南郑州UI设计培训,河南郑州前端开发培训,郑州H5培训,郑州WEB前端培训,郑州HTML5前端培训,郑州软件培训">
    <title>[官网] 不凡学院_河南郑州UI设计培训_河南郑州前端开发培训_郑州软件开发</title>
</head>
<body>
	<!-- 1. 关键词很重要  根据经验,title目前应该比keywords权重高
		 2. 注意清风算法
		 	a) 在标题<head>部分不能随意堆叠关键词
		 	b) img不能
		 	c) 可以在页面的内容的适当部分体现关键词
		 	d) logo 一定要写关键词
	 	 3. 注意网站链接(外链 内链)
	 	 4. 优质内容 原创内容 体现关键词
	 	 5. 更新 经常更新
	 -->

	<img src="" alt="不凡学院,郑州UI培训,河南郑州UI设计培训,河南郑州前端开发培训,郑州H5培训,郑州WEB前端培训,郑州HTML5前端培训,郑州软件培训">
</body>
</html>
```

#### 多媒体

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 如果audio这个标签不支持 那么会现实内容 -->
	<!-- <audio src="music/小手拍拍.mp3" autoplay controls loop preload>不支持</audio> -->
	<audio autoplay controls loop preload>
		<source src="music/小手拍拍.mp3">
		<source src="music/小手拍拍.wav">
		<source src="music/小手拍拍.ogg">
	</audio>

	<video class="video" src="music/movie.ogg" width="400" height="300" controls></video>
	<video controls>
		<source src="music/movie.ogg" type="">
		<source src="music/movie.mp4" type="">
		您的浏览器不支持
	</video>
	<script>

		var vd = document.getElementsByClassName('video')[0];
		vd.setAttribute('autoplay','autoplay');
	</script>
</body>
</html>

```

#### dom扩展

* querySelector('同class选择器')  选择单个
* querySelectorAll('同class选择器')  选择一个集合

#### classList

el.classList.add();添加一个class
el.classList.remove();移除某一个class
el.classList.toggle();切换一个class的存在/消失
el.classList.contains();判断是否存在某一个class

#### 数据对象
> 自定义属性 可以把一些数据作为标签的属性存储到标签中，自定义属性都是以data-xxxx
