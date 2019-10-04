function vatCalc(priceWithVAT, vatRate) {
    let cleanPrice = 100  * priceWithVAT / (100 + vatRate)

    console.log(cleanPrice.toFixed(2));
    
}

vatCalc(120.00, 20.00);