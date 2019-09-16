---
sidebar: auto
---
# webpack本地热更新Mock服务器

开发过程中，为了更好的前后端分离，以及人为的制造更多的场景，有一个Mock服务器将会带来很大的便利。尤其在文档先行的开发模式，有了定义好的字段和接口，通过先写 mock 接口百分百还原真实环境，联调的时候直接暂停Mock服务

## mock.js

### 随机数据

mock.js是一个能够随机生成数据的js库，用法很简单，例如生成一个长度随机为1-10之间数组，官方示例如下

```javascript
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
```
还有许多内置的随机数据，包括随机日期、图片、名字、颜色、文字、地址等等。

例如随机生成名字
```js
Random.name()
// => "Larry Wilson"
```
具体可参考[官方文档](https://github.com/nuysoft/Mock/wiki/Getting-Started)

### 拦截Ajax及缺点
Mock.mock可接受参数：Mock.mock( rurl?, rtype?, template|function( options ) )，当 ajax 请求的路径与 rurl 匹配的时候，可以拦截ajax请求，其原理是在其发送请求之前就把值返回。

::: danger Mock.mock虽然可以拦截 Ajax 请求，但是有几点不好的地方：
- 1、拦截的请求返回的值其实没有经过请求，是直接返回的，也就是在开发者工具的 Network 面板是看不到的，不利于调试也不够仿真
- 2、接口的定义不够灵活，虽然可以通过正则来匹配路由，对于有些接口看起来还是不太方便，例如restful接口，查询某个用户id（假设由大小写字母、数字组合）的信息接口为
```
"/user/:user_id"
```
用正则表示的话
```
/\/user\/[a-zA-Z0-9]/
```
相比之下正则看起来不直观，无法知道到底是在请求什么
:::
## 解决方案

### devServer.after
webpack使用devServer启动服务器，实际上就是启动一个nodejs服务器，在配置项中，有一项是devServer.after，该属性值接受一个方法，方法传递的参数是 express() 返回的对象，以vue.config.js为例

```javascript
//vue.config.js
module.exports = {
  devServer: {
    after: require("./server.js")
  }
}
//server.js
module.exports = app => {
 // todo
}
```
### 启动Mock服务器
基于上述，可以在 webpack 启动项目服务的时候，添加一个Mock服务器

::: tip 我们期望这个Mock服务器有几个基本功能
- 1、根据一份配置文件生成
- 2、当配置文件变化时，热更新服务
- 3、可对任意接口切换对接mock数据还是真实数据
- 4、支持restful
- 5、……
:::

定义配置，假设配置项的数据结构如下（简单示例，视接口复杂程度可自行拓展）
```javascript
module.exports = [
  {
    data: {            // mock数据
      "code|0-1": 1,   // 随机状态码
      data:{
        "name":"@name" // 随机名称
      }
    },
    enable: true,      // 是否启用mock
    method: 'get',     // 请求方法
    url: '/user'       // 请求路径
  }
];
```