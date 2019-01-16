<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	    	artics:{
		      	more:{
			      	data:[{
			  			title:"git常用操作",
			  			file:"git.html"
			  		}],
			  		classify:""
		      	}
		    },
	      	path:"/admin/more/"
	    }
	  }
	}
</script>