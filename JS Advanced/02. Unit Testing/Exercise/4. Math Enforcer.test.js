const mathEnforcer = require('./4. Math Enforcer');
const assert = require('chai').assert;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('undefined', () => {
            assert.equal(mathEnforcer.addFive('pesho'), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('correct', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(-6), -1);
            assert.equal(mathEnforcer.addFive(1.5), 6.5);
            assert.equal(mathEnforcer.addFive(-2.52), 2.48);
        });
    });
    describe('subtractTen', () => {
        it('undefined', () => {
            assert.equal(mathEnforcer.subtractTen('pesho'), undefined);
            assert.equal(mathEnforcer.subtractTen([]), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('correct', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(-1.5), -11.5);
        });
    });
    describe('sum', () => {
        it('undefined', () => {
            assert.equal(mathEnforcer.sum('pesho', 1), undefined);
            assert.equal(mathEnforcer.sum(1, 'pesho'), undefined);
            assert.equal(mathEnforcer.sum({} , 1), undefined);
            assert.equal(mathEnforcer.sum(1 , {}), undefined);
            assert.equal(mathEnforcer.sum([] , {}), undefined);
        });
        it('correct', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(-2.5, 5), 2.5);
            assert.equal(mathEnforcer.sum(-2.5, -5.5), -8);
            assert.equal(mathEnforcer.sum(5, -5), 0);
        });
    });
});