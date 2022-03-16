function apply(Fn, obj, args) {
    if (obj === undefined || obj === null) {
        obj = globalThis;//全局对象
    }
    obj.temp = Fn;
    let result = obj.temp(...args);
    delete obj.temp;
    return result;
}
Function.prototype.myCall = function (target, ...args) {
    // this 指向调用 myCall函数的对象
    if (typeof this !== "function") {
        throw new TypeError("not a function")
    }
    target = target || window
    target.fn = this // 隐式绑定，改变构造函数的调用者间接改变 this 指向
    let result = target.fn(...args)
    return result
};

Function.prototype._call = function(target,...ags) {
    if(typeof this !== 'function') {
        throw error
    }
    target = target || window;
    target.fn = this;
    let result = target.fn(...ags)
    return result;
}