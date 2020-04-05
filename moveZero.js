function moveZero(arr) {
    let array = arr.sort(function (a, b) {
        return a - b
    })
    array.forEach(element => {
        if (element === 0) { 
            array.shift()
            array.push(0) 
        }
    });
    console.log(array)
}
let arr = [4, 7, 3, 8, 0, 0, 0]
moveZero(arr)