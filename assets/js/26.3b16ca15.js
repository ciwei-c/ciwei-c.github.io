(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{93:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"filereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader","aria-hidden":"true"}},[t._v("#")]),t._v(" FileReader")]),s("h2",{attrs:{id:"file表单控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file表单控件","aria-hidden":"true"}},[t._v("#")]),t._v(" File表单控件")]),s("p",[t._v("h5 的 dom 中为文件输入元素添加了一个files集合，选择一个或多个文件的时候会包含一个或多个file对象")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("html"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"file"')]),t._v(" id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\njs"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inputEl "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninputEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onchange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("以上将会打印出一个FileList集合，获取到里面的file对象时，会返回以下字段：")]),s("ol",[s("li",[t._v("lastModifiedDate:文件上次被修改的时间（chrome）")]),s("li",[t._v("name:文件名称")]),s("li",[t._v("type:字符串，文件的MIME类型")]),s("li",[t._v("size:文件的大小")])]),s("h2",{attrs:{id:"filereader-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader-2","aria-hidden":"true"}},[t._v("#")]),t._v(" FileReader")]),s("p",[t._v("上面返回的file对象可以通过FileReader类型来读取数据。FileReader是一种异步的文件读取机制，既然是异步的，它就会有相应的事件处理程序：")]),s("ul",[s("li",[t._v("onabort 当读取操作被中止时调用")]),s("li",[t._v("onerror 当读取操作发生错误时调用")]),s("li",[t._v("onload 当读取操作成功完成时调用")]),s("li",[t._v("onloadend 当读取操作完成时调用,不管是成功还是失败.该处理程序在onload或者onerror之后调用")]),s("li",[t._v("onloadstart 当读取操作将要开始之前调用")]),s("li",[t._v("onprogress 在读取数据过程中周期性调用")])]),s("p",[t._v("另外，读取文件中的数据，FileReader类型也提供了几中不同的方法")]),s("ol",[s("li",[t._v("readAsText(file,encoding):以纯文本的形式读取文件，第二个参数可选编码类型。")]),s("li",[t._v("readAsBinaryString(file):读取文件并返回字符串，字符串中的每个字符代表一个字节")]),s("li",[t._v("readAsDataURL(file):读取文件返回base64位url")]),s("li",[t._v("readAsArrayBuffer(file):读取文件返回一个包含文件内容的ArrayBuffer对象")])]),s("p",[t._v("使用方法就如同一般的构造函数一样 new FileReader()\n下面假设读取图片")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("html"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"file"')]),t._v(" id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\njs"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inputEl "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninputEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onchange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    reader "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readAsDataURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"error"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//50ms左右执行一次")]),t._v("\n    reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onprogress")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loaded"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),s("span",{attrs:{class:"token string"}},[t._v('"/"')]),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//11713(当前加载的多少)/11713（总大小）")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCg……")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{attrs:{id:"对象url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象url","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象URL")]),s("p",[t._v("对象URL又称blob URL，指的是引用file或者blob中的数据的URL，直接读取文件内容，可以达到实时预览的效果，需要创建一个URL对象来实现这个功能。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("html"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"file"')]),t._v(" id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\njs"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inputEl "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"input"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninputEl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onchange")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("URL")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createObjectURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//blob:null/fe235241-81c2-46c1-8ecf-d9de9ee08728")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=o.exports}}]);