// 德国以 . 分割金钱, 转到德国当地格式化方案即可

console.log(10000000000..toLocaleString('de-DE'))

// 寻找字符空隙加 .

console.log('10000000000'.replace(/\B(?=(\d{3})+(?!\d))/g, '.'))

// 寻找数字并在其后面加 . 

console.log('10000000000'.replace(/(\d)(?=(\d{3})+\b)/g, '$1.'))


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let arr3 = [3, 6, 2, 7];
let handle = (...arr) => {
    return arr.reduce((rst, ele, i) => {
        return rst.filter(item => ele.includes(item));
    });
}

console.log(handle(arr1, arr2, arr3));

//正则表达式 
