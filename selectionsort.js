//选择排序
function selectionSort(arr){
    var len = arr.length;
    var minIndex,temp;
    console.time('选择排序耗时');
    for (var i = 0;i < len - 1; i++){ 
        minIndex = i;      
        for (var j = i + 1; j < len; j++){
            if (arr[j] < arr[minIndex])   //选择最小数保存
            minIndex = j;
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}
var arr = [2,7,1,5,11,67,21]
console.log(selectionSort(arr));
