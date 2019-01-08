<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"defineProperty双向绑定",
	  			file:"mvvm.html"
	  		},{
	  			title:"vue组件",
	  			file:"vueComponents.html"
	  		}],
	      path:"/category/framework/"
	    }
	  }
	}
</script>