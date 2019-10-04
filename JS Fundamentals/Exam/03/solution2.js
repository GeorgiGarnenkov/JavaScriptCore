function solve(matrixOne, matrixTwo) {

    let matrixThree = [];
    let reminder = 0;
    let oldReminder = 0;
    for (let row = 0; row < matrixOne.length; row++) {

        matrixThree[row] = [];


        for (let col = 0; col < matrixOne[row].length; col++) {

            let num1 = matrixOne[row][col];
            let num2 = matrixTwo[row][col];

            let sum = num1 + num2;

            if (sum >= 9) {
                oldReminder = reminder;
                reminder = sum - 9;

                if (oldReminder > 0) {

                    reminder += oldReminder;
                    oldReminder = 0;

                    if (col === matrixOne[row].length - 1) {
                        matrixThree[row].push(9);

                        while (reminder > 9) {
                            if (reminder <= 9) {
                                matrixThree[row].push(reminder);
                                reminder = 0;
                                break;
                            }

                            matrixThree[row].push(9);
                            reminder -= 9;
                        }

                        matrixThree[row].push(reminder);
                        reminder = 0;
                        break;
                    }
                }

                matrixThree[row].push(9);

                if (col === matrixOne[row].length - 1 && row === matrixOne.length - 1) {

                    while (reminder > 9) {
                        if (reminder <= 9) {
                            matrixThree[row].push(reminder);
                            reminder = 0;
                            break;
                        }

                        matrixThree[row].push(9);
                        reminder -= 9;
                    }
                    if (reminder === 0) {
                        break;
                    }
                    matrixThree[row].push(reminder);
                    reminder = 0;
                    break;
                }

            } else {
                if (reminder > 0) {
                    sum += reminder
                }
                matrixThree[row].push(sum);
                reminder = 0;
            }
        }
    }

    console.log(JSON.stringify(matrixThree));
}

solve([[9, 2, 3], [4, 5, 6], [7, 8, 8]],
      [[1, 1, 1], [1, 1, 1], [9, 1, 1]]

);