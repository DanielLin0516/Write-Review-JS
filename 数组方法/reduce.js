Array.prototype.myReduce = function(callback,initValue) {
    let result = initValue;
    for(let i = 0; i < this.length ; i++) {
        result = callback(result,this[i]);
    }
    return result;
}