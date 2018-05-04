---
sidebar: auto
---
# 栈

栈是一种数据结构，因为只能从栈顶添加或者删除数据，所以很高效。
它的特点就是后进先出，可以想象成餐厅的盘子，放在最顶上的总是先用，放盘子也总是放在最上面。

首先定义一个栈的类，先设置两个默认的属性值
```javascript
function Stack(){
    this.dataStore = [];
    this.top = 0;
}
```
this.dataStore 存放栈内的数据。
this.top 总是返回当前栈顶的位置，默认栈顶的位置是0，因为此时栈内没有数据。
<!-- more -->

## 入栈

为 Stack 类添加一个入栈的方法 push()
```javascript
Stack.prototype.push = function(item){
    this.dataStore[this.top++] = item;
}
```
this.top的自增++要放在后面的原因，是因为先把数据放在当前栈顶的位置，再通过自增将 this.top 指向新的栈顶。

## 出栈

为 Stack 类添加一个出栈的方法 pop()
```javascript
Stack.prototype.pop = function(){
    return this.dataStore[--this.top];
}
```
this.top的自减--放在前面的原因与入栈的自增刚好相反

## 获取栈顶的数据

为 Stack 类添加一个获取栈顶的方法 getTop()
```javascript
Stack.prototype.getTop = function(){
    return this.dataStore[this.top-1];
}
```
this.top同理，但是千万不能自增自减

## 获取栈长度

为 Stack 类添加一个获取栈长度的方法 length()
```javascript
Stack.prototype.length = function(){
    return this.top;
}
```

## 清空栈

为 Stack 类添加一个获取栈长度的方法 clear()
```javascript
Stack.prototype.clear = function(){
    this.top = 0;
}
```

## 测试

## 类功能正常
```javascript
var stack = new Stack();

stack.push("c1");
stack.push("c2");
stack.push("c3");

stack.length(); // 3
stack.getTop(); // c3

stack.pop();

stack.length(); // 2
stack.getTop(); // c2

stack.clear();

stack.length(); // 0
stack.getTop(); // undefined
```

## 判断表达式括号匹配

设计思路：
1、写一个方法，参数传入表达式，清空栈，遍历表达式。
2、当前循环的值等于左括号 ( 时将当前索引值入栈。
3、当前循环的值等于右括号时，判断栈是否有数据，如果有，弹出栈；如果没有，入栈当前索引值后退出循环。
4、循环后面判断栈内是否有数据，如果有，返回栈顶（此时存放的应该是未能匹配到的索引值）；如果没有则匹配。

```javascript
/*实现方法*/
function matching(express){
    stack.clear();
    for(var i = 0; i < express.length; i ++){
        if ( express[i] === "(" ) {
        	stack.push(i);
        }else if ( express[i] === ")" ) {
            if ( !stack.length() ) { 
                stack.push(i);
                break;
            }
            stack.pop();
        }
    }
    return stack.length() ? "括号不匹配，索引位置：" + stack.getTop() :"匹配";
}
/*测试方法*/
matching("1+1"); //匹配
matching("1+1+("); //括号不匹配，索引位置：4
matching("1+1+(1+1)"); //匹配
matching("1+1+1+)1"); //括号不匹配，索引位置：6
```
