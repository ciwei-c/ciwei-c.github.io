<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"defineProperty双向绑定",
	  			file:"mvvm.html"
	  		},{
	  			title:"vue弹窗组件",
	  			file:"vueComponents.html"
	  		},{
	  			title:"chrome extension 配置介绍",
	  			file:"chromePluginIntro.html"
	  		},{
	  			title:"chrome extension 简易入门",
	  			file:"chromePlugin.html"
	  		}] ,
	      path:"/category/framework/"
	    }
	  }
	}
</script>