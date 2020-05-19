# study-JavaScript

每日一题

学习

混杂着

[.md语法入门](https://www.jianshu.com/p/399e5a3c7cc5)

_.md语法入门_
__md语法入门__
*.md语法入门*
**md语法入门**

> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用

//例子一
|123|234|345|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子二
|123|234|345|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
//例子三
123|234|345
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde

```java

//代码块
```

分割线

---
- - -
------
***
* * *
******
___
_ _ _
______


# javaScript

+ ECMAScript(核心)：JavaScript语言基础
+ DOM(Document Object Model，文档对象模型)：规定了访问HTML和XML的接口
   * DOM事件模型：冒泡金和捕获
   * 事件流：捕获阶段->目标阶段->冒泡阶段


+ BOM(浏览器对象模型)：提供了浏览器窗口之间进行交互的对象和方法

##### 介绍JavaScript的原型，原型链？有什么特点

原型
+ JavaScript的所有对象都包含了一个[proto]内部属性，这个属性所对应的就是该对象的原型
+ JavaScript的函数对象，除了原型[proto]之外，还预置prototype属性
+ 当函数对象作为构造函数创建实例时，该prototype属性值将作被为实例对象的原型[proto]

原型链
+ 当一个对象调用的属性/方法自身不存在时，就会去自己[proto]关联的前辈prototype对象上去找
+ 如果没找到，就会去该prototype原型[proto]关联的前辈prototype去找。依次类推，直到找到属性/方法或undefined为止。从而形成了所谓的"原型链"

原型特点
+ JavaScript对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变。


#### this关键字

+ this总是指向函数的直接调用者
+ 如果有new关键字，this指向new出来的实例对象
+ 在事件中，this指向触发这个事件的对象
+ IE下attachEvent中的this总是指向全局对象Window


#### 闭包

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域。**闭包表示包括不被计算的变量的函数，也就是说函数可以使用函数之外定义的变量**

特性：
+ 函数内再嵌套函数
+ 内部函数可以引用外层的参数和变量
+ 参数和变量不会被垃圾回收机制收回


#### 浏览器的渲染过程

+ 解析HTML构建DOM树，并行请求css、image、js    
```js
 // 不需要DOM处理script节点。script位置不影响首屏显示时间
 // 浏览器解析HTML是自上而下的线性过程，script作为HTML的一部分也遵守这个规则
 // 因此，script会延迟DOMContentLoad，只显示其中部分首屏内容，从而印象首屏显示时间
```
+ css文件下载完毕，构建CSSOM（CSS树）
+ CSSOM构建结束后，和DOM一起生成Render tree（渲染树）
+ Layout布局：计算每个节点在屏幕中的位置
+ 显示（Painting）：通过显卡吧把页面画到屏幕上

#### DOM树和渲染树的区别

+ DOM树与HTML标签一一对应，包括head和隐藏元素
+ 渲染树不包括head和隐藏关系。每个节点都有对应的CSS属性

#### js作用域 

+ function(){}内的区域，称谓函数作用域

***

##### splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
###### splice() 从第0位（第一个）开始删除两个元素，并增加'','',''

```javascript
 var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
 var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
 console.log(removed)
 //[ 'angel', 'clown' ]
```

##### push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。



##### parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
###### const intValue = parseInt(string[, radix]);
> string 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。
>
> radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。 返回值 返回一个整数或NaN


##### sort()方法用于对数组的元素进行排序。默认排序顺序为按字母升序。
> 升序: XXX.sort(function(a,b){return a-b});
>
> 降序: XXX.sort(function(a,b){return b-a});


* . 的优先级高于 = 的优先级
* = 具有右结合性（执行的方向是从右往左，先执行 = 右边的表达式，然后把结果赋值给 = 左边的表达式，从这里可以得出 = 属于二元操作符），多个 = 的执行过程，可以类比成"递归"的过程


##### map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

>按照原始数组元素顺序依次处理元素。

+ Math.sqrt 平方根

##### toString()把数字转换为字符串

##### prototype属性

- 向对象添加属性和方法

##### from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。

##### split() 方法用于把一个字符串分割成字符串数组。

```javascript

var str="How are you doing today?";
var n = str.split(" ",3);
 // How,are,you

var str = "How are you doing today?";
var n = str.split("o");
 // H,w are y,u d,ing t,day?

 ```

##### reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

+ reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
**注意**  reduce() 对于空数组是不会执行回调函数的。

##### concat() 方法用于连接两个或多个字符串。

```javascript

 var str1 = "Hello ";
 var str2 = "world!";
 var str3 = " Have a nice day!";
 var n = str1.concat(str2,str3);
  // Hello world! Have a nice day!

  ```

##### 正则表达式


+ `{m,n}`  最少出现m次，最多出现n次
+ `{m,}`  至少出现m次
+ `{m}` == `{m,m}` 表示出现m次
+ `[abc]`  出现a、b、c中的任何一个
+ `?` 等价于 `{0,1}` 表示出现或者不出现
+ `+` 等价于 `{1,}` 表示出现至少一次
+ `*` == `{0,}`  出现任意次数，有可能不出现
+ `\d`就是`[0-9]`
+ `\D`就是`[^0-9]`
+ `\w`就是`[0-9a-zA-Z_]`
+ `\W`就是`[0-9a-zA-Z_]`  非单词字符
+ `\s`就是`[ \t\v\n\r\f]`  空白字符
+ `\S`就是`[^ \t\v\n\r\f]`  非空白字符
+ `.`就是`[^\n\r\u2080\u2090]`  通配符，表示几乎任意字符
+ `(p1|p2|p3)` 表示其中任选其一  前面的匹配上后就不在匹配后面的了
```js
var r = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) ); 
// ['abbc','abbbc','abbbbc','abbbbbc']
```

`[abc]`  出现a、b、c中的任何一个

```js
/a[123]b/g
// a1b a2b a3b
```

`[123456abcdefGHIJKLM]` 等价于 `[1-6a-fG-M]`  其中的任意字符
```js
// [-az] [az-] [a\-z]
// 取得'-'、'a'、'z'任意字符
```
`[^abc]` 除了a、b、c之外的任意字符

```js
`\d`就是`[0-9]`
`\D`就是`[^0-9]`
`\w`就是`[0-9a-zA-Z_]`
`\W`就是`[0-9a-zA-Z_]`  非单词字符
`\s`就是`[ \t\v\n\r\f]`  空白字符
`\S`就是`[^ \t\v\n\r\f]`  非空白字符
`.`就是`[^\n\r\u2080\u2090]`  通配符，表示几乎任意字符
```
***


Vue生命周期

#### Vue的三要素

+ 响应式
+ 模板引擎
+ 渲染

***

Web

### 1. Web标准三方面

+ 结构标准(HTML): 用于对网页元素进行整理和分类
+ 表现标准(CSS): 用于设置网页元素的版式、颜色、大小等外观样式
+ 行为标准(JS): 定义页面的交互和行为

### 2. Web前端三方面

+ HTML：超文本标记语言
+ CSS：层叠样式
+ JS：交互的角度描述页面行为



HTML **超文本标记语言**
  + 两个标记 . 和 .. 分表代表当前目录和上一层目录。

#### 定义列表`<dl>`
  + `<dt>` :列表的标题，这个标签是必须的
  + `<dl>` :列表的列表项，如果不需要它，可以不加


#### 内嵌框架`<iframe>`
**`<iframe>`** 是 **`<body>`**的子标记

   ```html
    <body>

 	   <a href="文字页面.html" target="myframe">默认显示文字页面</a><br>
 	   <a href="图片页面.html" target="myframe">点击进入图片页面</a><br>
 	   <a href="表格页面.html" target="myframe">点击进入表格页面</a><br>

 	   <iframe src="文字页面.html" width="400" height="400" name="myframe"></iframe>
 	   <br>
 	   嘿嘿
    </body>
   ```

#### H5新增语义标签

   + `<section>` 表示区块
   + `<article>` 表示文章。 文章、评论、帖子、博客
   + `<header>` 页眉
   + `<footer>` 页脚
   + `<nav>` 导航
   + `<aside>` 侧边栏
   + `<figure>` 媒介内容分组
   + `<mark>` 标记
   + `<progress>` 进度
   + `<time>` 日期


#### 拖拽元素
页面设置了 `draggable = 'true'` 属性元素

     + `ondragstart` 拖拽开始时调用
     + `ondragleave` **鼠标离开拖拽元素时**调用
     + `ondragend` 拖拽结束时
     + `ondrag` 整个拖拽过程都会调用


    ```html
        <div class="box" draggable="true"></div>
    ```


 CSS
#### background的常见背景属性

    + `background-color:#ff99ff`，设置元素的背景色
    + `background-image:url(images/2.gif)`，图像设置成背景
    + `background-repeat:no-repeat`，是否平铺
        - `no-repeat` 不要平铺
        - `repeat-x` 横向平铺
        - `repeat-y` 纵向平铺
    + `background-position`，背景定位
....

#### ID选择器：规定用`#`来定义

#### 类选择器：规定用`.`来定义
**类上样式，id上行为**

CSS画三角形

     ```css
     .div1 {
            width: 0;
            height: 0;
            border-top: 30px solid red;
            /* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */
            border-left: 30px solid transparent;
            border-right: 20px solid transparent;
        }
     ```

#### Git
+ `git branch`  查看分支
+ `git branch <name>`  创建分支
+ `git checkout/switch <name>` 切换分支
+ `git checkout -b <name>/git switch -c <name>`  创建并切换分支到
+ `git merge <name>`   合并某分支到当前分支
+ `git branch -d <name>`   删除分支
+ `git rebase`  合并分支

#### MVVM
#### MVC
#### MVP


### SASS

+ sass
+ scss

sass以".sass"后缀为扩展名。 Sass 是基于 Ruby 写出来，所以其延续了 Ruby 的书写规范。在书写 Sass 时不带有大括号和分号，其主要是依靠严格的缩进方式来控制的。
```html
body
   color:#fff;
   background:#f36
```
scss以".scss"后缀为扩展名。可以将".css"直接换为".scss"


### JQuery

[JQuery实例](https://www.runoob.com/jquery/jquery-examples.html)

```html
  $(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
  });
```

+ 隐藏和显示

```html
$("button").click(function(){
  $("p").toggle();
});
```

+ 动画 animate() 方法

```html
$("button").click(function(){
  $("div").animate({left:'250px'});
});
```

+ load()

```
$(selector).load(URL,data,callbacck)
```

#### Node.js

+ Node.js是 JavaScript 语言在服务器端的运行环境（平台）。