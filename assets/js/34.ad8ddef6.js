(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(t,e,n){"use strict";n.r(e);var a={name:"Parabola",data:function(){return{list:[],carCount:0,rect:{},vertex:50}},created:function(){this.list=["苹果","香蕉","橘子","橙子","石榴","蛇果","凤梨","梨子","桃子","白枣"].map(function(t){return{name:t,count:0}})},mounted:function(){var t=document.querySelector(".car");this.rect={left:t.offsetLeft,top:t.offsetTop}},methods:{onAdd:function(t,e){e.count++,this.carCount++;var n=t.target,a=document.createElement("div"),o={position:"fixed",fontSize:"12px",height:"35px",width:"35px",background:"rgba(0,0,0,0.6)",borderRadius:"50%",color:"#fff",textAlign:"center",lineHeight:"35px",top:0,left:0};for(var i in o)a.style[i]=o[i];a.innerText=e.name,this.parabola({el:a,start:{top:n.offsetTop-window.scrollY,left:n.parentNode.previousSibling.offsetLeft},end:{top:this.rect.top,left:this.rect.left},vertexLeft:this.vertex})},onMinus:function(t){t.count--,this.carCount--},parabola:function(t){var e=t.start,n=t.end,a=null,o=t.vertexLeft||50,i=Math.abs(n.left-e.left),r=i/((t.time||1e3)/16),s=1,l=e.top<n.top?-o:-(i-o),c=(-e.top- -n.top)/(Math.pow(l,2)-Math.pow(l+i,2)),f=-e.top-c*Math.pow(l,2),u=1;n.left<e.left&&(u*=-1),document.body.appendChild(t.el);var p=function(e,n){var a="translate("+e+"px,"+n+"px)";t.el.style.transform=a,t.el.style["-webkit-transform"]=a};p(e.left,e.top);var v=function(){var n=e.left+s*r*u,o=-(c*Math.pow(l+s*r,2)+f);p(n,o),++s*r>i?(cancelAnimationFrame(a),t.el.remove()):a=requestAnimationFrame(v)};v()}}},o=(n(70),n(0)),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parabola-wrap"},[n("div",{staticClass:"list-wrap"},t._l(t.list,function(e,a){return t.list.length?n("div",{staticClass:"list flex flex-vc flex-aj"},[n("div",[t._v(t._s(a+1)+"、"+t._s(e.name))]),n("div",{staticClass:"flex flex-vc"},[e.count?n("div",{staticClass:"btn minus-btn",on:{click:function(n){n.stopPropagation(),t.onMinus(e)}}},[t._v("-")]):t._e(),e.count?n("div",{staticClass:"list-count"},[t._v(t._s(e.count))]):t._e(),n("div",{staticClass:"btn add-btn",on:{click:function(n){n.stopPropagation(),t.onAdd(n,e)}}},[t._v("+")])])]):t._e()})),n("div",{staticClass:"car"},[n("img",{attrs:{src:"/car.png",alt:""}}),n("div",{staticClass:"car-count"},[t._v(t._s(t.carCount))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vertex,expression:"vertex"}],staticClass:"vertex-left",attrs:{type:"range",max:"100",min:"0"},domProps:{value:t.vertex},on:{__r:function(e){t.vertex=e.target.value}}}),n("div",[t._v("拖动调整抛物线路径")])])},[],!1,null,"4ab230de",null);e.default=i.exports},62:function(t,e,n){},70:function(t,e,n){"use strict";var a=n(62);n.n(a).a}}]);