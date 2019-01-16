---
sidebar: auto
---
## 波浪效果

拖动滚动条查看效果
<wave></wave>

## 实现
    使用正弦曲线函数画出波浪形状，调整参数改变浪花高度、宽度、移动频率、上涨距离

    y = Asin(Bx+C)+D

    A-浪花高度
    B-浪花宽度
    C-浪花横轴的位移
    D-浪花纵轴的位移

    绘制两个canvas，使其实现浪花层叠效果，设置不同的频率看起来更和谐

```vue
<template>
	<div class="wave-wrap">
	    <div class="canvas-wrap">
	        <canvas id="wave"></canvas>
	    </div>
		<input v-model="inputPercent" type="range" max="100" min="0" @change="draw()">
	</div>
</template>
<script>
export default {
    name: "Wave",
    data() {
        return {
        	inputPercent:0,
        	percentCount:0,
        	animationFrame:null
        }
    },
    mounted() {
        this.initCanvas();
    },
    computed:{
    	remainInputPercent(){
    		return 1-this.inputPercent/100
    	}
    },
    methods: {
        initCanvas() {
            this.canvasEl = document.getElementById("wave")
            this.ctx = this.canvasEl.getContext("2d")
            this.ctxWidth = this.canvasEl.width = 200
            this.ctxHeight = this.canvasEl.height = 200
            
            this.initProp()
            
            if (window.devicePixelRatio) {
                this.canvasEl.style.width = this.canvasEl.width + "px"
                this.canvasEl.style.height = this.canvasEl.height + "px"
                this.canvasEl.height = this.canvasEl.height * window.devicePixelRatio
                this.canvasEl.width = this.canvasEl.width * window.devicePixelRatio
                this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
            }
            this.drawPercentText()
        	this.clipArc(true)
        },
        initProp(){
        	this.waveFrontHeight = this.ctxHeight * 0.03
            this.waveFrontWidth = 0.02
            this.waveFrontOffsetX = 0
            this.waveFrontOffsetY = this.ctxHeight

            this.waveBackHeight = this.ctxHeight * 0.01
            this.waveBackWidth = 0.04
            this.waveBackOffsetX = 0
            this.waveBackOffsetY = this.ctxHeight
        },
        animationWave(isUp){
        	this.ctx.clearRect(0, 0, this.ctxWidth, this.ctxHeight)
        	this.clipArc()
            this.waveFrontOffsetX++
            this.waveBackOffsetX++
            let target = this.ctxHeight * this.remainInputPercent
            let isGt = this.waveFrontOffsetY > target

            isUp
            ?isGt && this.waveFrontOffsetY-- && this.waveBackOffsetY--
            :!isGt && this.waveFrontOffsetY++ && this.waveBackOffsetY++
            
            this.percentCount = Math.floor(100 * (this.ctxHeight - this.waveBackOffsetY) / this.ctxHeight)
            this.drawWave("Back","rgba(112, 149, 213,0.3)")
            this.drawWave("Front","rgba(112, 149, 213,1)")
            this.drawPercentText()
        	this.animationFrame = requestAnimationFrame(this.animationWave.bind(this,isUp))
        },
        drawPercentText(){
        	this.ctx.font = "18px Courier New"
        	this.ctx.fillStyle  = "blue"
        	this.ctx.textAlign  = "center"
        	this.ctx.textBaseline = "middle";
        	this.ctx.fillText(`${this.percentCount}%`, 100, 100)
        },
        draw(){
        	cancelAnimationFrame(this.animationFrame)
        	let isUp = this.percentCount <= this.inputPercent ? true : false
        	this.animationWave(isUp)
        },
        clipArc(isClip){
        	this.ctx.lineWidth = 2 
        	this.ctx.beginPath()
        	this.ctx.strokeStyle = "rgba(112, 149, 213,1)"
        	this.ctx.arc(100,100,98,0,2*Math.PI)
        	if(isClip) this.ctx.clip()
        	this.ctx.stroke()
        },
        getPoints(type) {
            this.points = []
            for (var i = 0; i < this.ctxWidth; i++) {
                this.points.push({
                    x: i,
                    y: this.getSin(i, type)
                })
            }
        },
        getSin(x, type) {
        	let A = this[`wave${type}Height`]
        	let B = this[`wave${type}Width`]
        	let C = this[`wave${type}OffsetX`]
        	let D = this[`wave${type}OffsetY`]
            return A * Math.sin(x * B + C / (3 * Math.PI)) + D
        },
        drawWave(dir,color) {
            this.ctx.beginPath()
            this.getPoints(dir)
            this.ctx.moveTo(this.points[0].x, this.points[0].y)
            for (var i = 0; i < this.points.length - 1; i++) {
                var point = this.points[i]
                this.ctx.lineTo(point.x, point.y)

            }
            this.ctx.lineTo(this.ctxWidth, this.ctxHeight)
            this.ctx.lineTo(0, this.ctxHeight)
            this.ctx.lineTo(this.points[0].x, this.points[0].y)
            this.ctx.fillStyle = color
            this.ctx.fill()
        }
    }
}
</script>
<style lang="stylus" scoped>
input {
	width:200px;
	margin-top:20px;
	border:none;
	outline:none;
}
*{
	text-indent:0 !important;
}
</style>
```