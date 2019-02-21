function solve() {
    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    
    let sortedTypes = [];
    for (let type in summary) {
        sortedTypes.push([type, summary[type]]);
    }

    function comparator(a, b) {
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        return 0;
    }

    for (let arr of sortedTypes.sort(comparator)) {
        console.log(arr[0] + ' = ' + arr[1]);
    }
}


solve('cat', 55, 'dog', 42, 66, function () {
    console.log('Hello world!');
});