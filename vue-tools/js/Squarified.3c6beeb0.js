(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Squarified"],{1369:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{height:"40px","line-height":"40px"}},[e("el-button",{attrs:{size:"mini"},on:{click:t.random}},[t._v("随机")])],1),e("div",{ref:"container",staticClass:"squarified-container",staticStyle:{height:"calc(100% - 40px)"}},t._l(t.squarifiedRectInfo,(function(i,s){return e("div",{key:s,style:{left:i.x+"px",top:i.y+"px",width:i.width+"px",height:i.height+"px",background:t.colors[s%t.colors.length]}},[t._v("权重："+t._s(i.data.value))])})),0)])},r=[];i("14d9"),i("13d5");class h{constructor(t,e){this.sourceData=t.map(t=>Object.assign({},t)),this.sourceData.sort((t,e)=>e.value-t.value),this.options=Object.assign({},e),this.initRectInfo(),this.squarified(this.sourceData,[],this.getMinSide())}getSum(t){return 1===t.length?t[0].value:t.reduce((t,e)=>(t="object"===typeof t?t.value:t,e="object"===typeof e?e.value:e,(t||0)+(e||0)))}get heightWidthRatio(){return this.options.height/this.options.width}get widthScale(){return this.options.width/this.rectInfo.width}get heightScale(){return this.options.height/this.rectInfo.height}initRectInfo(){this.rectInfo={sx:0,sy:0,rows:[],total:this.getSum(this.sourceData)},this.rectInfo.width=Math.sqrt(this.rectInfo.total/this.heightWidthRatio),this.rectInfo.height=this.rectInfo.width*this.heightWidthRatio}squarified(t,e,i){if(!t.length)return this.newLayoutRow(e,i);let s=[...e,t[0]];!e.length||e.length&&this.worstNewRadio(e,t[0],i)>this.worstOldRadio(s,i)?(t.splice(0,1),this.squarified(t,s,i)):(this.newLayoutRow(e,i),this.squarified(t,[],this.getMinSide()))}worstOldRadio(t,e){let i=this.getSum(t)/e.value;return this.getMaxRatio(i,t[t.length-1].value/i)}worstNewRadio(t,e,i){let s=this.getSum(t)/i.value,r=Math.min(this.rectInfo.width-this.rectInfo.sx-(i.vertical?s:0),this.rectInfo.height-this.rectInfo.sy-(i.vertical?0:s));return this.getMaxRatio(r,e.value/r)}getMinSide(){let t=this.rectInfo.height-this.rectInfo.sy,e=this.rectInfo.width-this.rectInfo.sx;return t>e?{vertical:!1,value:e}:{vertical:!0,value:t}}newLayoutRow(t,e){let i=this.getSum(t)/e.value;t.forEach(t=>{let s=e.vertical?t.value/i:i,r=e.vertical?i:t.value/i,h={value:t.value,data:t,x:this.widthScale*this.rectInfo.sx,y:this.heightScale*this.rectInfo.sy,width:this.widthScale*r,height:this.heightScale*s};this.rectInfo.sy+=e.vertical?s:0,this.rectInfo.sx+=e.vertical?0:r,this.rectInfo.rows.push(h)}),e.vertical?(this.rectInfo.sy-=e.value,this.rectInfo.sx+=i):(this.rectInfo.sx-=e.value,this.rectInfo.sy+=i)}getMaxRatio(t,e){return Math.max(t/e,e/t)}}var n=h,a={data(){return{squarifiedRectInfo:[],colors:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622"],data:[]}},mounted(){this.random(),this.$nextTick(()=>{this.init()}),window.addEventListener("resize",this.throttle(300,()=>{this.init()}))},methods:{random(){let t=[],e=Math.max(Math.round(15*Math.random()),10);for(let i=0;i<e;i++)t.push({value:Math.max(Math.round(1e3*Math.random()),50)});this.data=t,this.init()},throttle(t=0,e){let i=null;return()=>{i||(i=setTimeout(()=>{i=null,e()},t))}},init(){let t=new n(this.data,{width:this.$refs.container.offsetWidth,height:this.$refs.container.offsetHeight});this.squarifiedRectInfo=t.rectInfo.rows}}},o=a,c=(i("c913"),i("2877")),u=Object(c["a"])(o,s,r,!1,null,"d1d39252",null);e["default"]=u.exports},"13d5":function(t,e,i){"use strict";var s=i("23e7"),r=i("d58f").left,h=i("a640"),n=i("2d00"),a=i("605d"),o=!a&&n>79&&n<83,c=o||!h("reduce");s({target:"Array",proto:!0,forced:c},{reduce:function(t){var e=arguments.length;return r(this,t,e,e>1?arguments[1]:void 0)}})},"605d":function(t,e,i){(function(e){var s=i("c6b6");t.exports="undefined"!=typeof e&&"process"==s(e)}).call(this,i("4362"))},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){return 1},1)}))}},b422:function(t,e,i){},c913:function(t,e,i){"use strict";i("b422")},d58f:function(t,e,i){var s=i("59ed"),r=i("7b0b"),h=i("44ad"),n=i("07fa"),a=TypeError,o=function(t){return function(e,i,o,c){s(i);var u=r(e),l=h(u),f=n(u),d=t?f-1:0,v=t?-1:1;if(o<2)while(1){if(d in l){c=l[d],d+=v;break}if(d+=v,t?d<0:f<=d)throw a("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=v)d in l&&(c=i(c,l[d],d,u));return c}};t.exports={left:o(!1),right:o(!0)}}}]);