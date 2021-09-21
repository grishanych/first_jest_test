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
   
    test('should return 3 if k = [4,5,8,4]', () => {
        expect(findResult([4,5,8,4])).toEqual(1);
    }); 

    test('should return 4 if k = [2,4,9,7,3,6,4,5,8]', () => {
        expect(findResult([2,4,9,7,3,6,4,5,8])).toEqual(4);
    }); 

    test('should be falsy if k = [0],', () => {
        expect(findResult([0])).toBeFalsy();
    }); 

    test('should be defined', () => {
        expect(findResult([2,4,9,7,3,6,4,5,8])).toBeDefined();
    }); 

    test('shouldn\'t be undefined', () => {
        expect(findResult([2,4,9,7,3,6,4,5,8])).not.toBeUndefined();
    }); 

    test('shouldn\'t be null', () => {
        expect(findResult([2,4,9,7,3,6,4,5,8])).not.toBeNull();
    });

    test('should return 0 if k = [0]', () => {
        expect(findResult([0])).toEqual(0);
    });

})

