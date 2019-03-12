---
sidebar: auto
---

## vue-property-decorator
使用
```typescript
import { Component, Prop, Vue , Emit, Provide, Inject, Model, Watch } from 'vue-property-decorator'
```
## @Model
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
## @Emit
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
## @Prop
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
## @Provide/@Inject
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
## @Watch
```typescript
@Component
export default class About extends Vue {
  value:string = ""
  @Watch('value', { immediate: true, deep: true })
  onValueChanged(val: string, oldVal: string) { 
  }
}
```