---
sidebar: auto
---
# flex 兼容写法

## flex 布局
```css
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
```

## 主轴方向
```css
/*从上到下*/
.flex-dir-top {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
}
/*从下到上*/
.flex-dir-bottom {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-pack: end
}
/*从左到右*/
.flex-dir-left {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
}
/*从右到左*/
.flex-dir-right {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-pack: end
}
```

## 主轴对齐方式
```css
/*从左到右*/
.flex-align-left {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start
}
/*从右到左*/
.flex-align-right {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end
}
/*两端对齐*/
.flex-align-justify {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}
/*居中对齐*/
.flex-align-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center
}
```

## 交叉轴对齐方式
```css
/*从上到下*/
.flex-ver-top {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start
}
/*从下到上*/
.flex-ver-bottom {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end
}
/*垂直居中*/
.flex-ver-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}
/*基线对齐*/
.flex-ver-baseline {
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline
}
/*高度并排铺满*/
.flex-ver-stretch {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}
```

## 空间分配
```css
.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
}
.flex-2 {
    -webkit-box-flex: 2;
    -webkit-flex-grow: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    -webkit-flex-shrink: 2;
    -ms-flex-negative: 2;
    flex-shrink: 2
}
```

## flex-grow / flex-shrink 计算方式
### flex-grow

当子元素宽度的总和小于父元素的宽度，子元素根据 flex-grow 分配剩余空间。例如

```html
<div style="display:flex;width:500px">
    <div class="itemA" style="flex-grow:1;width:100px"></div>
    <div class="itemB" style="flex-grow:2;width:100px"></div>
</div>
此时 itemA 和 itemB 的宽度总和为200px，父元素剩余空间为 500 - 200 = 300px，那么 itemA 的宽度将会计算为 (300/3)1 + 100 = 200px，itemB 的宽度将会计算为 (300/3)2 + 100 = 300px。
```

### flex-shrink
当子元素宽度的总和大于父元素的宽度，子元素超出的宽度将会根据 flex-shrink 按比例缩小自身的宽度，例如

```html
<div style="display:flex;width:150px">
    <div class="itemA" style="flex-shrink:1;width:150px"></div>
    <div class="itemB" style="flex-shrink:2;width:150px"></div>
</div>
此时 itemA 和 itemB 的宽度总和为300px，超出父元素空间 300 - 150 = 150px，那么 itemA 的宽度将会计算为 150 - (150/3)1 = 100px，itemB 的宽度将会计算为 150 - (150/3)2 = 50px。
```