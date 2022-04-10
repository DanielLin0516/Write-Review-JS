
function deepClone(target,map = new Map()) {
    if(typeof target === 'object' && target !== null) {
        let cache = map.get(target);
        if(cache) return cache
        let result = Array.isArray(target) ? [] : {};
        map.set(target,result)
        for(let item in target) {
            if(target.hasOwnProperty(item)) {
                result[item] = deepClone(target[item]);
            }
        }
        return result;
    }else {
        return target;
    }
}

nums = "123";
num1 = nums.charAt(0) - "0"
console.log(typeof num1)