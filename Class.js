// class LazyManClass{
//     constructor(name){
//         this.taskList = []
//         this.name = name
//         console.log(`Hi I am ${this.name}`)
//         setTimeout(() =>{
//             this.next()
//         },1000)
//     }
//     eat(name){
//         var that = this;
//         var fn = (function (n){
//             return function (){
//                 console.log(`I am eating ${n}`)
//                 that.next()
//             }
//         })(name)
//         this.taskList.push(fn)
//         return this
//     }
//     sleepFirst(time){
//         var that = this
//         var fn = (function (t){
//             return function(){
//                 setTimeout(()=>{
//                     console.log(`等待了${t}秒`)
//                     that.next()
//                 },t * 1000)
//             }
//         })(time)
//         this.taskList.push(fn)
//         return this
//     }
//     sleep(time){
//         var that = this 
//         var fn = (function (t){
//             return function(){
//                 setTimeout(()=>{
//                     console.log(`等待了${t}秒`)
//                     that.next()
//                 },t*1000)
//             }
//         })(time)
//         this.taskList.push(fn)
//         return this
//     }
//     next(){
//         var fn = this.taskList.shift()
//         fn && fn()
//     }
// }

// function LazyMan(name){
//     return new LazyManClass(name)
// }

// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');
// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');


// JavaScript实现一个类，实例化

// 构造函数法 this + prototype

function Mobile(name,price){
    this.name = name
    this.price = price
}

Mobile.prototype.sell = function(){
    console.log(this.name + ',售价￥'+ this.price)
}

var iPhone = new Mobile('iPhone',4000)
iPhone.sell()

// Object.create法

var Person = {
    firsrname: "Mark",
    lastname: "Yun",
    age: 25,
    introduce:function(){
        console.log('I am ' + Person.firsrname + ' ' + Person.lastname)
    }
}

var person = Object.create(Person)
person.introduce()

if(!Object.create){
    Object.create = function(o){
        function F(){}
        F.prototype = o
        return new F()
    }
}

// 极简主义法

var Cat = {
    age: 3,
    createNew: function(){
        var cat = {}
        cat.name = "lalala"
        var sount = "maomaomaomao"
        cat.makeSount = function(){
            console.log(sount)
        }
        cat.changeAge = function(num){
            Cat.age = num;
            console.log(Cat.age)
        }
        return cat
    }
}

var cat = Cat.createNew()
console.log(cat.name)
cat.makeSount()
cat.changeAge(7)

// 语法糖
 class Point{
     constructor(x,y){
         this.x = x
         this.y = y
     }
     toString(){
         console.log('(' + this.x + ',' + this.y +')')
     }
 }

 var point = new Point(2,3)
 point.toString()