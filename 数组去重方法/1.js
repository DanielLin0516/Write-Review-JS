const arr = [2, 3, 2, 7, 6, 7];
// 数组去重1
function unique(arr) {
    const result = [];
    arr.forEach(item => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        };
    });
    return result;
}
console.log(unique(arr));
// 数组去重2
function unique2(arr) {
    const res = [];
    const obj = {};
    arr.forEach(item => {
        if (obj[item] === undefined) {
            //将item作为下标存储在obj中
            obj[item] = true;
            result.push(item);
        }
    });
    return result;
}
function unique1(arr) {
    return arr.filter((item, index, array) => {
      return array.indexOf(item) === index;
    });
  }
console.log(unique(arr))
//数组去重3
console.log([...new Set(arr)])
console.log(unique1(arr))
