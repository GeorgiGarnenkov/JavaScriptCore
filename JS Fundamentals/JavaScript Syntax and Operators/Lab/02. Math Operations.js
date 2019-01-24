function solve(num1, num2, operator) {
    let sum;
    switch (operator) {
        case '+':
            sum = num1 + num2
            break;
        case '-':
            sum = num1 - num2
            break;
        case '*':
            sum = num1 * num2
            break;
        case '/':
            sum = num1 / num2
            break;
        case '%':
            sum = num1 % num2
            break;
        case '**':
            sum = num1 ** num2
            break;
    }
    console.log(sum);
}
solve(3, 5.5, '*')
