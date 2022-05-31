// 已知如下数组：
var arr1 = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
function flattt(arr) {
    let result = [];
    arr.forEach(item => {
        if(Array.isArray(item)) {
            result = result.concat(flattt(item));
        }else {
            result = result.concat(item);
        }
    })
    result = result.sort((a,b) => a-b);
    result = [...new Set(result)];
    return result;
}
console.log(flattt(arr1))
