function main(arr) {

    let add = 'add';
    let remove = 'remove';

    let initialNum = 1;
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {

        let command = arr[i];

        if (i === 0) {
            arr2.push(initialNum);
            continue;
        }

        switch (command) {
            case add:

                arr2.push(++initialNum);

                break;
            case remove:

                arr2.pop();

                initialNum += 1;

                break;
            default:
                break;
        }
    }

    if (arr2.length > 0) {
        for (let i = 0; i < arr2.length; i++) {
            console.log(arr2[i]);
        }

    } else {
        console.log('Empty');

    }
}
