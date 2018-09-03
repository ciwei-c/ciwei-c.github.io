<template>
	<div class="wave-wrap">
	    <div class="canvas-wrap">
	        <div class="percentCount">{{percentCount}}%</div>
	        <canvas id="wave"></canvas>
	    </div>
		<input v-model="inputPercent" type="range" max="100" min="0" @change="draw()" class="range-input">
	</div>
</template>
<script>
export default {
    name: "Wave",
    data() {
        return {
        	inputPercent:0,
        	percentCount:0,
        	interval:null
        }
    },
    mounted() {
        this.initCanvas();
    },
    methods: {
        initCanvas() {
            this.canvasEl = document.getElementById("wave");
            this.cxt = this.canvasEl.getContext("2d");
            this.canvasEl.width = 210;
            this.canvasEl.height = 200;

            this.waveFrontHeight = this.canvasEl.height * 0.03;
            this.waveFrontWidth = 0.02;
            this.waveFrontOffsetX = 0;
            this.waveFrontOffsetY = this.canvasEl.height;

            this.waveBackHeight = this.canvasEl.height * 0.01;
            this.waveBackWidth = 0.04;
            this.waveBackOffsetX = 0;
            this.waveBackOffsetY = this.canvasEl.height;

            if (window.devicePixelRatio) {
                this.canvasEl.style.width = this.canvasEl.width + "px";
                this.canvasEl.style.height = this.canvasEl.height + "px";
                this.canvasEl.height = this.canvasEl.height * window.devicePixelRatio;
                this.canvasEl.width = this.canvasEl.width * window.devicePixelRatio;
                this.cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
            }
        },
        draw(){
        	clearInterval(this.interval);

        	let p =  1-this.inputPercent/100

        	this.percentCount = 0;

        	this.waveFrontOffsetX = 0;
            this.waveFrontOffsetY = this.canvasEl.height;
            this.waveBackOffsetX = 0;
            this.waveBackOffsetY = this.canvasEl.height;

            this.interval = setInterval(() => {
                this.cxt.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
                this.waveFrontOffsetX++;
                this.waveBackOffsetX++;
                if (this.waveFrontOffsetY > this.canvasEl.height * p)this.waveFrontOffsetY--;
                if (this.waveBackOffsetY > this.canvasEl.height * p) this.waveBackOffsetY--;
                this.percentCount = Math.floor(100 * (this.canvasEl.height - this.waveBackOffsetY) / this.canvasEl.height);
                this.drawBack();
                this.drawFront();
            }, 16)
        },
        getPoints(type) {
            this.points = [];
            for (var i = 0; i < this.canvasEl.width; i++) {
                this.points.push({
                    x: i,
                    y: this.getSin(i, type)
                })
            }
        },
        getSin(x, type) {
            return this["wave" + type + "Height"] * Math.sin(x * this["wave" + type + "Width"] + this["wave" + type + "OffsetX"] / (6 * Math.PI)) + this["wave" + type + "OffsetY"];
        },
        drawBack() {
            this.cxt.beginPath();
            this.getPoints("Back");
            this.cxt.moveTo(this.points[0].x, this.points[0].y);
            for (var i = 0; i < this.points.length - 1; i++) {
                var point = this.points[i];
                this.cxt.lineTo(point.x, point.y);

            }
            this.cxt.lineTo(this.canvasEl.width, this.canvasEl.height);
            this.cxt.lineTo(0, this.canvasEl.height)
            this.cxt.lineTo(this.points[0].x, this.points[0].y);
            this.cxt.fillStyle = "rgba(112, 149, 213,0.3)"
            this.cxt.fill();
        },
        drawFront() {
            this.cxt.beginPath();
            this.getPoints("Front");
            this.cxt.moveTo(this.points[0].x, this.points[0].y);
            for (var i = 0; i < this.points.length - 1; i++) {
                var point = this.points[i];
                this.cxt.lineTo(point.x, point.y);

            }
            this.cxt.lineTo(this.canvasEl.width, this.canvasEl.height);
            this.cxt.lineTo(0, this.canvasEl.height)
            this.cxt.lineTo(this.points[0].x, this.points[0].y);
            this.cxt.fillStyle = "rgba(112, 149, 213,1)"
            this.cxt.fill();
        }
    }
}
</script>
<style lang="stylus" scoped>
.range-input {
	width:200px;
	margin-top:20px;
	border:none;
	outline:none;
}
.percentCount {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
}
.wave-wrap{
	text-indent:0 !important;
}
.canvas-wrap {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #ccc;
    position: relative;
    overflow:hidden;
}
</style>