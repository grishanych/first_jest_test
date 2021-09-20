const { findResult, findSum } = require('./testing');

describe ('Find Sum function:', () => {
 
    test('result should return 26 if n=2', () => {
        expect(findSum(2)).toBe(26);
    });
    test('result should return 158306 if n=5', () => {
        expect(findSum(5)).toEqual(158306);
    });
    
   
    test('result shouldn\'t be null if n=2', () => {
        expect(findSum(2)).not.toBeNull();
    });
    
    test('result should be Defined if n=2', () => {
        expect(findSum(2)).toBeDefined();
    });
    
    test('result  shouldn\'t be Falsy if n=2', () => {
        expect(findSum(2)).not.toBeFalsy();
    });

    test('result should be Falsy if n=0', () => {
        expect(findSum(0)).toBeFalsy();
    });
    
});


describe ('Find result function:' , () => {
    test('equal null', () => {
        expect(findResult(50)).toBeFalsy();
    }); 

    test('should be defined', () => {
        expect(findResult(5)).toBeDefined();
    }); 

    test('shouldn\'t be undefined', () => {
        expect(findResult(5)).not.toBeUndefined();
    }); 

    test('should be falsy', () => {
        expect(findResult(5)).toBeFalsy();
    }); 

    test('shouldn\'t be null', () => {
        expect(findResult(5)).not.toBeNull();
    });

    test('should return 0 of n=5', () => {
        expect(findResult(5)).toBe(0);
    });

    test('should return 0 of n=50', () => {
        expect(findResult(50)).toBe(0);
    });

})

