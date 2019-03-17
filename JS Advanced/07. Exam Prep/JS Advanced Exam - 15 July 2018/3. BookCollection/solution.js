class BookCollection {
    // book icon code: '\uD83D\uDCD6'
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];

        return this;
    }
    get room() {
        return this._room;
    }
    set room(value) {
        const roomTypes = ['livingRoom', 'bedRoom', 'closet'];
        if (roomTypes.includes(value)) {
            return this._room = value;
        } else {
            throw `Cannot have book shelf in ${value}`;
        }
    }
    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }


    addBook(bookName, bookAuthor, genre) {

        let book = {
            bookName,
            bookAuthor,
            genre
        };

        if (this.shelfCondition <= 0) {
            this.shelf.shift();
        }

        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(x => x.bookName !== bookName);

        return this;
    }

    showBooks(genre) {
        let stringBooks = this.shelf.filter(x => x.genre == genre);
        let result = `Results for search \"${genre}\":\n`;
        for (let book of stringBooks) {
            result += `\uD83D\uDCD6 ${book.bookAuthor} - \"${book.bookName}\"\n`
        }
        return result;
    }

    toString() {
        if (this.shelf.length > 0) {
            let result = `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`;
            for (let book of this.shelf) {
                result += `\uD83D\uDCD6 \"${book.bookName}\" - ${book.bookAuthor}\n`
            }
            return result;
        } else {
            return 'It\'s an empty shelf';
        }
    }

}


let livingRoom = new BookCollection('Programming', 'livingRoom', 5)
    .addBook('Introduction to Programming with C#', 'Svetlin Nakov')
    .addBook('Introduction to Programming with Java', 'Svetlin Nakov')
    .addBook('Programming for .NET Framework', 'Svetlin Nakov');
console.log(livingRoom.toString());

// 'Programming' shelf in livingRoom contains:
// 📖 'Introduction to Programming with C#' - Svetlin Nakov
// 📖 'Introduction to Programming with Java' - Svetlin Nakov
// 📖 'Programming for .NET Framework' - Svetlin Nakov

let garden = new BookCollection('Programming', 'garden');

//'Cannot have book shelf in garden'

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook('John Adams', 'David McCullough', 'history');
bedRoom.addBook('The Guns of August', 'Cuentos para pensar', 'history');
bedRoom.addBook('Atlas of Remote Islands', 'Judith Schalansky');
bedRoom.addBook('Paddle-to-the-Sea', 'Holling Clancy Holling');
console.log('Shelf\'s capacity: ' + bedRoom.shelfCondition);
console.log(bedRoom.showBooks('history'));

// Shelf's capacity: 1
// Results for search 'history':
// 📖 Cuentos para pensar - 'The Guns of August'
// 📖 David McCullough - 'John Adams'