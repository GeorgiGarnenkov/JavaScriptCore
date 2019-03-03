let result = (function () {
    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    function isSuitValid(inputSuit) {
        return Object.values(Suits).some((s) => s === inputSuit);
    }

    class Card {
        constructor(face, suit) {
            if (!Faces.includes(face) || !isSuitValid(suit)) {
                throw new Error('Invalid Card!')
            }
            this._face = face;
            this._suit = suit;
        }

        get face() {
            return this._face;
        }
        set face(newFace) {
            return this._face = newFace;
        }

        get suit() {
            return this._suit;
        }
        set suit(newSuit) {
            return this._suit = newSuit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let card2 = new Card('1', Suits.DIAMONDS);

console.log(card2);
