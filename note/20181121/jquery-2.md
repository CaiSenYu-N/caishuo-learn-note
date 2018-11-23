### jqueryDOM操作：

1、设置样式：
.css()
* 获取样式；
* 设置单个属性样式；
* 设置多个属性样式 参数为json格式的对象或者对象的格式；

2、属性attr()
* 获取属性；
* 设置属性；
* removeAttr();

3、取值，设置值：
* text();
* html();
* val();

4、操作类
* addClass() 向被选元素添加一个或者多个类；
* removeClass() 从被选元素删除一个或者多个类；
* toggleClass() 从被选元素进行添加/删除类的切换操作；
* hasClass() 判断是否拥有某个类；

5、DOM查找
* siblings() 除自己外的所有兄弟节点；
* next() 下一个兄弟元素；
* nextAll() 后面的所有兄弟元素；
* nextUntil() 后面所有的兄弟直到...
* prev() 前面的第一个兄弟；
* prevAll() 前面所有的兄弟；
* prevUntil() 前面所有的兄弟直到...
* parent() 父类元素；
* parents() 所有的父类元素；
* parentUntil() 父类元素直到...为止；

### jquery动画
##### show方法(让匹配的元素展现出来)
* $('xx').show()
* $('xx').show() show:600ms、normal：400ms、fast：200ms
* $('xx').show(2000,function(){});
* $('xx').show()

##### hide方法(让匹配的元素隐藏)
用法同show方法；

##### 滑入动画效果
* $('xx').slideDown(speed,callback);
注意：省略参数或者传入不合法的字符串，那么则使用默认值：400毫秒（同样适用于fadeIn/slideDown/slideUp）
* $('xx').slideUp();
* 滑入滑出效果切换  $('xx').slideToggle(speed,callback);

##### 淡入淡出动画
* $('xx').fadeToggle('fast',function(){});

##### 改变透明度到某个值
* $('xx').fadeTo(1000,.5) tips:0-1;

### 自定义动画
tips: 所有能够执行动画的属性必须只有一个数字类型的值；
$(selector).animate(style,speed,easying,callback);
第一个参数表示：要执行动画的CSS属性（必选）
第二个参数表示：执行动画时长（可选）
第三个参数表示：动画执行完后立即执行的回调函数（可选）

### 停止动画
* stop();
作用：停止当前正在执行的动画
为什么要停止动画？如果多个动画同时作用于一个单位上面，那么多个动画会进入排队。后一个动画的执行必须等前面的执行完毕
* stop(stopAll,goToEnd);
* stopAll  是否全部停止，默认false 停止队列中所有的动画
* goToEnd  是否将停止的动画  停止在当前动画的最后一个状态   

### jquery节点操作
* 创建元素
var node = $('#box1').html('<li>我是li标签</li>'); 最常用到；

* 添加元素
-append()
参数$node 或者字符串标签
作用：在被选元素内部的最后一个子元素（或内容）后面插入内容（存在或者创建出来的元素都可以）
tips: 如果是页面中存在的元素，那么调用append()后，会把这个元素放到相应的目标元素里面去；但是，原来的这个元素，就不存在了。如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去。

-appendTo()
作用： 把$(selector)追加到node中去
$(selector).appendTo(node);

-prepend()
作用： 在元素的第一个子元素前面追加内容或者节点
$(selector).prepend(node);

-------区分-------
-after()
作用： 在被选择元素之后，作为兄弟元素插入内容或者节点
$(selector).after(node);

-before()
作用： 在被选择元素之前，作为兄弟元素插入内容或者节点
$(selector).before(node);

* 清空元素
$(selector).empty();
$(selector).html('');
$(selector).remove();会把对象也干掉

* 复制元素
$(selector).clone();

### 操作from表单
.prop()

### 尺寸位置操作（bom）

* 高度和宽度的操作
-height() 取值为number类型  可直接参与运算
-height(200)
-width()
-width(100)

* 坐标值操作
-offset()
作用： 获取或者设置元素相对于文档的位置；
之前的offsetLeft，指有定位的父类元素 相对于有定位的父类元素的距离；
$(selector).offset();
$(selector).offset({left:100,top:150});
tips:设置offset之后，如果元素没有定位（默认值:static）,则被修改为relative;

-position()
作用： 获取相对于其最近的具有定位的父元素的位置。
$(selectop).position()
只能获取值，不能设置；

-scrollTop()
作用： 获取或者设置元素垂直方向滚动的位置；
$(selector).scrollTop();
$(selector).scrollTop(100);

-scrollLeft()
作用： 获取或者设置元素水平方向滚动的位置
$(selector).scrollLeft(100)；
