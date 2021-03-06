function solve(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let min = arr.reduce((a, b) => Math.min(a, b));
    let max = arr.reduce((a, b) => Math.max(a, b));
    let product = arr.reduce((a, b) => a * b);
    let join = arr.reduce((a, b) => a + b, '');

    console.log(`Sum = ${sum}\nMin = ${min}\nMax = ${max}\nProduct = ${product}\nJoin = ${join}`)
}

solve([2, 3, 10, 5]);