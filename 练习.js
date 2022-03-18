// const { type } = require("os");

// const currySum = (...args) => {
//     return args.reduce((cur,prev) => {
//         return cur + prev;
//     })
// }
// const curring = (func) => {
//     const args = [];
//     return function result(...rest) {
//         if(rest.length === 0) {
//             return func(...args);
//         }else {
//             args.push(...rest);
//             return result;
//         }
//     }
// }
// console.log(curring(currySum)(1,2)(3,4)(5)()) 
// const obj = {
//     a: 1,
//     b: ['e', 'f', 'g'],
//     c: { h: 20 },
//     d: function () { }
// }
// function deep(target,map = new Map()) {
//     if(typeof target === 'object' && target !== null) {
//         let cache = map.get(target);
//         if(cache) {
//             return cache;
//         }
//         let result = Array.isArray(target) ? [] : {};
//         map.set(target,result);
//         for(let key in target) {
//             if(target.hasOwnProperty(key)) {
//                 result[key] = deep(target[key],map);
//             }
//         }
//         return result;
//     }else {
//         return target;
//     }
// }
// console.log(deep(obj))
// function debounce(fn,delay) {
//     let time = null;
//     return function() {
//         if(timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fn.apply(this,args)
//         },delay)
//     }
// }
// function leet() {
//     let count = 0;
//     return count = count + 1;
// }
// console.log(leet())
// console.log(leet())
// console.log(leet())
// function result() {
//     return new Promise((resolve, reject) => {
//         let p = Math.random();
//         setTimeout(() => {
//             if (p >= 0.7) {
//                 resolve(p);
//             } else {
//                 reject(p);
//             }
//         }, 1000);

//     })
// }
// Promise.retry = function (fn, times) {
//     return new Promise(async (resolve, reject) => {
//         while (times--) {
//             try {
//                 let result = await fn();
//                 console.log(`数据为${result}`);
//                 resolve(res);
//                 break;
//             } catch (error) {
//                 console.log(`错误信息为${error}`);
//                 if (!times) {
//                     reject(error);
//                 }
//             }
//         }
//     }).catch(error => {
//         console.log(`失败四处用完了，数据为${error}`);
//     })
// }
// Promise.retry(result, 3);
const sum = (...args) => {
    return args.reduce((prev,cur) => {
        return prev + cur;
    },0)
}
const curring = (fn) => {
    let arr = [];
    return function result(...rest) {
        if(rest.length == 0) {
            return fn(...arr);
        }else {
            arr.push(...rest);
            return result;
        }
    }
}
console.log(curring(sum)(1,2)(3,4)(5,6,7)())