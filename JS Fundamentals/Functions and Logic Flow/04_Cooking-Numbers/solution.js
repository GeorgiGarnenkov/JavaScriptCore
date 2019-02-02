function solve() {
    let inputElement = document.querySelector('input');
    let outputElement = document.getElementById('output');

    Array.from(document.querySelectorAll('button')).forEach(b => {
        b.addEventListener('click', function () {
            let number = 0;

            if (outputElement.textContent === '') {
                number = inputElement.value === '' ? 0 : Number(inputElement.value);
            } else {
                number = Number(outputElement.textContent);
            }

            switch (b.textContent) {
                case 'Chop':
                    number = chop(number);
                    break;
                case 'Dice':
                    number = dice(number);
                    break;
                case 'Spice':
                    number = spice(number);
                    break;
                case 'Bake':
                    number = bake(number);
                    break;
                case 'Fillet':
                    number = fillet(number);
                    break;
            }
            outputElement.textContent = number;
        });
    });

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number * 0.8;
    }
}