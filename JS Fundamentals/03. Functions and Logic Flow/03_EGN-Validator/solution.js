function validate() {
    let yearElement = document.getElementById('year');
    let monthElement = document.getElementById('month');
    let dateElement = document.getElementById('date');
    let maleElement = document.getElementById('male');
    let femaleElement = document.getElementById('female');
    let codeElement = document.getElementById('region');
    let button = document.querySelector('button');

    button.addEventListener('click', getEgn);

    function getEgn() {
        let egn = '';
        let year = yearElement.value;
        let month = monthElement.selectedIndex;
        let day = dateElement.value;
        let gender = maleElement.checked ? 2 : 1;
        let regionCode = codeElement.value;

        if (year >= 1900 && year <= 2100 && regionCode >= 43 && regionCode <= 999) {
            egn = `${year.substr(-2)}${addZeroToNumber(month)}${addZeroToNumber(day)}${regionCode.slice(0, 2)}${gender}`;
            let controlDigit = getControlDigit(egn);

            document.getElementById('egn').textContent = `Your EGN is: ${egn}${controlDigit}`;

            yearElement.value = '';
            monthElement.value = '';
            dateElement.value = '';
            maleElement.checked = false;
            femaleElement.checked = false;
            codeElement.value = '';
        }
    }

    function getControlDigit(egn) {
        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;

        for (let i = 0; i < egn.length; i++) {
            sum += Number(egn[i] * weightPosition[i]);
        }

        let controlDigit = sum % 11 <= 9 ? sum % 11 : 0;
        return controlDigit;
    }

    function addZeroToNumber(number) {
        if (Number(number) < 10) {
            return `0${number}`;
        }

        return number;
    }
}