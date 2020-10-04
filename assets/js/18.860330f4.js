(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"reflow-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflow-repaint","aria-hidden":"true"}},[t._v("#")]),t._v(" reflow & repaint")]),a("h2",{attrs:{id:"reflow-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflow-回流","aria-hidden":"true"}},[t._v("#")]),t._v(" reflow ( 回流 )")]),a("p",[t._v("当页面的布局发生改变或者内容发生变化时，浏览器需要重新计算和构建页面称之为回流。发生回流的情况有如下几点：")]),a("p",[t._v("1、添加或者删除可见的DOM元素；\n2、元素位置改变；\n3、元素尺寸改变——边距、填充、边框、宽度和高度\n4、内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；\n5、页面渲染初始化；\n6、浏览器窗口尺寸改变——resize事件发生时；")]),a("h2",{attrs:{id:"repaint-重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repaint-重绘","aria-hidden":"true"}},[t._v("#")]),t._v(" repaint ( 重绘 )")]),a("p",[t._v("在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。或者当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如color。则就叫称为重绘。")]),a("p",[a("strong",[t._v("重绘不一定回流，但是回流一定会引起重绘")])]),a("h2",{attrs:{id:"浏览器的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器的优化")]),a("p",[t._v("很多浏览器都会优化回流和重绘，浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。")]),a("p",[t._v("虽然有了浏览器的优化，但有时候我们写的一些代码可能会强制浏览器提前flush队列，这样浏览器的优化可能就起不到作用了。当你请求向浏览器请求一些 style信息的时候，就会让浏览器flush队列，比如：")]),a("ol",[a("li",[t._v("offsetTop, offsetLeft, offsetWidth, offsetHeight")]),a("li",[t._v("scrollTop/Left/Width/Height")]),a("li",[t._v("clientTop/Left/Width/Height")]),a("li",[t._v("width,height")]),a("li",[t._v("请求了getComputedStyle(), 或者 IE的 currentStyle\n当你请求上面的一些属性的时候，浏览器为了给你最精确的值，需要flush队列，因为队列中可能会有影响到这些值的操作。即使你获取元素的布局和样式信息跟最近发生或改变的布局信息无关，浏览器都会强行刷新渲染队列。")])]),a("h2",{attrs:{id:"如何减少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何减少","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何减少")]),a("p",[t._v("减少回流、重绘其实就是需要减少对render tree的操作（合并多次多DOM和样式的修改），并减少对一些style信息的请求，尽量利用好浏览器的优化策略。具体方法有：")]),a("p",[t._v("直接改变类名，如果动态改变样式，则使用cssText，不建议使用style")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100px"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// good")]),t._v("\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" className1\nel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('";height:100px;"')]),t._v("\n")])]),a("p",[t._v("使用DocumentFragment进行缓存操作,引发一次回流和重绘")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fragment "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createDocumentFragment\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fragment"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nbody"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" offsetLeft "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" offsetLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);