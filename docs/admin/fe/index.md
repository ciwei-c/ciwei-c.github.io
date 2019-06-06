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
		  			title:"抛物效果",
		  			file:"parabola.html"
		  		},{
		  			title:"刻度条",
		  			file:"scale.html"
		  		},{
		  			title:"刻度表",
		  			file:"dotcircle.html"
          }],
		  		classify:"记录",
		  		subtitle:"随便写写",
		  		subpath:"work"
	      	},
	      	ts:{
		      	data:[{
		  			title:"装饰器",
		  			file:"decorater.html"
		  		},{
		  			title:"ts vue",
		  			file:"tsvue.html"
		  		},{
		  			title:"vscode extension",
		  			file:"vscodeext.html"
		  		}],
		  		classify:".ts",
		  		subtitle:"typescrit 简单学习记录",
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
		  			title:"svg icon",
		  			file:"svgIcon.html"
		  		},{
		  			title:"ios iframe宽度自适应解决",
		  			file:"iosIframe.html"
		  		},{
		  			title:"mvvm",
          			file:"mvvm.html"
		  		}],
		  		classify:"其他",
		  		subtitle:"-",
		  		subpath:"other"
	  		}
	      },
	      path:"/admin/fe/"
	    }
	  }
	}
</script>