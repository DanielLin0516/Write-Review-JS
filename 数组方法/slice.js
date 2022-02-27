Array.prototype.mySlice = function (begin, end) {
    if (this.length === 0) {
        return [];
    }
    begin = begin || 0;
    if (begin >= this.length) {
        return [];
    }
    end = end || this.length;
    if(end < begin) {
        end = arr.length;
    }
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (i >= begin && i < end) {
            res.push(this[i]);
        }
    }
    return res;
}