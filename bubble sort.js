//冒泡排序
function bubbleSort(arr){
    var len = arr.length;
    for (var i = 0; i < len ; i++){   //比较次数
        for (var j = 0; j < len - 1 - i; j++){
            if (arr[j] > arr[j + 1]){
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr; //2 7 1 5
}
var arr = [2,7,1,5,11,67,21]
console.log(bubbleSort(arr));


//改进

//每次最大值放到最右后，会将本轮最后一个操作的位置作为下一轮的终点，可以减少不必要的一些冒泡

function bubbleSort1(arr){
    let i = arr.length - 1
    while(i > 0){
        let pos = 0
        for(let j = 0; j < i;j++){
            if(arr[j] > arr[j + 1]){
                pos = j
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        i = pos
    }
    console.log(arr)
}

bubbleSort1(arr)