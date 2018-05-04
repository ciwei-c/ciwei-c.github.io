---
sidebar: auto
---
# nodejs base64图片上传
## 前端
前端页面使用 FileReader 获取图片

<!-- more -->
```html
//vue
<template>
  <input type="file" @change="onChooseImg($event)" />
</template>
<script>
export default {
    name:"test",
    data(){
        return {
        }
    },
    methods:{
        onChooseImg(evt){
            let file = evt.target.files[0];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onerror = () => {
                console.log("error");
            }
            reader.onload = () => {
                let base64 = reader.result;
                ajax({
                    imgBase64:base64
                }); // 发送请求
            }
        }
    }
}
</script>
<style scoped>
</style>
```

## 后端

Buffer 类是随 Node 内核一起发布的核心库，可以帮助 nodejs 处理二进制数据。
创建一个 buffer 实例有多种方式

```javascript
//传入字节创建实例
let buffer = new Buffer(10);

//传入数组创建实例
let buffer = new Buffer([1,2,3,4,5]);

//传入一个字符串和编码方式
let buffer = new Buffer("abcdef","utf-8");

```
传入字符串实例化一个buffer类的时候，默认编码方式为uft-8，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。这里我们需要设置成base64的。

```javascript
//需要fs模块写出图片
const fs = require("fs");

//假设当前为用户模块
userSchema.statics.upload = function(callback,params){
    if( !params.imgBase64 ) return callback("no imgBase64");

    let imgBase64 = params.imgBase64.replace(/^data:image\/\w+;base64,/,"");
    imgBase64 = imgBase64.split(" ").join("+");
    let bufferData = new Buffer(imgBase64, 'base64');

    fs.writeFile(imgBase64.substring(0,20) +".png",dataBuffer,(err,data)=>{
        if ( err ) return callback("图片上传失败");
        callback("图片上传成功");
    })

    // 写完之后发现图片虽然生成了，但是生成的图片损坏了，打不开。于是单独写了一个小 demo，直接从前端过来的 base64 拿过来之后，生成的图片能够正常显示。说明是服务端这边的问题，排查之后发现base64数据过来之后原先"+"的地方全变成了空格，并且莫名其妙的被换行了，定位到了问题之后这样写就可以了。
}

```