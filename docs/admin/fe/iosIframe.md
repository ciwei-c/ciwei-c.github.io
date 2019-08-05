---
sidebar: auto
---
# ios iframe 宽度自适应

ios H5页面中，如果打开iframe，宽度不能自适应百分百，解决方法如下

```html
<iframe id="iframe" scrolling="no" src="xxx.com" frameborder="0"></iframe>
```

```css
iframe {
    height:100%;
    overflow: scroll;
    min-width: 100%;
    *width:100%;
    width:1px;
}
```