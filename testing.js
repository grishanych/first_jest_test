module.exports = { findResult, findSum };

// Task
// 1)	 Perform algorithmic tasks according to the received option.
// 2)	Cover algorithmic tasks with unit tests using the Jest/Jasmine frameworks.

// 1)_109_дано натуральное число n. вычислить 1*2+2*3*4+.+n(n+1)2n ;
function findSum(n) {
    for (i = 1, s = 0; i <= n; i++) {
        for (j = 0, p = 1; j <= i; j++)
            p *= (i + j);
        s += p;
    }
    return (s)
}
console.log(findSum(2));


// 2)_____178__'г'_____даны натуральные числа n, a1...an определить количество членов ak послідовності a1........an, задовольняючи умову 
//            (a(k-1) + a (k+1)) 
//     ak <  ------------------
//                   2

function findResult(k) {
    let result = 0;
    for (let i = 1; i <= k.length; i++) {
        if (k[i] < ((k[i - 1] + k[i + 1]) / 2)) {
            result++;
        }
    }
    return result;
}
console.log(findResult([4,5,8,4]));
