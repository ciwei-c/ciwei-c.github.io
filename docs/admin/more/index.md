<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"git拉取分支",
	  			file:"branch.html"
	  		}],
	      path:"/admin/more/"
	    }
	  }
	}
</script>