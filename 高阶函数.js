function add (x,y,f){
    return f(x) + f(y);
}
var x = add(-5,6,Math.abs);
console.log(x);  //11


//map()是Array中的方法
function pow(x){
    return x*x;
}
var arr = [1,2,3,4,5,6,7];
var results = arr.map(pow);
console.log(results); //[1,4,9,16,25,36,49]
console.log(arr.map(String));  //[ '1', '2', '3', '4', '5', '6', '7' ]


//reduce()把结果继续和序列的下一个元素做累积计算
var arr = [1,3,5,7,9];
var result1 = arr.reduce(function(x,y){
    return x + y;
}
);
console.log(result1);  //25

var result2 = arr.reduce(function(x,y){
    return x * y;
});
console.log(result2);  //945


//forEach()每一项做一件事
var arr = [1,2,3,4];



