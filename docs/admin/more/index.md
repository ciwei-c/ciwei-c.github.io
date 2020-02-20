<nav-layout :data="artics" :path="path"></nav-layout>
<script>
export default {
	data () {
	return {
		artics:[{
			title:"git常用操作",
			file:"git.html",
			date:"Jan 02, 2017"
		}],
		path:"/admin/more/"
	}
	}
}
</script>