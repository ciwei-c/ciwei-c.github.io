---
sidebar: auto
---
# Chrome

Chrome浏览器除了页面渲染速度快，使用v8引擎大幅度提升js运行速度之外，可以支持开发者通过编写程序扩充其功能，还能使用HTML来编写编写桌面程序。

## 扩展应用

扩展主要用于对浏览器功能的增强，可以在浏览器工具栏显示图标。应用可以脱离浏览器运行，更像是一个运行在一个独立的环境当中，可以调用更加底层的接口，比如串口、usb、本地文件读写等等。
扩展或者应用是一个文件的集合，扩展被安装之后，就会读取其中的manifest.json文件，这个文件固定命名为manifest.json，Chrome浏览器会依赖其中的配置来运行扩展或者应用。文件集合中一般来说包括html、css、javascript文件等，由于扩展或应用是基于Chrome浏览器运行的，也就是编程语言必然是javascript。由于v8引擎的出现，javascript的运行性能大幅度提升，甚至出现了可以作为后端语言的项目nodejs。

### 参考出处

[chrome扩展及应用开发](http://www.ituring.com.cn/book/1421)

[api文档](http://open.chrome.360.cn/extension_dev/overview.html)

## 核心配置

### manifest.json
这是作为插件的配置文件，是最重要的必不可少的一个文件，必须放在根目录。其中manifest_version、name、version 是必不可少的，description和icons是推荐的。

常见配置如下
```javascript
{
    // 清单文件的版本，这个必须写，而且必须是2
    "manifest_version": 2,
    // 插件的名称
    "name": "demo",
    // 插件的版本
    "version": "1.0.0",
    // 插件描述
    "description": "demo",
    // 图标，一般偷懒全部用一个尺寸的也没问题
    "icons":
    {
        "16": "img/icon.png",
        "48": "img/icon.png",
        "128": "img/icon.png"
    },
    // 会一直常驻的后台JS或后台页面
    "background":
    {
        // 2种指定方式，如果指定JS，那么会自动生成一个背景页
        "page": "background.html"
        //"scripts": ["js/background.js"]
    },
    // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
    "browser_action": 
    {
        "default_icon": "img/icon.png",
        // 图标悬停时的标题，可选
        "default_title": "这是一个示例Chrome插件",
        "default_popup": "popup.html"
    },
    // 当某些特定页面打开才显示的图标
    /*"page_action":
    {
        "default_icon": "img/icon.png",
        "default_title": "我是pageAction",
        "default_popup": "popup.html"
    },*/
    // 需要直接注入页面的JS
    "content_scripts": 
    [
        {
            //"matches": ["http://*/*", "https://*/*"],
            // "<all_urls>" 表示匹配所有地址
            "matches": ["<all_urls>"],
            // 多个JS按顺序注入
            "js": ["js/jquery-1.8.3.js", "js/content-script.js"],
            // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
            "css": ["css/custom.css"],
            // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
            "run_at": "document_start"
        },
        // 这里仅仅是为了演示content-script可以配置多个规则
        {
            "matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
            "js": ["js/show-image-content-size.js"]
        }
    ],
    // 权限申请
    "permissions":
    [
        "contextMenus", // 右键菜单
        "tabs", // 标签
        "notifications", // 通知
        "webRequest", // web请求
        "webRequestBlocking",
        "storage", // 插件本地存储
        "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
        "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
    ],
    // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
    "web_accessible_resources": ["js/inject.js"],
    // 插件主页，这个很重要，不要浪费了这个免费广告位
    "homepage_url": "https://www.baidu.com",
    // 覆盖浏览器默认页面
    "chrome_url_overrides":
    {
        // 覆盖浏览器默认的新标签页
        "newtab": "newtab.html"
    },
    // Chrome40以前的插件配置页写法
    "options_page": "options.html",
    // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
    "options_ui":
    {
        "page": "options.html",
        // 添加一些默认的样式，推荐使用
        "chrome_style": true
    },
    // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
    "omnibox": { "keyword" : "go" },
    // 默认语言
    "default_locale": "zh_CN",
    // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
    "devtools_page": "devtools.html"
}
```
### content-scripts
向页面注入脚本，包括js、css等等
```javascript
{
    // 需要直接注入页面的JS
    "content_scripts": 
    [
        {
            //"matches": ["http://*/*", "https://*/*"],
            // "<all_urls>" 表示匹配所有地址
            "matches": ["<all_urls>"],
            // 多个JS按顺序注入
            "js": ["js/jquery-1.8.3.js", "js/content-script.js"],
            // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
            "css": ["css/custom.css"],
            // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
            "run_at": "document_start"
        }
    ],
}
```
content-scripts和原始页面共享DOM，但是不共享JS，如要访问页面JS（例如某个JS变量），只能通过injected js来实现。content-scripts不能访问绝大部分chrome.xxx.api，除了下面这4种：

- chrome.extension(getURL , inIncognitoContext , lastError , onRequest , sendRequest)
- chrome.i18n
- chrome.runtime(connect , getManifest , getURL , id , onConnect , onMessage , sendMessage)
- chrome.storage

#### 如何注入injected.js
通过创建标签的方式，直接插入dom中
```javascript
var js = document.createElement("script")
js.src = chrome.extension.getURL("./inject.js")
document.head.appendChild(js)
```
然后在manifest.json文件中添加
```javascript
{
    "web_accessible_resources": ["./inject.js"],
}
```

### background
常驻页面，它的生命周期是插件中所有类型页面中最长的，它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在background里面。

background的权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools），而且它可以无限制跨域，也就是可以跨域访问任何网站而无需要求对方设置CORS。

```javascript
{
    // 会一直常驻的后台JS或后台页面
    "background":
    {
        // 2种指定方式，如果指定JS，那么会自动生成一个背景页
        "page": "background.html"
        //"scripts": ["js/background.js"]
    },
}
```

### event-pages
background 的生命周期太长，于是又出了这个api，它的生命周期就是在被需要的时候才去加载，在空闲时关闭，在配置文件上，它与background的唯一区别就是多了一个persistent参数

```javascript
{
    // 会一直常驻的后台JS或后台页面
    "background":
    {
        // 2种指定方式，如果指定JS，那么会自动生成一个背景页
        "page": "background.html",
        //"scripts": ["js/background.js"],
        "persistent": false
    },
}
```

### popup
点击browser_action或者page_action图标时候，出现的弹出框，可以包含任意你想要的HTML内容

```javascript
{
    "browser_action":
    {
        "default_icon": "img/icon.png",
        // 图标悬停时的标题，可选
        "default_title": "这是一个示例Chrome插件",
        "default_popup": "popup.html"
    }
}
```

## 展现形式

### browser_action

```javascript
{
    "browser_action":
    {
        "default_icon": "img/icon.png",
        "default_title": "这是一个示例Chrome插件",
        "default_popup": "popup.html"
    }
}
```
#### default_icon
推荐使用19x19的图片，可以通过chrome.browserAction.setIcon()动态修改

#### default_title
可以通过chrome.browserAction.setTitle()动态修改

#### badge
所谓badge就是在图标上显示一些文本，可以用来更新一些小的扩展状态提示信息。长度限制为四个字符，无法通过配置文件配置，只能通过脚本动态生成，通过 chrome.browserAction.setBadgeText() 和 chrome.browserAction.setBadgeBackgroundColor({color:#eee}) 

### pageAction
和 browser_action 差不多，不同之处就是可以通过脚本设置插件可用或者不可用，例如判断页面是否使用了vue框架，然后才使用 vue-devtools 插件

### contextMenus
浏览器右键菜单，可以通过 chrome.contextMenus api实现浏览器右键的菜单
```javascript
{
    "permissions": [
        "contextMenus"
    ],
}
```

创建一个菜单
```javascript
chrome.contextMenus.create({
    title: "右键菜单",
    onclick: function(){alert('您点击了右键菜单！');}
});
```

### chrome_url_overrides
可以替换掉浏览器的默认页，可替换的默认页如下
- 历史记录
- 新标签页
- 书签

```javascript
"chrome_url_overrides":
{
    "newtab": "newtab.html",
    "history": "history.html",
    "bookmarks": "bookmarks.html"
}
```

当有两个插件同时有设置该属性，新添加的插件会覆盖后面的插件

### devtools
在开发者工具中呈现的界面，例如 vue 的 vue-devtools 插件，可以在开发者工具中有自己的面板

每打开一个开发者工具窗口，都会创建devtools页面的实例，F12窗口关闭，页面也随着关闭，所以devtools页面的生命周期和devtools窗口是一致的。devtools页面可以访问一组特有的DevTools API以及有限的扩展API，这组特有的DevTools API只有devtools页面才可以访问，background都无权访问，这些API包括

- chrome.devtools.panels：面板相关
- chrome.devtools.inspectedWindow：获取被审查窗口的有关信息
- chrome.devtools.network：获取有关网络请求的信息

首先需要在 manifest.json 中声明，注意，只能是指向 html 文件 

```javascript
{
    "devtools_page": "devtools.html"
}
```

然后这个 html 文件中什么也没有，就引入一个 js

```html
<html>
<head></head>
<body>
    <script type="text/javascript" src="js/devtools.js"></script>
</body>
</html>
```

具体的创建，查看上面参考资料找到相关API

### notifications
Chrome提供了一个chrome.notificationsAPI以便插件推送桌面通知

## 消息通信及JS类型


## CSP

CSP通常是在header或者HTML的meta标签中定义的，它声明了一系列可以被当前网页合法引用的资源，如果不在CSP声明的合法范围内，浏览器会拒绝引用这些资源。

使用 vue 来渲染插件页面的时候无法渲染，见vue文档中也有提到这个问题

::: tip
有些环境，如 Google Chrome Apps，会强制应用内容安全策略 (CSP)，不能使用 new Function() 对表达式求值。
:::

可以通过配置文件解决
```javascript
{
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
}
```

CSP共有9个属性

- connect-src 声明了通过XHR和WebSocket等方式的合法引用范围
- font-src 声明了在线字体的合法引用范围
- frame-src 声明了嵌入式框架的合法引用范围
- img-src 声明了图片的合法引用范围
- media-src 声明了声音和视频媒体的合法引用范围
- object-src 声明了Flash等对象的合法引用范围
- style-src 声明了CSS的合法引用范围
- script-src 声明了JavaScript的合法引用范围
- default-src 声明了未指定的其他引用方式的合法引用范围。

CSP共有4个可选属性值

- self 允许引用同域资源
- unsafe-inline 允许执行inline-script
- unsafe-eval 字符串转换的代码（如在eval函数和setTimeout中的字符串代码）
- none 不允许引用任何资源