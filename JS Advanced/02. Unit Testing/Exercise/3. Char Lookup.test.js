const lookupChar = require('./3. Char Lookup');
const assert = require('chai').assert;

describe('lookupChar', () => {

    it('correct', () => {
        assert.equal(lookupChar('pesho', 0), 'p');
    });
    it('correct2', () => {
        assert.equal(lookupChar('Gosho', 2), 's');
    });
    it('undefined string', () => {
        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar({}, 1), undefined);
        assert.equal(lookupChar([], 1), undefined);
        assert.equal(lookupChar(undefined, 1), undefined);
    });
    it('undefined index', () => {
        assert.equal(lookupChar('pesho', 'one'), undefined);
        assert.equal(lookupChar('pesho', '1'), undefined);
        assert.equal(lookupChar('pesho', []), undefined);
        assert.equal(lookupChar('pesho', false), undefined);
        assert.equal(lookupChar('pesho', 3.14), undefined);
    });
    it('Incorrect index', () => {
        assert.equal(lookupChar('pesho', 5), 'Incorrect index');
        assert.equal(lookupChar('pesho', -1), 'Incorrect index');
        assert.equal(lookupChar('pesho', 6), 'Incorrect index');
    });
});
