function apply(Fn , obj , args){
    if(obj === undefined || obj === null){
        obj = globalThis;//全局对象
    }
    obj.temp = Fn;
    let result =  obj.temp(...args);
    delete obj.temp;
    return result;
}