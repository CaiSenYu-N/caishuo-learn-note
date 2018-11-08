### DOM生疏知识点笔记

> DOM:  Document Object Model(文档对象模型);

#### 父节点：

* parentNode(调用者就是节点。一个节点只有一个父节点。调用方式就是节点.parentNode)

#### 兄弟节点： nextSibling(调用者是节点)

！！！ ==> IE678中指下一个元素节点（标签、注释）。在火狐谷歌IE9+(标准)以后都指的是下一个节点（包括空文档和换行节点）。

* nextElementSibling：在火狐谷歌IE9都指的是下一个元素节点。
总结：在IE678中用nextSibling，在火狐谷歌IE9+  ie10以后用nextElementSibling
兼容写法：nextEle =节点.nextElementSibling || 节点.nextSibling

* previousSibling：调用者是节点。IE678中指前一个元素节点（标签）。在火狐谷歌IE9+以后都指的是前一个节点（包括空文档和换行节点）。

* previousElementSibling：在火狐谷歌IE9都指的是前一个元素节点。
总结：在IE678中用previousSibling，在火狐谷歌IE9+以后用previousElementSibling。

#### 单个子节点：

* firstChild：调用者是父节点。IE678中指第一个子元素节点（标签）。在火狐谷歌IE9+以后都指的是第一个节点（包括空文档和换行节点）。

* firstElementChild:在火狐谷歌IE9都指的第一个元素节点。

* lastChild:调用者是父节点。IE678中指最后一个子元素节点（标签）。在火狐谷歌IE9+以后都指的是最后一个节点（包括空文档和换行节点）。

* lastElementChild：在火狐谷歌IE9都指的最后一个元素节点。

#### 所有子节点

* childNodes：它是标准属性，嫡出，它返回指定元素的子元素集合，包括HTML节点，所有属性，文本节点   （他还是W3C的亲儿子 ）
火狐 谷歌等高本版会把换行也看做是子节点
nodeType==1时才是元素节点(标签)
      nodeType  ==  1  表示的是元素节点   记住   元素就是标签
      nodeType  ==  2  表示是属性节点   了解
      nodeType  ==  3  是文本节点   了解
	   nodeType = 8   注释  了解
* children：非标准属性，庶出，它返回指定元素的子元素集合。
但它只返回HTML节点，甚至不返回文本节点，虽然不是标准的DOM属性，但它和innerHTML方法一样，得到了几乎所有浏览器的支持。
children在IE6/7/8中包含注释节点
在IE678中，注释节点不要写在里面。

#### 节点操作

* 创建节点

```

document.createElement()

```

* 插入节点

```

父节点.appendChild
父节点.insertBefore(要插入的节点，参考节点)

```

* 删除节点

```

父节点.removeChild（子节点）。
节点自己删除自己：
不知道父级的情况下，可以这么写：node.parentNode.removeChild(node)

```

* 复制节点

```

oldNode.cloneNode（true）
想要复制的节点调用这个函数cloneNode()，得到一个新节点。 方法内部可以传参，入股是true，深层复制，如果是false，只复制节点本身。

```

* 节点属性

```

获取：getAttribute(名称);
设置：setAttribute(名称，值)；
删除： removeAttribute(名称)；

```
