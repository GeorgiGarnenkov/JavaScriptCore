function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    let inputFields = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');

            let senderBtn = event.target.name;

            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent = document.getElementById('myChatBox').value;
            } else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent = document.getElementById('peshoChatBox').value;
            }

            divElement.appendChild(spanElement);
            divElement.appendChild(pElement);

            senderBtn === 'myBtn' ? divElement.style.textAlign = 'left' : divElement.style.textAlign = 'right';

            document.getElementById('chatChronology').appendChild(divElement);

            inputFields[0].value = '';
            inputFields[1].value = '';
        });
    });
}