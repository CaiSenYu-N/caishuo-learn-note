### jquery

```

window.onlode =
$(document).ready(function(){});
$(function(){});  推荐

```

* jquery对象.css('attr','value') jquery具有css方法，方便设置样式；

### 新的选择器

'+'紧邻的下一个元素；
'~'该元素后面所有紧邻的同级元素；
'>'孩子节点，不包括兄弟节点；

### 过滤器

:eq(index) 选择下标为index的元素；
:gt(index) 选择从下标index开始的大于index的元素；
:lt(index) 选择从下标index开始的小于index的元素；
:odd 选择所有序号为奇数行的元素；
:even 选择序号为偶数行的元素
:first 选择匹配的第一个元素；
:last 选择匹配的最后一个元素；

### 筛选选择器

find(selector) 查找指定元素的所有后代元素，包含子孙；
children() 查找指定元素的直接子元素，（亲儿子元素）；
siblings() 查找所有兄弟元素，不包括自己；
parent() 查找父元素（亲的）；
eq（index）查找指定元素的第index个元素，index是索引号，从0开始；

### mouseover事件和mouseenter事件的区别

mouseover/mouseout事件，鼠标经过时会触发多次，每遇到一个子元素就会触发一次；
mouseenter/mouseleave事件，鼠标经过的时候只会触发一次；（大多数场景使用）
