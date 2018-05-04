---
sidebar: auto
---
# vue弹窗组件

弹窗可以说是基本上每个前端项目中都会用到的东西，在vue中实现弹窗效果，有两种方式。

1、注册成component组件使用。
2、使用Vue.extend构造器创建子类，并创建组件实例来挂在自定义元素上。
以alert弹窗为例，先实现一个alert的component

```html
<template>
    <transition name="fade">
        <div class="alert"  v-if="isShow">
            <div class="message">{{ message }}</div>
            <div class="btn" @click="close()">我知道了</div>
        </div>
    </transition>
</template>
<script>
export default {
    name:"alert",
    data(){
        return {
            isShow:false
        }
    },
    props:{
        message:{
            type:String,
            default:"提示"
        }
    },
    methods:{
        show(){
            this.isShow = true;
        },
        close(){
            this.isShow = false;
        }
    }
}
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0
    }
</style>
```

## 直接注册成组件使用

```javascript
// js
import Vue from "./vue"
import alert from "./alert.vue"
Vue.component("myAlert",alert);
```

```html
<!-- vue 文件 -->
<template>
  <div @click="showAlert()">打开弹窗</div>
  <my-alert ref="alert"></my-alert>
</template>
<script>
export default {
    name:"test",
    methods:{
        showAlert(){
            this.$refs.alert.show();
        }
    }
}
</script>
<style scoped>
</style>
```

## 使用vue.extend

vue.extend(options)
参数：{object} options
用法：使用vue的构造器，创建一个子类，参数是一个包含组件选项的对象。data选项是特例，必须是函数。


```javascript
import Vue from 'vue'
import Alert from './alert.vue'

// 创建子类及自定义元素
const AlertConstructor = Vue.extend(Alert);
const div = document.createElement("div");

// 添加一个方法
AlertConstructor.show = (opts) => {
    document.body.appendChild(div);
    const propsData = Object.assign({},opts);
    const alert = new AlertConstructor({
       propsData  // propsData 与弹窗组件进行通信的值，可以修改弹窗组件中的数据
    }).$mount(div);  // 将实例挂载在自定义的元素上
    alert.show(opts); // 调用实例的方法
}

Vue.prototype.$alert = AlertConstructor; // 添加子类到 vue 的原型上面
```


```html
<!-- 调用 -->
<template>
  <div @click="showAlert()">打开弹窗</div>
  <my-alert ref="alert"></my-alert>
</template>
<script>
export default {
    name:"test",
    methods:{
        showAlert(){
        	// 调用添加在vue原型上$alert对象的方法
            this.$alert.show({
                message:"测试"
            })
        }
    }
}
</script>
<style scoped>
</style>
```

## 小结

通过以上两种方式简单实现了一下vue.js的alert弹窗组件，仅作一下小结。
可以拓展开来实现更多的自定义参数，如弹窗类型、样式、定时等，也可实现confirm确认组件，toast提示组件，loading加载中效果等。