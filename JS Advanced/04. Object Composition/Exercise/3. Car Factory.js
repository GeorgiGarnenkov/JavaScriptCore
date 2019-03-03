function solve(order) {
    let engines = {
        SmallEngine: {
            power: 90,
            volume: 1800
        },
        NormalEngine: {
            power: 120,
            volume: 2400
        },
        MonsterEngine: {
            power: 200,
            volume: 3500
        }
    }

    let modelOrdered = order.model;
    let powerOrdered = order.power;
    let colorOrdered = order.color;
    let carriageOrdered = order.carriage;
    let wheel = order.wheelsize;

    if (powerOrdered <= 90) {
        powerOrdered = engines.SmallEngine;
    } else if (powerOrdered <= 120) {
        powerOrdered = engines.NormalEngine;
    } else{
        powerOrdered = engines.MonsterEngine;
    }
    if (wheel % 2 === 0) {
        wheel -= 1;
    }
    return { model: modelOrdered,
    engine: powerOrdered,
    carriage: { type: carriageOrdered,
                color: colorOrdered },
    wheels: [wheel, wheel, wheel, wheel] }
  
}

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));