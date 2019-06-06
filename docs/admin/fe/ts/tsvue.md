---
sidebar: auto
---

# ts vue

## vuex-class
:::tip
- 在vue项目中，使用typeScript写vuex，需要引入vue-class

- vue-class 提供许多装饰器来处理
:::

```typescript
import {Getter, Mutation, State} from 'vuex-class'

@Component
export default class About extends Vue {
  @Getter("count") count!:number
  @Mutation("caculate") caculate!:Function
}
```
store 的写法较原先可以基本不变
```typescript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface State {
  count:number
}
let state:State = {
  count:1
}
export default new Vuex.Store({
  state: state,
  mutations: {
    caculate(state:State,payload:number){
      state.count += payload
    }
  },
  getters: {
    count(state:State){
      return state.count
    }
  }
})

```

## vue-property-decorator
使用
```typescript
import { Component, Prop, Vue , Emit, Provide, Inject, Model, Watch, Mixins } from 'vue-property-decorator'
```
### @Model
```typescript
// 父组件
// vue
<button @click="show=true">show</button>
<child-components v-model="show"></child-components>

//ts
@Component({
  components:{ChildComponents}
})
export default class Father extends Vue {
  show:boolean = false
}
```
```typescript
// 子组件
// vue
<button @click="hide">@Model</button>
// ts
@Component
export default class ChildComponents extends Vue {
  @Model('input') show!:boolean
  hide(){
    this.input()
  }

  @Emit('input')
  input(){}
}
```
### @Emit
```typescript
// 父组件
// vue
<child-components @childEmit="childEmit"></child-components>

// ts
@Component({
  components:{ChildComponents}
})
export default class Father extends Vue {
  childEmit(data:any){
    console.log(data)
  }
}
```
```typescript
// 子组件
// vue
<button @click="emit">@Emit</button>
// ts
@Component
export default class ChildComponents extends Vue {
  @Emit("childEmit")
  emit(){
    return {a:1}
  }
}
```
::: tip
@Emit( )若没有传递参数，那么事件名为函数名，camelCase名称将转换为kebab-case。
:::
### @Prop
```typescript
// 父组件
<child-components msg="prop"></child-components>
```
```typescript
// 子组件
@Component
export default class ChildComponents extends Vue {
  @Prop() private msg!: string;
}
```
### @Provide/@Inject
:::tip
父子组件之间数据不便传输，或者子组件想调用父组件的方法，可以在父组件使用@Provide，子组件@Inject调用
:::
```typescript
// 父组件
@Component({
  components:{ChildComponents}
})
export default class About extends Vue {
  @Provide()
  fn(){
    console.log("this is father fn")
  }
}
```
```typescript
// 子组件
@Component
export default class ChildComponents extends Vue {
  @Inject('fn') fn!:Function
}
```
### @Watch
```typescript
@Component
export default class About extends Vue {
  value:string = ""
  @Watch('value', { immediate: true, deep: true })
  onValueChanged(val: string, oldVal: string) { 
  }
}
```

### @Mixins
```typescript
import SomeMixin from '@/mixin/SomeMixin' 

@Component
export default class MixinsCompenent extends Mixins(Vue, SomeMixin) {
  // todo
}
```