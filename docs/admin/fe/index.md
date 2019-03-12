<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics:{
	      	work:{
		      	data:[{
		  			title:"海浪动画",
		  			file:"wave.html"
		  		},{
		  			title:"vue svg图标",
		  			file:"svgIcon.html"
		  		},{
		  			title:"抛物效果",
		  			file:"parabola.html"
		  		},{
		  			title:"高德地图星光",
		  			file:"starmap.html"
		  		},{
		  			title:"刻度条",
		  			file:"scale.html"
		  		},{
		  			title:"canvas分值刻度表",
		  			file:"dotcircle.html"
		  		},{
		  			title:"webview H5 小结",
		  			file:"h5.html"
		  		}],
		  		classify:"记录",
		  		subtitle:"工作中一些小东西的简单记录",
		  		subpath:"work"
	      	},
	      	ts:{
		      	data:[{
		  			title:"装饰器",
		  			file:"decorater.html"
		  		},{
		  			title:"泛型",
		  			file:"generic.html"
		  		},{
		  			title:"vue-property-decorator",
		  			file:"vueproperty.html"
		  		},{
		  			title:"ts vuex",
		  			file:"vuexclass.html"
		  		},{
		  			title:"ts vue Mixin",
		  			file:"vuemixin.html"
		  		}],
		  		classify:".ts",
		  		subtitle:"typescrit 学习记录",
		  		subpath:"ts"
	      	},
	  		other:{
		  		data:[{
		  			title:"页面渲染与加载",
		  			file:"render.html"
		  		},{
		  			title:"重绘与回流",
		  			file:"reflow.html"
		  		},{
		  			title:"弹性布局",
		  			file:"flex.html" 
		  		},{
		  			title:"fileReader",
		  			file:"fileReader.html"
		  		},{
		  			title:"ios iframe宽度自适应解决",
		  			file:"iosIframe.html"
		  		},{
		  			title:"mvvm",
		  			file:"mvvm.html"
		  		}],
		  		classify:"其他",
		  		subtitle:"就是其他",
		  		subpath:"other"
	  		}
	      },
	      path:"/admin/fe/"
	    }
	  }
	}
</script>