### BOM笔记

#### offset家族(只读样式，不可设置)

1、offsetWidth、offsetHeight

  * 获得元素宽度(包含边框和padding)
  * 获取到的结果为number类型；

2、offsetLeft、offsetTop

  * 获取元素左边距离（获取元素左边和上部距离，表现形式与position类似，如果父元素有定位，相对父元素求距离，如果父元素没有设置定位，会一直往上找，直到找到body,求出的数值不包含边框）；

3、offsetParent

  * 获取元素的父元素，找到他有定位属性的父元素，没有的话，找到body；

4、obj.style.left

  * 获取元素左边距离（只能获取到行内样式）
  * 获取到的结果为字符串类型{xxpx}；
