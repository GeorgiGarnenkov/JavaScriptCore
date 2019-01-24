function solve(arr1, arr2, arr3) {
    let sumLength;
    let avgLength;
    let first = arr1.length;
    let second = arr2.length;
    let third = arr3.length;
    sumLength = first + second + third;
    avgLength = Math.floor(sumLength/3);
    console.log(sumLength);
    console.log(avgLength);
}

solve('chocolate', 'ice cream', 'cake');
