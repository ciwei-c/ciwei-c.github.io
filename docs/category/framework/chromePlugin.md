---
sidebar: auto
---
# Chrome

Chrome浏览器除了页面渲染速度快，使用v8引擎大幅度提升js运行速度之外，可以支持开发者通过编写程序扩充其功能，还能使用HTML来编写编写桌面程序。

## Chrome 扩展&应用

扩展主要用于对浏览器功能的增强，可以在浏览器工具栏显示图标。应用可以脱离浏览器运行，更像是一个运行在一个独立的环境当中，可以调用更加底层的接口，比如串口、usb、本地文件读写等等。

扩展或者应用是一个文件的集合，扩展被安装之后，就会读取其中的manifest.json文件，这个文件固定命名为manifest.json，Chrome浏览器会依赖其中的配置来运行扩展或者应用。文件集合中一般来说包括html、css、javascript文件等，由于扩展或应用是基于Chrome浏览器运行的，也就是编程语言必然是javascript。由于v8引擎的出现，javascript的运行性能大幅度提升，甚至出现了可以作为后端语言的项目nodejs。

## 简易入门配置

### manifest.json

本地新建一个文件夹 plugin，新建一个 manifest.json 文件
```javascript
{
    "manifest_version": 2,
    "name": "plugin",
    "version": "1.0",
    "description": "我的第一个Chrome扩展",
    "browser_action":
    {
        "default_title": "plugin",
        "default_popup": "test.html"
    }
}
```
这个文件定义了扩展的名称、版本、描述、浏览器行为

### 页面呈现

browser_action字段中，default_title属性定义了鼠标悬浮在扩展图标上所显示的文字，default_popup属性定义了点击扩展图标时所显示的页面。新建一个test.html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="testbox"></div>
    <script src="./test.js"></script>
</body>
</html>
```

### 脚本编写

脚本编写使用 javascript 写，由于不支持直接在 html 中编写 javascript，所以需要从外部引用js文件，新建一个test.js文件
```javascript
window.onload=function(){
    var box = document.getElementById("testbox")
    testbox.innerHTML = "this is test plugin"
}
```

### 插件加载

打开 chrome 扩展程序管理后台或者打开 chrome://extensions/，然后打开开发者模式，加载已解压的扩展程序，然后就可以在工具栏的右侧看到新增的扩展程序。鼠标悬浮在图标时，显示 "plugin"，点击图标，界面呈现 "this is test plugin"。