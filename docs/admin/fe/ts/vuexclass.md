---
sidebar: auto
---

## vue-class
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