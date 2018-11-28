### css3动画

#### 渐变
linear-gradient linear-gradient linear-gradient linear-gradient

```
background: linear-gradient(to right bottom,red 60%,green,yellow,purple);
兼容写法：
/*渐变的兼容写法 方向是相反的  而且不带to*/
/*background: -webkit-linear-gradient(left top,red 60%,green,yellow,purple);*/
```

#### 径向渐变
radial-gradient radial-gradient radial-gradient

```
background: radial-gradient(10% 20%,yellow,red,green);
<!-- 兼容写法 -->
background: -webkit-radial-gradient(10% 20%,yellow,red,green);
```

#### 背景图片属性增强

background-size: cover; 自适应撑满 会有溢出   常用
background-size: contain; 完全显示  但可能会留白

#### 过渡效果

> 过渡效果本身不会自动触发,必须有事件

```
/*过渡的属性*/
transition-property:all;
/*过渡的持续时间*/
transition-duration: .4s;
/*过渡的时间曲线*/
/*transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-
bezier(n,n,n,n);*/
transition-timing-function: cubic-bezier(.59,-1.07,1,1.75);
/*过渡的延迟时间*/
transition-delay:1s;

```

* 简写：
```
transition: all .4s cubic-bezier(.59,-1.07,1,1.75)  1s;
```

#### 2d变换
```
transform: translate(100px,100px) scale(2) rotate(720deg);
```

translate 方向
scale 倍数
rotate 角度
