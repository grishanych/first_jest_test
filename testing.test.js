const { findResult, findSum } = require('./testing');

describe ('Find Sum function:', () => {
    test('result should be less then 27 if n=2', () => {
        expect(findSum(2)).toBeLessThan(27);
    });
    
    test('result should be less or equal then 26 if n=2', () => {
        expect(findSum(2)).toBeLessThanOrEqual(26);
    });
    
    test('result should return 26 if n=2', () => {
        expect(findSum(2)).toBe(26);
    });
    test('result should return 158306 if n=5', () => {
        expect(findSum(5)).toEqual(158306);
    });
    
    test('result should be greater then 25 if n=2', () => {
        expect(findSum(2)).toBeGreaterThan(25);
    });
    
    test('result should be greater or equal then 26 if n=2', () => {
        expect(findSum(2)).toBeGreaterThanOrEqual(26);
    });
    
    
    test('result shouldn\'t be null if n=2', () => {
        expect(findSum(2)).not.toBeNull();
    });
    
    test('result should be Defined if n=2', () => {
        expect(findSum(2)).toBeDefined();
    });
    
    
    test('result should be Truthy if n=2', () => {
        expect(findSum(2)).toBeTruthy();
    });
    
    test('result  shouldn\'t be Falsy if n=2', () => {
        expect(findSum(2)).not.toBeFalsy();
    });
    
});
