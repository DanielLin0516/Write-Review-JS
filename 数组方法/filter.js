Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        let res = callback(this[i], i);
        if (res) {
            result.push(this[i]);
        }
    }
    return result;
}