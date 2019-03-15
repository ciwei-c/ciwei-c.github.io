---
sidebar: auto
---

## ts Mixin
::: tip
mixin 没有装饰器，export一个类来实现 mixin 的功能
:::
```typescript
// mixin.ts
import { Vue, Component } from 'vue-property-decorator'

declare module 'vue/types/vue' {
    interface Vue {
        data:any
        callback():void
    }
}

@Component
export default class MixinPoint extends Vue {
    data:any = {
        x:1,
        y:1
    }
    callback(){
        console.log("this is mixin data")
    }
}
```
```typescript
import mixin from '@/mixin/mixin.ts'

@Component({
  mixins: [mixin]
})
export default class About extends Vue {
  mounted(){
    this.callback() // "this is mixin data"
  }
}
```