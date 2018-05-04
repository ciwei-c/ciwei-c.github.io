---
sidebar: auto
---
# Object.defineProperty

## Object.defineProperty

The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
从字面上来看，defineProperty方法在一个对象里面定义一个新的值，或者修改某个值，或者返回某个值

接受3个参数
Object.defineProperty(obj, prop, descriptor)
obj 需要操作的对象
The object on which to define the property.
prop 对象需要定义或者修改的属性值
The name of the property to be defined or modified.
descriptor 对这个属性值的描述
The descriptor for the property being defined or modified.

[Object.defineProperty详细介绍](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

实现双向数据绑定，最重要的一点是通过getter和setter，可以拦截到数据改变的过程。

## 模仿Vue的双向数据绑定
+ 目标：实现基本的数据双向绑定，点击事件绑定
```javascript
//html
<div id="app">
    <input type="text" v-model="message">
    <button v-click="changeData">!</button>
    <p>{{message}}</p>
</div>
//js
var c = new C({
    el:"#app",
    data:{
        message:"hello world!"
    },
    methods:{
        changeData:function(){
            this.data.message += "!";
        }
    }
})
```

## 准备
```javascript
function C(options){
    var el = document.getElementById(options.el.substr(1));
    this.data = options.data;
    this.methods = options.methods;
    Observe(options.data,this);
    toDocumentFragment(el,this);
}
```
## 视图的绑定

### toDocumentFragment
首先，要知道什么是DocumentFragment类型（文档片段）。

 1. nodeType为11，nodeName为#document-fragment，nodeValue为null。
 2. 文档片段具有Node的所有方法。
 3. 如果将文档中的节点添加到文档片段当中，该节点就会从文档树中移除。
 4. 可以将其视为一个“仓库”，可以在里面保存将会用到的文档的节点。
 5. 例如一个多项列表动态生成，如果直接appendChild，将会导致浏览器反复渲染。可以通过先将动态生成的节点存放在文档片段，然后再appendChild(文档片段)，这样只要渲染一次。

```javascript
//处理dom片段，重新生成
function toDocumentFragment(dom,vm){
    var frag = document.createDocumentFragment();
    var child;
    while(dom.firstChild){
        if(dom.firstChild.childNodes.length){
            toDocumentFragment(dom.firstChild,vm);
        }
        child = dom.firstChild;
        compile(child,vm);
        frag.append(child);
    }
    dom.appendChild(frag);
}
//compile 解析模板，绑定数据
function compile(node,vm){
    var reg = /{\{(.*)\}\}/;
    if(node.nodeType == 1){//如果是Elements节点
        var attrs = node.attributes;
        for(var i = 0 ; i <attrs.length; i ++){
            var key;
            if(attrs[i].nodeName == "v-model"){
                key = attrs[i].nodeValue;
                node.value = vm.data[key];
                node.addEventListener("input",function(e){
                    vm.data[key] = e.target.value;
                })
            }
            if(attrs[i].nodeName == "v-click"){
                key = attrs[i].nodeValue;
                node.addEventListener("click",function(e){
                    vm.methods[key].apply(vm,e);
                })
            }
        }
    }
    if(node.nodeType == 3){ //如果是text节点
        if(reg.test(node.nodeValue)){
            var key = RegExp.$1; //获取匹配的值
            key = key.trim(); //去掉首尾空格
            new Watcher(node,vm,key);//绑定数据
        }
    }
}
```
### 数据的绑定

 1. Observe：首次渲染页面，获取数据的时候会进入get方法。在get方法中添加给订阅者。改变数据的时候通发布者通知视图更新。
 2. Watcher：解析模板的时候调用，主要为了将绑定了数据的视图，添加到订阅者中，便于数据改变时更新视图。update方法处理视图的更新。Pub.target是一个全局的变量，只是为了让订阅者知道订阅了谁的数据。
 3. Pub：发布者、订阅者。模板解析，绑定数据的时候添加给订阅者；数据改变的时候发布者会发布消息“我这里发生了改变，你们那边把视图更新一下”。

```javascript
function Observe(data){
    Object.keys(data).forEach(function(item){
        _Observe(data,item,data[item]);
    })
}
function _Observe(obj,key,value){
    var pub = new Pub();// 发布、订阅的实例
    Object.defineProperty(obj,key,{
        get:function(){
            if(Pub.target) pub.add(Pub.target);// 订阅
            return value;
        },
        set:function(newValue){
            if(value == newValue) return;
            value = newValue;
            pub.sent();// 发布
        }
    })
}
function Watcher(node,vm,key){
    Pub.target = this;
    this.node = node;
    this.vm = vm;
    this.key = key;
    this.update();
    Pub.target = null;
}
Watcher.prototype = {
    update:function(){
        this.node.nodeValue = this.vm.data[this.key];
    }
}
function Pub(){
    this.elements = [];
}
Pub.prototype = {
    add:function(val){
        this.elements.push(val);
        return;
    },
    sent:function(){
        this.elements.forEach(function(item){
            item.update();
        })
    }
}
```

### 测试
测试发现功能都可以正常使用。
通过控制台改变数据，数据发生了变化，视图更新。
通过按钮点击事件，数据发生了变化，视图更新。
当在输入框输入的时候，数据发生了变化，视图更新。