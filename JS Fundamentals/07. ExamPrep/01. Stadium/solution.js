function solve() {
    let obj = {
        'Levski': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        'summary': {
            'fans': 0,
            'profit': 0
        }
    };

    let buttons = document.getElementsByClassName('seat');
    let textarea = document.getElementById('output');

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {

        let seat = e.target;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);

        if (seat.style.backgroundColor === '') {

            seat.style.backgroundColor = 'rgb(255,0,0)';

            obj.summary.profit += obj[zone][sector];
            obj.summary.fans += 1;

            textarea.value += ` Seat ${seat.textContent} in zone ${zone} sector ${sector} was taken.\n`;

        } else {
            textarea.value += ` Seat ${seat.textContent} in zone ${zone} sector ${sector} is unavailable.\n`
        }
    }


    let summaryButton = document.getElementById('summary').getElementsByTagName('button');
    summaryButton[0].addEventListener('click', summaryClick);
    let summaryText = document.getElementById('summary').getElementsByTagName('span')[0];

    function summaryClick() {

        summaryText.textContent = `${obj.summary.profit} leva, ${obj.summary.fans} fans.`;

    }
}