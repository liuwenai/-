function factorial (n) {
    // console.trace()   //查看当前调用栈的状态
    if (n === 0){
        return 1
    }
    return n * factorial(n - 1)
}
console.log( factorial(4) );


function factorials(n ,total = 1){
    if (n === 0){
        return 1
    }
    return n * factorial(n - 1,n * total)
}
console.log( factorials(4) );

function callback(){
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000);
console.log('after setTimeout()');

'use strict'
new Promise (function(){});

function test(resolve ,reject){
    var timeOut = Math.random()*2;
    log ('set timeOut to:' + timeOut + 'second.');
    setTimeout(function (){
        if (timeOut < 1){
            log('call resolve()...');
            resolve('200 OK');
        }
        else{
            log('call reject()...');
            reject('timeout in' + timeOut + 'second.');
        }
    },timeOut * 1000);
}
var p1 = new promise (test);
var p2 = p1.then(function (result){
    console.log('成功' + result);
});
var p3 = p2.catch(function (reason){
    console.log('成功' + reason);
});