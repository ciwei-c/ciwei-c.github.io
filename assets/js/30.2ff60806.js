(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(t,e,a){"use strict";a.r(e);var n={name:"NavLayout",props:{data:{type:Array,default:function(){return[]}},path:String},date:function(){return{artics:[]}},created:function(){this.artics=this.data.sort(function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()})},methods:{moveToView:function(t){this.$router.push({path:""+this.path+t})}}},i=(a(64),a(0)),r=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"artic-item-wrap"},t._l(t.artics,function(e){return a("li",[a("span",{staticClass:"artic-date"},[t._v(t._s(e.date))]),a("h2",[a("router-link",{attrs:{to:""+t.path+e.file}},[t._v(t._s(e.title))])],1)])}))},[],!1,null,"5550fd46",null);e.default=r.exports},57:function(t,e,a){},64:function(t,e,a){"use strict";var n=a(57);a.n(n).a}}]);