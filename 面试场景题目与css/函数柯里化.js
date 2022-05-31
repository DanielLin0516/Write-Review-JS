const sumFn = (...args) => {
    return args.reduce((a, b) => {
        return a + b;
    }, 0)
}
var currying = function (func) {
    const args = [];
    return function result(...rest) {
        if (rest.length === 0) {
            return func(...args);
        } else {
            args.push(...rest);
            return result;
        }
    }
}



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
function add(x, y, z) {
    return x + y + z
}
curriedAdd = currying(add)
console.log(curriedAdd(1, 2)(3))

console.log(currying(sumFn)(1)(2)(3)())
console.log(currying(sumFn)(1, 2)(3, 4)(5)()) 
