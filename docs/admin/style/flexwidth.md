---
sidebar: auto
---
# flex 子元素宽度被内容撑开问题

弹性布局使用过程中，给子元素设置 flex:1; 属性之后，不希望他被元素内容撑开，超出部分使用省略号

以下这样写是不行的
```css
.flex {
    flex:1;
    overflow:hidden;
    text-overflow:ellipsis;
}
```

可以将子元素宽度设为0，宽度由 flex 定义

```css
.flex {
    flex:1;
    overflow:hidden;
    text-overflow:ellipsis;
    width:0;
}
```
