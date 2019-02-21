const createCalculator = require('./7. Add-Subtract');
const assert = require('chai').assert;

describe('createCalculator', () => {
    let calc = {};

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero when get', () => {
        assert.equal(calc.get(), 0);
    });

    it('returns positive num when add', () => {
        let input = 1;

        calc.add(input);

        assert.equal(calc.get(), 1);
    });

    it('returns positive num when subtract', () => {
        let input = 10;

        calc.add(input);
        calc.subtract(5)

        assert.equal(calc.get(), 5);
    });

    it('returns positive num when add string num', () => {
        let input = '30';

        calc.add(input);

        assert.equal(calc.get(), 30);
    });

    it('returns positive num when subtract string num', () => {
        let input = '10';

        calc.add(input);
        calc.subtract('5')

        assert.equal(calc.get(), 5);
    });

    it('returns negative num when subtract negative num', () => {
        calc.subtract(5)

        assert.equal(calc.get(), -5);
    });
    it('returns negative num when add string negative num', () => {
        let input = '-3.5';

        calc.add(input);

        assert.equal(calc.get(), -3.5);
    });

    it('returns NaN when string given', () => {
        let input = 'text';

        calc.subtract(input);

        assert.isNaN(calc.get());
    });

    it('returns NaN when string given', () => {
        let input = 'text';

        calc.add(input);

        assert.isNaN(calc.get());
    });
    


});