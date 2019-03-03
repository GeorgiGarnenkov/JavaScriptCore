const isOddOrEven = require('./2. Even Or Odd');
const assert = require('chai').assert;

describe('isOddOrEven', () => {

    it('undefined', () => {
        assert.equal(isOddOrEven(4), undefined);
    });
    it('undefined', () => {
        assert.equal(isOddOrEven({name: 'Pesho'}), undefined);
    });
    it('even', () => {
        assert.equal(isOddOrEven('fish'), 'even');
    });
    it('odd', () => {
        assert.equal(isOddOrEven('cat'), 'odd');
    });
});