---
sidebar: auto
---

## 装饰器
用法
```typescript
// 修饰类
function decoraterClass(constructor: Function){
    // todo
}
// 修饰类函数
function decoraterFn(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>){
    // todo
}
// 修饰类函数参数
function decoraterParam(target: Object, propertyKey: string | symbol, parameterIndex: number){
    // todo
}
// 修饰类属性
function decoraterVal(target: any, propertyKey: string){
    // todo
}
@decoraterClass
class Inst {
    @decoraterFn
    fn(@decoraterParam val:string){}

    @decoraterVal
    name:string
}
```
### 类装饰器
:::tip 参数
1、类本身
:::
### 类方法装饰器
:::tip 参数
1、如果修饰的是类的实例函数，那么target就是类的原型。如果修饰的是类的静态函数，那么target就是类本身

2、该函数的函数名

3、该函数的描述属性
:::
### 类方法参数装饰器
:::tip 参数
1、类本身

2、该参数所在的函数的函数名

3、该参数在函数参数列表中的索引值
:::
### 类属性装饰器
:::tip 参数
1、对于静态属性而言，第一个参数是类本身，对于实例属性而言，第一个参数是类的原型

2、属性的名字
:::

## 示例
### vscode 插件开发命令注册

```javascript
// command.js
import * as vscode from 'vscode';
interface CommandsItem {
  target: any;
  commandId: string;
  method: (...rest: any[]) => any;
  propertyName: string;
}

let allCommands: CommandsItem[] = [];

export function Command(commandId: string): Function {
  return (target: any, propertyName: string, descriptor: any) => {
      allCommands.push({ target, commandId, propertyName, method: descriptor.value });
  };
}

export class Command {
  constructor() { }
  public static register(context: vscode.ExtensionContext) {
    allCommands.forEach(command => {
        context.subscriptions.push(vscode.commands.registerCommand(command.commandId, (...args) => {
            return command.method.apply(command.target, args);
        }));
    });
  }
}

```

```javascript
// WantToRegisterCommand.js
import { Command } from './common';

enum enumCommand {
  common1 = 'common1',
  common2 = 'common2'
}
class WantToRegisterCommand {
  constructor() {}

  @Command(enumCommand.common1)
  fn():void{
    // todo
  }

  @Command(enumCommand.common2)
  fn2():void{
    // todo
  }
}
export default new WantToRegisterCommand()
```