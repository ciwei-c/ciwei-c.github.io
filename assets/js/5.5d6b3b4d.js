(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),s("Parabola"),this._m(1),this._m(2),this._m(3)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"抛物效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抛物效果","aria-hidden":"true"}},[this._v("#")]),this._v(" 抛物效果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("1、由于页面的坐标系原点（0，0）在左上角，并且坐标系的返回值都是正数，为了方便计算，将页面看作普通坐标系的第四象限，坐标纵轴的点取反\n\n2、如果使用页面的坐标系原点，那么方程式将为 y = ax^2 + bx + c ，存在三个未知数，所以取起始点附近的坐标点为中心轴，方程式抽象为 y = ax^2 + b\n\n3、为了灵活呈现，可以根据中心轴的位置来改变抛物线的顶点，所以中心轴横坐标点可以根据起始点自行传参调整\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("parabola")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" end "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" animationFrame "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 默认中心轴距离起始点的距离50")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vertexLeft "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertexLeft "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 每16毫秒横轴移动多少距离（requestAnimationFrame一次动画约为16毫秒）")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" distance "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("abs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" stepDistance "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" distance "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("16")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 计算经过了多少次16毫秒，方便统计总共移动了多少距离")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 确定中心轴的横轴坐标点，代入已知点，得到抛物线方程式的未知参数")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 求得方程式 y = a*Math.pow(x,2) + b")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" centralAxis "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" end"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distance "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexLeft"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centralAxis"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centralAxis "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" distance"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centralAxis"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 终点横坐标是否大于起点横坐标，确定抛物线动画路径向左还是向右")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" direct "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" direct "),a("span",{attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("setTranslate")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" translate "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`translate(")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("x"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("px,")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("y"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("px)`")])]),t._v(" \n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`transform`")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" translate\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`-webkit-transform`")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" translate\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("setTranslate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("move")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" stepDistance "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" direct\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centralAxis "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" stepDistance"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("setTranslate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        count"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" stepDistance "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" distance"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("cancelAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animationFrame"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            options"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("remove")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            animationFrame "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("move"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("move")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=o.exports}}]);