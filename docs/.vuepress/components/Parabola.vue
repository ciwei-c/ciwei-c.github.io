<template>
	<div class="parabola-wrap">
	    <div class="list-wrap">
	    	<div v-if="list.length" class="list flex flex-vc flex-aj" v-for="(item,idx) in list">
	    		<div>{{idx+1}}、{{item.name}}</div>
	    		<div class="flex flex-vc">
	    			<div v-if="item.count" class="btn minus-btn" @click.stop="onMinus(item)">-</div>
	    			<div v-if="item.count" class="list-count">{{item.count}}</div>
	    			<div class="btn add-btn" @click.stop="onAdd($event,item)">+</div>
	    		</div>
	    	</div>
	    </div>
    	<div class="car">
    		<img src="/car.png" alt="">
    		<div class="car-count">{{carCount}}</div>
    	</div>
		<input class="vertex-left" v-model="vertex" type="range" max="100" min="0">
    	<div>拖动调整抛物线路径</div>
	</div>
</template>
<script>
export default {
    name: "Parabola",
    data() {
        return {
        	list:[],
        	carCount:0,
        	rect:{},
    		vertex:50
        }
    },
    created(){
    	let list = ["苹果","香蕉","橘子","橙子","石榴","蛇果","凤梨","梨子","桃子","白枣"]
    	this.list = list.map(item=>{
    		return {
    			name:item,
    			count:0
    		}
    	})
    },
    mounted() {
    	let car = document.querySelector(".car")
    	this.rect = {
    		left:car.offsetLeft,
    		top:car.offsetTop
    	}
    },
    methods: {
        onAdd(e,item){
        	item.count++
        	this.carCount++
        	let target = e.target
        	let dom = document.createElement("div")
        	let style = {
	            position:"fixed",
	            fontSize:"12px",
	            height:"35px",
	            width:"35px",
	            background:"rgba(0,0,0,0.6)",
	            borderRadius:"50%",
	            color:"#fff",
	            textAlign:"center",
	            lineHeight:"35px",
	            top:0,
	            left:0
	        }
	        for(let k in style){
	        	dom.style[k] = style[k]
	        }
        	dom.innerText = item.name
        	this.parabola({
        		el:dom,
        		start:{
        			top:target.offsetTop - window.scrollY,
        			left:target.parentNode.previousSibling.offsetLeft
        		},
        		end:{
        			top:this.rect.top,
        			left:this.rect.left
        		},
        		vertexLeft:this.vertex
        	})
        },
        onMinus(item){
        	item.count--
        	this.carCount--
        },
        parabola(options){
            let start = options.start
            let end = options.end
            let animationFrame = null
            // 默认中心轴距离起始点的距离50
            let vertexLeft = options.vertexLeft||50
            // 每16毫秒横轴移动多少距离（requestAnimationFrame一次动画约为16毫秒）
            let distance = Math.abs(end.left - start.left)
            let stepDistance = distance/((options.time || 1000)/16)
            // 计算经过了多少次16毫秒，方便统计总共移动了多少距离
            let count = 1
            // 确定中心轴的横轴坐标点，代入已知点，得到抛物线方程式的未知参数
            // 求得方程式 y = a*Math.pow(x,2) + b
            let centralAxis = start.top < end.top ? -(vertexLeft) : -(distance - (vertexLeft))
            let a = ((-start.top) - (-end.top))/(Math.pow(centralAxis,2)-Math.pow(centralAxis+distance,2))
            let b = -start.top - a*Math.pow(centralAxis,2)

            // 终点横坐标是否大于起点横坐标，确定抛物线动画路径向左还是向右
	        let direct = 1
	        if (end.left < start.left) direct *= -1

            document.body.appendChild(options.el)
	        const setTranslate = (x,y) => {
	        	let translate = `translate(${x}px,${y}px)`
	            options.el.style[`transform`] = translate
	            options.el.style[`-webkit-transform`] = translate
	        }

	        setTranslate(start.left,start.top)

            const move = () => {
            	let x = start.left+count*stepDistance*direct
            	let y = -(a*Math.pow(centralAxis + count*stepDistance,2) + b)
                setTranslate(x,y)
                count ++
                if(count*stepDistance > distance){
                    cancelAnimationFrame(animationFrame)
                    options.el.remove()
                }else{
                    animationFrame = requestAnimationFrame(move)
                }
            }
           	move()
        }
    }
}
</script>
<style lang="stylus" scoped>
	.parabola-wrap {
		width:50%;
		.list-wrap {
			background:#fff;
			box-shadow:0px 0px 10px 2px;
		    padding:0 20px;
		}
		.flex {
		    display: -webkit-flex;
		    display: flex;
		}
		.flex-vc{
		    -webkit-align-items: center;
		    align-items: center;
		}
		.flex-aj{
		    -webkit-justify-content: space-between;
		    justify-content: space-between;
		}
		.list {
		    border-top:1px solid #eee;
		    padding:5px 0;
		}
		.list-count {
			padding:0 10px;
			width:40px;
			text-align:center;
		}
		.vertex-left {
			width:100%;
			margin-top:20px;
		}
		.btn {
			color:#fff;
			padding:3px 0;
			border-radius:3px;
		    font-size:14px;
		    cursor:pointer;
		    width:30px;
		    text-align:center;
		}
		.add-btn {
			background:#537BFF;
		}
		.minus-btn {
			background:#f6503b;
		}
		.btn:active{
			opacity:0.6;
		}
		.car {
		    position:fixed;
		    top:70%;
		    right:0%;
		    z-index:1000;
		    .car-count{
		    	text-align:center;
		    	position:absolute;
		    	top:0;
		    	right:0;
		    	background:#f6503b;
		    	color:#fff;
		    	font-size:12px;
		    	border-radius:50%;
		    	height:15px;
		    	width:15px;
		    	line-height:15px;
		    }
			img{
				width:30px;
			}
		}
	}
	@media screen and (max-width:959px){
		.parabola-wrap {
			width:90%;
		}
	}
</style>