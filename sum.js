// nums = [2,7,11,15] ,target = 9
// 2 + 7 = 9
// [0,1]


function sum(arr, target) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                res.push([i, j]);
            }
        }
    }
    return res
}

console.log(sum([6, 2, 3, 7, 15], 9))



// {1:222, 2:123, 5:888}，
// 请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

let arr1 = {1:222, 2:123, 5:888}
const tt = Array.from({length:12}).map((item,index)=> arr1[index+1]||null)

// let obj = {1:222, 2:123, 5:888};
// const tt = Array.from({length:12},(item,index)=>obj[index+1]||null)

console.log(tt)