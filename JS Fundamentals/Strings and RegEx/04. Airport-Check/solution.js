function solve() {
    
    let str = document.getElementById('str');
    let result = document.getElementById('result');

    let [text, wantedInfo] = str.value.split(', ');

    let namePattern =/ ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let nameMatch = text.match(namePattern);

    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightNumPattern = / [A-Z]{1,3}[0-9]{1,5} /g;
    let airportMatch = text.match(airportPattern);
    let flightNumMatch = text.match(flightNumPattern);

    let companyPattern = /- ([A-Z]([a-z]+)?)\*([A-Z]([a-z]+)?) /g;
    let companyMatch = text.match(companyPattern);

    if (nameMatch && wantedInfo === 'name') {
        let name = nameMatch[0].trim().replace(/-/g, ' ');
        
        result.textContent = `Mr/Ms, ${name}, have a nice flight!`;

    } else if (flightNumMatch && airportMatch && wantedInfo === 'flight') {
        let flightNum = flightNumMatch[0].trim();
        let from = airportMatch[0].trim().split('/')[0];
        let to = airportMatch[0].trim().split('/')[1];

        result.textContent = `Your flight number ${flightNum} is from ${from} to ${to}.`;
    } else if (companyMatch && wantedInfo === 'company') {
        let company = companyMatch[0].replace('-', ' ').trim().replace('*', ' ');

        result.textContent = `Have a nice flight with ${company}.`;

    } else {
        let name = nameMatch[0].trim().replace(/-/g, ' ');
        let flightNum = flightNumMatch[0].trim();
        let from = airportMatch[0].trim().split('/')[0];
        let to = airportMatch[0].trim().split('/')[1];
        let company = companyMatch[0].replace('-', ' ').trim().replace('*', ' ');

        result.textContent = `Mr/Ms, ${name}, your flight number ${flightNum} is from ${from} to ${to}. Have a nice flight with ${company}.`;
    }
}