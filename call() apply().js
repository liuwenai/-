/*
/*
//apply()
//传入两个参数：一个是作为函数上下文的对象，另一个是作为函数参数所组成的数组
let obj = {
    name : 'linxin'
}

function func(firstName,lastName){
    console.log(firstName + ' ' + this.name + ' ' + lastName);
}

func.apply(obj,['A','B']);  //A linxin B


//call()方法
//第一个参数作为函数上下文的对象，后面传入的是一个参数代表，而不是单个数组
let obj = {
    name : 'linxin'
}

function func(firstName,lastName){
    console.log(firstName + ' ' + this.name + ' ' + lastName);
}

func.call(obj,'C','D');  // C linxin D

//参数在一个数组内就用apply，参数比较散乱就用call

//改变this指向
let obj = {
    name : 'linxin'
}
function func () {
    console.log(this.name);
}

func.call(obj);    //linxin

//借用别的对象的方法
let Person1 = function () {
    this.name = 'linxin';
}
let Person2 = function () {
    this.getname = function () {
        console.log(this.name);
    }
    Person1.call(this);//使用Person1对象代替this对象
}
let person = new Person2();
person.getname();    //linxin

//调用函数,apply,call方法可以使函数立即执行
function func (){
    console.log('linxin');
}
func.call();    //linxin
func.apply();   //linxin


//bind不会立即执行，而是返回一个改变了上下文this后的函数
let obj = {
    name : 'linxin'
}
function func (){
    console.log(this.name);
}
let func1 = func.bind(obj);
func1();   //linxin


*/
function func (a,b,c){
    console.log(a,b,c);
}
let func1 = func.bind(null,'linxin');

func('A', 'B', 'C');   //A B C
func1('A', 'B', 'C');   //linxin A B
func1('B', 'C');        //linxin B C
func.call(null, 'linxin');   //linxin undefined undefined

let arr = [1,4,5,2,9,7];
let max = Math.max.apply(null, arr);
console.log(max);
