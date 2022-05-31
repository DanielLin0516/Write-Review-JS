// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小美现在有一个序列，序列中仅包含1和-1两种数字。

// 小美现在想要知道，有多少个连续的子序列，序列中的数字乘积为正。
function check(n, ...args) {
    let arr = [...args];
    let i = 0;
    let j = 0;
    let sum = 0;
    for (; i < n && j < n;) {
        let chengJi = 1;
        if (arr[i] > 0) {
            chengJi *= arr[i]
            sum = sum + 1;
            j = j + 1;
            for(;i < n && j < n;) {
                chengJi *= arr[j];
                if(chengJi > 0) {
                    sum = sum + 1;
                    j = j + 1;
                }else {
                    j = j + 1;
                }
            }
            i++;
            j = i;

        } else {
            for(;i < n && j < n;) {
                chengJi *= arr[j];
                if(chengJi > 0) {
                    sum = sum + 1;
                    j = j + 1;
                }else {
                    j = j + 1;
                }
            }
            i++;
            j = i;
        }
    }
    console.log(sum)
}
check(4, 1, 1, -1, -1)