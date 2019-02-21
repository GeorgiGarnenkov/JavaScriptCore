function solve(input) {

    let sum = 0;

    add.toString = function (){
        return sum;
    };

    function add() {
        sum += Number(arguments[0]);
        return add;
    }

    return add(input);  
    
}

console.log(solve(1)(6)(-3).toString());

