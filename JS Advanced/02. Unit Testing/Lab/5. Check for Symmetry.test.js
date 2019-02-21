const assert = require('chai').assert;
const isSymmetric = require('./5. Check for Symmetry');

describe('isSymmetric', () => {
    it('Test group #1', () => {
        let arr = [1, 2, 3, 2, 1];

        let result = isSymmetric(arr);

        assert.equal(result, true);
    });
    it('Test group #2', () => {
        let arr = {};

        let result = isSymmetric(arr);

        assert.equal(result, false);
    });

    it('Test group #3', () => {
        let arr = [5, 6, 6, 5];

        let result = isSymmetric(arr);

        assert.equal(result, true);
    });
    it('Test group #4', () => {
        let arr = [5, 6, 5, 6];

        let result = isSymmetric(arr);

        assert.equal(result, false);
    });

    it('Test group #5', () => {
        let arr = [[], {}, undefined, {}, []];

        let result = isSymmetric(arr);

        assert.isTrue(result);
    });

});