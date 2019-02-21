function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (arr.length === 0) {
        return 0;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    if (!arr.every(Number)) {
        return NaN;
    }

    let subArr = arr
    .slice(startIndex, endIndex + 1);

    return subArr
        .map(Number)
        .reduce((a, b) => a + b);
 
}

console.log(subsum([10, 'twenty', 30, 40], 0, 2));

