const key1 = {id: 1};
const key2 = {id:2};
const key3 = {id:3};
const wm1 = new WeakMap([
    [key1,"val1"],
    [key2,"val2"],
    [key3,"val3"],
])
console.log(wm1.get(key1))