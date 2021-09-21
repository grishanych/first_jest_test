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
    
})


describe ('Find result function:' , () => {
   
    test('should return 15 if k = [34, 34, 2, 3, 96, 11, 12, 95, 38, 14, 99, 69, 77, 14, 77, 11, 68, 31, 76, 24, 99, 45, 10, 36, 66, 9, 9, 9, 5, 0]', () => {
        expect(findResult([34, 34, 2, 3, 96, 11, 12, 95, 38, 14, 99, 69, 77, 14, 77, 11, 68, 31, 76, 24, 99, 45, 10, 36, 66, 9, 9, 9, 5, 0])).toEqual(15);
    }); 

    test('should return 15 if k = [34, 34, 2, 3, 96, 11, 12, 95, 38, 14, 99, 69, 77, 14, 77, 11, 68, 31, 76, 24, 99, 45, 10, 36, 66, 9, 9, 9, 5, 0]', () => {
        expect(findResult([ 5,6,7,9,2,6])).toEqual(2);
    }); 

    test('should be falsy if k = [0],', () => {
        expect(findResult([0])).toBeFalsy();
    }); 

    test('should be defined', () => {
        expect(findResult([34, 34, 2, 3, 96, 11])).toBeDefined();
    }); 

    test('shouldn\'t be undefined', () => {
        expect(findResult([34, 34, 2, 3, 96, 11, 12, 95, 38, 14, 99, 69, 77, 14, 77, 11, 68, 31, 76, 24, 99, 45, 10, 36, 66, 9, 9, 9, 5, 0])).not.toBeUndefined();
    }); 

    test('shouldn\'t be null', () => {
        expect(findResult([34, 34, 2, 3, 96, 11, 12, 95, 38, 14, 99, 69, 77, 14, 77, 11, 68, 31, 76, 24, 99, 45, 10, 36, 66, 9, 9, 9, 5, 0])).not.toBeNull();
    });

    test('should return 0 if k = [0]', () => {
        expect(findResult([0])).toEqual(0);
    });

})

