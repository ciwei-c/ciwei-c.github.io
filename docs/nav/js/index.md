<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"node图片上传",
	  			file:"nodejsUpload.html"
	  		},{
	  			title:"dom",
	  			file:"dom.html"
	  		},{
	  			title:"canvas波浪",
	  			file:"wave.html"
	  		},{
	  			title:"购物车抛物效果",
	  			file:"parabola.html"
	  		},{
	  			title:"svg刻度条进度动画",
	  			file:"svg.html"
	  		}] ,
	      path:"/category/js/"
	    }
	  }
	}
</script>