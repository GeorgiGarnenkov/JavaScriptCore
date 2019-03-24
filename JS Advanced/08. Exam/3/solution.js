class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.roomTypes = {
            single: Math.floor(+this.capacity * 0.5),
            double: Math.floor(+this.capacity * 0.3),
            maisonette: Math.floor(+this.capacity * 0.2)
        }
        this.bookings = [];
        this.services = [];
        this.currentBookingNumber = 1;
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        // clientName (string), roomType (string), nights (number)
        if (this.roomTypes[roomType] > 1) {
            let clientBooking = {
                clientName: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber
            }

            this.bookings.push(clientBooking);

            this.roomTypes[roomType] -= 1;



            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`

        } else {
            let message = `No ${roomType} rooms available!`;


            Object.entries(this.roomTypes).forEach(entry => {
                let key = entry[0];
                let value = entry[1];
                if (key !== roomType) {
                    message += `Available ${key} rooms: ${value}.`;
                }

            });

            return message.trim();
        }
    }

    roomService(currentBookingNumber, serviceType) {
        // currentBookingNumber (number) and serviceType (string)
        if (currentBookingNumber > this.currentBookingNumber) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        for (let currentBooking of this.bookings) {

            if (currentBooking.roomNumber === currentBookingNumber) {
                if (!currentBooking.services) {
                    currentBooking.services = [];
                }

                if (serviceType === 'food' || serviceType === 'drink' || serviceType === 'housekeeping') {

                    currentBooking.services.push(serviceType);
                    return `Mr./Mrs. ${currentBooking.clientName}, Your order for ${serviceType} service has been successful.`;

                } else {
                    return `We do not offer ${serviceType} service.`
                }
            }
        }
    }

    checkOut(currentBookingNumber) {
        // currentBookingNumber (number)
        let totalMoney = 0;
        let totalServiceMoney = 0;

        if (currentBookingNumber > this.currentBookingNumber) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        for (let currentBooking of this.bookings) {
            if (currentBooking.roomNumber === currentBookingNumber) {

                totalMoney += currentBooking.nights * this.roomsPricing[currentBooking.roomType];

                if (currentBooking.services) {
                    for (const service of currentBooking.services) {
                        totalServiceMoney += this.servicesPricing[service];
                    }
                    this.roomTypes.roomType += 1;
                    return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
                }

                this.roomTypes.roomType += 1;

                return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
            }
        }
    }

    report() {
        let message = `${this.name.toUpperCase()} DATABASE:\n` + `--------------------\n`;
        if (this.bookings.length < 1) {
            message += 'There are currently no bookings.';
            return message;
        }
        let count = 1;
        for (let currentBooking of this.bookings){
            
            message += `bookingNumber - ${currentBooking.roomNumber}\n`;
            message += `clientName - ${currentBooking.clientName}\n`;
            message += `roomType - ${currentBooking.roomType}\n`;
            message += `nights - ${currentBooking.nights}\n`;

            if (currentBooking.services) {
                if(currentBooking.services.length > 0){
                    message +=`services: ${currentBooking.services.join(', ')}\n`;
                }
            }

            if (this.bookings.length !== count++) {
                message += '----------\n';
            }

        }

        return message.trim();
    }
}


let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

// Enjoy your time here Mr./Mrs. Peter. Your booking is 1.
// Enjoy your time here Mr./Mrs. Robert. Your booking is 2.
// Enjoy your time here Mr./Mrs. Geroge. Your booking is 3.

let hotel1 = new Hotel('HotUni', 10);

hotel1.rentARoom('Peter', 'single', 4);
hotel1.rentARoom('Robert', 'double', 4);
hotel1.rentARoom('Geroge', 'maisonette', 6);

console.log(hotel1.roomService(3, 'housekeeping'));
console.log(hotel1.roomService(3, 'drink'));
console.log(hotel1.roomService(2, 'room'));
console.log(hotel1.checkOut(3));

// Mr./Mrs. Geroge, Your order for housekeeping service has been successful.
// Mr./Mrs. Geroge, Your order for drink service has been successful.
// We do not offer room service.

let hotel2 = new Hotel('HotUni', 10);

hotel2.rentARoom('Peter', 'single', 4);
hotel2.rentARoom('Robert', 'double', 4);
hotel2.rentARoom('Geroge', 'maisonette', 6);

hotel2.roomService(3, 'housekeeping');
hotel2.roomService(3, 'drink');
hotel2.roomService(2, 'room');

console.log(hotel2.report());

// HOTUNI DATABASE:
// --------------------
// bookingNumber - 1
// clientName - Peter
// roomType - single
// nights - 4
// ----------
// bookingNumber - 2
// clientName - Robert
// roomType - double
// nights - 4
// ----------
// bookingNumber - 3
// clientName - Geroge
// roomType - maisonette
// nights - 6
// services: housekeeping, drink