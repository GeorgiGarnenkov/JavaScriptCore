function solve(fruit, weightInGrams, moneyPerKg) {
    
    let weight = Number(Number(weightInGrams) / 1000);
    let moneyNeeded = Number(weight * moneyPerKg);

    console.log(`I need ${moneyNeeded.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);