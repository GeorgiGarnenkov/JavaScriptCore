function solve(arr) {
    let stringResult = "";
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];

        if (i % 2 === 0) {
            stringResult += index + ':' + ' ';
        }
        else{
            stringResult += index + ',' + ' ';
        }
    }
    let stringLenght = stringResult.length;
    let result = stringResult.substring(0, stringLenght-2);

    console.log(`{ ${result} }`);
}

solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);