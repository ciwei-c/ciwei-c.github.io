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
		  			title:"刻度",
		  			file:"scale.html"
		  		},{
		  			title:"点状环形图",
		  			file:"dotcircle.html"
		  		},{
		  			title:"iframe自适应 (ios H5)",
		  			file:"iosIframe.html"
		  		},{
		  			title:"webview H5 小结",
		  			file:"h5.html"
		  		}],
		  		classify:"工作记录"
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
		  			title:"mvvm",
		  			file:"mvvm.html"
		  		}],
		  		classify:"其他"
	  		}
	      },
	      path:"/admin/fe/"
	    }
	  }
	}
</script>