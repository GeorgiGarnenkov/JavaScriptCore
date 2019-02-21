const assert = require('chai').assert;
const sum = require('./4. Sum of Numbers');

describe('sum', () => {
    it('sum1', () => {
        let arr = [1, 2, 3];

        let result = sum(arr);

        assert.equal(result, 6);
    });
    it('sum2', () => {
        let arr = [2, 3, 4];

        let result = sum(arr);

        assert.equal(result, 9);
    });
    it('sum3', () => {
        let arr = [2, 3, 4, 5, -6];

        let result = sum(arr);

        assert.equal(result, 8);
    });
});