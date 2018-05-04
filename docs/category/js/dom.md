---
sidebar: auto
---
# dom
虽然现在很多都是使用mv****的框架，对 dom 的操作全都封装在了框架内部。但是基础才是最重要的，页面的交互操作总免不了对 dom 的操作，总结一下工作以来关于 dom 的一些常用的基本知识和 api。

## 节点层次

DOM（文档模型对象），针对 HTML 和 XML 文档的一个API（应用程序接口）
DOM可以将任何的 HTML 和 XML 文档描绘成一个由多层节点构成的结构

document（文档节点），是每个文档的根节点
文档节点下面始终只有一个节点 html（文档元素）

## 常见 Node 类型

+ Element 类型
+ Text 类型
+ Document 类型 
+ DocumentFragment 类型

## nodeType
<!-- more -->

+ Element 类型          (1)
+ Text 类型             (3)
+ Document 类型         (9)
+ DocumentFragment 类型 (11)

```javascript
if(someNode.nodeType == 1){
    alert("this is a Element");
}
```

## nodeName nodeValue

对于元素节点来说，nodeName即为标签名，nodeValue始终为null。
```html
<div id="test">this is a cute div</div>
```
```javascript
var d = document.getElementById("test");
d.nodeType  // 1
d.nodeName // DIV
d.nodeValue // null
d.childNodes[0].nodeValue // "this is a cute div"
```

## childNodes

每个节点下面都保存着一个键值对为{childNodes:NodeList}的属性，NodeList是一个类数组，有length属性，如果节点下面没有节点了，length就为0。
__NodeList的独特之处在于，能够跟随着dom结构的变化而变化，是动态的，而不是第一次访问时的快照__

* 类数组可以通过Array.prototype.slice.call(arr,0)转换成数组

## previousSibling nextSibling

- previousSibling 
查找同一级父元素下的前一个节点，如果本身是第一个，则为null
- previousSibling 查找同一级父元素下的后一个节点，如果本身是最后一个，则为null
- 如果当前父元素下只有一个元素，则都为null

## 节点操作

**appendChild** 
没啥好说的，将元素插到最后

**insertBefore**
这个很有用。如果插入的元素不存在，则会生成新的元素，如果插入的元素已存在，则将元素移到新的位置（appendChild()也支持）。即，获取到想要处理的dom节点，使用insertBefore可以实现节点位置的调整。例如列表项拖拽调序，新消息列表项置顶……

**removeChild**
删除节点

**replaceChild**
替换节点

> 需要注意的是，以上的方法，都需要有父元素才可以，否则会报错

**cloneNode**
顾名思义，克隆节点。可传参数，若为true，深度克隆了，包括该元素下面的所有子节点；若为false，则是克隆节点本身
```html
<div id="test">this is a cute div</div>
```
```javascript
var d = document.getElementById("test");
d.cloneNode(true)
//<div id="test">this is a cute div</div>
d.cloneNode(false)
//<div id="test"></div>
```

## querySelector()

someNode.querySelector(".someClass")
通过调用该方法，返回范围内第一个匹配的元素。
参数必传，不传报错。

## querySelectorAll()

someNode.querySelectorAll(".someClass")
返回所有匹配的元素，返回值是一个NodeList 对象。
参数必传，不传报错。

## 元素遍历
<!-- more -->

浏览器差异导致的节点返回差异，导致不同浏览器的childNodes和firstChild的属性可能不一致。
DOM拓展了新的属性


+ childElementCount:返回子元素（不包含文本节点和注释节点）的个数
+ firstElementChild:指向第一个元素
+ lastElementChild:指向最后一个元素
+ previousElementSibling:指向前一个同级元素
+ nextElementSibling:指向后一个同级元素

## classList

在这之前，如果想要操作类，比如删除某个元素多个类中的某一个类，需要通过className先获取所有类名，在通过字符串切割或者拆分等等方法，很麻烦。
html5新增的classList属性（支持 Firefox3.6+、Chrome），可以很方便的实现类名的增删改。

```javascript
//删除类
someNode.classList.remove("class")
//添加类
someNode.classList.add("class")
//切换类
someNode.classList.toggle("class")
//判断元素中是否存在某个类
someNode.classList.contains("class")
```

## 焦点管理

doucment.activeElement 属性，始终返回获得了焦点的元素。
document.hasFocus() 返回布尔值，判断文档是否获得焦点，用来判断用户是否正在与页面交互

## insertAdjacentHTML()

insertAdjacentHTML()方法用来操作dom，接受两个参数，第一个参数必须为以下之一：
+ beforebegin，在当前元素之前插入一个紧邻的同辈元素
+ afterbegin，在当前元素之下插入一下新的子元素或者第一个子元素之前插入新的子元素
+ beforeend，在当前元素之下插入一个新的子元素或者最后一个子元素后面插入新的子元素
+ afterend，在当前元素之后插入一个紧邻的同辈元素

```javascript
someNode.insertAdjacentHTML("beforebegin","<p>hello world</p>")
someNode.insertAdjacentHTML("afterbegin","<p>hello world</p>")
someNode.insertAdjacentHTML("beforeend","<p>hello world</p>")
someNode.insertAdjacentHTML("afterend","<p>hello world</p>")
```
## contains()

通过调用contains可以判断某个节点是不是另一个节点的子元素。
返回布尔值。

```javascript
someNode.contains(someChildNode) // true/false
```