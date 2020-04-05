
//小数判断


function numberCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

console.log(numberCloseEnoughToEqual(a, b));      //true
console.log(numberCloseEnoughToEqual(0.00001, 0.0001));   //false

console.log(a === b ? true : false)    //false