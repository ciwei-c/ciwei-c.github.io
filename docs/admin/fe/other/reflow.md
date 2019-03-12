---
sidebar: auto
---

# reflow & repaint

## reflow ( 回流 )

当页面的布局发生改变或者内容发生变化时，浏览器需要重新计算和构建页面称之为回流。发生回流的情况有如下几点：

1、添加或者删除可见的DOM元素；
2、元素位置改变；
3、元素尺寸改变——边距、填充、边框、宽度和高度
4、内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；
5、页面渲染初始化；
6、浏览器窗口尺寸改变——resize事件发生时；

## repaint ( 重绘 )

在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。或者当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如color。则就叫称为重绘。

**重绘不一定回流，但是回流一定会引起重绘**

## 浏览器的优化

很多浏览器都会优化回流和重绘，浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。

虽然有了浏览器的优化，但有时候我们写的一些代码可能会强制浏览器提前flush队列，这样浏览器的优化可能就起不到作用了。当你请求向浏览器请求一些 style信息的时候，就会让浏览器flush队列，比如：
1. offsetTop, offsetLeft, offsetWidth, offsetHeight
2. scrollTop/Left/Width/Height
3. clientTop/Left/Width/Height
4. width,height
5. 请求了getComputedStyle(), 或者 IE的 currentStyle
当你请求上面的一些属性的时候，浏览器为了给你最精确的值，需要flush队列，因为队列中可能会有影响到这些值的操作。即使你获取元素的布局和样式信息跟最近发生或改变的布局信息无关，浏览器都会强行刷新渲染队列。

## 如何减少
减少回流、重绘其实就是需要减少对render tree的操作（合并多次多DOM和样式的修改），并减少对一些style信息的请求，尽量利用好浏览器的优化策略。具体方法有：

直接改变类名，如果动态改变样式，则使用cssText，不建议使用style

```javascript
// bad
el.style.height = "100px"

// good
el.className += className1
el.cssText += ";height:100px;"
```

使用DocumentFragment进行缓存操作,引发一次回流和重绘

```javascript
var body = document.body;
// bad
for(var i = 0 ; i < 5; i ++){
    body.appendChild(el);
}
// good
var fragment = document.createDocumentFragment
for(var i = 0 ; i < 5; i ++){
    fragment.appendChild(el);
}
body.appendChild(fragment);
```

不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存。

```javascript
// bad
for(var i = 0 ; i < 5; i ++){
    return el.offsetLeft;
}
// good
var offsetLeft = el.offsetLeft;
for(var i = 0 ; i < 5; i ++){
    return offsetLeft;
}
```