const assert = require('chai').assert;
const rgbToHexColor = require('./6. RGB to Hex');

describe('rgbToHexColor', () => {
    it('Test group #1 equal', () => {
        let red = 212; 
        let green = 243; 
        let blue = 205; 

        let expectedResult = '#D4F3CD';

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, expectedResult);
    });
    it('Test group #2 not equal', () => {
        let red = 212; 
        let green = 243; 
        let blue = 206; 

        let expectedResult = '#D4F3CD';

        let result = rgbToHexColor(red, green, blue);

        assert.notEqual(result, expectedResult);
    });
    it('Test group #3 undefined more then max', () => {
        let red = 212; 
        let green = 243; 
        let blue = 260; 

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });

    it('Test group #4 empty input', () => {
        let result = rgbToHexColor();

        assert.isUndefined(result);
    });
    it('Test group #5 invalid input with one color', () => {
        let result = rgbToHexColor(red = 200);

        assert.isUndefined(result);
    });
    it('Test group #6 invalid input with two color', () => {
        let result = rgbToHexColor(red = 200, green = 150);

        assert.isUndefined(result);
    });

    it('Test group #7 invalid input when one color is float number', () => {
        let result = rgbToHexColor(red = 200, green = 150, blue = 3.14);

        assert.isUndefined(result);
    });
    it('Test group #8 invalid input not simple numbers', () => {
        let red = []; 
        let green = {}; 
        let blue = false; 

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });
    it('Test group #9 incorrect type', () => {
        
        assert.isUndefined(rgbToHexColor([], [], []));
        assert.isUndefined(rgbToHexColor({}, {}, {}));
        assert.isUndefined(rgbToHexColor(true, true, true));
        assert.isUndefined(rgbToHexColor(false, false, false));
        assert.isUndefined(rgbToHexColor('1', '1', '1'));
        assert.isUndefined(rgbToHexColor([2], [4], [5]));
        assert.isUndefined(rgbToHexColor(-10, -50, -60));
        assert.isUndefined(rgbToHexColor(() => 1,() => 1, () => 1));
    });

    it('Test group #10 undefined lower then min', () => {
        let red = 212; 
        let green = 243; 
        let blue = -50; 

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });

    it('Test group #11 color white', () => {
        let red = 255; 
        let green = 255; 
        let blue = 255; 

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#FFFFFF');
    });
    it('Test group #12 color black', () => {
        let red = 0; 
        let green = 0; 
        let blue = 0; 

        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, '#000000');
    });
    
});