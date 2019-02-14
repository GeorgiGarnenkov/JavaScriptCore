function solve(inputArr) {
    let closure = (function () {
        let result = '';
        return {
            append: (s) => result += s,
            removeStart: (n) => result = result.substring(n),
            removeEnd: (n) => result = result.substring(0 , result.length - n),
            print: () => console.log(result)
        }
    })();

    for (let line of inputArr) {
        let [command, value] = line.split(' ');
        closure[command](value);
    }
}

solve(['append 123',
'append 45',
'removeStart 2',
'removeEnd 1',
'print']
);