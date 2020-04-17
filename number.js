
//小数判断


function numberCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

console.log(numberCloseEnoughToEqual(a, b));      //true
console.log(numberCloseEnoughToEqual(0.00001, 0.0001));   //false

console.log(a === b ? true : false)    //false



// 使用不同进制把一个数字转换为字符串
// 使用 var 关键字声明的变量在任何地方都可以修改：


let num = 15;
var a = num.toString();
var b = num.toString(2);
var c = num.toString(8);
var d = num.toString(16);

console.log(a)
console.log(b)
console.log(c)
console.log(d)


// (5).add(3).minus(2)

//链式操作+给Number/Object对象添加方法


Number.prototype.add = function (n) {
    return this.valueOf() + n
}

Number.prototype.minus = function (n) {
    return this.valueOf() - n
}

console.log((5).add(3).minus(2))

var obj = { 1: 222, 2: 333, 5: 888 }

function hander(obj){
    let arr = []
    for(let i = 1;i <= 12;i++){
        if(obj[i]){
            arr.push(obj[i])
        }else{
            arr.push(null)
        }
    }
    return arr
}

console.log(hander(obj))


var arr = [1,2,3]
for (let i = 0; i < arr.length; i++) {
    setTimeout(function(){
        console.log(i)
    },3000)    
}