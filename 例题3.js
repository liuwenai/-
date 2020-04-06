
// 求两个数组的交集

let arr1 = [1]
let arr2 = [1, 1]
let arr = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            arr.push(arr1[i])
            arr2.splice(j, 1)
        }
    }
}
console.log(arr)



// //最长公共子序列
// let str1 = 'likjfh'
// let str2 = 'liufasfg'
// let result = ''
// for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//         if (str1[i] == str2[j]) {
//             result += str1[i]
//             break
//         }
//         continue
//     }
// }
// console.log(result)


let mupltipy8 = (num) => num << 3
console.log(mupltipy8(7))

function bitAdd(m, n) {
    while (m) {
        [m, n] = [(m & n) << 1, m ^ n];
    }
    return n;
}
function multiply7(num) {
    let sum = 0;
    for (var i = 0; i < 7; i++) {
        sum = bitAdd(sum, num);
    }
    return sum;

}
console.log(multiply7(7)); //49


let str='aaadwiubcggkiwj';
const arry = str.match(/(\w)\1+/g);                // 求出连续字符串
console.log(arry)
const maxLen = Math.max(...arry.map(s => s.length));  //求出最长长度
console.log(maxLen)
const result = arry.reduce((pre, curr) => {
  if (curr.length === maxLen) {
    pre[curr[0]] = curr.length;
  }
  return pre;
}, {});
console.log(result);


let arryn = ['1,3,2','1,89,37,4','1,4,2']
let m = arryn.toString().split(",").sort((a,b)=>{ return a-b}).map(Number) 
let n = [... new Set(m)]   // 去重
console.log(n)


//parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
//const intValue = parseInt(string[, radix]);
//string 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。
//radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。 返回值 返回一个整数或NaN
console.log(['1','2','3'].map(parseInt))