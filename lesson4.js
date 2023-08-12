const matrixArr = [
    [1, 2, 3],
    [100, 200, 300, 400],
    [4, 5, 6, 7, 8],
    // [500, 600],
]

let maxNum

for (let i = 0; i < matrixArr.length; i++) {
    for(let j = 0 ; j < matrixArr.length; j++){
        maxNum = Math.max.apply(null, matrixArr[i][])
    }
}



console.log(maxNum)