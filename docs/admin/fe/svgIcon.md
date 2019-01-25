---
sidebar: auto
---
# svg图标

## 项目中的图标

项目开发中经常使用到图标，特别是移动端的开发，通常使用iconfont或者图片，但是各有利弊

### 图片
::: tip 优点
直接替换快，新增方便
:::

::: danger 缺点
如果全部使用图片的话增加多次请求次数，且不能随意更换颜色
:::

### iconfont
::: tip 优点
1、可以设置字号

2、可以随意设置颜色

3、无需发请求
:::

::: danger 缺点
新增不便，每次新增图标都需要重新生成
:::

### 解决方案--svg图标
::: tip 优点
1、可直接新增，不需要重新生成

2、无需发送请求

3、可随意设置大小和颜色

4、体积小
:::

## vue实现svg图标

#### 1、引入 svg-sprite-loader 包
```json
yarn add svg-sprite-loader -d
```

#### 2、webpack 配置
```javascript
module: {
    rules: [{
	    test: /\.svg$/,
	    include: [resolve('src/assets/svgicon')],
	    loader: 'svg-sprite-loader',
	    options: {
	        symbolId: 'icon-[name]'
	    }
    }]
 }
```

#### 3、组件封装 SvgIcon.vue 
```vue
<template>
  <svg class="svg-icon" 
  	aria-hidden="true" 
  	:class="iconClass" 
  	:width="width" 
  	:height="height" 
  	:fill="color"
  >
    <use :xlink:href="`#${iconClass}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'svgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  created() {
    require(`@/assets/${this.icon}.svg`)
  },
  computed: {
    iconClass() {
      return `icon-${this.icon}`
    }
  }
}

</script>
<style>
</style>
```

#### 4、全局挂载组件
```vue
import SvgIcon from 'SvgIcon'
Vue.component('svg-icon', SvgIcon)
```

#### 5、使用
```vue
<svg-icon icon="xxx" :height="20" :width="20" color="rgba(77,77,77,0.8)"></svg-icon>
```