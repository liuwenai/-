/*
var a = (age => 20);
var b = a;
b.age = 21;
console.log(a.age);  //21


function addTen(num){
    num += 10;
    return num;
}
let count = 20;
let result = addTen(count);
console.log(count);  //20
console.log(result);  //30


let hundred = 100;
let two = 2;
function multiply(x,y){
    return x * y;
}
let twoHundred = multiply(hundred,two);  //
console.log(twoHundred);

function changeAgelmpure(person){
    person.age = 25;
    return person;
}
var alex = {
    name:"Alex",
    age:30
};
var changedAlex = changeAgelmpure(alex);
console.log(alex);   // { name: 'Alex', age: 25 }
console.log(changedAlex);     //  { name: 'Alex', age: 25 }

function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name:"John",
        age:50
    };
    return person;
}
var personObj1 = {
    name:"Alse",
    age:30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1);   //  { name: 'Alse', age: 25 }
console.log(personObj2);   //  { name: 'John', age: 50 }


var a = [1];
var b = a;   //赋值a的引用
b[0]++;
console.log(a);   //b的修改对a也有效   [2]

//传地址
var a = [1,2,3];
var b = [5,6];
function change(){
    var c = a;
    a[0] = 4;  //地址上的值发生了改变
    a = b;
    b = c;
};
change();
console.log(a);   // [5,6]
console.log(b);    //[4,2,3] 


var test = {
    a : 5,
    b : 6,
    sum : function (a,b) {
        function getA(a) {
            this.a = a;
            return this.a;
        }
        function getB(b) {
            this.b = b;
            return this.b;
        }
        return getA(a) + getB(b);
    }
}
console.log(test.sum(3,4));  // 7
console.log(a);              // 3
console.log(b);              // 4
*/
var test = {
    a : 5,
    b : 6,
    sum : function () {
        var self = this;
        function getA() {
            return self.a;
        }
        function getB() {
            return self.b;
        }
        return getA() + getB();
    }
}
console.log(test.sum());     //   11
console.log(a);              //  报错
console.log(b);              //  报错