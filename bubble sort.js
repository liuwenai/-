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
