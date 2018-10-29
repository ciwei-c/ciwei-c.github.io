---
sidebar: auto
---
# 购物车抛物效果
<Parabola></Parabola>

# 实现原理

```
1、由于页面的坐标系原点（0，0）在左上角，并且坐标系的返回值都是正数，为了方便计算，将页面看作普通坐标系的第四象限，坐标纵轴的点取反

2、如果使用页面的坐标系原点，那么方程式将为 y = ax^2 + bx + c ，存在三个未知数，所以取起始点附近的坐标点为中心轴，方程式抽象为 y = ax^2 + b

3、为了灵活呈现，可以根据中心轴的位置来改变抛物线的顶点，所以中心轴横坐标点可以根据起始点自行传参调整
```

```vue
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
	    	<div class="car">
	    		<img src="/car.png" alt="">
	    		<div class="car-count">{{carCount}}</div>
	    	</div>
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
    	var list = ["苹果","香蕉","橘子","橙子","石榴","蛇果","凤梨","梨子","桃子","白枣"];
    	this.list = list.map(item=>{
    		return {
    			name:item,
    			count:0
    		}
    	})
    },
    mounted() {
    	var car = document.querySelector(".car");
    	var carCount = document.querySelector(".car-count");
    	this.rect = {
    		left:carCount.offsetLeft+car.offsetLeft,
    		top:carCount.offsetTop+car.offsetTop
    	}
    },
    methods: {
        onAdd(e,item){
        	item.count++;
        	this.carCount++;
        	var target = e.target;
        	var dom = document.createElement("div");
        	dom.innerText = item.name;
        	this.parabola({
        		el:dom,
        		start:{
        			top:target.offsetTop - window.scrollY,
        			left:target.parentNode.previousSibling.offsetLeft
        		},
        		end:{
        			top:this.rect.top - window.scrollY,
        			left:this.rect.left
        		},
        		vertexLeft:this.vertex
        	})
        },
        onMinus(item){
        	item.count--;
        	this.carCount--;
        },
        parabola:function(options){
            var start = options.start;
            var end = options.end;
            var count = 1;
            var animationFrame = null;
            var distance = Math.abs(end.left - start.left);
            var stepDistance = distance/((options.time || 1000)/16);
            var vertexLeft = start.top < end.top ? -(options.vertexLeft||50) : -(distance - (options.vertexLeft||50));
            var a = ((-start.top) - (-end.top))/(Math.pow(vertexLeft,2)-Math.pow(vertexLeft+distance,2));
            var c = -start.top - a*Math.pow(vertexLeft,2);

            document.body.appendChild(options.el);
            var style = {position:"fixed",fontSize:"12px",height:"35px",width:"35px",background:"rgba(0,0,0,0.6)",borderRadius:"50%",color:"#fff",textAlign:"center",lineHeight:"35px",top:0,left:0,transform:'translate('+start.left+'px,'+start.top+'px)','-webkit-transform':'translate('+start.left+'px,'+start.top+'px)'}
	        for(var k in style){
	        	options.el.style[k] = style[k];
	        }
	        var direct = 1;
	        if (end.left < start.left) direct *= -1;
            var move = function(){
                var newTranslate = 'translate('+(start.left + count*stepDistance*direct)+'px,'+ (-(a*Math.pow(vertexLeft + count*stepDistance,2) + c))+'px)';
            	options.el.style.transform = newTranslate;
            	options.el.style['-webkit-transform-'] = newTranslate;
                count ++;
                if(count*stepDistance > distance){
                    cancelAnimationFrame(animationFrame);
                    options.el.remove();
                }else{
                    animationFrame = requestAnimationFrame(move);
                }
            }
           move();
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
			display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		}
		.flex-vc{
		    -webkit-box-align: center;
		    -webkit-align-items: center;
		    -ms-flex-align: center;
		    align-items: center;
		}
		.flex-aj{
		    -webkit-box-pack: justify;
		    -webkit-justify-content: space-between;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		}
		.list {
		    border-top:1px solid #eee;
		    padding:5px 0;
		}
		.list-count {
			padding:0 10px;
			width:20px;
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
			text-align:right;
		    border-top:1px solid #eee;
		    padding:20px 0;
		    position:relative;
		    .car-count{
		    	text-align:center;
		    	position:absolute;
		    	top:20%;
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
			width:100%;
		}
	}
</style>
```