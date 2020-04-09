# study-JavaScript

每日一题

学习

混杂着


# javaScript
##### splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
###### splice() 从第0位（第一个）开始删除两个元素，并增加'','',''
> var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
>
> var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
>
> console.log(removed)
>

##### push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。



##### parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
###### const intValue = parseInt(string[, radix]);
> string 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。
>
> radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。 返回值 返回一个整数或NaN
>

##### sort()方法用于对数组的元素进行排序。默认排序顺序为按字母升序。
> 升序: XXX.sort(function(a,b){return a-b});
>
> 降序: XXX.sort(function(a,b){return b-a});
>

* . 的优先级高于 = 的优先级
* = 具有右结合性（执行的方向是从右往左，先执行 = 右边的表达式，然后把结果赋值给 = 左边的表达式，从这里可以得出 = 属于二元操作符），多个 = 的执行过程，可以类比成"递归"的过程


##### map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

>按照原始数组元素顺序依次处理元素。
>

+ Math.sqrt 平方根