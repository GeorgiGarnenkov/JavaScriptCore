class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.menu = {};
        this.actionsHistory = [];
    }

    loadProducts(productsArr) {
        //"{productName} {productQuantity} {productPrice}"
        //Example: ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"…]
        for (let productInfo of productsArr) {
            let args = productInfo.split(' ').filter(x => x !== '');
            let product = args[0];
            let quantity = +args[1];
            let price = +args[2];

            if (this.budget >= price) {
                if (!this.productsInStock.hasOwnProperty(product)) {
                    this.productsInStock[product] = 0;
                }
                this.productsInStock[product] += quantity;
                this.budget -= price;

                this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProductsArr, price) {
        //needed products is in format: "{productName} {productQuantity}" 

        if (!this.menu.hasOwnProperty(meal)) {

            this.menu[meal] = {
                meal: meal,
                products: neededProductsArr,
                price: +price
            }
            return `Great idea! Now with the ${meal} we have ${this.menuCounter} meals in the menu, other ideas?`;

        } else {
            return `${meal} is already in our menu, try something different.`;
        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length > 0) {
            let stringBuilder = [];
            for (let meal in this.menu) {
                stringBuilder.push(`${meal} - $ ${this.menu[meal].price}`);
            }

            return stringBuilder.join('\n').trim() + '\n';

        } else {
            return `Our menu is not ready yet, please come later...`;
        }
    }

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            let neededProductsArr = this.menu[meal].products;

            for (let productInfo of neededProductsArr) {

                let product = productInfo.split(' ');
                let name = product[0];
                let quantity = +product[1];
                
                if (!this.productsInStock.hasOwnProperty(name)) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } 

                if(+this.productsInStock[name] < quantity) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            for (const productInfo of neededProductsArr) {
                let product = productInfo.split(' ');
                let name = product[0];
                let quantity = +product[1];

                this.productsInStock[name] -= quantity;
            }
            this.budget += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}



let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log('---------------');
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('frozenYogurt2', ['Yogurt 50', 'Honey 30', 'Banana 1', 'Strawberries 10'], 9.99));
console.log('---------------');
console.log(kitchen.showTheMenu());
console.log('---------------');
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('pepperoni'));
console.log(kitchen.makeTheOrder('frozenYogurt2'));

