arr = [1,2,3,4,4,5,5,6,6];
console.log([...new Set(arr)]);
function debug(arr) {
    let result = [];
    arr.forEach(item => {
        if(result.indexOf(item) === -1) {
            result.push(item)
        }
    })
    return result
}
console.log(debug(arr))

function debug1(arr) {
    return arr.filter((item,idnex,array) => {
        return array.indexOf(item) === idnex;
    })
}
console.log(debug1(arr))
function debug2() {
    let map = new Map();

}

function curringSum(...args) {
    return args.reduce((a,b) => {
        return a + b;
    },0)
}
function curry(fn) {
    let args = [];
    return function result (...rest) {
        if(rest.length === 0) {
            return fn(...args)
        }else {
            args.push(...rest);
            return result;
        }
    }
}
console.log(curry(curringSum)(1,2,3)(2)())
