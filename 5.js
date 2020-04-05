var callbacks = [];
for (var i = 0;i <= 2; i++){
    (function (i){
        callbacks[i] = function () {
        return i * 2;
        };
    })(i);
}

console.log(callbacks[0]());   // 0
console.log(callbacks[1]());   // 2
console.log(callbacks[2]());   // 4

let callback = [];
for(let i = 0;i <= 2; i++){
    callback[i] = function (){
        return i * 2;
    }
}
console.log(callback[0]()); //0
console.log(callback[1]());  //2
console.log(callback[2]());  //4

function foo(){
    console.log(a);
}
function bar(){
    var a = 3;
    foo();
}
var  a = 2;
bar(); //2

//variable(activation) object 包含当前执行上下文中的所有变量、函数以及具体分支中的定义
//scope chain 作用域链


//在作用域中重复命名同名函数，后者会覆盖前者
sayHello(); // hey!
function sayHello(){
    function Hello(){
        console.log('Hello!');
    }
    hello();
    function hello (){
        console.log('Hey!'); 
    }
}

sayWorld();  //  World
function sayWorld (){
    function world (){
        console.log('World');
    }
    world();
    var world = function () {
        console.log('World!');
    }
}

var MyApp = {
    namespace : function(ns){
        var parts = ns.split('.'),
        object = this, i, len;
        for(i = 0, len = parts.length;i < len; i++){
            if (!object[parts[i]]){
                object[parts[i]] = {};
            }
            object = object[parts[i]];
        }
        return object;
    }
};
MyApp.namespace('Helpers.Parsing');
MyApp.Helpers.Parsing.DateParser = function (){
    console.log('This is my space!');
};