function solve(stringArr) {

    let instructions = [];
    let parts = {}

    for (let action of stringArr) {

        let args = action.split(' ');
        let command = args[0];

        if (typeof command !== 'string') {
            break;
        }
        switch (command) {
            case 'instructions':

                if (!instructions.includes(args[1])) {
                    instructions.push(args[1]);
                }
                break;

            case 'addPart':

                let model = args[1];
                let part = args[2];
                let partNum = args[3];

                if (typeof model !== 'string' || typeof part !== 'string' || typeof partNum !== 'string') {
                    break;
                }

                if (!parts[model]) {

                    parts[model] = {};
                    parts[model][part] = [];
                    parts[model][part].push(partNum);

                } else if (!parts[model][part]) {

                    parts[model][part] = [];
                    parts[model][part].push(partNum);

                } else if (!parts[model][part].includes(partNum)) {

                    parts[model][part].push(partNum);

                }
                break;

            case 'repair':

                let repairCar = args[1];

                if (typeof repairCar !== 'string' || typeof args[2] !== 'string') {
                    break;
                }

                let partsOfRepairCar = JSON.parse(args[2]);

                if (typeof partsOfRepairCar !== 'object') {
                    break;
                }

                if (!instructions.includes(repairCar)) {
                    console.log(`${repairCar} is not supported`);
                    break;
                }

                for (let part in partsOfRepairCar) {

                    let partCondition = partsOfRepairCar[part];

                    if (partCondition === 'broken') {

                        if (parts[repairCar][part]) {

                            if (parts[repairCar][part].length > 0) {

                                partsOfRepairCar[part] = parts[repairCar][part].shift();

                            }
                        }
                    }
                }
                console.log(`${repairCar} client - ${JSON.stringify(partsOfRepairCar)}`);
                break;

            default:
                break;
        }

    }

    let resultParts = {};
    Object.keys(parts).sort().forEach(function (key) {
        resultParts[key] = parts[key];
    });


    for (let model in resultParts) {

        console.log(`${model} - ${JSON.stringify(resultParts[model])}`);
    }
}

solve([
    'instructions bmw',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"ENG989DPH"}'
]);