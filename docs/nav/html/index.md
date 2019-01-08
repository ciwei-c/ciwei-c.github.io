<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"fileReader",
	  			file:"fileReader.html"
	  		},{
	  			title:"ios iframe 宽度自适应",
	  			file:"iosIframe.html"
	  		}],
	      path:"/category/html/"
	    }
	  }
	}
</script>