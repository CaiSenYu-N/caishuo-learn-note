## less
>less语法的解析 依赖于 nodejs,nodejs根据less的命令 进行的解析

### 安装
```shell
	// 通过npm全局安装 less的解析器
	npm install -g less
	// 判断less是否安装成功
	lessc -v
```
	

```shell
	// 编译结果
	$ lessc styles.less > styles.css
```

### less常用的知识点
+ 定义变量 @danger:red
+ 定义混合
	- 正常混合,跟类一样   .border
	- 带参数的混合   .radius(@v){ border-radius:@v}
	- 带默认参数的混合和@arguments    .box-shadow:(@x:5px,@y:5px,@blur:10px,@color:#f00){
		box-shadow:@arguments;
	}	
+ 嵌套及嵌套规则
 	- &符号,返回上一级
+ 作用域一般使用id选择器包括  #test{...}
+ @import "mixin.less";  可以把外部文件引入...

### 问题
> 每次写完less,需要编译才能看到预览,太麻烦 less本身没有watch功能,一般配合gulp或者webpack相应的配置文件来实现实时监听预览的功能.
这里可以通过安装 https://www.npmjs.com/package/less-watch-compiler来解决

```shell
	// 通过监听 找到less目录  输出到style目录 相应的文件
	less-watch-compiler less style 

```


## sass
> sass依赖于ruby,所以安装之前需要先安装ruby的执行环境.

### sass安装
```shell
	// sass的执行工具
	gem install sass
	// sass的代码处理压缩方式
	gem install compass

```

### 掌握知识点
+ 定义变量 $danger:
+ 嵌套规则  同less
+ 混合  @mixin xx{  } ;使用  @include xx;
+ @import 同less
+ 函数  @function(){ } 语法基本跟js相同,写法遵循sass基本语法


## 作业:
>实现不凡官网移动端要求:

+ 使用sass实现
+ 使用函数实现px==>rem的转换
+ 实现页面基本的js特效,比如轮播,动画,弹窗等
+ 其他相同类似元素可以省略...
+ 时间:一天.

