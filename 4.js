//鸭子类型
/*
var duck = {
      duckSinging:function(){
          console.log('gagagagaga');
      }
};

var chicken = {
    duckSinging:function(){
        console.log('gagagagaga');
    }
};

var choir = [];  //合唱团

var jionChoir = function(animal){
      if (animal && typeof animal.duckSinging === 'function'){
          choir.push(animal);
          console.log('恭喜加入合唱团啊！！！');
          console.log('合唱团已有成员：' + choir.length);
      }
};

jionChoir(duck);
jionChoir(chicken);
*/


/*

var a = "Hello World";
var b = [];
var c = function(){};

//typeof()
console.log(typeof(a));    //string
console.log(typeof(b));    //object
console.log(typeof(c));    //function

//instanceof
console.log(a instanceof Object);  //false
console.log(b instanceof Object);   //true
console.log(c instanceof Object);   //true
console.log(a instanceof Array);    //false
console.log(b instanceof Array);    //true
console.log(c instanceof Array);    //false
console.log(a instanceof Function);   //false
console.log(b instanceof Function);   //false
console.log(c instanceof Function);     //true

//object.prototype.toString.call()
console.log( Object.prototype.toString.call( a ) );  //[object String]
console.log( Object.prototype.toString.call( b ) );   //[object Ayyay]
console.log( Object.prototype.toString.call( c ) );   //[object Function]


console.log( Object.prototype.toString.call(a).slice(8, -1));   //String

function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}

console.log( is('String', 'test'));             // true
console.log( is('String', new String('test'))); // true

*/

function Foo () {}
function Bar () {}
Bar.prototype =  new Foo () ;
console.log( new Bar () instanceof Bar );  //true
console.log( new Bar () instanceof Foo );  //true

Bar.prototype = Foo;
console.log( new Bar instanceof Foo );   //flase

