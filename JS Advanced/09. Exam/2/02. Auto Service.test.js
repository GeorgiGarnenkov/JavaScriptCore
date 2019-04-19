const AutoService = require('./02. Auto Service');
const assert = require('chai').assert;

describe('AutoService Tests', () => {

    let autoService;
    beforeEach(() => {
        autoService = new AutoService(2);
    });

    describe('Instantiation tests', () => {
        it('one parameter number', () => {

            let parameter = 2;

            let autoService = new AutoService(parameter);

            let availableSpace = autoService.availableSpace;

            assert.equal(availableSpace, parameter);
            
        });

        it('properties are empty arrays', () => {
            assert.isArray(autoService.workInProgress);
            assert.isArray(autoService.backlogWork);
            assert.isEmpty(autoService.workInProgress);
            assert.isEmpty(autoService.backlogWork);
        });
    });

    describe('signupForReview(clientName, plateNumber, carInfo) - registers a client for review. Receives 3 arguments: clientName - string, plateNumber - string, carInfo - object', () => {
        it('if there is free place', () => {
            let expect = 1;

            let parameter = 1;

            let autoService = new AutoService(parameter);

            let name = 'pesho';
            let plateNumber = 'CA1234CA';
            let carInfo = {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            };

            autoService.signUpForReview(name, plateNumber, carInfo);

            assert.equal(autoService.workInProgress.length, expect);
        });
        it('if there is NO free place', () => {
            let expect = 1;

            let parameter = 1;

            let autoService = new AutoService(parameter);

            let name = 'pesho';
            let plateNumber = 'CA1234CA';
            let carInfo = {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            };
            let name2 = 'gosho';
            let plateNumber2 = 'CA4321CA';
            let carInfo2 = {
                'engine': 'GGRFM23',
                'transmission': 'ZZ4418FF',
                'doors': 'broken'
            };

            autoService.signUpForReview(name, plateNumber, carInfo);
            autoService.signUpForReview(name2, plateNumber2, carInfo2);

            assert.equal(autoService.backlogWork.length, expect);
        });
    });

    describe('carInfo(clientName, plateNumber) - checks information about client.', () => {
        it('there is NO car', () => {

            let expect = 'There is no car with platenumber PB9999PB and owner PHILIP.';

            let parameter = 1;

            let autoService = new AutoService(parameter);

            autoService.signUpForReview('Philip', 'PB4321PB', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'exaustPipe': 'REMUS'
            });

            assert.equal(autoService.carInfo('PB9999PB', 'PHILIP'), expect);
        });
        it('there is a car', () => {
            let parameter = 2;

            let autoService = new AutoService(parameter);

            let expect = {
                plateNumber: 'PB4321PB',
                clientName: 'Philip',
                carInfo: {
                    engine: 'MFRGG23',
                    transmission: 'FF4418ZZ',
                    exaustPipe: 'REMUS'
                }
            }

            autoService.signUpForReview('Philip', 'PB4321PB', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'exaustPipe': 'REMUS'
            });

            assert.isObject(autoService.carInfo('PB4321PB', 'Philip'));
            
            assert.equal(JSON.stringify(autoService.carInfo('PB4321PB', 'Philip')), JSON.stringify(expect));
        });
    });

    describe('repairCar() - get the first available (signed up for review) car from workInProgress array', () => {

        it('repaired', () => {

            let parameter = 2;

            let autoService = new AutoService(parameter);

            autoService.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            });
            autoService.signUpForReview('Peter', 'CA1234CA', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken',
                'wheels': 'broken',
                'tires': 'broken'
            });
            autoService.signUpForReview('Philip', 'PB4321PB', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'exaustPipe': 'REMUS'
            });

            assert.equal(autoService.repairCar(), 'Your doors were repaired.');
        });
        it('the car was fine', () => {
            let parameter = 1;

            let autoService = new AutoService(parameter);

            autoService.signUpForReview('Philip', 'PB4321PB', {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'exaustPipe': 'REMUS'
            });

            assert.equal(autoService.repairCar(), 'Your car was fine, nothing was repaired.');
        });
        it('no cars', () => {
            let parameter = 1;

            let autoService = new AutoService(parameter);

            assert.equal(autoService.repairCar(), 'No clients, we are just chilling...');
        });
    });




});