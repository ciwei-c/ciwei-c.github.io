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
		  		subtitle:"工作中一些小东西的简单记录"
	      	},
	  		other:{
		  		data:[{
		  			title:"reflow & repaint",
		  			file:"reflow.html"
		  		},{
		  			title:"flex",
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
		  		subtitle:"就是其他"
	  		}
	      },
	      path:"/admin/fe/"
	    }
	  }
	}
</script>