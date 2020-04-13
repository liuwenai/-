// 柯里化 
// 严格意义上的柯里化应该只接收一个参数
// 参数复用。本质上是降低通用性，提高适用性。


// 普通函数

function Add(x, y) {
    return x + y
}

// 柯里化后

function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

console.log(Add(1, 2))
console.log(curryingAdd(1)(2))



// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值

    // 一个闭包是由函数和声明这个函数的词法环境组成的 -- MDN

    var adder = function () {
        var _adder = function() {
            // [].push.apply(_args, [].slice.call(arguments));
            _args.push(...arguments);
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(..._args);
}
console.log(add(1)(2)(3))
console.log(add(1, 2, 3)(4))
console.log(add(1)(2)(3)(4)(5))
console.log(add(2, 6)(1))


function sub_curry(fn){
    return function(){
        return fn()
    }
}

function curry(fn, length){
    length = length || 4;
    return function(){
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var person = [{name: 'kevin'}, {name: 'daisy'}]

var name = person.map(function(item){
    return item.name
})
 
console.log(name)   // ['kevin','daisy']

var prop = curry(function(key,oj){
    return obj[key]
})

var name = person.map(prop('name'))

console.log(name)   // ['kevin','daisy']
