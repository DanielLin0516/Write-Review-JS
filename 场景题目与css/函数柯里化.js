const sumFn = (...args) => {
    return args.reduce((a, b) => {
        return a + b;
    },0)
}
var currying = function (func) {
    const args = [];
    return function result(...rest) {
        if (rest.length === 0) {
            return func(...args);
        }else {
            args.push(...rest);
            return result;
        }
    }
}
console.log(currying(sumFn)(1)(2)(3)()) 
console.log(currying(sumFn)(1,2)(3,4)(5)()) 
