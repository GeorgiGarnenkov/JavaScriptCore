function solve() {
    let fieldSets = document.getElementsByTagName('fieldset');
    let buttons = document.getElementsByTagName('button');
    let output = document.querySelector('textarea');

    buttons[0].addEventListener('click', addNewTruck);
    buttons[1].addEventListener('click', addNewTire);
    buttons[2].addEventListener('click', goToWork);
    buttons[3].addEventListener('click', endOfShift);

    let obj = {
        'backupTireSets': [],
    };

    function addNewTruck() {
        let plateNumber = document.getElementById('newTruckPlateNumber').value;
        let tires = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);

        if (!obj[plateNumber]) {
            obj[plateNumber] = {
                tires,
                'distance': 0
            };
            let currentTruck = createElement('div', plateNumber, 'truck');
            let parentTruck = fieldSets[4].lastElementChild;
            parentTruck.appendChild(currentTruck);
        }
    }

    function addNewTire() {
        let tires = document.getElementById('newTiresCondition').value.split(' ').map(Number);

        obj.backupTireSets.push(tires);

        let currentTireSet = createElement('div', tires.join(' '), 'tireSet');
        let parentTire = fieldSets[3].lastElementChild;
        parentTire.appendChild(currentTireSet);
    }

    function goToWork() {
        let plateNumber = document.getElementById('workPlateNumber').value;
        let distance = +document.getElementById('distance').value;

        if (obj.hasOwnProperty(plateNumber)) {
            let results = areTiresGoodEnough(obj[plateNumber].tires, distance);

            if (results.finalResult) {
                obj[plateNumber].distance += distance;
                obj[plateNumber].tires = results.testedTires;
            } else if (obj.backupTireSets.length > 0) {
                let backupSet = obj.backupTireSets[0];

                let results = areTiresGoodEnough(backupSet, distance);

                if (results.finalResult) {
                    obj[plateNumber].distance += distance;
                    obj[plateNumber].tires = results.testedTires;
                    obj.backupTireSets.shift();
                }

                let truckHolder = fieldSets[3].lastElementChild;

                let usedTires = truckHolder.children[0];

                usedTires.remove();
            }
        }
    }

    function endOfShift() {
        Object.keys(obj).filter((plateNumber) => plateNumber !== 'backupTireSets').forEach((plate) => {
            output.value += `Truck ${plate} has traveled ${obj[plate].distance}.\n`;
        });

        output.value += `You have ${obj.backupTireSets.length} sets of tires left.\n`;
    }

    function areTiresGoodEnough(tires, distance) {

        let dist = distance / 1000;

        let result = {
            'testedTires': [],
            'finalResult': false,
        };

        tires.forEach((tire) => {
            result.testedTires.push(tire - dist);
        });

        if (result.testedTires.every((e) => e >= 0)) {
            result.finalResult = true;
        }

        return result;
    }


    function createElement(type, text, className) {
        let element = document.createElement(type);

        element.textContent = text;

        element.classList.add(className);

        return element;
    }
}