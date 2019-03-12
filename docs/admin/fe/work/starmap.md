---
sidebar: auto
---

## 高德地图星光效果
<star-map></star-map>

## 实现

### 高德api对该功能的限制

临时需求，使用高德作为地图呈现，查看了高德开发者平台的api后发现，现有的接口无法满足项目需求，主要有：

:::tip 例如
无法实现逐渐动态呈现星光

星光由ucd自定义，全随机呈现，定制化较多

高德地图现有api只有海量图标，海量图标为静态，无法实现星光闪闪的效果
:::

### 实现思路

:::tip 思路

1、获取坐标点集合

2、随机获取星光点放置每个点位上面，随机设置初始点的大小

3、requestAnimationFrame 动态设置点位的位移和大小，造成星光闪烁的效果

4、将所有的坐标点分块，使之分离开来，让其动画效果有各自的状态，制造出一种多个图层的效果

:::

```vue
<template>
    <div id="map" class="height100">
      <slot></slot>
    </div>
</template>
<script>
import { sleep } from "@/utils"
export default {
  name: "StarMap",
  data() {
    return {
      mapInst: null
    }
  },
  props:{
    starMapData:{
      type:Object,
      default(){
        return {}
      }
    },
    chunkStyleCount:{
      type:Number,
      default:100
    },
    chunkMassCount:{
      type:Number,
      default:20
    },
    starMoveTime:{
      type:Number,
      default:100
    },
    iconMinSize:{
      type:Number,
      default:20
    },
    iconMaxSize:{
      type:Number,
      default:38
    },
    zoom:{
      type:Number,
      default:3
    },
    delay:{
      type:Number,
      default:1
    },
    mapStyle:{
      type:String,
      default:"darkblue"
    },
    isTwinkle:{
      type:Boolean,
      default:true
    },
    centerLnglat:{
      type:Array,
      default(){
        return []
      }
    }
  },
  watch:{
    starMapData(){
      !this.mapInst && this.initMap()
    }
  },
  methods: {
    getMapDataForMass() {
      return this.starMapData.list.map(item => {
        item.lnglat = [item.bD09_lng, item.bD09_lat]
        item.style = Math.round(this.random(this.chunkStyleCount - 1))
        return item
      })
    },
    getStyleForMass() {
      let style = []
      for (let i = 1; i <= this.chunkStyleCount; i++) {
        let s = this.random(this.iconMinSize)
        style.push({
          url: require(`@/assets/map/0${Math.round(this.random(6))}.png`),
          size: new AMap.Size(s, s),
          anchor: new AMap.Pixel(s / 2, s / 2)
        })
      }
      return style
    },
    getRandomStarSize() {
      let [min, max] = [this.random(this.iconMaxSize), this.random(this.iconMaxSize)].sort((a, b) => a - b)
      return {
        max,
        min
      }
    },
    getScaleRule() {
      let scaleRule = []
      for (var i = 1; i <= this.chunkStyleCount; i++) {
        let randomSize = this.getRandomStarSize()
        scaleRule.push({
          max: randomSize.max,
          min: randomSize.min,
          state: this.random() > 0.5 ? -1 : 1
        })
      }
      return scaleRule
    },
    setMassMarks() {
      let massData = this.getMapDataForMass()
      let style = this.getStyleForMass()
      let massMarks = new AMap.MassMarks([], {
        zIndex: 50000,
        zooms: [3, 19],
        style: style
      })
      if (this.isTwinkle) {
        let _massData = []
        const setData = async () => {
          _massData = [..._massData, ...massData.splice(0, this.chunkMassCount)]
          massMarks.setData(_massData)
          window.requestAnimationFrame(setData)
        }
        setData()
        massMarks.setMap(this.mapInst)
        const scaleRule = this.getScaleRule()
        const setBreath = async () => {
          style = style.map((item, idx) => {
            let size = item.size.width
            let rule = scaleRule[idx]
            let speed = (rule.max - rule.min) / this.starMoveTime
            if (size > rule.max) {
              rule.state = -1
            } else if (size < rule.min) {
              rule.state = 1
            }
            size += Math.abs(speed) * rule.state
            item.size = new AMap.Size(size, size)
            return item
          })
          massMarks.setStyle(style)
          window.requestAnimationFrame(setBreath)
        }
        setBreath()
      }else{
        massMarks.setData(massData)
        massMarks.setMap(this.mapInst)
      }
    },
    random(multiple) {
      return Math.random() * multiple
    },
    initMap(cb) {
      this.$getGdmap().then(()=>{
        if (!document.getElementById("map")) return
        this.mapInst = new AMap.Map('map', {
          features: ["bg", "road", "point"],
          zoom: this.zoom,
          center: this.centerLnglat,
          mapStyle: `amap://styles/${this.mapStyle}`
        });
        AMap.event.addListener(this.mapInst, "complete", async () => {
          await sleep(this.delay)
          this.$emit("loaded")
          this.setMassMarks()
        })
      })
    }
  }
}

</script>
<style lang="less" scoped>
</style>

```