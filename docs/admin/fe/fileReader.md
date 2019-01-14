---
sidebar: auto
---
# FileReader

## File表单控件

h5 的 dom 中为文件输入元素添加了一个files集合，选择一个或多个文件的时候会包含一个或多个file对象
```javascript
html:
<input type="file" id="input">

js:
var inputEl = document.getElementById("input");
inputEl.onchange = function(e){
    console.log(e.target.files);
}
```
以上将会打印出一个FileList集合，获取到里面的file对象时，会返回以下字段：

 1. lastModifiedDate:文件上次被修改的时间（chrome）
 2. name:文件名称
 3. type:字符串，文件的MIME类型
 4. size:文件的大小
 

## FileReader

上面返回的file对象可以通过FileReader类型来读取数据。FileReader是一种异步的文件读取机制，既然是异步的，它就会有相应的事件处理程序：
 - onabort 当读取操作被中止时调用
 - onerror 当读取操作发生错误时调用
 - onload 当读取操作成功完成时调用
 - onloadend 当读取操作完成时调用,不管是成功还是失败.该处理程序在onload或者onerror之后调用
 - onloadstart 当读取操作将要开始之前调用
 - onprogress 在读取数据过程中周期性调用
 
另外，读取文件中的数据，FileReader类型也提供了几中不同的方法

1. readAsText(file,encoding):以纯文本的形式读取文件，第二个参数可选编码类型。
2. readAsBinaryString(file):读取文件并返回字符串，字符串中的每个字符代表一个字节
3. readAsDataURL(file):读取文件返回base64位url
4. readAsArrayBuffer(file):读取文件返回一个包含文件内容的ArrayBuffer对象

使用方法就如同一般的构造函数一样 new FileReader()
下面假设读取图片

```javascript
html:
<input type="file" id="input">

js:
var inputEl = document.getElementById("input");
inputEl.onchange = function(e){
    var file = e.target.files[0],
    reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onerror = function(){
        console.log("error");
    }
    //50ms左右执行一次
    reader.onprogress = function(e){
        console.log(e.loaded+"/"+e.total);
        //11713(当前加载的多少)/11713（总大小）
    }
    reader.onload = function(){
        console.log(reader.result);
        //data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCg……
    }
}
```

## 对象URL

对象URL又称blob URL，指的是引用file或者blob中的数据的URL，直接读取文件内容，可以达到实时预览的效果，需要创建一个URL对象来实现这个功能。

```javascript
html:
<input type="file" id="input">

js:
var inputEl = document.getElementById("input");
inputEl.onchange = function(e){
    var file = e.target.files,
        url = URL.createObjectURL(file);
    
    console.log(url);
    //blob:null/fe235241-81c2-46c1-8ecf-d9de9ee08728
}
```
