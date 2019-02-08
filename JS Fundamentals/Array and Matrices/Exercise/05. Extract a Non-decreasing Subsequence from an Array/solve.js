function solve(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        let lastElement = resultArray[resultArray.length - 1];
        if (lastElement === undefined) {
            resultArray.push(arr[i]);            
        }
        if (arr[i] >= lastElement) {
            resultArray.push(arr[i]);
        }
    }

    console.log(resultArray.join('\n'));
}

    solve([20, 
        2, 
        3,
        4]
        );