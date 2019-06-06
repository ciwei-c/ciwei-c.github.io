---
sidebar: auto
---

# vscode extension
## 命令注册

```javascript
import * as vscode from 'vscode';
vscode.commands.registerCommand("command", () => {
  return;
})
```

## 使用装饰器的命令注册

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