function printDeckOfCards(cards) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    function makeCard(face, suit) {

        let card = {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        };

        return card;
    }

    let resultArr = [];
    for (let card of cards) {
        
        let face = '';
        let suit = '';
        if (card.length === 2) {
            let splitCard = card.split('');
            suit = splitCard[1];
            face = splitCard[0];
            
        } else {
            let splitCard = card.split('');
            suit = splitCard.pop();
            face = splitCard.join('');
        }

        if (!faces.includes(face)) {
            return console.log(`Invalid card: ${face + suit}`);
        }
        if (!suits[suit]) {
            return console.log(`Invalid card: ${face + suit}`);
        }

        let newCard = '' + makeCard(face, suit);

        resultArr.push(newCard.toString());

    }

    return console.log(resultArr.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);