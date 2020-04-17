

/*

//函数内部可以直接读取全局变量

let n = 10;
function f1(){
    console.log(n);
}
f1();  //10


//函数内部无法读取函数内的既不变量
 function f2(){
   //  var m = 14;    //局部变量
      m = 20;    //全局变量
 }
 f2();
 console.log(m);  //20

 //从外部读取局部变量
 //在函数的内部再定义一个函数
 function f3(){
     var n = 13;
     //闭包
     function f4(){
         console.log(n);
     }
     return f4;
 }
 let result = f3();
 result(); //13


 //闭包
 //f5是f6的父函数，f6赋给一个全局变量
 function f5(){
     var a = 99;
     nAdd = function(){  //全局变量，可以在函数外部对函数内部的局部变量进行操作
         a += 1
     }
     function f6(){
         console.log(a);
     }
     return f6;
 }
 var test = f5();
 test(); //99
 nAdd();
 test();  //100


 var name = 'The Windows';
 var object = {
     name : 'My object',

     getNameFunc : function (){
         var that = this;
         return function(){
             return that.name;   //My object
         };
     }
 };
 console.log(object.getNameFunc()());

*/

/*
 //输出0~9个数字
 function init (){
     var pAry = document.getElementsByTagName("p");    将变量i保存在每个段落p上
     for (var i = 0; i < 10; i++){
         pAry[i].i = i;
         pAry[i].onclick = function(){
             console.log(this.i);
         }
     }
 }
 

 var x = 10;
 function fn() {
     console.log(x);
 }
 function show(f){
     var x = 20;
     (function (){
      f();
     })();
 }
 show(fn);  // 10
 

var a = 10;
function fn(){
    var b = 20;
    function bar(){
        console.log(a + b);
    }
    return bar;
}
var x = fn();
    b = 200;
x();          // 30

var max = 10;
fn = function (x){
    if (x > max)
    console.log(x);
};
(function (f){
     var max = 100;
     f(15);
})(fn);      //15


*/

// 闭包表示包括不被计算的变量的函数，也就是说函数可以使用函数之外定义的变量

// 闭包的作用：间接访问一个变量
var sMessage = 'hello world'

function sayHello(){
    console.log(sMessage)
}
sayHello()

var iBassNum = 10

function addNum(sum1,sum2){
    function doAdd(){
        return sum1 + sum2
    }
    return doAdd()
}

console.log(addNum(15,68))




function fn(){
    var max = 10;
    return function bar(x){
        if (x > max)
        console.log(x);
    };
}
var f1 = fn();
max = 100;
f1(15);  //15


//判断一个值是不是null类型
 function isNull(any){
     return !any && typeof any === "object"
 }

 console.log(isNull(null))