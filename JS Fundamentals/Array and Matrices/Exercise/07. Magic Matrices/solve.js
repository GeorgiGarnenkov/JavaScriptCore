function solve(matrix) {
    let rowSum = 0;

    let result = true;

    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {

            let num = +matrix[row][col];
            currentRowSum += num;
        }
        if (row === 0) {
            rowSum = currentRowSum;
        } else if (rowSum !== currentRowSum) {
            result = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            let num = +matrix[row][col];
            colSum += num;
        }

        if (colSum !== rowSum) {
            result = false;
        }
    }

    console.log(result);
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);