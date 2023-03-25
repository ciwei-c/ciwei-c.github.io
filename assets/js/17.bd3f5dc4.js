(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"ts-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" ts vue")]),a("h2",{attrs:{id:"vuex-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-class","aria-hidden":"true"}},[t._v("#")]),t._v(" vuex-class")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("ul",[a("li",[a("p",[t._v("在vue项目中，使用typeScript写vuex，需要引入vue-class")])]),a("li",[a("p",[t._v("vue-class 提供许多装饰器来处理")])])])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Getter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mutation"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" State"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-class'")]),t._v("\n\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("About")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Getter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"count"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" count"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Mutation")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"caculate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" caculate"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("Function")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("store 的写法较原先可以基本不变")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("State")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("State "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("caculate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("State"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("payload"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" payload\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getters"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("count")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("State"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),a("h2",{attrs:{id:"vue-property-decorator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-property-decorator","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-property-decorator")]),a("p",[t._v("使用")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Prop"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vue "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Provide"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Inject"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Watch"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mixins "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-property-decorator'")]),t._v("\n")])]),a("h3",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[t._v("#")]),t._v(" @Model")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// vue")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"show=true"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("show"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components v"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"show"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//ts")]),t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("Component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ChildComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Father")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  show"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// vue")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"hide"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("@Model"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ts")]),t._v("\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChildComponents")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" show"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("hide")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("input")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("input")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{attrs:{id:"emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emit","aria-hidden":"true"}},[t._v("#")]),t._v(" @Emit")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// vue")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components @childEmit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"childEmit"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ts")]),t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("Component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ChildComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Father")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("childEmit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// vue")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"emit"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("@Emit"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ts")]),t._v("\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChildComponents")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"childEmit"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("emit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("@Emit( )若没有传递参数，那么事件名为函数名，camelCase名称将转换为kebab-case。")])]),a("h3",{attrs:{id:"prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop","aria-hidden":"true"}},[t._v("#")]),t._v(" @Prop")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components msg"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"prop"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("child"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("components"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChildComponents")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Prop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" msg"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{attrs:{id:"provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-inject","aria-hidden":"true"}},[t._v("#")]),t._v(" @Provide/@Inject")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("父子组件之间数据不便传输，或者子组件想调用父组件的方法，可以在父组件使用@Provide，子组件@Inject调用")])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("Component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ChildComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("About")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Provide")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"this is father fn"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChildComponents")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Inject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'fn'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" fn"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("Function")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch","aria-hidden":"true"}},[t._v("#")]),t._v(" @Watch")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("About")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n  @"),a("span",{attrs:{class:"token function"}},[t._v("Watch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'value'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" immediate"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deep"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("onValueChanged")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins","aria-hidden":"true"}},[t._v("#")]),t._v(" @Mixins")]),a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeMixin "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/mixin/SomeMixin'")]),t._v(" \n\n@Component\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MixinsCompenent")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mixins")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SomeMixin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// todo")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);