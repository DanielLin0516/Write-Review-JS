let str = "[abc[bcd[def]]]"

function normallize() {
    let arr = str.split(/[\[\]]/g).filter(Boolean);
    let result = {};
    arr.reduce((pre,cur,index,self) => {
        pre.value = cur;
        if(index !== self.length - 1) {
            pre.children = {};
            return pre.children;
        }
    },result)
    return result;
}
console.log(normallize(str))