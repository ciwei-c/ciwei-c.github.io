<nav-layout :data="artics" :path="path"></nav-layout>
<script>
export default {
	data () {
		return {
			artics:[{
				title:"Scss下 RGB 转 HSV 颜色模型",
				file:"scsshsv.html",
				date:"Feb 20, 2020"
			},{
				title:"canvas波浪加载动画",
				file:"wave.html",
				date:"Mar 03, 2019"
			},{
				title:"抛物效果",
				file:"parabola.html",
				date:"Oct 26, 2018"
			},{
				title:"ios下iframe宽度不能自适应问题",
				file:"iosframe.html",
				date:"Sep 26, 2018"
			},{
				title:"雨滴分数盘",
				file:"dotcircle.html",
				date:"Oct 26, 2018"
			},{
				title:"弹性布局兼容写法",
				file:"flex.html",
				date:"Dec 10, 2017"
			},{
				title:"svg icon",
				file:"svgIcon.html",
				date:"Sep 01, 2018"
			},{
				title:"svg 尺子",
				file:"scale.html",
				date:"Sep 01, 2018"
			}],
			path:"/admin/style/"
		}
	}
}
</script>