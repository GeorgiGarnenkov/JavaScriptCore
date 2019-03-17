const assert = require('chai').assert;
const Calculator = require('./Calculator');

describe('Calculator Tests', () => {

    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('containing property expenses that is empty array', () => {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('add(data) tests', () => {
        it('add primitive type', () => {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);

            assert.deepEqual(calculator.expenses, [5, 'text', 5.5, true]);
        });
        it('add reference type', () => {
            calculator.add([1]);
            calculator.add({
                key: 'value'
            });
            //calculator.add(() => true); !!!!

            assert.deepEqual(calculator.expenses, [
                [1], {
                    key: 'value'
                }
            ]);
        });

    });

    describe('divideNums() tests', () => {
        it('standard case divide with nums', () => {
            calculator.add(10);
            calculator.add('text');
            calculator.add(2);
            calculator.add(true);
            calculator.add(2);

            let result = calculator.divideNums();

            assert.equal(result, 2.5);
        });
        it('standard case divide without nums', () => {
            calculator.add('text');
            calculator.add(true);

            assert.throws(() => calculator.divideNums(), 'There are no numbers in the array!');
        });
        it('divide with floats', () => {
            calculator.add(10.5);
            calculator.add('text');
            calculator.add(2);

            let result = calculator.divideNums();

            assert.closeTo(result, 5.25, 0.01);
        });
        it('divide by zero', () => {
            calculator.add(10.5);
            calculator.add('text');
            calculator.add(0);

            let result = calculator.divideNums();

            assert.equal(result, 'Cannot divide by zero');
        });
    });

    describe('toString() tests', () => {
        it('return list with all items from expenses', () => {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);

            assert.equal(calculator.toString(), '5 -> text -> 5.5 -> true')
        });
        it('return string empty arr', () => {
            assert.equal(calculator.toString(),'empty array')
        });
    });

    describe('orderBy() tests', () => {
        it('mixed', () => {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);

            assert.equal(calculator.orderBy(), '5, 5.5, text, true');
        });
        it('only numbers', () => {
            calculator.add(5);
            calculator.add(5.5);

            assert.equal(calculator.orderBy(), '5, 5.5');
        });
        it('empty array', () => {
            assert.equal(calculator.orderBy(), 'empty');
        });
    });
});