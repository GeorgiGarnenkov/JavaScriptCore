function validate() {

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', check);

    let outputField = document.getElementById('response');

    function check() {

        let numbers = Array.from(document.getElementsByTagName('input')[0].value, Number);
        let remainder = 0;

        function checkRemainder(numbers, remainder) {

            for (let i = 0; i < numbers.length - 1; i++) {

                let digit = +numbers[i];

                remainder += (digit * weights[i]);
            }
            return remainder % 11;
        }

        let numLength = numbers.length;

        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        if (numLength === 10) {

            let lastDigit = numbers[numLength - 1];

            remainder = checkRemainder(numbers, remainder);

            if (remainder === 10) {
                remainder = 0;
            }

            if (lastDigit === remainder) {
                outputField.textContent = 'This number is Valid!';

            } else {
                outputField.textContent = 'This number is NOT Valid!';
            }

        } else {
            outputField.textContent = 'This number is NOT Valid!';
        }
    }
}