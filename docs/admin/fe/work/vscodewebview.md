---
sidebar: auto
---


工作开始接触 vscode 插件开发

## 脚手架

vscode 团队提供快速脚手架
```shell
npm install -g yo generator-code
// or
yarn add -g yo generator-code
```
```
yo code

# ? What type of extension do you want to create?
# ? What's the name of your extension?
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension
# ? What's the description of your extension
# ? Enable stricter TypeScript checking in 'tsconfig.json'
# ? Setup linting using 'tslint'
# ? Initialize a git repository
# ? Which package manager to use
```
装好之后点击左侧菜单栏调试后，会打开一个新的vscode窗口，窗口头部会呈现 [Extentsion Development Hose] 或者 [扩展开发主机]即可

## webview

webview作为iframe内嵌在vscode内部之中，可以作为HTML的内容，并且可以通过postMessage与vscode通信，调用vscode的api

### 创建

```typescript
conts panel = vscode.window.createWebviewPanel(
    'webview type',
    'webview name', 
    vscode.ViewColumn.One,
    {
        enableScripts:true
    } 
)
```

:::tip 注意
这个panel变量在webview的生命周期中，要一直处于引用，否则就丢失了这个创建的webview
:::

### 状态保持
默认情况下，webview在后台的时候，会丢失全部的数据，如果希望保持长期的状态，需要处理状态保持的情况，对此，vscode有给出解决方案

#### getState()、setState()
vscode在webview中提供了一个方法 acquireVsCodeApi()，返回值一个对象，存在三个方法
```javascript
let vscode = acquireVsCodeApi();
// vscode 返回如下对象
{
    getState:(),
    postMessage:(),//与vscode通信的唯一方法
    setState:()
}
```
用法如下，假设存放count计数
```javascript
let count = 0;
let oldState = vscode.getState();
if(oldState && oldState.count){
    count = oldState.count
}
setInterval(()=>{
    vscode.setState({count:count++});
},1000)
```
#### registerWebviewPanelSerializer
注册一个webview面板序列化，可以在vscode重启后自动回复webview，建立在setState()和getState()之上

调用方法
```
vscode.window.registerWebviewPanelSerializer('webviewtype', {
    async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
        console.log(`Got state: ${state}`);
    }
});
```
#### retainContextWhenHidden