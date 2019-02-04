---
sidebar: auto
prev: true
next: true
---
## 点状环形效果
<dot-circle></dot-circle>

## 实现

```
1、使用 canvas 的 ellipse 方法或者 三次贝塞尔曲线 绘制椭圆或者水滴图案

2、确定满格分数值，确定总点数，确定每个点数代表的分值

3、根据点数和分数计算出两个点之间的度数，假设为单位旋转角度，为了便于计算，将 canvas 画布旋转至起始点

4、重复绘制点，每绘制一个点，将画布旋转一个单位旋转角度，直到绘制完成
```

```vue
<template>
	<div class="container">
		<div class="canvas-wrap" :style="{background: colorData.bgColor}">
			<canvas id="canvas" ></canvas>
		</div>
		<input v-model="score" type="range" max="100" min="0" step="5">
	</div>
</template>
<script>
export default {
    name: "DotCircle",
    data() {
        return {
        	score:0,
        	c:"#029F53"
        }
    },
    computed:{
    	level(){
    		let score = Number(this.score)
    		return (score >= 90) ? "优" : ( score < 60 ? "差" : "良好")
    	},
    	colorData(){
    		let score = Number(this.score)
    		let dotColor = ""
    		let bgColor = ""
    		if (score >= 90) {
    			dotColor = "#029F53"
    			bgColor = "-webkit-linear-gradient(left top, #2AD370, #00B15A)"
    		}else if(score < 60){
    			dotColor = "#DC351A"
    			bgColor = "-webkit-linear-gradient(left top, #FC9C6E, #F0452B)"
    		}else{
    			dotColor = "#F36D07"
    			bgColor = "-webkit-linear-gradient(left top, #FFC573, #F48438)"
    		}
    		return {
    			dotColor:dotColor,
    			bgColor:bgColor
    		}
    	}
    },
    mounted(){
    	this.$nextTick(()=>{
    		this.drawScore(this.level,Number(this.score))
    	})
    },
    watch:{
    	score(){
    		this.drawScore(this.level,Number(this.score))
    	}
    },
    methods:{
    	drawScore(level,score) {
            let canvasEl = document.getElementById("canvas")
            let ctx = canvasEl.getContext("2d")

            // 定义canvas宽高
            let canvasWidth = 300
            canvasEl.width = canvasWidth
            canvasEl.height = canvasWidth * 0.7

            // 定义最大点数和每个点数的分数值
            let maxDot = 20
            let perScore = 5

            if (window.devicePixelRatio) {
                canvasEl.style.width = canvasEl.width + "px"
                canvasEl.style.height = canvasEl.height + "px"
                canvasEl.height = canvasEl.height * window.devicePixelRatio
                canvasEl.width = canvasEl.width * window.devicePixelRatio
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
            }

            let r = canvasWidth / 2

            let centerPoint = {
                x: r,
                y: r
            }

            ctx.translate(r, r)

            let bezierCurvesControlPointX = canvasWidth / 41
            let bezierCurvesControlPointY = canvasWidth / 68
            let bezierCurvesEndPointX = r
            let bezierCurvesEndPointY = canvasWidth / 17

            let perRad = ((2 - 3 / 4) / maxDot) * Math.PI
            let initRadValue = - 10.5

            let color = this.colorData.dotColor

            ctx.strokeStyle = "rgba(0,0,0,0)"
            ctx.rotate( initRadValue*perRad )

            const drawDot = () => {
                let count = 0
                if (typeof score == "number") {
                    count = Math.floor(score / perScore)
                }
                for (let i = 0; i < maxDot ; i++) {
                    ctx.rotate(perRad)
                    generateDot(i < count ? "white" : color)
                }
            }

            const generateDot = (color) => {
                ctx.beginPath()
                ctx.ellipse(0, - r + bezierCurvesControlPointY / 2 + 10, bezierCurvesControlPointX/2, bezierCurvesEndPointY/2,  0, 0 ,2*Math.PI)
                ctx.fillStyle = color
                ctx.fill()
            }
            drawDot()
            // 绘制文字，将画布摆正，顺时针的总旋转角度加上逆时针的初始旋转角度，得到原始角度
            ctx.rotate(-(maxDot+initRadValue)*perRad)
        	ctx.font = "28px san"
        	ctx.fillStyle  = "white"
        	ctx.textAlign  = "center"
        	ctx.textBaseline = "middle";
        	ctx.fillText(`${this.level}`, 0, -35)
        	ctx.font = "20px san"
        	ctx.fillText(`${this.score} 分`, 0, 0)
        }
    }
}
</script>
<style lang="stylus" scoped>
.container{
	display:inline-block;
	text-align:center;
	input {
		width:100%;
		margin-top:20px;
	}
	.canvas-wrap{
		padding: 20px;
	}
}
</style>
```