const reduceSum = (...args) => {
    return args.reduce((p,v) => {
        return p + v;
    },0)
}
const curry = (fn) => {
    const args = [];
    return function result(...rest) {
        if(rest.length === 0) {
            return fn(...args);
        }else {
            args.push(...rest);
            return result;
        }
    }
}
console.log(curry(reduceSum)(1,2)())