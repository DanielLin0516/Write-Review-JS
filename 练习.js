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
const obj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: 20 },
    d: function () { }
}
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
// const sum = (...args) => {
//     return args.reduce((prev,cur) => {
//         return prev + cur;
//     },0)
// }
// const curring = (fn) => {
//     let arr = [];
//     return function result(...rest) {
//         if(rest.length == 0) {
//             return fn(...arr);
//         }else {
//             arr.push(...rest);
//             return result;
//         }
//     }
// }
// console.log(curring(sum)(1,2)(3,4)(5,6,7)())
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     ouput: process.stdout
// })
// let inArr = [2,
//     5, 1,
//     6, 2,
//     5 ,7]
// rl.on('line', line => {
//     // if (!line) return;
//     console.log(1)
// })
// var a = 1
// function foo () {
//   var a = 2
//   function inner () { 
//     console.log(this.a)
//   }
//   inner()
// }

// foo()
// arr = [1, 2, 3];
// function sleep(time) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, time);
//   })
// }
// sleep(2000).then(() => {
//   console.log(123)
// })

// let p = Promise.resolve();
// for(let i=0; i<6; i++) {
//     p = p.then(()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log(i);
//                 resolve();
//             },1000)
//         })
//     });
// }
const message = new Array(100).fill("");
for (let i = 0; i < 100; i++) {
    message[i] = "第" + i + "条数据";
}
// 模拟请求一千条数据
function axiosGet(idx) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message[idx]);
        }, 1000 * Math.random());
    });
}
async function send() {
    try {
        let r1 = await axiosGet(1);
        setTimeout(() => {
            if(r1) {
                console.log(r1)
            }else {
                console.log('没回来')
            }
        }, 200);
    } catch (error) {
        console.log(error)
    }
}
console.log(send())
