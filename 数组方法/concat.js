Array.prototype.myConcat = function (...args) {
    const result = [...this];
    args.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...item);
        }else{
            result.push(item);
        }
    })
    return result;
}