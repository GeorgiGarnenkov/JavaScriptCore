function solve(arr) {

    let stringToPrint = []

    let [startReg, endReg] = [/^<\w+>/, /<\/\w+>$/]
    
    for (let line of arr) {

        let check = startReg.test(line) && endReg.test(line);

        let [start, end] = [line.match(startReg), line.match(endReg)];

        if (check && start[0] === end[0].replace(/\//, '')) {
            stringToPrint.push(line.replace(/<\/*\w+>/gi, ''));
        }
    }

    console.log(stringToPrint.join(' '))
}

solve(['<h1><span>Hello World!</span></h1>',
            '<p>I am Peter.'
        ]
);