function database(arrayOfTickets, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let resultArr = [];

    for (let stringTicket of arrayOfTickets) {
        let splitTicket = stringTicket.split('|');
        let destination = splitTicket[0];
        let price = Number(splitTicket[1]);
        let status = splitTicket[2];
        let ticket = new Ticket(destination, price, status);
        resultArr.push(ticket);
    }

    switch (sortingCriteria) {
        case 'destination':
            return resultArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'status':
            return resultArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
        case 'price':
            return resultArr.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            break;
    }
}

console.log(database(['New York City|95.99|available',
        'Philadelphia|94.20|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price'
));