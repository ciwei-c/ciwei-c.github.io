<nav-layout :data="artics" :path="path"></nav-layout>
<script>
	export default {
	  data () {
	    return {
	      artics: [{
	  			title:"reflow & repaint",
	  			file:"reflow.html"
	  		},{
	  			title:"flex",
	  			file:"flex.html" 
	  		},{
	  			title:"fileReader",
	  			file:"fileReader.html"
	  		},{
	  			title:"ios iframe 宽度自适应",
	  			file:"iosIframe.html"
	  		},{
	  			title:"canvas wave",
	  			file:"wave.html"
	  		},{
	  			title:"抛物效果",
	  			file:"parabola.html"
	  		},{
	  			title:"svg刻度",
	  			file:"svg.html"
	  		},{
	  			title:"defineProperty",
	  			file:"mvvm.html"
	  		}],
	      path:"/admin/fe/"
	    }
	  }
	}
</script>