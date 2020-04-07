function moveZero(arr) {
    let len = arr.length  // 5
    let j = 0
    for(let i = 0;i < len-j;i++){                         
        if(arr[i] === 0){
            arr.push(0)       //在最后一位后增加一个0
            arr.splice(i,1)   //从第i位开始删除一个元素  
            i--               //重新开始                        
            j++              
        }
    }
    return arr
}
let arr = [0,1,0,0,3,12]
console.log(moveZero(arr))


//splice() 从第0位（第一个）开始删除两个元素，并增加'','',''
// var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// console.log(removed)

//作用域
function foo(a) {
    if (typeof a === "number" || a instanceof Number) {
        const b = a + 1
        console.log(b)
    }
}

foo(12)

console.log([3,15,8,29,102,22].sort()) //[ 102, 15, 22, 29, 3, 8 ]
