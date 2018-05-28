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
	  			title:"stack",
	  			file:"stack.html"
	  		}] ,
	      path:"/category/js/"
	    }
	  }
	}
</script>