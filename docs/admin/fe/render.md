---
sidebar: auto
---
# 页面的渲染

## DOM、CSSOM和JavaScript

每当在涉及页面如何优化这一类的问题，必定会有人说出这一条：css放在头部，js放在底部。为什么这样子的摆放顺序是最佳的实践？

浏览器在解析HTML文档的基础上会构建DOM（Document Object Model 对象文档模型），同时，会构建一个CSSOM（CSS Object Model CSS对象模型）。这两个模型共同创建渲染树，并在屏幕上绘制图形。

但是在页面构建和解析的过程中，如果碰到了JavaScript脚本，那么将会带来祸害。

<img-con src="/render.jpg"></img-con>

脚本执行过程中，会阻塞DOM的解析和构建，类似的，脚本也可能去查询任何对象的计算样式，如果在脚本执行之前有样式文件，必须等样式文件加载完才能执行脚本。如果此时相关的DOM没有在页面中解析到，相关的DOM操作，可能还会引起错误报警。如此这般，DOM和CSSOM的构建可能频繁交织在一起：DOM构建在JavaScript执行完毕前，无法进行，JavaScript在CSSOM构建完成前也无法进行。

页面的渲染需要和CSSOM共同完成，样式表也会阻塞脚本执行，所以尽量让CSS以最快的速度加载完，并且把脚本放在最需要的时候运行。

## onload 和 DOMContentLoaded

MDN中在介绍DOMContentLoaded时如此介绍：

    当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。另一个不同的事件 load 应该仅用于检测一个完全加载的页面。 在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。注意：DOMContentLoaded 事件必须等待其所属script之前的样式表加载解析完成才会触发。

也就是说，只要dom加载完成就能够调用DOMContentLoaded事件

<img-con src="/render1.jpg"></img-con>

MDN最后一句解释也表明，脚本的执行必须等待之前的样式加载完才会执行。合理的根据场景使用onload或者DOMContentLoaded，可以有效提高交互效率。如只需要操作dom，监听DOMContentLoaded，将会比onlnoad节省不少的时间。

## async 和 defer

async和defer都是引用外部js文件，script标签中的属性，在<<JavaScript高级程序设计>>第三版中,对这两个属性的解释是这样的

    defer:可选，表示脚本可以延迟到文档完全被解析和显示之后再执行。
    async:可选，表示应该立即下载脚本，但不应该妨碍页面中的其他操作，比如下载其他资源或等待加载的脚本。

可以看出，defer属于延迟类的属性，脚本不管什么时候加载，反正等页面解析完毕之后再执行，但是，有多个外部脚本使用defer的时候，无法保证一定的顺序执行，所以当有存在一定的依赖关系时，不建议使用多个延迟脚本，或者根据其特性，脚本都要在页面解析完毕才执行，不如直接将脚本放在底部，不需要设置defer属性。

async是异步脚本，适用于外部脚本，碰到就加载，加载期间是异步的，不影响页面的解析等，但是加载完毕就立刻执行，照样会阻塞页面，并且如果有多个异步脚本，也无法保证它的执行顺序。关于异步脚本的执行，可以保证在onload之前执行，无法保证在DOMContentLoaded事件触发之前或者之后。

理想状态下，async、defer以及默认脚本的加载及对页面解析的影响

<img-con src="/render2.jpg"></img-con>

综合考虑各方面，“脚本在下” 是解决此类问题的最佳体验