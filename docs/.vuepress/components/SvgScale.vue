<template>
	<div>
		<div class="container">
			<div class="svg-wrap">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				  	<defs>
					    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
						    <stop offset="0%" style="stop-color:#2DEDE4;stop-opacity:1" />
						    <stop offset="100%" style="stop-color:#086178;stop-opacity:1" />
					    </linearGradient>
				 	</defs>
				  	<defs>
					 	<path id="p" d="M0 0 L1 0 L1 10 L0 10 Z" fill="#fff" />
					</defs>
				  	<defs>
					 	<path id="l" d="M0 0 L1 0 L1 40 L0 40 Z" fill="#fff" />
					</defs>
				  	<defs>
					 	<path id="a" d="M0 0 L1 0 L1 10 L0 10 Z" fill="url(#grad1)" />
					</defs>
				  	<defs>
					 	<path id="b" d="M0 0 L1 0 L1 40 L0 40 Z" fill="url(#grad1)" />
					</defs>
					<use :xlink:href="item.id" :x="item.x" :y="item.y" v-for="(item,idx) in count" />
					<path id="dd" :d="getLine()" fill="#fff" />
				</svg>
			</div>
			<div>
	    		<img src="/point.png" ref="icon" alt="" :style="{'animation-duration':`${totalTime}s`}">
			</div>
		</div>
		<button @click="replay()" :disabled="!canReplay">replay</button>
	</div>
</template>
<script>
	export default {
    name: "SvgScale",
    data() {
        return {
			count:[],
			wrapWidth:0,
			scaleLen:12,
			splitOrder:20,
			totalTime:12,
			canReplay:false
        }
    },
    computed:{
    	totalMark(){
    		return this.scaleLen*this.splitOrder + 1
    	},
    	time(){
    		return this.totalTime*1000/this.count.length
    	}
    },
    mounted(){
		this.wrapWidth = document.querySelector(".svg-wrap").offsetWidth
		for(let i = 0 ; i < this.totalMark; i ++){
			let isLong = (i % this.splitOrder == 0)
			this.count.push({
				y:!isLong ? "30" : "0",
				x:i*(this.wrapWidth/this.totalMark),
				id:!isLong ? "#p" : "#l"
			})
		}
    	this.init()
	},
	methods:{
		replay(){
			this.count.forEach((item,idx)=>item.id = idx % this.splitOrder != 0 ? "#p" : "#l")
			this.$refs.icon.classList.remove("move")
			setTimeout(()=>{
				this.init()
			},1)
		},
		init(){
			this.$refs.icon.classList.add("move")
			this.canReplay = false
			this.count.forEach((item,idx) => {
				setTimeout(()=>{
					item.id = idx % this.splitOrder != 0 ? "#a" : "#b"
					if (idx === this.count.length - 1 ) this.canReplay = true 
				},idx*this.time)
			})
		},
		getLine(){
			return `M0 44 L${this.wrapWidth} 44 L${this.wrapWidth} 43 L0 43 Z`
		}
	}
}
</script>
<style lang="stylus" scoped>
.container {
	background: #023547;
	padding: 20px;
	padding-bottom:40px;
	position:relative;
	.move {
		animation:move linear;
	}
	svg {
		height: 50px;width: 100%;
	}
	img {
		width:10px;
		position:absolute;
		left:15px;
		bottom:20px;
	}
	@keyframes move {
		from {
			left:15px;
		}
		to {
			left:calc(100% - 25px);
		}
	}
}
</style>