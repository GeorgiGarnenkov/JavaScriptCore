function solve(num) {

    let arr = [] ;
    let sNumber = num.toString();
    
    let boolResult = true;
    let sumResult = Number(0);

    for (let i = 0; i < sNumber.length; i++) {
        arr.push(+sNumber[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = 0; j < arr.length; j++) {
            let num2 = arr[j];

            if (num1 !== num2) {
                boolResult = false;
            }
        }
        sumResult += num1;
    }

    console.log(boolResult);
    console.log(sumResult);
}

solve(2222222);