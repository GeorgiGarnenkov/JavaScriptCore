function solve() {

    let output = document.querySelector('div#output p');
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', filter);
    buttons[1].addEventListener('click', sort);
    buttons[2].addEventListener('click', rotate);
    buttons[3].addEventListener('click', get);

    function filter() {
        let inputString = document.getElementById('input');
        let secondaryCommand = document.getElementById('filterSecondaryCmd').value;
        let position = +document.getElementById('filterPosition').value;

        switch (secondaryCommand) {
            case 'uppercase':
                let regexUpper = /[A-Z]+/g;
                let arrayOfUpperLetters = inputString.value.match(regexUpper);

                let char = arrayOfUpperLetters[position - 1];
                output.textContent += char;
                break;
            case 'lowercase':
                let regexLower = /[a-z]+/g;
                let arrayOfLowerLetters = inputString.value.match(regexLower);

                let char2 = arrayOfLowerLetters[position - 1];
                output.textContent += char2;
                break;
            case 'nums':
                let regexDigit = /[0-9]+/g;
                let arrayOfDigits = inputString.value.match(regexDigit);

                let char3 = arrayOfDigits[position - 1];
                output.textContent += char3;
                break;
        }
    }

    function sort() {
        let inputString = document.getElementById('input');
        let secondaryCommand = document.getElementById('sortSecondaryCmd').value;
        let position = +document.getElementById('sortPosition').value;

        switch (secondaryCommand) {
            case 'A':
                let ascendingArray = sortString(inputString.value);

                let char = ascendingArray[position - 1];
                output.textContent += char;
                break;
            case 'Z':
                let descendingArray = sortReverseString(inputString.value);

                let char2 = descendingArray[position - 1];
                output.textContent += char2;
                break;
        }
        function sortString(str) {
            let arr = str.split('');
            let sorted = arr.sort();
            return sorted.join('');
        }
        function sortReverseString(str) {
            let arr = str.split('');
            let sorted = arr.sort().reverse();
            return sorted.join('');
        }
    }

    function rotate() {

        let inputString = document.getElementById('input');
        let secondaryCommand = +document.getElementById('rotateSecondaryCmd').value;
        let position = +document.getElementById('rotatePosition').value;

        let char = rotateElements(secondaryCommand, inputString.value)[position - 1];
        output.textContent += char;

        function rotateElements(num, str) {
            let arr = str.split('');
    
            for (let i = 0; i < num; i++) {
                let lastElement = arr.pop();
                arr.unshift(lastElement);
            }
            let rotated = arr.join('');
            return rotated;
        }

    }

    function get() {
        let inputString = document.getElementById('input');
        let position = +document.getElementById('getPosition').value;

        let symbols = inputString.value.split('');
        let char = symbols[position - 1];
        output.textContent += char;

    }
}