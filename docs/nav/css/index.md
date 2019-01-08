<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"回流重绘",
	  			file:"reflow.html"
	  		},{
	  			title:"flex兼容写法",
	  			file:"flex.html"
	  		}],
	      path:"/category/css/"
	    }
	  }
	}
</script>