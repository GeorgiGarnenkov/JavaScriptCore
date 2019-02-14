function solve(arr) {
    let totalMoney = 0;
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(', ');

        let price = 0;
        let money = +args[0];
        let typeOfDrink = args[1];
        
        switch (typeOfDrink) {
            case `coffee`:
                let typeOfCoffee = args[2];

                if (typeOfCoffee === `caffeine`) {
                    price = 0.80;
                }
                else{
                    price = 0.90;
                }
                if (args.length === 5){
                    let milk = price * 0.1;
                    price += +milk.toFixed(1);
                    let sugar = +args[4];
                    if (sugar > 0 && sugar <= 5) {
                        price += 0.10;
                    }
                }
                else{
                    let sugar = +args[3];
                    if (sugar > 0 && sugar <= 5) {
                        price += 0.10;
                    }
                }

                if (money >= price) {
                    let change = money - price;
                    totalMoney += price;
                    console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
                }
                else{
                    let difference = price - money;
                    console.log(`Not enough money for ${typeOfDrink}. Need ${difference.toFixed(2)}$ more.`);
                }
                break;
            case `tea`:
                price = 0.80;
                if (args.length === 4){
                    let milk = price * 0.1;
                    price += +milk.toFixed(1);
                    let sugar = +args[3];
                    if (sugar > 0 && sugar <= 5) {
                        price += 0.10;
                    }
                }
                else{
                    let sugar = +args[2];
                    if (sugar > 0 && sugar <= 5) {
                        price += 0.10;
                    }
                }

                if (money >= price) {
                    let change = money - price;
                    totalMoney += price;
                    console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
                }
                else{
                    let difference = price - money;
                    console.log(`Not enough money for ${typeOfDrink}. Need ${difference.toFixed(2)}$ more.`);
                }
                break;            
        }
    }
    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}


solve(['8.00, coffee, decaf, 4',
'1.00, tea, 2']
);