---
sidebar: auto
---
# webpack 热更新代理

## devServer.proxy

webpack配置项中有一项是devServer.proxy，使用该配置项可以代理到指定的地址去，以vue.config.js为例

```javascript
module.exports = {
  devServer: {
    proxy: 'http://localhost:8000'
  }
}
```

只要这样简单的一个配置即可实现代理，但是每次设置代理之后都需要重新启动服务器，一般情况来说，代理不会频繁的修改，可能只要配置一次就不用再改动。

## devServer.after

目前开发的一个项目是做前端脚手架的工具，希望通过界面操作项目的依赖管理、项目启停、项目编译等等，其中也包括代理的增删改查，希望做到的效果是在界面上通过表单操作实现代理的热更新，不需要重启项目服务。每个代理可以有自己的开关，可以不需要删除配置，开启或者关闭某个代理。

上面的配置虽然可以实现代理，但是无法热更新，无法满足需求，于是就需要自己手动实现一个热更新的代理服务器

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

## http-proxy-middleware

webpack的代理技术实际上用的是 nodejs 的 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 中间件，那么同样的，我们也可以使用这个中间件启动代理服务器，以server.js 为例
```json
// proxy配置项，proxy.json
{
  "/": {
    "target": "http://localhost:8000"
  }
}
```
```javascript
const middlewareProxy = require('http-proxy-middleware')
const proxyOptions = require('./proxy.json')

const registerProxy = (app) => {
  unRegisterProxy(app)
    Object.keys(proxyOptions).forEach(url => {
      app.use(
        url,
        middlewareProxy({
          target: proxys[url].target, changeOrigin: true, onProxyReq: (proxyReq, req) => {
            if (req.body) {
              let bodyData = JSON.stringify(req.body);
              proxyReq.setHeader('Content-Type', 'application/json');
              proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
              proxyReq.write(bodyData);
            }
          }
        })
      );
      app._router.stack[app._router.stack.length - 1].isProxyRoute = true
    })
}

module.exports = app => {
    registerProxy(app)
}
```

## 热更新

现在已经可以通过任意的配置项去自动注册代理，但是还差一步热更新，可以任意找一个可以监听文件变化的工具，这里使用chokidar，当配置文件发生变化时，重新注册代理

```javascript
// 每次注册之前先注销之前注册的
const unRegisterProxy = (app) => {
  app._router.stack = app._router.stack.filter(router => !router.isProxyRoute)
}
const watch = (watchPath,app) => {
  chokidar.watch(watchPath, {
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add' || event === 'unlink') {
      try {
        unRegisterProxy(app)
        registerProxy(app)
        console.log(chalk.magentaBright(`\n > Proxy Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
```