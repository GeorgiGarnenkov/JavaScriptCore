class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let count = 0;
        for (let grade of Object.keys(this.kids)) {
            count += this.kids[grade].length;
        }

        return count;
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}\'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        for (let kid of this.kids[grade]) {
            if (kid.startsWith(name)) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids[grade]) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let index = -1;
        for (let i = 0; i < this.kids[grade].length; i++) {
            if (this.kids[grade][i].startsWith(name)) {
                index = i;
            }
        }

        if (index === -1) {
            return `We couldn't find ${name} in ${grade} grade.`;
        } else {
            this.kids[grade].splice(index, 1);
            return grade;
        }
    }

    toString() {
        let result = '';
        if (this.numberOfChildren === 0) {
            result += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...\n`;
        } else {
            result += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
            Object.keys(this.kids).sort(() => function (a, b) {
                return this.kids[a] - this.kids[b];
            });

            for (let grade of Object.keys(this.kids)) {
                result += `Grade: ${grade}\n`;
                let count = 1;
                for (let kid of this.kids[grade]) {
                    result += `${count}. ${kid}\n`;
                    count++;
                }
            }
        }

        return result.trim();
    }
}


let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));

// [ 'Gosho-2000' ]
// [ 'Lilly-2100' ]
// [ 'Lilly-2100', 'Pesho-2400' ]
// Gosho is already in the list for this San diego vacation.
// [ 'Gosho-2000', 'Tanya-6000' ]
// Mitko's money is not enough to go on vacation to San diego.


let vacation1 = new Vacation('Mr Gosho', 'Washington', 2000);
vacation1.registerChild('Gosho', 5, 2000);
vacation1.registerChild('Lilly', 6, 2100);

console.log(vacation1.removeChild('Gosho', 9));

vacation1.registerChild('Pesho', 6, 2400);
vacation1.registerChild('Gosho', 5, 2000);

console.log(vacation1.removeChild('Lilly', 6));
console.log(vacation1.registerChild('Tanya', 5, 6000))

// We couldn't find Gosho in 9 grade.
// [ 'Pesho-2400' ]
// [ 'Gosho-2000', 'Tanya-6000' ]

let vacation2 = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation2.registerChild('Gosho', 5, 3000);
vacation2.registerChild('Lilly', 6, 1500);
vacation2.registerChild('Pesho', 7, 4000);
vacation2.registerChild('Tanya', 5, 5000);
vacation2.registerChild('Mitko', 10, 5500);

console.log(vacation2.toString());


// Miss Elizabeth will take 4 children on trip to Dubai
// Grade: 5
// 1. Gosho-3000
// 2. Tanya-5000

// Grade: 7
// 1. Pesho-4000

// Grade: 10
// 1. Mitko-5500