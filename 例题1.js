const transformString = function (string) {
    let first = null;
    let tempArr = []
    let arr = string.split(',').map(item => Number(item))
    arr.forEach((current, index) => {
        if (index === 0) {
            first = current
        } else {
            let prev = arr[index - 1]
            if (current !== prev + 1) {
                first === prev ? tempArr.push(`${first}`) : tempArr.push(`${first}~${prev}`);
                first = current
            }

            arr.length - 1 === index && (first === current ? tempArr.push(`${first}`) : tempArr.push(`${first}~${current}`))
        }


    })

    return tempArr.join(',')

}
console.log(transformString('1,2,3,5,7,8,10,12,13,14,100'))

// 打印对称数

let result = [];
for (let i = 1; i < 10; i++) {
    result.push(i * 11);
    for (let j = 1; j < 10; j++) {
        result.push(i * 101 + j * 10);
        result.push(i * 1001 + j * 110);
    }
}
console.log(result.sort(function(a,b){return a-b}));