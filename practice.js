
// function deepClone(target, map = new Map()) {
//     if (typeof target === 'object' && target !== null) {
//         let cache = map.get(target);
//         if (cache) return cache
//         let result = Array.isArray(target) ? [] : {};
//         map.set(target, result)
//         for (let item in target) {
//             if (target.hasOwnProperty(item)) {
//                 result[item] = deepClone(target[item]);
//             }
//         }
//         return result;
//     } else {
//         return target;
//     }
// }

// nums = "123";
// num1 = nums.charAt(0) - "0"
// console.log(typeof num1)

// const ReduceSum = (...args) => {
//     return args.reduce((prev, cur) => {
//         return prev + cur;
//     }, 0)
// }
// function curry(fn) {
//     let args = [];
//     return function result(...rest) {
//         if (rest.length === 0) {
//             return fn(...args);
//         } else {
//             args.push(...rest);
//             return result;
//         }
//     }
// }
// console.log(curry(ReduceSum)(12, 31)(1, 2)())

// function sum(x, y, z) {
//     return x + y + z;
// }
// function currySum(fn) {
//     let args = [];
//     let len = fn.length;
//     return function result(...rest) {
//         args = args.concat(rest)
//         if (args.length === len) {
//             return fn(...args)
//         } else {
//             return result
//         }
//     }
// }
// console.log(currySum(sum)(1, 2)(3))

// //去重
// function dif(arr) {
//     return arr.filter((item, index, array) => {
//         return array.indexOf(item) === index
//     })
// }
// console.log(dif([1,3,3,4,5,5]))


//事件总线
// class EventEmiter {
//     constructor() {
//         this.cache = {}
//     }
//     on(channel, callback) {
//         if (this.cache[channel]) {
//             this.cache[channel].push(callback);
//         } else {
//             this.cache[channel] = [callback]
//         }
//     }
//     emit(channel, ...args) {
//         if (this.cache[channel] && this.cache[channel].length > 0) {
//             this.cache[channel].forEach(element => {
//                 element(...args)
//             });
//         }
//     }
// }
// let bus = new EventEmiter();
// bus.on("pp",(id) => {
//     console.log(id)
// })
// bus.emit("pp","okok")

// const sum = (a, b, c) => {
//     return a + b + c
// }
// const curry = (fn) => {
//     let args = [];
//     let len = fn.length;
//     return function result(...rest) {
//         args = args.concat(rest);
//         if (args.length === len) {
//             return fn(...args)
//         }
//         return result;
//     }
// }
// console.log(curry(sum)(4, 2)(3))

// const currySum = (...args) => {
//     return args.reduce((prev, cur) => {
//         return prev + cur
//     }, 0)
// }
// const curry1 = (fn) => {
//     let args = [];
//     return function result(...rest) {
//         if (rest.length === 0) {
//             return fn(...args);
//         } else {
//             args = args.concat(rest);
//             return result;
//         }
//     }
// }
// console.log(curry1(currySum)(1, 2, 3)(4, 5)())

// Function.prototype.Mycall = function (target, ...args) {
//     if (typeof this === 'function') {
//         target = target || window;
//         target.fn = this;
//         let result = target.fn(...args);
//         return result;
//     } else {

//     }
// }
// obj = { a: 1 };
// var a = 1;
// function sleep() {
//     console.log(this.a)
// }
// sleep()

// let arr = [1,2,3];
// let obj1 = {
//     a:1,
//     b:2
// }
// for(let item of Object.keys(obj1)) [
//     console.log(item)
// ]
// const bag = () => {
//     var i = 0
//     return function() {
//         i = i + 1;
//         console.log(i)
//     }
// }
// let deal = bag()
// deal()
// deal()
// deal()
// const value = new Map();
// value.set("1","2");

// let arr = [
//     { id: 1, name: '部门1', pid: 0 },
//     { id: 2, name: '部门2', pid: 1 },
//     { id: 3, name: '部门3', pid: 1 },
//     { id: 4, name: '部门4', pid: 3 },
//     { id: 5, name: '部门5', pid: 4 },
//     { id: 6, name: '部门6', pid: 0 },
// ]
// function formate(arr) {
//     let data = JSON.parse(JSON.stringify(arr));
//     let result = data.filter(item => {
//         const children = data.filter(item1 => item1.pid === item.id)
//         if(item.children) {
//             item.children.push(...children)
//         }else {
//             item.children = children
//         }
//         return item.pid === 0
//     })
//     return result
// }
// console.log(formate(arr))
const currySum = (...args) => {
    return args.reduce((pre, cur) => {
        return pre + cur
    }, 0)
}
function curry(fn) {
    let args = [];
    return function result(...rest) {
        if (rest.length === 0) {
            return fn(...args);
        } else {
            args.push(...rest);
            return result;
        }
    }
}

console.log(curry(currySum)(1)(2)(3)())
function deep(target, map = new Map()) {
    if (typeof target === 'object' && target !== null) {
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        let result = Array.isArray(target) ? [] : {};
        map.set(target, result)
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                result[key] = deep(target[key])
            }
        }
        return result;
    } else {
        return target
    }
}
class EventEmiter {
    constructor() {
        this.callbacks = {}
    }
    on(name, callback) {
        if (this.callbacks[name]) {
            this.callbacks[name].push(callback);
        } else {
            this.callbacks[name] = [callback]
        }
    }
    emit(name,...args) {
        if(this.callbacks[name]) {
            this.callbacks.forEach(call => {
                call(...args);
            })
        }
    }
    remove(name,call) {
        if(name) {
            delete this.callbacks[name];
        }else {
            this.callbacks = {}
        }
    }
}