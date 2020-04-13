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
> radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。 返回值 返回一个整数或NaN


##### sort()方法用于对数组的元素进行排序。默认排序顺序为按字母升序。
> 升序: XXX.sort(function(a,b){return a-b});
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
var n=str.split(" ",3);
 // How,are,you

var str="How are you doing today?";
var n=str.split("o");
 // H,w are y,u d,ing t,day?

 ```

##### reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

+ reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
**注意**  reduce() 对于空数组是不会执行回调函数的。

##### concat() 方法用于连接两个或多个字符串。

```javascript

 var str1="Hello ";
 var str2="world!";
 var str3=" Have a nice day!";
 var n = str1.concat(str2,str3);
  // Hello world! Have a nice day!

  ```






