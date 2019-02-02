function solve() {
    let fromElement = document.getElementById('from');
    let toElement = document.getElementById('to');
    let suitElement = document.querySelectorAll('option');
    let sectionElement = document.getElementById('cards');
    let button = document.querySelector('button');
    button.addEventListener('click', clickEvent);

    function clickEvent() {
        let cards = getCards();
        let suit = getSuit();
        let suitChar = suit.split(' ')[1];

        for (let card of cards) {
            let div = document.createElement('div');
            div.classList.add('card');
            
            let pUp = document.createElement('p');
            pUp.textContent = suitChar;
            let pCard = document.createElement('p');
            pCard.textContent = card;
            let pDown = document.createElement('p');
            pDown.textContent = suitChar;

            div.appendChild(pUp);
            div.appendChild(pCard);
            div.appendChild(pDown);
            sectionElement.appendChild(div);
        }
    }
    
    function getSuit() {
        for (let suit of suitElement) {
            if (suit.selected) {
                return suit.textContent;
            }
        }
    }

    function getCards() {
        let allCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cards = [];
        let startCard = allCards.indexOf(fromElement.value.toString());
        let endCard = allCards.indexOf(toElement.value.toString());

        for (let i = startCard; i <= endCard; i++) {
            cards.push(allCards[i]);
        }

        return cards;
    }
}