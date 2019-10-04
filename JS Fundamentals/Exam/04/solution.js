function solve(arr) {
    var temp = [];
    var cars = [];
    for (var i = 0; i < arr.length; i++) {

        if (temp.some(x => x.name == arr[i].town)) {

            temp.find(x => x.name == arr[i].town).number++;
            temp.find(x => x.name == arr[i].town).price += arr[i].price;

        } else {

            temp.push({
                name: arr[i].town,
                number: 1,
                price: arr[i].price
            });
        }
        if (cars.some(x => x.model == arr[i].model)) {

            cars.find(x => x.model == arr[i].model).count++;

            if (cars.find(x => x.model == arr[i].model).price < arr[i].price) {

                cars.find(x => x.model == arr[i].model).price = arr[i].price;
            }
        } else {
            cars.push({

                model: arr[i].model,
                reg: arr[i].regNumber,
                count: 1,
                price: arr[i].price

            });
        }
    }
    temp.sort(function (a, b) {

        var p1 = a.price;
        var p2 = b.price;

        var n1 = a.number;
        var n2 = b.number;

        var t1 = a.name;
        var t2 = b.name;

        if (p1 < p2) return 1;
        if (p1 > p2) return -1;
        if (n1 < n2) return 1;
        if (n1 > n2) return -1;
        if (t1 < t2) return -1;
        if (t1 > t2) return 1;
    });

    cars.sort(function (a, b) {

        var c1 = a.count;
        var c2 = b.count;

        var p1 = a.price;
        var p2 = b.price;

        var n1 = a.model;
        var n2 = b.model;

        if (c1 < c2) return 1;
        if (c1 > c2) return -1;

        if (p1 < p2) return 1;
        if (p1 > p2) return -1;

        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
    });

    console.log(temp[0].name + ' is most profitable - ' + temp[0].price + ' BGN');

    console.log('Most driven model: ' + cars[0].model);

    var cities = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].model == cars[0].model) {
            if (cities.some(x => x.name == arr[i].town)) {
                cities.find(x => x.name == arr[i].town).reg.push(arr[i].regNumber);
            } else {
                cities.push({
                    name: arr[i].town,
                    reg: [arr[i].regNumber]
                });
            }
        }
    }

    cities.sort(function (a, b) {

        var n1 = a.name;
        var n2 = b.name;
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
    });

    for (var i = 0; i < cities.length; i++) {

        console.log(cities[i].name + ': ' + cities[i].reg.join(', '));
    }
}

solve([{
        model: 'BMW',
        regNumber: 'B1234SM',
        town: 'Varna',
        price: 2
    },
    {
        model: 'BMW',
        regNumber: 'C5959CZ',
        town: 'Sofia',
        price: 8
    },
    {
        model: 'Tesla',
        regNumber: 'NIKOLA',
        town: 'Burgas',
        price: 9
    },
    {
        model: 'BMW',
        regNumber: 'A3423SM',
        town: 'Varna',
        price: 3
    },
    {
        model: 'Lada',
        regNumber: 'SJSCA',
        town: 'Sofia',
        price: 3
    }
]);