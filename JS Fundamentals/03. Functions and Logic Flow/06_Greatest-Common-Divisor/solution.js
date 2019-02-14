function greatestCD() {
    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);

    let gcd = findGCD(firstNumber, secondNumber);
    document.getElementById('result').textContent = gcd;

    function findGCD(firstNumber, secondNumber) {
        while (secondNumber) {
            let temp = secondNumber;
            secondNumber = firstNumber % secondNumber;
            firstNumber = temp;
        }

        return firstNumber;
    }
}