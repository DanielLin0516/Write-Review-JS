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
const curry1 = (fn) => {
    let args = [];
    let max_length = fn.length;
    return function result (...rest) {
        args = args.concat(rest);
        if(args.length < max_length) return result;
        return fn(...args);
    }
}
console.log(curry1(reduceSum)(1)(2)())
function currying(fn) {
    let args_arr = [], max_length = fn.length
    let closure = function (...args) {
        // 先把参数加进去
        args_arr = args_arr.concat(args)
        // 如果参数没满，返回闭包等待下一次调用
        if (args_arr.length < max_length) return closure
        // 传递完成，执行
        return fn(...args_arr)
    }
    return closure
}
function cuur2(fn) {
    let ars = [];
    return function result(...rest) {
        ars = ars.concat(rest);
        if(ars.length < fn.length) return result;
        return fn(...ars)
    }
}