function solve() {

    let products = [];

    for (let i = 0; i < 3; i++) {

        let element = document.getElementsByClassName('product')[i];
        let name = element.children[1].textContent;
        let price = Number(element.children[2].textContent.split(': ')[1]);

        document.getElementsByTagName('button')[i].addEventListener('click', () => {

            products.push({

                name,
                price

            });
            let textarea = document.getElementsByTagName('textarea')[0];
            textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    document.getElementsByTagName('button')[3].addEventListener('click', () => {

        let list = products.map(n => n.name).filter((name, i, arr) => {

            if (arr.indexOf(name) === i) {
                return name;
            }

        });
        let totalPrice = products.map(p => p.price).reduce((a, b) => a + b);
        let textarea = document.getElementsByTagName('textarea')[0];
        textarea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`;

    });

}