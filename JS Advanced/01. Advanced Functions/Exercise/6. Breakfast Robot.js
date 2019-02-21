let manager = (function () {

    const ingredientObj = {
        protein: 0,
        carbohydrate : 0,
        fat: 0,
        flavour : 0
    };

    const recipesObj = {
        'apple': {
            carbohydrate : 1,
            flavour : 2
        },
        'coke': {
            carbohydrate : 10,
            flavour : 20
        },
        'burger': {
            carbohydrate : 5,
            fat: 7,
            flavour : 3
        },
        'omelet': {
            protein: 5,
            fat: 1,
            flavour : 1
        },
        'cheverme': {
            protein: 10,
            carbohydrate : 10,
            fat: 10,
            flavour : 10
        }
    };

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngredients = Object.entries(recipesObj[recipe]);

        for (const [ing, qty] of neededIngredients) {

            const ingredientStored = ingredientObj[ing] * neededQuantity;

            if (qty > ingredientStored) {
                return `Error: not enough ${ing} in stock`;
            }

        }

        for (const [ing, qty] of neededIngredients) {

            ingredientObj[ing] -= qty * neededQuantity;
        }

        return 'Success';
    };

    return function (input) {
        let tokens = input.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'restock':

                ingredientObj[tokens[1]] += Number(tokens[2]);
                return 'Success';

            case 'prepare':

                return prepareRecipe(tokens[1], Number(tokens[2]));

            case 'report':
                return Object.entries(ingredientObj)
                    .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                    .join(' ');
        }

    };
})();

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare omelet 2"));
console.log(manager("report"));
console.log(manager("prepare omelet 1"));
console.log(manager("report"));

