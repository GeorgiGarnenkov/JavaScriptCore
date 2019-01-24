function GCD(num1, num2) {
    let x = Number(num1);
    let y = Number(num2);

    do {
        let n = x % y;
        x = y;
        y = n;
    } while (y > 0);

    console.log(x);
}

GCD(2154, 458);