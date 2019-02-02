function leapYear() {

    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', check);

    function check() {

        let year = document.getElementsByTagName('input')[0].value;

        let outputFields = document.getElementById('year');

        let h2 = outputFields.getElementsByTagName('h2')[0];
        let div = outputFields.getElementsByTagName('div')[0];

        let isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

        if (isLeapYear) {
            h2.textContent = 'Leap Year';
            div.textContent = year;
        } else {
            h2.textContent = 'Not Leap Year';
            div.textContent = year;
        }

        document.getElementsByTagName('input')[0].value = "";
    }

}