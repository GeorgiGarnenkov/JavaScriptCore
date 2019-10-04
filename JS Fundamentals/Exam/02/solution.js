function solve(table, commandStr) {
    let header = table.shift();
    let commandArr = commandStr.split(' ');
    let commandFilter = commandArr[0];
    let commandHeader = commandArr[1];
    
    let colIndex = header.indexOf(commandHeader);

    function print(row) {

        return console.log(row.join(' | '));

    };

    if (commandFilter === 'sort') {

        table.sort((a, b) => a[colIndex].localeCompare(b[colIndex]));
        print(header);
        table.forEach(row => print(row));

    } else if (commandFilter === 'hide') {

        table.map(row => row.splice(colIndex, 1));
        header.splice(colIndex, 1);
        print(header);
        table.forEach(row => print(row));

    } else if (commandFilter === 'filter') {

        let value = commandArr[2];

        print(header);
        let printArr = table.filter(row => row[colIndex] === value);
        printArr.forEach(row => print(row));
    }
}

solve([
        ['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']
    ],
    'hide grade'
);