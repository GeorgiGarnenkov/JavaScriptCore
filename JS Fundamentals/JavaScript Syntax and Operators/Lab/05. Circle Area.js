function solve(num1) {
    
    if (typeof(num1) === `number`) {

        let result = Math.pow(num1, 2) * Math.PI;
        console.log(result.toFixed(2));
        
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(num1)}.`);
    }
}

solve(5);
solve(`name`);
