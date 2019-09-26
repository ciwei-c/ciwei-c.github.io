---
sidebar: auto
---
# 异常处理

## 异常捕获

### try-catch-finally

```javascript
try {
    // todo
} catch (err) {
    // 捕获 todo 异常
} finally {
    // 无论是否有异常都将进入
}
```

`try...catch` 语句标记一块待尝试的语句，并规定一个以上的响应应该有一个异常被抛出。如果代码抛出一个异常，`try...catch` 语句就捕获它。如果 `try` 代码块没有异常，则不会流转到 `catch` 代码块，`finally` 代码块总会紧跟在 `try` 和 `catch` 代码块之后执行，但会在 `try` 和 `catch` 代码块之后的其他代码之前执行，有几个地方需要注意：

1. 无法捕获异步的异常
2. 只能捕获同步代码运行时的错误，无法捕获异步及语法错误
3. `try` 代码块不能单独存在，至少跟随 `catch` 或 `finally` 代码块

### window.onerror

```javascript
/**
* @param {String} message 错误信息
* @param {String} source  发生错误的脚本URL
* @param {Number} lineno  发生错误的行号
* @param {Number} colno   发生错误的列号
* @param {Error } error   Error对象
*/
window.onerror = (message, source, lineno, colno, error) => {
    // todo
}
```

当JavaScript运行时错误（包括语法错误）发生时，`window`会触发一个`ErrorEvent`接口的`error`事件，并执行`window.onerror()`，但是无法捕获到静态资源（如图片或js脚本）加载的异常

### Promise.prototype.catch()

```javascript
const promise = new Promise((resolve, reject) => {
  throw new Error('error');
});
promise.catch((error) => {
  // todo
});
```

`Promise.prototype.catch()` 是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

### window.addEventListener

#### error事件

```javascript
document.addEventListener('error', (e) => {
    // todo
}, true)
```

与 `window.onerror` 相似，不过回调函数只接收一个值，包含了 `onerror` 回调的所有参数，并且可以捕获静态资源加载的异常

#### unhandledrejection事件

```javascript
window.addEventListener("unhandledrejection", (e) => {
    // todo
})
```

用于 `Promise` 实例未指定 `catch` 方法时，收集 `Promise` 的异常

### Vue.config.errorHandler

```javascript
/**
* handle error
* info 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
* 只在 2.2.0+ 可用
*/
Vue.config.errorHandler = function (err, vm, info) {
  // todo
}
```

指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 `Vue` 实例。

### React错误边界

`React 16` 提供了一个内置函数 `componentDidCatch`，使用它可以非常简单的获取到 `react` 下的错误信息，注意，错误边界无法捕获以下场景中产生的错误：

1. 事件处理
2. 异步代码
3. 服务端渲染
4. 自身抛出来的错误（并非它的子组件）

```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // todo
  }
}
```

## 异常场景

### 代码运行异常

#### 同步异常

```javascript
try {
    undefined.map()
} catch (err) {
    console.log(err) // TypeError: Cannot read property 'map' of undefined
}
```

#### 异步异常

```javascript
window.onerror = ( message, source, lineno, colno, error ) => {
    console.log({ message, source, lineno, colno, error })
    // { message: "Uncaught TypeError: Cannot read property 'map' of undefined", source: "file:///E:/inde... }
}

setTimeout(()=>{
    undefined.map()
},1000)
```

### 语法错误

语法相关的异常，当Javascript语言解析代码时，Javascript引擎将会发现不符合语法规范的代码，并抛出SyntaxError错误。

### Promise异常

#### 有catch方法

```javascript
let promise = new Promise((resolve, reject) => {
    undefined.map()
})

promise.then(()=>{}).catch(err => {
    console.log(err) // TypeError: Cannot read property 'map' of undefined
})
```

#### 无catch方法

```javascript
window.addEventListener("unhandledrejection", e => {
    console.log(e)
    // PromiseRejectionEvent {isTrusted: true, promise: Promise, reason: TypeError: Cannot read property 'map' of undefined at …, type: "unhandledrejection" …}
})

let promise = new Promise((resolve, reject) => {
    undefined.map()
})
```

### 静态资源加载异常

例如当样式表加载异常时

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://test.com/test.css">
</head>
<body></body>
<script>
    window.addEventListener("error", (e) => {
        console.log(e)
        //Event {isTrusted: true, type: "error", target: link, currentTarget: Window, eventPhase: 1, …}
    }, true)
</script>
</html>
```

### React异常及降级UI

当componentDidCatch抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(info)
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
```

作为组件使用

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

### 异常上报

异常上报可以通过 ajax 调用接口，但是可能存在跨域等问题，推荐使用动态创建 img 标签

```javascript
class ErrorReporter {
    constructor(url){
        this.url = url
    }
    send(error){
        new Image().src = `${this.url}?error=${error}`
    }
}
const errorReporter = new ErrorReporter("http://test")
errorReporter.send(/*error*/)
```

## 处理规范

1. 非稳定同步代码块增加 `try-catch`，`catch` 时请分清稳定代码和非稳定代码，稳定代码指的是无论如何不会出错的代码。对于非稳定代码的 `catch` 尽可能进行区分异常类型，再做对应的异常处理
2. 异常不要用来做流程控制和条件控制
3. 捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容
4. 全局监控js异常，并且不要忽略异步异常，使用 `window.onerror`
5. 监听全局静态资源加载异常使用 `addEventListener` 监听 `error` 事件，处理异常判断是否是静态资源异常，与 `window.onerror` 做区分
6. 监听全局未 `catch` 的 `Promise` 对象用 `addEventListener` 监听 `unhandledrejection` 事件
7. `React` 异常使用 `componentDidCatch` (React 16以上)
8. `Vue` 异常使用 `Vue.config.errorHandler`
