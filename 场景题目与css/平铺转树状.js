var entry = {
    "a.b.c.dd": "abcdd",
    "a.d.xx":"adxx",
    "a.e":"ae"
}
//要求转换为下对象
var output = {
    a: {
        b: {
            c : {
                dd:"abcdd"
            }
        },
        d: {
            xx:"adxx"
        },
        e:"ae"
    }
}
function map(entry) {
    const result = {};
    for(const key in entry) {
        const value = entry[key];
        const keyMap = key.split(".");
        if(!result[keyMap[0]]) {
            result[keyMap[0]] = {};
        }
        let tmp = result[keyMap[0]];
        for(let i = 1;i < keyMap.length; i++) {
            if(!tmp[keyMap[i]]) {
                if(i === keyMap.length - 1) {
                    tmp[keyMap[i]] = value;
                }else {
                    tmp[keyMap[i]] = {};
                }
            }
            tmp = tmp[keyMap[i]];
        }
    }
    return result;
}
function map2(entry) {
    for(const key in entry) {
        getNest(key);
    }
    function getNest(key) {
        const lastIndex = key.lastIndexOf(".");
        const value = entry[key];
        if(lastIndex !== -1) {
            delete entry[key];
            const preKey = key.substring(0,lastIndex);
            const restKey = key.substring(lastIndex + 1);
            if(!entry[preKey]) {
                entry[preKey] = {[restKey]:value};
            }else {
                entry[preKey][restKey] = value
            }
            if(/./.test(preKey)) {
                getNest(preKey);
            }
        }
    }
    return entry
}
console.log(map2(entry))
