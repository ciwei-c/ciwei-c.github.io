---
sidebar: auto
---
# 扩展&应用

## 扩展简易入门例子

### 配置文件

```javascript
{
    "manifest_version": 2,
    "name": "TabsManager",
    "version": "1.0",
    "description": "标签管理器",
    "browser_action":
    {
        "default_title": "TabsManager",
        "default_popup": "./view/tabs-manager.html"
    },
    "permissions": [
        "tabs"
    ],
    "background":
    {
        "scripts": [
            "./js/tabs-manager.js"
        ],
        "persistent": true
    }
}
```

### 页面呈现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>tabs-manager</title>
    <link rel="stylesheet" href="../css/tabs-manager.css">
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <script src="../js/tabs-manager.js"></script>
    <script src="../js/sortable.js"></script>
</head>
<body>
    <div id="app">
        <div class="app-header">
            TabsManager
        </div>
        <div class="app-body">
            <ul class="tab-list-wrap"></ul>
        </div>
    </div>
</body>
</html>
```

### 脚本编写

```javascript
window.onload = () => {
    let app = document.getElementById("app"),
        tabsListWrap = app.querySelector(".tab-list-wrap");

    chrome.tabs.query({}, tabArray => onCreatedTabs(tabArray))
    const onCreatedTabs = tabArray => tabArray.forEach(item => tabsListWrap.appendChild(onCreatedTabDom(item)))
    const onCreatedTabDom = item => {
        let tab = document.createElement("li")
        tab.className = "tab-items flex flex-ver-center flex-align-justify"
        if (item.active) tab.classList.add("active")
        tab.innerHTML = `<div class="flex flex-ver-center"><img src="${item.favIconUrl}" class="fav-icon">${item.title}</div>
                         <div class="flex flex-ver-center"><span class="drag-handle">☰</span><i class="fa fa-lg fa-close remove"></i></div>`
        tab.setAttribute("tabId", item.id)
        tab.onclick = e => e.target.classList.contains("remove") ? onRemoveTab(item.id, tab) : onChangeTab(item.id)
        return tab;
    }
    const onMoveTab = (tabId, idx) => chrome.tabs.move(tabId, { index: idx || 0 })
    const onChangeTab = tabId => chrome.tabs.update(tabId, { active: true });
    const onRemoveTab = (tabId, tab) => chrome.tabs.remove(tabId, () => { tabsListWrap.removeChild(tab) });

    let sortable = Sortable.create(tabsListWrap, {
        animation: 50,
        handle: ".drag-handle",
        onUpdate: e => onMoveTab(Number(e.item.getAttribute("tabId")), e.newIndex)
    });
}
```

## 应用简易入门例子

### 配置文件

```javascript
{
    "manifest_version": 2,
    "name": "SerialPort",
    "version": "1.0",
    "description": "串口",
    "permissions": [
        "serial"
    ],
    "app":{
    	"background":{
    		"scripts": ["./js/background.js"]
    	}
    }
}
```

### 创建面板
在background.js中创建面板

```javascript
window.onload = () => {
    chrome.app.runtime.onLaunched.addListener(function() {
        chrome.app.window.create('../view/serial-port.html', {
            'id': 'serial',
            'bounds': {
                'width': 542,
                'height': 360
            },
            'resizable': false,
            'frame': 'none'
        });
    });
}
```

### 界面呈现
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="../js/serial-port.js"></script>
</head>
<body>
	<div>这是谷歌插件串口信息的应用</div>	
</body>
</html>
```

### 脚本编写
```javascript
window.onload = () => {
	chrome.serial.getDevices(function(portsArray){
    	console.log(portsArray)
	});
}
```