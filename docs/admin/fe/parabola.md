---
sidebar: auto
---
## 抛物效果


<Parabola></Parabola>

## 实现
```
1、由于页面的坐标系原点（0，0）在左上角，并且坐标系的返回值都是正数，为了方便计算，将页面看作普通坐标系的第四象限，坐标纵轴的点取反

2、如果使用页面的坐标系原点，那么方程式将为 y = ax^2 + bx + c ，存在三个未知数，所以取起始点附近的坐标点为中心轴，方程式抽象为 y = ax^2 + b

3、为了灵活呈现，可以根据中心轴的位置来改变抛物线的顶点，所以中心轴横坐标点可以根据起始点自行传参调整
```
```javascript
const parabola = options => {
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
```