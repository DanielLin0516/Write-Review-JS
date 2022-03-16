const { type } = require("os");

const currySum = (...args) => {
    return args.reduce((cur,prev) => {
        return cur + prev;
    })
}
const curring = (func) => {
    const args = [];
    return function result(...rest) {
        if(rest.length === 0) {
            return func(...args);
        }else {
            args.push(...rest);
            return result;
        }
    }
}
console.log(curring(currySum)(1,2)(3,4)(5)()) 
const obj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: 20 },
    d: function () { }
}
function deep(target,map = new Map()) {
    if(typeof target === 'object' && target !== null) {
        let cache = map.get(target);
        if(cache) {
            return cache;
        }
        let result = Array.isArray(target) ? [] : {};
        map.set(target,result);
        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                result[key] = deep(target[key],map);
            }
        }
        return result;
    }else {
        return target;
    }
}
console.log(deep(obj))
function debounce(fn,delay) {
    let time = null;
    return function() {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this,args)
        },delay)
    }
}